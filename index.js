<<<<<<< HEAD
let pokeId=150;
=======
let pokeId=151;
>>>>>>> fdde5d7c16e93ab31b5c2b99fdc1ffc7db694728


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
    const pokeType1=`<div class="types">${data.types[0].type.name}</div>`;
    const secondType=data.types[1];
    if (secondType) {
        pokeType2=`<div class="types">${data.types[1].type.name}</div>`;
      } else {
        pokeType2= '';
      }
      const secondAbility=data.abilities[1];
    if (secondAbility) {
        pokeAb2=`${data.abilities[1].ability.name}`;
      } else {
        pokeAb2= '';
      }
    const details=`<div id="details">
    <span>Height: ${data.height}</span>
    <span>Weight: ${data.weight}</span>
    </div>
    <div id="pokeabilities">
    <h2>ABILITIES</h2>
    <span> ${data.abilities[0].ability.name}</span>
    <span> ${pokeAb2}</span>
    </div>`;
    
    const IdDiv = document.querySelector('#bigcircle')
    IdDiv.innerHTML = pokeID
    const screenDiv = document.querySelector('#screen')
    screenDiv.innerHTML = img
    const NameDiv = document.querySelector('#NamePlace')
    NameDiv.innerHTML = name
    const type1Div = document.querySelector('#Type1Place')
    type1Div.innerHTML = pokeType1
    const type2Div = document.querySelector('#Type2Place')
    type2Div.innerHTML = pokeType2
    const detailsDiv = document.querySelector('#greysquare')
    detailsDiv.innerHTML = details}

function leftButtonClick(){
    pokeId--;
    if (pokeId>=0){
        getAPI(pokeId);
    }else{
        pokeId=151;
        getAPI(pokeId);}};

function rightButtonClick(){
    pokeId++;
    if (pokeId<152){
        getAPI(pokeId);
    }else{
        pokeId=1;
        getAPI(pokeId);}};