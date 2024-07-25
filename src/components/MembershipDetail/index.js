import styles from "./style.module.scss";
import InputField from "../GenricComponents/Form/Input";
import SelectField from "../GenricComponents/Form/Select";
import { useEffect, useState } from "react";
import FormLayout from "../FormLayout";
import Title from "../Title";
import Divider from "../Divider";
import classNames from "classnames";

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
    <FormLayout id="membership-form">
      <Title large>Membership Detail</Title>
      <Divider />
      <div className={styles["membership__details__container"]}>
        <div className={styles["membership__details__form"]}>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="dealerCode">Dealer Code</label>
              <SelectField
                required
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
                required
                placeholder="Enter membership no."
                name="membershipNo"
                value={formData["membershipNo"] || ""}
                type="text"
                onChange={(e) => handleChange("membershipNo", e.target.value)}
                disabled={true}
              />
            </div>
            <div className={styles["form__group"]}>
              <label htmlFor="membershipStatus">Membership Status</label>
              <SelectField
                required={false}
                placeholder={"Pending"}
                name="membershipStatus"
                value={formData["membershipStatus"] || "P"}
                options={[
                  { value: "P", label: "Pending" },
                  { value: "C", label: "Active" },
                  { value: "O", label: "Cancelled" },
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
                required={false}
                name="membershipFee"
                checked={!!formData.membershipFee}
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
                required={false}
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
                required={false}
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
                required={false}
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
                required={false}
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
                required={false}
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
                required={false}
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
                checked={!!formData.membershipForm}
                type="checkbox"
                onChange={(e) =>
                  handleChange("membershipForm", e.target.checked)
                }
                required={false}
              />
            </div>
          </div>
          <div className={styles["membership__details__form__row"]}>
            <div className={styles["form__group"]}>
              <label htmlFor="dealerAppointmentDate">
                Dealer Appointment Date
              </label>
              <InputField
                required={false}
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
            <div className={classNames({
              [styles["form__group"]]: true,
              [styles["form__group__grow"]]: true
            })}>
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
                required={false}
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
                required={false}
                placeholder="Enter ceasation date"
                name="ceasationDate"
                value={formData["ceasationDate"] || ""}
                type="date"
                onChange={(e) => handleChange("ceasationDate", e.target.value)}
              />
            </div>
            <div className={classNames({
              [styles["form__group"]]: true,
              [styles["form__group__grow"]]: true
            })}>
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
                required={false}
                name="others"
                checked={!!formData.others}
                type="checkbox"
                onChange={(e) => handleChange("others", e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export default MembershipDetail;
