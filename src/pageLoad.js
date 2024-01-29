import restarauntImage from './restaraunt.jpg'


export function component() {
    console.log("pageload")
    const element = document.getElementById('home')
    
    element.classList.add("restaraunt_image");
    
    const restaraunt_image = new Image();

    restaraunt_image.src = restarauntImage

    
    

    var headline = document.createElement("h2")
    headline.innerText = "We lost pasta!"
    var phrase = document.createElement("p")
    phrase.innerText = "Hands down, one of the best italian restaraunts in the area!"

    element.style.display = "block"
    element.appendChild(headline)
    element.appendChild(phrase)
    element.appendChild(restaraunt_image)
   
    
    return element
    //document.body.appendChild(element);
}



