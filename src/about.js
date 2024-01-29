export function about() {
    console.log("about")
    const element = document.getElementById('about')
    
    //element.classList.add("menu_image");
    
    //const restaraunt_image = new Image();

    //restaraunt_image.src = restarauntImage

    var headline = document.createElement("h2")
    var phrase = document.createElement("p")

    headline.innerText = "About"
    phrase.innerText = "This is the about page"

    element.appendChild(headline)
    element.appendChild(phrase)

   
   

    element.style.display = "none" //We want the item hidden by default
 
    

    return element
    //document.body.appendChild(element);
}