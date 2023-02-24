let buttons = document.querySelectorAll(".btns");
buttons.forEach( btn=> {
    btn.addEventListener("click" ,  ()=>{
        let toogleCards = document.querySelectorAll(".container");
        toogleCards.forEach(card =>{
            card.classList.toggle("hidden");
        });
    });
});
