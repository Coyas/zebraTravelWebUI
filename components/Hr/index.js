const Hr = (props) => {
    const altura = props.height;
    const opacy = props.opacidade;
    const cor = props.cor;
    const width = props.width;
    return (
        <hr
            style={{
                height: altura + "px",
                opacity: opacy,
                backgroundColor: cor,
                width: width + "%"
            }}
        />
    );
};

export default Hr;
