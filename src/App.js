import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Articles from "./Articles/Articles";
import ArticleDetails from "./ArticleDetails/ArticleDetails";
import getData from "./apiCalls";
import { useState, useEffect } from 'react';
import { Route } from "react-router-dom";


const App = () => {
  let [articles, setArticles] = useState([]);
  const defaultPath = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=AU000jHu07nh6YDudByMHIPWS1kq7jJ1`


  const getArticles = async (path) => {
    let retrievedArticles = await getData(path)
    setArticles(retrievedArticles.response.docs)
  }

  const getSearchResults = async (search) => {
    let searchPath = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=AU000jHu07nh6YDudByMHIPWS1kq7jJ1`
    await getArticles(searchPath)
  }

  useEffect(() => {
    getArticles(defaultPath)
  }, [])
  
  return (
    <main className="app">
      <Header getSearchResults={getSearchResults}/>
      <Route exact path='/' render={() => {
        return <Articles articles={articles}/>
      }}
      />
      <Route 
        exact path='/:id' 
        render={(match) => {
          return <ArticleDetails details={articles[match.match.params.id]}/>
        }}
      />
      <Footer />
    </main >
  );
}

export default App;
