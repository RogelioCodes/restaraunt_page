export function menu() {
    console.log("menu")
    
    const element = document.getElementById('menu')
    //element.classList.add("menu_image");
    
    //const restaraunt_image = new Image();

    //restaraunt_image.src = restarauntImage

    var headline = document.createElement("h2")
    var phrase = document.createElement("p")

    headline.innerText = "Menu"
    phrase.innerText = "This is menu text"

  
    element.appendChild(headline)
    element.appendChild(phrase)

    element.style.display = "none" //We want the item hidden by default
 
    
    console.log(element)
    return element
    //document.body.appendChild(element);
}

