const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: 24,
}

const {url, type, id} = apiData

const apiUrl = `${url}${type}/${id}`

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
    <span>Weight: ${data.weight}</span></div>` 

    const screenDiv = document.querySelector('#screen')
    screenDiv.innerHTML = img

    const NameDiv = document.querySelector('#bluesquare')
    NameDiv.innerHTML = name

    const detailsDiv = document.querySelector('#greysquare')
    detailsDiv.innerHTML = details}
    
// const #next.onclick = function(){apiData.id+=1};
// const #previous.onclick = function(){apiData.id-=1};  