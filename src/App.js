import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Articles from "./Articles/Articles";
import ArticleDetails from "./ArticleDetails/ArticleDetails";
import getData from "./apiCalls";
import { useState, useEffect } from 'react';
import { Route } from "react-router-dom";


const App = () => {
  let [articles, setArticles] = useState([]);

  const getArticles = async () => {
    let retrievedArticles = await getData()
    setArticles(retrievedArticles.response.docs)
  }

  useEffect(() => {
    getArticles()
  }, [])
  
  return (
    <main className="app">
      <Header />
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
