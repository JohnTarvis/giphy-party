console.log("Let's get this party started!");

const GIPHYkey = "y0CCfyUmKjC5Jz5zqZku62u4p0Ly05a7";

const searchButton = document.getElementById("search-GIF");
const clearButton = document.getElementById("clear-all");
const gifContainer = document.getElementById('gif-container');

function getRandomOf(number){
    return Math.floor(Math.random() * number);
}

async function getData(){
    const response = await axios.get(
        "http://api.giphy.com/v1/gifs/search?q=funny&api_key=y0CCfyUmKjC5Jz5zqZku62u4p0Ly05a7&limit=1"
    );
    const image = response;
    console.log(image);
    displayImage(image);
}

clearButton.addEventListener('click',function(){
    gifContainer.innerHTML = "";
    document.getElementById("search-term").value = "";
});

searchButton.addEventListener('click',function(e){
    const searchTerm = document.getElementById("search-term").value;
    searchGIPHY(searchTerm);
});

async function searchGIPHY(term){
    const limit = 20;
    const random = getRandomOf(limit);
    const response = await axios.get(
        `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${GIPHYkey}&limit=${limit}`
    );
    const imageURL = response.data.data[random].images.original.url;
    displayImage(imageURL);
}

function displayImage(imageURL){
    let img = document.createElement("img");
    img.src = imageURL;
    img.classList.add('img-fluid');
    let div = document.createElement("div");
    div.classList.add("col-4");
    div.appendChild(img);
    gifContainer.appendChild(div);
}

