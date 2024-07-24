import { useState, useCallback, useEffect } from "react";
import {
  GET_DEALER_LIST_API,
  GET_MEMBER_DATA_BY_DEALER_CODE,
  GET_LIST_OF_CONSTANTS,
} from "../../utils/constants";
import MembershipDetail from "../../components/MembershipDetail";
import MemberDirectory from "../../components/MemberDirectory";
import Loader from "../../components/GenricComponents/Loader";
import FamilyDetail from "../../components/FamilyDetail";

const FormPage = () => {
  const [dealerCodeData, setDealerCodeData] = useState([]);
  const [constitutions, setConstitutions] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);
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
  const [selectedDealerCode, setSelectedDealerCode] = useState("");

  const directoryInitialFormData = {
    constitution: "",
    desigRelation: "",
    title: "",
    name: "",
    qualification: "",
    dob: "",
    dom: "",
    bloodGroup: "",
    mobileNo: "",
    emailId: "",
    resAdd: "",
    resPhone: "",
    memberStatus: "",
  };
  const [showFamilyDetailForRow, setShowFamilyDetailForRow] = useState(null);
  const [memberDirectoryData, setMemberDirectoryData] = useState([
    directoryInitialFormData,
  ]);
  const handleShowFamilyDetail = (index) => {
    setShowFamilyDetailForRow(index);
  };
  const handleDirectoryChanges = (name, value, index) => {
    const newData = [...memberDirectoryData];
    newData[index] = { ...newData[index], [name]: value };
    setMemberDirectoryData(newData);
  };

  const handleAddRow = () => {
    setMemberDirectoryData([
      ...memberDirectoryData,
      { ...directoryInitialFormData },
    ]);
  };

  const handleDeleteRow = (index) => {
    const newData = memberDirectoryData.filter(
      (_, rowIndex) => rowIndex !== index
    );
    setMemberDirectoryData(newData);
  };
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
      } catch (err) {}
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
          ...prev,
          dealerCode: selectedDealerCode,
          membershipStatus: dealerDetails.dlr_status,
          division: dealerDetails.division,
          dealershipName: dealerDetails.dealership_name,
          location: dealerDetails.location,
          alternateEmailId: dealerDetails.email,
          gstin: dealerDetails.dlr_gstin,
          dealershipStatus: dealerDetails.dlr_active,
          dealerAppointmentDate: dealerDetails.dlr_appoint_dt,
          inoprativeDate: dealerDetails.dlr_inoperative_dt,
          ceasationDate: dealerDetails.dlr_cess_dt,
        }));
      }
      const fetchMemberData = async () => {
        const response = await fetch(GET_MEMBER_DATA_BY_DEALER_CODE);
        const result = await response.json();
        if (result.type === "found") {
          setFormData((prev) => ({
            ...prev,
            membershipNo: result.memberData.membershipNo || "",
            ddNo: result.memberData.ddNo,
            membershipForm: result.memberData.membershipForm || "",
            membershipDate: result.memberData.membershipDate,
            ddDate: result.memberData.ddDate || "",
            membershipFee: true,
          }));
        } else if (result.type === "created") {
          setFormData((prev) => ({
            ...prev,
            membershipNo: result.membershipNo,
          }));
        }
      };
      fetchMemberData();
    }
  }, [selectedDealerCode, dealerCodeData]);

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
  return (
    <>
      {loading ? (
        <div className={"parent_loader__container"}>
          <Loader />
        </div>
      ) : (
        <>
          <MembershipDetail
            formData={formData}
            handleChange={handleMemebershipDetail}
            dealerCodeData={dealerCodeData}
          />
          <MemberDirectory
            formData={memberDirectoryData}
            handleChange={handleDirectoryChanges}
            handleAddRow={handleAddRow}
            handleDeleteRow={handleDeleteRow}
            constitutions={constitutions}
            qualifications={qualifications}
            designations={designations}
            handleShowFamilyDetail={handleShowFamilyDetail}
          />
          {showFamilyDetailForRow !== null && (
            <FamilyDetail rowIndex={showFamilyDetailForRow} />
          )}
        </>
      )}
    </>
  );
};

export default FormPage;
