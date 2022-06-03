const key = process.env.REACT_APP_NYT_API_KEY


const getData = async (path) => {
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