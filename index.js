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

let projectTec = projectsData.tecUsed

function getTecSection(){
    let tecSect = ``
    
    projectTec.forEach(function(tecnology){
        tecSect+=`
            <p>${inf.tecUsed}</p>
        `
    })
    return tecSect
}


function getProjects(){
    let projectsFeed = ``
    
    projectsData.forEach(function(project){
        let tecnologies = ``
        project.tecUsed.forEach(function(tecnology){
            tecnologies+=`
            <p>${tecnology}</p>
            `
        })
        
        projectsFeed+=`
            <img src="${project.image}" class="project-img">
            <h3>${project.name}</h3>
            <section class="tecs-section">
                <!--Tecs used in the project-->
                ${tecnologies}
            </section>
            <section class="procode-btns">
                <!--See code & project buttons-->
            </section>
        `
    })
    return projectsFeed
}

function render(){
    document.getElementById('exp-feed').innerHTML = getExpFeed()
    document.getElementById('projects').innerHTML = getProjects()
}

render()