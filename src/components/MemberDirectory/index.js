import InputField from "../Form/Input";
import SelectField from "../Form/Select";
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

const MemeberDirectory = () => {
  const [formData, setFormData] = useState([initialFormData]);
  const handleChange = (name, value, index) => {
    const newData = [...formData];
    newData[index] = { ...newData[index], [name]: value };
    setFormData(newData);
  };
  const handleAddRow = () => {
    setFormData([...formData, { ...initialFormData }]); // Add a new row with a copy of initialFormData
  };
  return (
    <div className={styles["membership__directory"]}>
      <h1>Membership Detail</h1>
      <div className={styles["membership__directory__container"]}>
        <button onClick={handleAddRow} className={styles["add-row-button"]}>
          Add Row
        </button>
        <div className={styles["table__container"]}>
          <table className={styles.table}>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {formData.map((data, rowIndex) => (
                <tr key={rowIndex}>
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
                      ) : // <FormInput
                      //   label=""
                      //   type={header.type}
                      //   name={header.name}
                      //   placeholder={`Enter ${header.label}`}
                      //   value={data[header.name]}
                      //   onChange={(e) =>
                      //     handleChange(header.name, e.target.value, rowIndex)
                      //   }
                      // />
                      header.type === "button" ? (
                        <button className={styles.button}>Click on</button>
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
export default MemeberDirectory;
