import { tecExp } from './data.js'
import { projectsData } from './data.js'

function getExpFeed(){
    let expFeed = ``
    
    tecExp.forEach(function(tecnology){
        expFeed+=`
        <h1>${tecnology.name}</h1>
        <p>${tecnology.experience}</p>
        `
    })
    return expFeed
}

function render(){
    document.getElementById('exp-feed').innerHTML = getExpFeed()
}

render()