import InputField from "../GenricComponents/Form/Input";
import SelectField from "../GenricComponents/Form/Select";
import styles from "./style.module.scss";
import { useState } from "react";
import { headers } from "../../utils/directoryData";

const initialFormData = {
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

const MemberDirectory = () => {
  const [formData, setFormData] = useState([initialFormData]);

  const handleChange = (name, value, index) => {
    const newData = [...formData];
    newData[index] = { ...newData[index], [name]: value };
    setFormData(newData);
  };

  const handleAddRow = () => {
    setFormData([...formData, { ...initialFormData }]);
  };

  const handleDeleteRow = (index) => {
    const newData = formData.filter((_, rowIndex) => rowIndex !== index);
    setFormData(newData);
  };

  return (
    <div className={styles["membership__directory"]}>
      <h3>Membership Directory</h3>
      <div className={styles["membership__directory__container"]}>
        <button onClick={handleAddRow} className={styles["add__row__button"]}>
          Add Row
        </button>
        <div className={styles["table__container"]}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Actions</th>
                {headers.map((header, index) => (
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
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} className={styles.table__cell}>
                      {header.type === "select" ? (
                        <SelectField
                          label=""
                          name={header.name}
                          value={data[header.name]}
                          onChange={(e) =>
                            handleChange(header.name, e.target.value, rowIndex)
                          }
                          options={header.options}
                        />
                      ) : header.type === "text" ||
                        header.type === "email" ||
                        header.type === "date" ? (
                        <InputField
                          type={header.type}
                          name={header.name}
                          placeholder={`Enter ${header.label}`}
                          value={data[header.name]}
                          inputClassName={styles["input"]}
                          onChange={(e) =>
                            handleChange(header.name, e.target.value, rowIndex)
                          }
                        />
                      ) : header.type === "button" ? (
                        <button onClick={() => {}} className={styles.button}>
                          Click on
                        </button>
                      ) : (
                        <></>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberDirectory;
