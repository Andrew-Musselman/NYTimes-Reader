const key = process.env.REACT_APP_NYT_API_KEY
const path = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=home&api-key=AU000jHu07nh6YDudByMHIPWS1kq7jJ1`


const getData = async () => {
    let response = await fetch(path)
    let checkedResponse = await checkResponse(response)
    return checkedResponse
}

const checkResponse = (res) => {
    if(!res.ok) {
        throw new Error('Something went wrong')
    } else {
        return res.json()
    }
}

export default getData