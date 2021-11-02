const Content = (props) => {
    return (
        <div className={props.className}>
            <p>{props.category}</p>
            <p>{props.copywriting}</p>
            <p>{props.author}</p>
        </div>
    )
}

export default Content;
