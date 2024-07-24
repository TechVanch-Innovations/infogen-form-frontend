import classNames from "classnames";

import styles from "./style.module.scss";

const Button = ({
    type = "button",
    children,
    className = "",
    onClick = () => {}
}) => {
    return (
        <button className={classNames({
            [styles["btn"]]: true
        }, className)} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;