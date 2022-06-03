const ArticleDetails = ({details}) => {
    return (
        <article>
            <h2>{details.headline.main}</h2>
            <h3>{details.byline.original}</h3>
            <p>Section: {details.section_name}</p>
            <p>{details.snippet}</p>
            <p>{details.lead_paragraph}</p>
            <a href={details.web_url}>Read Here</a>
            <ul>
                {details.keywords.map((word, i)=> {
                    return <li key={i}>{word.value}</li>
                })}
            </ul>

        </article>
    )
}

export default ArticleDetails;