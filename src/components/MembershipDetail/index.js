import styles from "./style.module.scss";
import InputField from "../GenricComponents/Form/Input";
import SelectField from "../GenricComponents/Form/Select";
import { useEffect, useState } from "react";

const MembershipDetail = ({ formData, handleChange, dealerCodeData }) => {
  const [dealerCodes, setDealerCodes] = useState([]);
  useEffect(() => {
    const transformedDealerCodes = dealerCodeData.map((dealer) => ({
      value: dealer.dealer_code,
      label: dealer.dealer_code,
    }));

    setDealerCodes(transformedDealerCodes);
  }, [dealerCodeData]);
  return (
    <div className={styles["membership__details"]}>
      <h1>Membership Detail</h1>
      <div className={styles["membership__details__container"]}>
        <form className={styles["membership__details__form"]}>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="dealerCode">Dealer Code</label>
              <SelectField
                placeholder="Enter dealer code"
                name="dealerCode"
                value={formData["dealerCode"] || ""}
                options={dealerCodes}
                onChange={(e) => handleChange("dealerCode", e.target.value)}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="membershipNo">Membership No.</label>
              <InputField
                placeholder="Enter membership no."
                name="membershipNo"
                value={formData["membershipNo"] || ""}
                type="text"
                onChange={(e) => handleChange("membershipNo", e.target.value)}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="membershipStatus">Membership Status</label>
              <SelectField
                placeholder={"Enter Memebrship"}
                name="membershipStatus"
                value={formData["membershipStatus"] || ""}
                options={[
                  { value: "1", label: "Credit" },
                  { value: "2", label: "Debit" },
                ]}
                onChange={(e) =>
                  handleChange("membershipStatus", e.target.value)
                }
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="membershipFee">Membership Fee</label>
              <InputField
                name="membershipFee"
                value={formData["membershipFee"] || ""}
                type="checkbox"
                onChange={(e) =>
                  handleChange("membershipFee", e.target.checked)
                }
              />
            </div>
          </div>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="division">Division</label>
              <InputField
                placeholder="Enter division"
                name="division"
                value={formData["division"] || ""}
                type="text"
                onChange={(e) => handleChange("division", e.target.value)}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="dealershipName">Dealership Name</label>
              <InputField
                placeholder="Enter dealership name"
                name="dealershipName"
                value={formData["dealershipName"] || ""}
                type="text"
                onChange={(e) => handleChange("dealershipName", e.target.value)}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="location">Location</label>
              <InputField
                placeholder="Enter location"
                name="location"
                value={formData["location"] || ""}
                onChange={(e) => handleChange("location", e.target.value)}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="ddNo">DD No.</label>
              <InputField
                placeholder="Enter DD no."
                name="ddNo"
                value={formData["ddNo"] || ""}
                type="text"
                onChange={(e) => handleChange("ddNo", e.target.value)}
              />
            </div>
          </div>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="alternateEmailId">Alternate Email ID</label>
              <InputField
                placeholder="Enter alternate email ID"
                name="alternateEmailId"
                value={formData["alternateEmailId"] || ""}
                type="email"
                onChange={(e) =>
                  handleChange("alternateEmailId", e.target.value)
                }
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="gstin">GSTIN</label>
              <InputField
                placeholder="Enter GSTIN"
                name="gstin"
                value={formData["gstin"] || ""}
                type="text"
                onChange={(e) => handleChange("gstin", e.target.value)}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="dealershipStatus">Dealership Status</label>
              <SelectField
                name="dealershipStatus"
                value={formData["dealershipStatus"] || ""}
                onChange={(e) =>
                  handleChange("dealershipStatus", e.target.value)
                }
                options={[
                  { value: "1", label: "Active" },
                  { value: "2", label: "Non Active" },
                ]}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="membershipForm">Membership Form</label>
              <InputField
                name="membershipForm"
                value={formData["membershipForm"] || ""}
                type="checkbox"
                onChange={(e) =>
                  handleChange("membershipForm", e.target.checked)
                }
              />
            </div>
          </div>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="dealerAppointmentDate">
                Dealer Appointment Date
              </label>
              <InputField
                placeholder="Enter dealer appointment date"
                name="dealerAppointmentDate"
                value={formData["dealerAppointmentDate"] || ""}
                type="text"
                onChange={(e) =>
                  handleChange("dealerAppointmentDate", e.target.value)
                }
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="membershipDate">Membership Date</label>
              <InputField
                placeholder="Enter membership date"
                name="membershipDate"
                value={formData["membershipDate"] || ""}
                type="date"
                onChange={(e) => handleChange("membershipDate", e.target.value)}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="boardMeetingCeasationDate">
                Board Meeting (Members Ceasation) Date
              </label>
              <InputField
                placeholder=""
                name="boardMeetingCeasationDate"
                value={formData["boardMeetingCeasationDate"] || ""}
                type="date"
                onChange={(e) =>
                  handleChange("boardMeetingCeasationDate", e.target.value)
                }
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="ddDate">DD Date</label>
              <InputField
                placeholder="Enter date"
                name="ddDate"
                value={formData["ddDate"] || ""}
                type="date"
                onChange={(e) => handleChange("ddDate", e.target.value)}
              />
            </div>
          </div>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="inoprativeDate">Inoperative Date</label>
              <InputField
                placeholder="Enter inoperative date"
                name="inoprativeDate"
                value={formData["inoprativeDate"] || ""}
                type="date"
                onChange={(e) => handleChange("inoprativeDate", e.target.value)}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="ceasationDate">Ceasation Date</label>
              <InputField
                placeholder="Enter ceasation date"
                name="ceasationDate"
                value={formData["ceasationDate"] || ""}
                type="date"
                onChange={(e) => handleChange("ceasationDate", e.target.value)}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="boardMeetingReinstateDate">
                Board Meeting (Members Reinstate) Date
              </label>
              <InputField
                placeholder=""
                name="boardMeetingReinstateDate"
                value={formData["boardMeetingReinstateDate"] || ""}
                type="date"
                onChange={(e) =>
                  handleChange("boardMeetingReinstateDate", e.target.value)
                }
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="others">Others</label>
              <InputField
                name="others"
                value={formData["others"] || ""}
                type="checkbox"
                onChange={(e) => handleChange("others", e.target.checked)}
              />
            </div>
          </div>
          {/* {fields.map((group, index) => (
            <div
              key={index}
              className={styles["membership__details__form__row"]}
            >
              {group.data.map((field, i) => {
                if (field.component === "InputField") {
                  return (
                    <div key={i} className={styles["form__group"]}>
                      <label htmlFor={field.name}>{field.label}</label>
                      <InputField
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name] || ""}
                        type={field.type || "text"}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                      />
                    </div>
                  );
                } else if (field.component === "SelectField") {
                  return (
                    <div key={i} className={styles["form__group"]}>
                      <label htmlFor={field.name}>{field.label}</label>
                      <SelectField
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name] || ""}
                        options={field.options}
                        onChange={(e) =>
                          handleChange(field.name, e.target.value)
                        }
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))} */}
        </form>
      </div>
    </div>
  );
};

export default MembershipDetail;
