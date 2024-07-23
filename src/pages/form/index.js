import { useState, useCallback, useEffect } from "react";
import { GET_DEALER_LIST_API } from "../../utils/constants";
import MembershipDetail from "../../components/MembershipDetail";
import MemberDirectory from "../../components/MemberDirectory";

const FormPage = () => {
  const [dealerCodeData, setDealerCodeData] = useState([]);
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

  useEffect(() => {
    const fetchDealerData = async () => {
      const resp = await fetch(GET_DEALER_LIST_API);
      const data = await resp.json();
      setDealerCodeData(data);
    };
    fetchDealerData();
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
  console.log(formData);
  return (
    <>
      <MembershipDetail
        formData={formData}
        handleChange={handleMemebershipDetail}
        dealerCodeData={dealerCodeData}
      />
      <MemberDirectory />
      {/* <FamilyDetail /> */}
    </>
  );
};

export default FormPage;
