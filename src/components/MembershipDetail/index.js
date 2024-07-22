// import classNames from "classnames";
import { useState } from "react";
import styles from "./style.module.scss";
import InputField from "../Form/Input";
import SelectField from "../Form/Select";
import { fields } from "../../utils/membershipdetails";

const MembershipDetail = () => {
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
  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(formData);
  return (
    <div className={styles["membership__details"]}>
      <h1>Membership Detail</h1>
      <div className={styles["membership__details__container"]}>
        <form className={styles["membership__details__form"]}>
          {fields.map((group, index) => (
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
          ))}
        </form>
      </div>
    </div>
  );
};

export default MembershipDetail;
