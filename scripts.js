
// Array of Coffee Shops
const coffeeShops = [
  { name: "Da Vien",image: "images/Da Vien Matcha.png", drink: "Banana Matcha Latte", desc: "Creamy/Heavy & Sweet", rating: 8, price: 7},
  { name: "7 Leaves", image: "images/7 Leaves Matcha.png", drink: "Matcha Soy Latte", desc: "Light & Very Sweet", rating: 5, price: 5},
  { name: "Vivot",image: "images/vivot.jpg", drink: "Matcha Oat Latte", desc: "Simple & Slighty Bitter", rating: 7, price: 8},
  { name: "Tierra Mia Coffee",image: "images/Tierra Mia Matcha.png", drink: "Matcha Latte", desc: "Smooth & Semi-Sweet", rating: 6, price: 6},
  { name: "Memory Look",image: "images/memoryLook.jpg", drink: "Einspanner Matcha Latte", desc: "Heavy & Very-Sweet", rating: 9, price: 7.50},
  { name: "Starbucks",image: "images/IcedMatchaTeaLatte.jpg", drink: "Iced Matcha Latte", desc: "Little Watery & Semi-Sweet", rating: 1.5, price: 6.50},
  { name: "Matcha Cafe Maiko",image: "images/matchalattefloat.jpg", drink: "Matcha Latte Float", desc: "Very Good with Matcha Ice Cream ON TOP!", rating: 9.2, price: 8.50}
];


// This function adds cards the page to display the data in the array
function showCafes() {
  const cardContainer = document.getElementById("card-container");
  
  for (let i = 0; i < coffeeShops.length; i++) {

    let cafe = coffeeShops[i];

    // Creating a div for each cafe
    const card = document.createElement("div");
    card.classList.add("card");

    // Creating the Image
    const img = document.createElement("img");
    img.src = cafe.image;
    img.alt = cafe.name + "Image";

    // Creates the Coffee Shop Name
    const name = document.createElement("p");
    name.textContent = cafe.name;
    name.className = "cafeName";

    const drink = document.createElement("p");
    drink.textContent = cafe.drink;
    drink.className = "drink";

    const desc = document.createElement("p");
    desc.textContent = cafe.desc;
  
    const rating = document.createElement("p");
    rating.textContent = `Rating: ${cafe.rating}` + `/10`;
    rating.className = "rating";

    const price = document.createElement("p");
    price.textContent =  `Price: ` + `$ ${cafe.price}`;

    // Adds image and name to the card

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(drink);
    card.appendChild(desc);
    card.appendChild(rating);
    card.appendChild(price);
   

    // Adds the card to the container

    cardContainer.appendChild(card);
  }
}
// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCafes);


//Dropdown Menu Functions:

//Clicking SortBy to show Rating and Price

const dropdown = document.querySelector('.dropdown');

const content = document.querySelector('.content');

dropdown.addEventListener('click', ()=> {

content.classList.toggle('show');

});

// Sorting functionality for Rating and Price
const items = document.querySelectorAll('.item');

// Event listeners for each sorting item

for(let i = 0; i < items.length; i++){
  
  items[i].addEventListener('click', () => {
    const sortType = items[i].getAttribute('data-sort'); // Get the sort type (Rating or Price)

    // Sort the array based on the selected sort type
    if (sortType === 'Rating') {
      coffeeShops.sort((a, b) => b.rating - a.rating); // Sort by rating (highest to lowest)
    } else if (sortType === 'Price') {
      coffeeShops.sort((a, b) => a.price - b.price); // Sort by price (lowest to highest)
    }

    // Re-render cafes after sorting
    updatedCafes(coffeeShops);
    content.classList.remove('show');
  });
}


//When selecting either rating or price it uses this array to resort the cards
function updatedCafes(array){

  const cardContainer = document.getElementById("card-container");
  
  cardContainer.innerHTML = "";
  for (let i = 0; i < coffeeShops.length; i++) {

    let cafe = coffeeShops[i];

    // Creating a div for each cafe
    const card = document.createElement("div");
    card.classList.add("card");

    // Creating the Image
    const img = document.createElement("img");
    img.src = cafe.image;
    img.alt = cafe.name + "Image";

    // Creates the Coffee Shop Name
    const name = document.createElement("p");
    name.textContent = cafe.name;
    name.className = "cafeName";

    const drink = document.createElement("p");
    drink.textContent = cafe.drink;
    drink.className = "drink";

    const desc = document.createElement("p");
    desc.textContent = cafe.desc;
  
    const rating = document.createElement("p");
    rating.textContent = `Rating: ${cafe.rating}` + `/10`;
    rating.className = "rating";

    const price = document.createElement("p");
    price.textContent =  `Price: ` + `$ ${cafe.price}`;

    // Adds image and name to the card

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(drink);
    card.appendChild(desc);
    card.appendChild(rating);
    card.appendChild(price);
   

    // Adds the card to the container

    cardContainer.appendChild(card);
  }
}




