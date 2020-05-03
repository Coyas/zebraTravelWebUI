const Hr = (props) => {
    const altura = props.height;
    const opacy = props.opacidade;
    const cor = props.cor;
    return (
        <hr
            style={{
                height: altura + "px",
                opacity: opacy,
                backgroundColor: cor
            }}
        />
    );
};

export default Hr;
