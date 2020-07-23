import moment from "moment";

const ComentData = (props) => {
    // console.log("props dados");
    // console.log(props);
    const time = moment(props.hora, "YYYYMMDD").fromNow();
    // console.log(time);
    return (
        <>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img className="is-rounded" src={`${props.avatar}`} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p style={{ color: "black" }}>
                            <strong>{props.user}</strong>{" "}
                            {/* <small>@johnsmith</small> <small>31m</small> */}
                            <small>{time}</small>
                            <br />
                            {props.comment}
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default ComentData;
