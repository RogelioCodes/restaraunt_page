
import {component} from './pageLoad.js'
import { menu } from './menu.js'
import { about } from './about.js'
import './style.css'
// element = component()


function openPage(e, pageName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    console.log("tabconent: ")
    console.log(tabcontent)
    tabcontent = document.getElementsByClassName("tabcontent");
    console.log("inside openPage")
    //Get all elements with class="tabcontent" and hide them
    for (i= 0; i < tabcontent.length ; i++){
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length ; i++){
        console.log("removing active")
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class tp the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    e.currentTarget.className += " active";

}


window.openPage = openPage
document.body.appendChild(component());
document.body.appendChild(menu());

document.body.appendChild(about());






