import InputField from "../GenricComponents/Form/Input";
import SelectField from "../GenricComponents/Form/Select";
import styles from "./style.module.scss";
import { familyData } from "../../utils/familyData";

const FamilyDetail = ({
  rowIndex,
  formData,
  handleAddRow,
  handleDeleteRow,
  handleChange,
  qualifications,
  designations,
}) => {
  console.log(rowIndex);

  return (
    <div className={styles["family__detail"]}>
      <h3>Family Details</h3>
      <div className={styles["family__detail__container"]}>
        <button onClick={handleAddRow} className={styles["add__row__button"]}>
          Add Row
        </button>
        <div className={styles["table__container"]}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Actions</th>
                {familyData.map((header, index) => (
                  <th key={index}>{header.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {formData.map((data, rowIndex) => (
                <tr key={rowIndex}>
                  <td className={styles.table__cell}>
                    <button
                      onClick={() => handleDeleteRow(rowIndex)}
                      className={styles["delete__row__button"]}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="16"
                        height="16"
                      >
                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                      </svg>
                    </button>
                  </td>
                  <td className={styles.table__cell}>
                    <SelectField
                      label="Desig/Relation"
                      name="desigRelation"
                      placeholder={"select designation"}
                      value={data.desigRelation || ""}
                      onChange={(e) =>
                        handleChange("desigRelation", e.target.value, rowIndex)
                      }
                      options={designations}
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <SelectField
                      label="Title"
                      name="title"
                      value={data.desigRelation || ""}
                      onChange={(e) =>
                        handleChange("title", e.target.value, rowIndex)
                      }
                      options={[
                        { value: "", label: "Select Title" },
                        { value: "Title1", label: "Title1" },
                        { value: "Title2", label: "Title2" },
                      ]}
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={data.name || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("name", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <SelectField
                      label="Qualification"
                      name="qualification"
                      placeholder={"select Qualification"}
                      value={data.qualification || ""}
                      onChange={(e) =>
                        handleChange("qualification", e.target.value, rowIndex)
                      }
                      options={qualifications}
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="date"
                      name="dob"
                      placeholder="Enter DOB"
                      value={data.dob || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("dob", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="date"
                      name="dom"
                      placeholder="Enter DOM"
                      value={data.dom || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("dom", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <SelectField
                      label="Blood Group"
                      name="bloodGroup"
                      value={data.bloodGroup || ""}
                      onChange={(e) =>
                        handleChange("bloodGroup", e.target.value, rowIndex)
                      }
                      options={[
                        { value: "", label: "Select Blood Group" },
                        { value: "A+", label: "A+" },
                        { value: "B+", label: "B+" },
                        { value: "O+", label: "O+" },
                        { value: "AB+", label: "AB+" },
                      ]}
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="text"
                      name="mobileNo"
                      placeholder="Enter Mobile No."
                      value={data.mobileNo || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("mobileNo", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="email"
                      name="emailId"
                      placeholder="Enter Email ID"
                      value={data.emailId || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("emailId", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="text"
                      name="resAdd"
                      placeholder="Enter Residential Address"
                      value={data.resAdd || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("resAdd", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="text"
                      name="resPhone"
                      placeholder="Enter Residential Phone"
                      value={data.resPhone || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("resPhone", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <SelectField
                      label="Involment in Business"
                      name="involmentInBusiness"
                      value={data.involmentInBusiness || ""}
                      onChange={(e) =>
                        handleChange(
                          "involmentInBusiness",
                          e.target.value,
                          rowIndex
                        )
                      }
                      options={[
                        { value: "", label: "Select involvement in business" },
                        { value: "Active", label: "Active" },
                        { value: "Inactive", label: "Inactive" },
                      ]}
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <InputField
                      type="text"
                      name="since"
                      placeholder="Since"
                      value={data.since || ""}
                      inputClassName={styles["input"]}
                      onChange={(e) =>
                        handleChange("since", e.target.value, rowIndex)
                      }
                    />
                  </td>
                  <td className={styles.table__cell}>
                    <SelectField
                      label="Status"
                      name="status"
                      value={data.status || ""}
                      onChange={(e) =>
                        handleChange("status", e.target.value, rowIndex)
                      }
                      options={[
                        { value: "", label: "Select Member Status" },
                        { value: "Active", label: "Active" },
                        { value: "Inactive", label: "Inactive" },
                      ]}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default FamilyDetail;
