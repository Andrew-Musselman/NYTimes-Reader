import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Articles from "./Articles/Articles";
import getData from "./apiCalls";
import { useState, useEffect } from 'react';


const App = () => {
  let [articles, setArticles] = useState([]);

  const getArticles = async () => {
    let retrievedArticles = await getData()
    setArticles(retrievedArticles)
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <div>
      <h2>{process.env.REACT_APP_NYT_API_KEY}</h2>
      <Header />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
