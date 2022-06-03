import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Articles from "./Articles/Articles";
import getData from "./apiCalls";
import { useState, useEffect } from 'react';


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
    <div>
      <Header />
      <Articles articles={articles}/>
      <Footer />
    </div>
  );
}

export default App;
