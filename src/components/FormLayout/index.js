import styles from "./style.module.scss";

const FormLayout = (props) => {
    return (
        <form key={props.id} onSubmit={e => e.preventDefault()} id={props.id} className={styles["form__layout"]}>
            {props.children}
        </form>
    );
};

export default FormLayout;