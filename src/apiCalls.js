const key = process.env.REACT_APP_NYT_API_KEY
console.log(key)
const path = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=home&api-key=AU000jHu07nh6YDudByMHIPWS1kq7jJ1`


const getData = async () => {
    let response = await fetch(path)
    await checkResponse(response)
}

const checkResponse = (res) => {
    if(res.ok) {
        return res.json()
    } else {
        throw new Error('Something went wrong')
    }
}

export default getData