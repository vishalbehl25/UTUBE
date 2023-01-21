var menuicon = document.querySelector(".menuicon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")

menuicon.onclick = function () {
    sidebar.classList.toggle("smallbar") 
    container.classList.toggle("largecontainer")
        
}