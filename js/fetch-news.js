/***Constants***/
const API_key = "9acbe30eb24f4bb79291bb97f9f06eb3";
const BASE_URL = "https://newsapi.org/v2/";

//site load
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("display-news").addEventListener('click', display_countries("name"));
});

//fetch all countries from API
async function fetch_countries() {
    try {
        const response = await fetch(API_link);
        if(!response.ok) {
            throw new Error(`Fetch error: ${response.status}`);
        }
        return await response.json();
    } catch(error) {
        console.log(error);
        throw error;
    }
    
}

//displays an attribute for each given country 
async function display_countries(attribute) { 
    try {
        const data = await fetch_countries();
        console.log(data);
    } catch(error) {
        console.log(error);
        throw error;
    }
}

/***Util***/
function createApiUrl({ query = "", fromDate = "", sortBy = "" }) {
    let url = `${BASE_URL}?apiKey=${API_key}`;

    if (query) url += `&q=${encodeURIComponent(query)}`;
    if (fromDate) url += `&from=${fromDate}`;
    if (sortBy) url += `&sortBy=${sortBy}`;

    return url;
}