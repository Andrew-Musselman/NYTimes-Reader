import Article from "../Article/Article";
import { Link } from "react-router-dom";

const Articles = ({articles}) => {
    let articlesMapped = articles.map((article, i) => {
       return ( 
        <Link to={`/${i}`}>
            <Article 
                    key={i}
                    headline={article.headline.main}
                    author={article.byline.original}
                    synopsis={article.snippet}
                />
        </Link>

    )})

    return (
        <div className="article-container">
            {articlesMapped}
        </div>
    )
}

export default Articles;