/*--------------------------------------------------------------    
# Services Section > Open Tabs
----------------------------------------------------------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    // Remove active class from all tablinks and tabcontents
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tablink and corresponding tabcontent
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*--------------------------------------------------------------    
# Home Page Section > Responsive Navbar
----------------------------------------------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        var sidem = document.getElementById("sidemenu");

        function openmenu() {
            sidem.style.right = "0";
        }

        function closemenu() {
            sidem.style.right = "-200px";
        }

        // Assigning click events
        document.querySelector(".fa-bars").addEventListener("click", openmenu);
        document.querySelector(".fa-times").addEventListener("click", closemenu);

        // Close the menu when any link is clicked
        var navLinks = document.querySelectorAll("#sidemenu a");
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener("click", closemenu);
        }
    });