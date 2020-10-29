const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: 24,}

const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`
const leftButton = document.querySelector('#previous');
const rightButton = document.querySelector('#next');

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    const img=`<img src=${data.sprites.front_default}>`
    const name=`<div id="name">${data.name}</div>`
    const details=`<div id="details">
    <span>Height: ${data.height}</span>
    <span>Weight: ${data.weight}</span>
    </div>` 

    const screenDiv = document.querySelector('#screen')
    screenDiv.innerHTML = img

    const NameDiv = document.querySelector('#bluesquare')
    NameDiv.innerHTML = name

    const detailsDiv = document.querySelector('#greysquare')
    detailsDiv.innerHTML = details}

const previousButtonClick = () =>{
    apiData.id-=1;
    fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))
    };

const nextButtonClick = () =>{
    apiData.id+=1;
    fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( pokemon => generateHtml(pokemon))
    .catch( error => console.error('Error:', error))
    };

leftButton.click(previousButtonClick);
rightButton.click(nextButtonClick);


