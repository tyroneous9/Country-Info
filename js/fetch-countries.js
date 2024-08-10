/***Init***/
const API_link = "https://restcountries.com/v3.1/all";

//site load
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("display-countries").addEventListener('click', display_countries("name"));
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