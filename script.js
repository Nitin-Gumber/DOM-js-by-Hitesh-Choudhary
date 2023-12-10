// Change attribute using DOM:- 
document.getElementById("title").setAttribute("class", "test heading")
let titlestyle = document.getElementById("title")
titlestyle.style.color = "red"
titlestyle.style.textAlign = "center"
titlestyle.style.marginTop = "32px"
titlestyle.innerHTML

// querySelector VS querySelectorAll

const myUl = document.querySelector('ul')
console.log(myUl)
const turngreen = myUl.querySelector('li')
turngreen.style.color = "green"
turngreen.style.padding = "1rem 1rem"

const tempLiList = document.querySelectorAll("li")
// tempLiList.style.color = "green" // Don't work because this is NodeList

// tempLiList[0].style.color = "red" // Its is works 

// NodeList eek tarah ka array hota hai but not same

tempLiList.forEach((items) => items.style.color = "green")

// HTMLCollection

const tempClassList = document.getElementsByClassName("list-item")
console.log(tempClassList)
const convertToArray = Array.from(tempClassList)
console.log(convertToArray)
convertToArray.map((item) =>{
    item.style.color = "orange"
})