import scss from "./hr.module.scss";

const Hr = (props) => {
    const altura = props.height;
    const opacy = props.opacidade;
    return (
        <hr
            className={scss.hr}
            style={{ height: altura + "px", opacity: opacy }}
        />
    );
};

export default Hr;
