const ComentData = (props) => {
    return (
        <>
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img className="is-rounded" src={props.image} />
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{props.username}</strong>{" "}
                            {/* <small>@johnsmith</small> <small>31m</small> */}
                            <small>{props.hora}</small>
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
