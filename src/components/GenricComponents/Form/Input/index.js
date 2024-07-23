import classNames from "classnames";

import styles from "../style.module.scss";

const InputField = ({
  inputClassName,
  type = "text",
  name,
  placeholder,
  disabled = false,
  required = true,
  checked = false,
  value = "",
  onChange = () => {},
}) => {
  return (
    <input
      className={classNames(
        {
          [styles["form__input"]]: true,
          [styles["form__input--checkbox"]]: ["checkbox", "radio"].includes(
            type || ""
          ),
        },
        inputClassName
      )}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      checked={type === "checkbox" || type === "radio" ? checked : undefined}
      disabled={disabled}
      required={required}
    />
  );
};

export default InputField;
