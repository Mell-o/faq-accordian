import { accordianItems } from "./data.js";

const accordianItemsObj = document.querySelector(".accordian-items")

function renderAccordianItems(){
    return accordianItems.map(({question, answer}) => {
        return `
        <details>
            <summary><h2>${question}</h2></summary>
            <p>${answer}</p>
        </details>
        `
    }).join("")
}

accordianItemsObj.innerHTML = renderAccordianItems()