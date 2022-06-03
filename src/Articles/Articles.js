import Article from "../Article/Article"

const Articles = ({articles}) => {
    let articlesMapped = articles.map((article, i) => {
       return ( 
        <Article 
                key={i}
                headline={article.headline.main}
                author={article.byline.original}
                synopsis={article.snippet}
            />
    )})

    return (
        <div className="article-container">
            {articlesMapped}
        </div>
    )
}

export default Articles;