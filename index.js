import { tecExp } from './data.js'
import { projectsData } from './data.js'

function getExpFeed(){
    let expFeed = ``
    
    tecExp.forEach(function(tecnology){
        expFeed+=`
        <h1 class="tec-name">${tecnology.name}</h1>
        <p>${tecnology.experience}</p>
        `
    })
    return expFeed
}

function getProjects(){
    let projectsFeed = ``
    
    projectsData.forEach(function(project){
        let tecnologies = ``
        project.tecUsed.forEach(function(tecnology){
            tecnologies+=`
            <p class="tec-used">${tecnology}</p>
            `
        })
        
        projectsFeed+=`
            <img src="${project.image}" class="project-img">
            <section class="project-info">
                <h2 class="project-name">${project.name}</h2>
                <section class="tecs-section">
                    <!--Tecs used in the project-->
                    ${tecnologies}
                </section>
                <section class="project-btns-section">
                    <!--See code & project buttons-->
                    <button class="contact-btn btn-animation view-btn">VIEW PROJECT</button>
                    <button class="contact-btn btn-animation view-btn">VIEW CODE</button>
                </section>
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