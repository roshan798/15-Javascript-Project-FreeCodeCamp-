const dishes = [
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        dishName: "Buttermilk Pancakes",
        price: "15.99",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "breakfast"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        dishName: "Diner Double",
        price: "13.99",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        type: "lunch"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        dishName: "Godzilla Milkshake",
        price: "6.99",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        type: "shakes"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        dishName: "Country Delight",
        price: "20.99",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        type: "breakfast"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        dishName: "Egg Attack",
        price: "22.99",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        type: "lunch"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        dishName: "Oreo Dream",
        price: "18.99",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        type: "shakes"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        dishName: "Bacon Overflow",
        price: "8.99",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        type: "breakfast"
    }, {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        dishName: "American Classic",
        price: "12.99",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        type: "lunch"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        dishName: "Quarantine Buddy",
        price: "16.99",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        type: "shakes"
    },
    {
        src: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        dishName: "Steak Dinner",
        price: "39.99",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        type: "dinner"
    }
];
let pre = undefined;
const buttons = document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        filterDish(btn.id)
    });
});
filterDish("all");
function addDishes(type) {
    const container = document.getElementById("item-container");
    dishes.forEach(dish => {
        if (type == "all" || dish.type == type) {
            let card = document.createElement("div");
            card.classList.add("item-card");
            let imgDiv = document.createElement("div");
            imgDiv.classList.add("item-image");
            let details = document.createElement("div");
            details.classList.add("item-details");
            details.innerHTML = `<p class="name-price">
           <span class="dish-name">${dish.dishName}</span
           ><span class="price">\$${dish.price}</span>
         </p>
         <p class="description">
         ${dish.desc}
        </p>`;
            imgDiv.innerHTML = `<img
                   src="${dish.src}"
                   alt="${dish.dishName}"
                 />`
            card.appendChild(imgDiv);
            card.appendChild(details);
            container.appendChild(card);
        }
    });

}

function filterDish(type) {
    if (pre != undefined) {
        if (pre.id == type)
            return;
        else
            pre.classList.remove("active-btn")
    }
    pre = document.getElementById(type);
    pre.classList.add("active-btn");
    const container = document.getElementById("item-container");
    if (container.hasChildNodes()) {
        container.innerHTML = '';
        addDishes(type);
    }
    else
        addDishes(type);
}