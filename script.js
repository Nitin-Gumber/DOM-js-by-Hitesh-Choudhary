// Change attribute using DOM:- 
document.getElementById("title").setAttribute("class", "test heading")
let titlestyle = document.getElementById("title")
titlestyle.style.color = "red"
titlestyle.style.textAlign = "center"
titlestyle.style.marginTop = "32px"
titlestyle.innerHTML

// querySelector VS querySelectorAll

const myUl = document.querySelector('ul')
// console.log(myUl)
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
// console.log(tempClassList)
const convertToArray = Array.from(tempClassList)
// console.log(convertToArray)
convertToArray.map((item) =>{
    item.style.color = "orange"
})

// Parent ko select krke child element ko display krna
const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[1].innerHTML)
for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color = "red"
parent.children[2].style.padding = "1rem 1rem"
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

// Child element ko select krke parent element ko select kr skte hai
const dayOne = document.querySelector('.day')
// console.log(dayOne)
// console.log(dayOne.parentElement)
// console.log(dayOne.nextElementSibling)
// console.log("NODES: ", parent.childNodes) // line break count krta h

// How to Create Element:- 
const div = document.createElement('div')
// console.log(div)
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.background = "green"
// div.innerHTML = "Chai aur Code"
const addText = document.createTextNode("Chai aur Code")
div.appendChild(addText)
document.body.appendChild(div)

