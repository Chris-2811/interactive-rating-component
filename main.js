const form = document.querySelector('.rating-form')
const cardBack = document.querySelector('.card-back')
const bgBtn = document.querySelector('.btn-secondary')
const ratings = document.querySelectorAll('.rating')

let value;
form.addEventListener('submit', addRating)

function addRating(e) {
    e.preventDefault();


    card.style.display = 'none'
    cardBack.style.display = 'block'
}

ratings.forEach(rating =>
    rating.addEventListener('click', (e) => {
        value = e.target.getAttribute('value')
    bgBtn.innerHTML = `
        You selected ${value} out of 5
    `
    }))


document.addEventListener('DOMContentLoaded', ()=> {
    
    console.log(card.getBoundingClientRect())
    
})


const card = document.querySelector('.card')

console.log(card)
