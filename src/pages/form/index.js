import { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { DateTime } from "luxon";

import Loader from "../../components/GenricComponents/Loader";

import {
  GET_DEALER_LIST_API,
  GET_MEMBER_DATA_BY_DEALER_CODE,
  GET_LIST_OF_CONSTANTS,
  directoryInitialFormDataTemplate,
  familyInitialFormDataTemplate,
  POST_MEMBERSHIP_DATA,
} from "../../utils/constants";
import { dateFormatter, transformDirectoryData } from "../../utils/fn";

import Button from "../../components/Button";
import MembershipDetail from "../../components/MembershipDetail";
import MemberDirectory from "../../components/MemberDirectory";
import FamilyDetail from "../../components/FamilyDetail";

import styles from "./style.module.scss";

const TYPES = {
  DIRECTORY: "directory",
  FAMILY: "family"
}

const directoryData = [{"id":1,"constitution":"1","desigRelation":"2","title":"mr","name":"Rahul","qualification":"2","dob":"1994-04-13","dom":"1909-04-13","bloodGroup":"A+","mobileNo":"95828364444","emailId":"rahul@techvanch.com","resAdd":"","resPhone":"","memberStatus":""},{"id":2,"constitution":"2","desigRelation":"2","title":"mr","name":"Sid","qualification":"4","dob":"1994-09-09","dom":"1994-09-09","bloodGroup":"B+","mobileNo":"9999999999","emailId":"sid@techvanch.com","resAdd":"","resPhone":"","memberStatus":""}]
// const dealerData = {"dealerCode":"M5300","membershipNo":"001","membershipStatus":"P","membershipFee":true,"MembershipFee1":false,"ddNo":"DD no","division":"Division1","dealershipName":"Dealership One","location":"Location1","membershipForm":true,"ddDate":"1000-10-10","alternateEmailId":"email1@example.com","gstin":"GSTIN123456","dealershipStatus":"Y","dealerAppointmentDate":"2022-12-31T18:30:00.000Z","membershipDate":"1198-04-13","boardMeetingAppointmentDate":"","boardMeetingCeasationDate":"1998-12-10","inoprativeDate":null,"ceasationDate":"1998-10-10","boardMeetingReinstateDate":"1998-04-13","others":true};

const FormPage = () => {
  const [dealerCodeData, setDealerCodeData] = useState([]);
  const [constitutions, setConstitutions] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    dealerCode: "",
    membershipNo: "",
    membershipStatus: "",
    membershipFee: false,
    MembershipFee1: false,
    ddNo: "",
    division: "",
    dealershipName: "",
    location: "",
    membershipForm: false,
    ddDate: "",
    alternateEmailId: "",
    gstin: "",
    dealershipStatus: "",
    dealerAppointmentDate: "",
    membershipDate: "",
    boardMeetingAppointmentDate: "",
    boardMeetingCeasationDate: false,
    inoprativeDate: "",
    ceasationDate: "",
    boardMeetingReinstateDate: "",
    others: "",
  });
  // const [formData, setFormData] = useState(dealerData);
  const [selectedDealerCode, setSelectedDealerCode] = useState("");

  const [familyFormData, setFamilyFormData] = useState([familyInitialFormDataTemplate]);
  const [showFamilyDetail, setShowFamilyDetail] = useState(-1);
  const [memberDirectoryData, setMemberDirectoryData] = useState([directoryInitialFormDataTemplate]);
  // const [memberDirectoryData, setMemberDirectoryData] = useState(directoryData);

  useEffect(() => {
    const fetchDealerData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(GET_DEALER_LIST_API);
        if (resp.status === 200) {
          const data = await resp.json();
          setDealerCodeData(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchDealerData();
    const fetchConstantList = async () => {
      try {
        const response = await fetch(GET_LIST_OF_CONSTANTS);
        if (response.status === 200) {
          const data = await response.json();

          const formatOptions = (items) =>
            items.map((item) => ({
              value: item.code,
              label: item.description,
            }));

          setConstitutions(formatOptions(data.constitutions || []));
          setQualifications(formatOptions(data.qualitifcations || []));
          setDesignations(formatOptions(data.designations || []));
        }
      } catch (err) { }
    };

    fetchConstantList();
  }, []);

  useEffect(() => {
    if (selectedDealerCode) {
      const dealerDetails = dealerCodeData.find(
        (dealer) => dealer.dealer_code === selectedDealerCode
      );
      if (dealerDetails) {
        setFormData((prev) => ({
          dealerInoperative: dealerDetails.dlr_inoperative,
          dealerCode: selectedDealerCode,
          membershipStatus: dealerDetails.dlr_status,
          division: dealerDetails.division,
          dealershipName: dealerDetails.dealership_name,
          location: dealerDetails.location,
          alternateEmailId: dealerDetails.email,
          gstin: dealerDetails.dlr_gstin,
          dealershipStatus: dealerDetails.dlr_status,
          dealershipActive: dealerDetails.dlr_active,
          dealerAppointmentDate: dateFormatter(dealerDetails.dlr_appoint_dt),
          inoprativeDate: dealerDetails.dlr_inoperative_dt,
          ceasationDate: dealerDetails.dlr_cess_dt,
        }));
      }
      const fetchMemberData = async () => {
        const response = await fetch(`${GET_MEMBER_DATA_BY_DEALER_CODE}?dealer_code=${selectedDealerCode}`);
        const result = await response.json();
        if (result.type === "found") {
          const hasDirectory = result?.directory?.length > 0;
          setFormData((prev) => ({
            ...prev,
            membershipNo: result.memberData.member_no || "",
            membershipFee: (result.memberData.membership_fee == "Y") || false,
            ddNo: result.memberData.pay_instr_no || "",
            membershipForm: (result.memberData.member_form == "Y") || "",
            membershipDate: dateFormatter(result.memberData.member_date) || "",
            boardMeetingCeasationDate: dateFormatter(result.memberData.member_board_cease_date) || "",
            ddDate: dateFormatter(result.memberData.pay_instr_date) || "",
            ceasationDate: dateFormatter(result.memberData.member_board_appnt_date) || "",
            boardMeetingReinstateDate: dateFormatter(result.memberData.member_board_reinstate) || "",
            other: (result.memberData.other == "Y") || false
          }));

          setMemberDirectoryData(hasDirectory ? transformDirectoryData(result?.directory) : [directoryInitialFormDataTemplate]);
        } else if (result.type === "created") {
          setFormData((prev) => ({
            ...prev,
            membershipNo: result.membership_number,
          }));
          setMemberDirectoryData([directoryInitialFormDataTemplate]);
        }
      };
      fetchMemberData();
    }
  }, [selectedDealerCode, dealerCodeData]);

  // show family detail box for directory
  const handleShowFamilyDetail = (data) => {
    if (data) {
      setShowFamilyDetail(data.id);
      setFamilyFormData(data?.familyDetails || [familyInitialFormDataTemplate]);
      document.getElementById("familyDetails").scrollIntoView({ behavior: "smooth" });
    }
  };

  // close family detail box
  const handleHideFamilyDetails = () => {
    setShowFamilyDetail(-1);
    setFamilyFormData([]);
  }

  // handle updates for directory data
  const handleDirectoryChanges = useCallback((name, value, index) => {
    setMemberDirectoryData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [name]: value };
      return newData;
    });
  }, []);

  // handle updates for family data
  const handleFamilyDataChanges = useCallback((name, value, index) => {
    setFamilyFormData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [name]: value };
      return newData;
    });
  }, []);

  // add directory or family row
  const handleAddRow = useCallback(
    (type) => {
      if (type === TYPES.DIRECTORY) {
        setMemberDirectoryData((prevData) => [
          ...prevData,
          { ...directoryInitialFormDataTemplate, id: prevData.length + 100001 },
        ]);
      } else if (type === TYPES.FAMILY) {
        setFamilyFormData((prevData) => [
          ...prevData,
          { ...familyInitialFormDataTemplate },
        ]);
      }
    },
    [memberDirectoryData, familyFormData]
  );

  // delete directory or family row
  const handleDeleteRow = useCallback(
    (type, index) => {
      if (type === TYPES.DIRECTORY) {
        setMemberDirectoryData((prevData) =>
          prevData.filter((_, rowIndex) => rowIndex !== index)
        );
      } else if (type === TYPES.FAMILY) {
        setFamilyFormData((prevData) =>
          prevData.filter((_, rowIndex) => rowIndex !== index)
        );
      }
    },
    []
  );

  // update value of membership form
  const handleMemebershipDetail = useCallback((name, value) => {
    if (name === "dealerCode") {
      setSelectedDealerCode(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }, []);

  // save family details for the directory
  const handleSave = (id) => {
    const entryToSave = memberDirectoryData.find((entry) => entry.id === id);
    entryToSave.familyDetails = familyFormData;
  };

  // Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormLoading(true);
      // submit validations
      const membershipForm = document.getElementById("membership-form");
      const membershipFormValidity = membershipForm.checkValidity();
      if (!membershipFormValidity) {
        if (membershipForm.reportValidity) {
          membershipForm.reportValidity();
        }
        else {
          throw new Error("Please fill all the required details in membership directory");
        };
        return;
      };

      // form validations
      if (formData.dealerAppointmentDate && formData.membershipDate) {
        const dt1 = DateTime.fromISO(formData.membershipDate, { zone: "Asia/Kolkata" });
        const dt2 = DateTime.fromISO(formData.dealerAppointmentDate, { zone: "Asia/Kolkata" });
        if (!(dt1 > dt2)) {
          throw new Error("Membership date should be greater than Dealer Appointment Date");
        }
      }

      if (formData.dealerAppointmentDate && formData.ddDate) {
        const dt1 = DateTime.fromISO(formData.ddDate, { zone: "Asia/Kolkata" });
        const dt2 = DateTime.fromISO(formData.dealerAppointmentDate, { zone: "Asia/Kolkata" });
        if (!(dt1 > dt2)) {
          throw new Error("DD date should be greater than Dealer Appointment Date");
        }
      }
      // end of form validations

      const memberDetailForm = document.getElementById("member-directory-form");
      const memberDetailFormValidity = memberDetailForm.checkValidity();
      if (!memberDetailFormValidity) {
        if (memberDetailForm.reportValidity) {
          memberDetailForm.reportValidity();
        }
        else {
          throw new Error("Please fill all the required details in membership directory");
        }
        return;
      }

      // execute submit logic and hit the API
      const formPayload = {
        membership: formData,
        directory: memberDirectoryData
      };
      const response = await fetch(`${POST_MEMBERSHIP_DATA}`, {
        method: "POST",
        body: JSON.stringify(formPayload),
        headers: {
          "Content-Type": "application/json"
        }
      });
      toast.success(`Data ${formData?.membershipNo ? "saved" : "updated"} successfully!`);
    }
    catch (error) {
      toast.error(error?.message || "Please check all the form fields or contact administrator");
    }
    finally {
      setFormLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={"parent_loader__container"}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles["form__container"]}>
      <MembershipDetail
        formData={formData}
        handleChange={handleMemebershipDetail}
        dealerCodeData={dealerCodeData}
      />
      <MemberDirectory
        formData={memberDirectoryData}
        handleChange={handleDirectoryChanges}
        handleAddRow={() => handleAddRow(TYPES.DIRECTORY)}
        handleDeleteRow={(index) => handleDeleteRow(TYPES.DIRECTORY, index)}
        constitutions={constitutions}
        qualifications={qualifications}
        designations={designations}
        handleShowFamilyDetail={handleShowFamilyDetail}
      />
      <div id="familyDetails">
        {showFamilyDetail > -1 && (
          <FamilyDetail
            rowIndex={showFamilyDetail}
            formData={familyFormData}
            handleChange={handleFamilyDataChanges}
            qualifications={qualifications}
            designations={designations}
            handleAddRow={() => handleAddRow(TYPES.FAMILY)}
            handleDeleteRow={(index) => handleDeleteRow(TYPES.FAMILY, index)}
            handleSave={handleSave}
            handleCloseOperation={handleHideFamilyDetails}
          />
        )}
      </div>
      <div className={styles["form__submit"]}>
        <Button className={styles.submit__button} onClick={handleSubmit}>
          Save & Submit
        </Button>
      </div>
      {
        formLoading &&
        <div className={"default__loader"}>
          <div className={"default__loader__container"}>
            <Loader />
          </div>
        </div>
      }
    </div>
  );
};

export default FormPage;
