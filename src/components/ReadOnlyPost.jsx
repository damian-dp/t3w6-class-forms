
export default function ReadonlyPost(props) {
    return (
        <div className="socialMediaReadonlyPost">
            <h2>{props.author}</h2>
            <h6>{props.dateCreated}</h6>
            {props.lastUpdated != props.dateCreated ? <h6>Updated on: {props.lastUpdated}</h6> : null}
            <h3>{props.location}</h3>
            <p>{props.content}</p>
        </div>
    );
}