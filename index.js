let pokeId = 1;

function getAPI(id) {
  let apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHtml(pokemon));
}

getAPI(pokeId);

const generateHtml = (data) => {
  const pokeID = `<h2>${data.id.toString()}</h2>`;
  const img = `<img src=${data.sprites.front_default}>`;
  const name = `<h2>${data.name}</h2></div>`;
  const pokeType1 = `<img src="./types/${data.types[0].type.name}.png" alt="${data.types[0].type.name}"/>`;
  const secondType = data.types[1];
  if (secondType) {
    pokeType2 = `<img src="./types/${data.types[1].type.name}.png" alt="${data.types[1].type.name}"/>`;
  } else {
    pokeType2 = "";
  }
  const secondAbility = data.abilities[1];
  if (secondAbility) {
    pokeAb2 = `${data.abilities[1].ability.name}`;
  } else {
    pokeAb2 = "";
  }
  const caracteristic = `
    <h2>CHARACTERISTICS</h2>
    <span>Height: ${data.height}</span>
    <span>Weight: ${data.weight}</span>
    `;
  const abilities = `
    <h2>ABILITIES</h2>
    <span> ${data.abilities[0].ability.name}</span>
    <span>${pokeAb2}</span>
    `;

  const IdDiv = document.querySelector(".id");
  IdDiv.innerHTML = pokeID;
  const screenDiv = document.querySelector("#circle");
  screenDiv.innerHTML = img;
  const NameDiv = document.querySelector(".name");
  NameDiv.innerHTML = name;
  const type1Div = document.querySelector(".type1");
  type1Div.innerHTML = pokeType1;
  const type2Div = document.querySelector(".type2");
  type2Div.innerHTML = pokeType2;
  const caractDiv = document.querySelector(".caracteristic");
  caractDiv.innerHTML = caracteristic;
  const abilDiv = document.querySelector(".abilities");
  abilDiv.innerHTML = abilities;
};

function leftButtonClick() {
  pokeId--;
  if (pokeId > 0) {
    getAPI(pokeId);
  } else {
    pokeId = 151;
    getAPI(pokeId);
  }
}

function rightButtonClick() {
  pokeId++;
  if (pokeId < 152) {
    getAPI(pokeId);
  } else {
    pokeId = 1;
    getAPI(pokeId);
  }
}

// switch (data.types[1].type.name) {
//   case "bug":
//     pokeType2 = `<img src="./types/bug.png"/>`;
//     break;
//     case "dragon":
//     pokeType2 = `<img src="./types/dragon.png"/>`;
//     break;
//     case "electric":
//     pokeType2 = `<img src="./types/electric.png"/>`;
//     break;
//     case "fighting":
//     pokeType2 = `<img src="./types/fighting.png"/>`;
//     break;
//     case "fire":
//     pokeType2 = `<img src="./types/fire.png"/>`;
//     break;
//     case "flying":
//     pokeType2 = `<img src="./types/fly.png"/>`;
//     break;
//     case "ghost":
//     pokeType2 = `<img src="./types/ghost.png"/>`;
//     break;
//     case "grass":
//     pokeType2 = `<img src="./types/grass.png"/>`;
//     break;
//     case "ground":
//     pokeType2 = `<img src="./types/ground.png"/>`;
//     break;
//     case "ice":
//     pokeType2 = `<img src="./types/ice.png"/>`;
//     break;
//     case "poison":
//     pokeType2 = `<img src="./types/poison.png"/>`;
//     break;
//   case "poison":
//     pokeType2 = `<img src="./types/poison.png"/>`;
//     break;

//   default:
//     pokeType2 = "";
//     break;
// }
