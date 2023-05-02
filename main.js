const form = document.querySelector('.rating-form')
const cardBack = document.querySelector('.card-back')
const bgBtn = document.querySelector('.btn-secondary')
const ratings = document.querySelectorAll('.rating')
const alert = document.querySelector('.alert-message');
const card = document.querySelector('.card')

form.addEventListener('submit', addRating)
let value;

ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        value = e.target.getAttribute('value')
        ratings.forEach(rating => {
            rating.classList.remove('bg-gray');
        });
        e.target.classList.add('bg-gray')
        
        
        bgBtn.innerHTML = `
        <p>You selected ${value} out of 5</p>`        
    })
});


async function addRating(e) {
    e.preventDefault();
    
    console.log(value)
    
    if(!value){
        showAlert();

        setTimeout(() => {
            removeAlert();
        }, 4000);
        

    } else {
        card.style.display = 'none'
        cardBack.style.display = 'block'
    }
    
}

function showAlert() {
    ratings.forEach(rating => {
        rating.classList.add('bg-red', 'color-black')
    })

    alert.style.display = 'block'
}

function removeAlert() {
    ratings.forEach(rating => {
        rating.classList.remove('bg-black', 'color-black')
    })
}


document.addEventListener('DOMContentLoaded', ()=> {
    
    console.log(card.getBoundingClientRect())
    
})





