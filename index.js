let pokeId=1;


function getAPI(id){
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
    fetch(apiUrl)
        .then( (data) => data.json())
        .then ( (pokemon) => generateHtml(pokemon))};

getAPI(pokeId);

const generateHtml = (data) => {
    const pokeID = `<div id="pokeID">${data.id.toString()}<div>`;
    const img=`<img src=${data.sprites.front_default}>`;
    const name=`<div id="name">${data.name}</div>`;
    const pokeType=`<div class="types">${data.types[0].type.name} 
    <div class="types">${data.types[1].type.name}`;
    const details=`<div id="details">
    <span>Height: ${data.height}</span>
    <span>Weight: ${data.weight}</span>
    </div>
    <div id="pokeabilities">
    <span> ${data.abilities[0].ability.name}</span>
    <span> ${data.abilities[1].ability.name}</span>
    </div>`;
    
    const IdDiv = document.querySelector('#bigcircle')
    IdDiv.innerHTML = pokeID
    const screenDiv = document.querySelector('#screen')
    screenDiv.innerHTML = img
    const NameDiv = document.querySelector('#NamePlace')
    NameDiv.innerHTML = name
    const typeDiv = document.querySelector('#TypePlace')
    typeDiv.innerHTML = pokeType
    const detailsDiv = document.querySelector('#greysquare')
    detailsDiv.innerHTML = details
    
}

function previousButtonClick(){
    pokeId--;
    getAPI(pokeId);};

function nextButtonClick(){
    pokeId++;
    getAPI(pokeId);};

const leftButton=document.querySelector('#previous');
const rightButton=document.querySelector('#next');
('#previous').addEventListener('click',previousButtonClick);
('#next').addEventListener('click',nextButtonClick);