const mainContainer = document.querySelector(".container")

export const catalog = (harvestedFood) => {
    let plantAsHTML = ""
    harvestedFood.forEach(plant => {
        plantAsHTML += `<section class="plant">${plant.type}</section>`
    })
    mainContainer.innerHTML += plantAsHTML
}