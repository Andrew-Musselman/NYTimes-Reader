const Article = ({headline, author, synopsis}) => {
    return (
        <div className="article">
            <h2>{headline}</h2>
            <h3>{author}</h3>
            <p>{synopsis}</p>
        </div>
    )
}

export default Article;