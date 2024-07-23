import classNames from "classnames";

import styles from "../style.module.scss";

const SelectField = ({
  selectClassName,
  name,
  placeholder,
  disabled = false,
  required = true,
  value = "",
  options = [],
  onChange,
}) => {
  return (
    <select
      className={classNames(
        {
          [styles["form__select"]]: true,
        },
        selectClassName
      )}
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      required={required}
    >
      {!!placeholder && <option value="">{placeholder}</option>}
      {Array.isArray(options) &&
        options?.map((option) => (
          <option value={option?.value} key={option?.value}>
            {option?.label}
          </option>
        ))}
    </select>
  );
};

export default SelectField;
