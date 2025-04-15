
// Array of Coffee Shops
const coffeeShops = [
  { name: "Da Vien", image: "images/Da Vien Matcha.png", drink: "Banana Matcha Latte", desc: "Creamy/Heavy & Sweet", rating: 8, price: 7 },
  { name: "7 Leaves", image: "images/7 Leaves Matcha.png", drink: "Matcha Soy Latte", desc: "Light & Very Sweet", rating: 5, price: 5 },
  { name: "Vivot", image: "images/vivot.jpg", drink: "Matcha Oat Latte", desc: "Simple & Slightly Bitter", rating: 7, price: 8 },
  { name: "Tierra Mia Coffee", image: "images/Tierra Mia Matcha.png", drink: "Matcha Latte", desc: "Smooth & Semi-Sweet", rating: 6, price: 6 },
  { name: "Memory Look", image: "images/memoryLook.jpg", drink: "Einspanner Matcha Latte", desc: "Heavy & Very-Sweet", rating: 9, price: 7.50 },
  { name: "Starbucks", image: "images/IcedMatchaTeaLatte.jpg", drink: "Iced Matcha Latte", desc: "Little Watery & Semi-Sweet", rating: 1.5, price: 5 },
  { name: "Matcha Cafe Maiko", image: "images/matchalattefloat.jpg", drink: "Matcha Latte Float", desc: "Very Good with Matcha Ice Cream ON TOP!", rating: 9.2, price: 8.50 }
];

// Initial Starting Screen
document.addEventListener("DOMContentLoaded", () => showCafes(coffeeShops));

// Function to display cafes from the array
function showCafes(array) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const cafe = array[i];

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = cafe.image;
    img.alt = cafe.name + " Image";

    const name = document.createElement("p");
    name.textContent = cafe.name;
    name.className = "cafeName";

    const drink = document.createElement("p");
    drink.textContent = cafe.drink;
    drink.className = "drink";

    const desc = document.createElement("p");
    desc.textContent = cafe.desc;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${cafe.rating}/10⭐`;
    rating.className = "rating";

    const price = document.createElement("p");
    price.textContent = `Price: $ ${cafe.price}`;

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

// Toggle to show the price dropdown selections
const new_dropdown = document.querySelector('.new-dropdown');
const elements = document.querySelector('.elements');
new_dropdown.addEventListener('click', () => {
  elements.classList.toggle('show');
});

// Pricing filter
const priceFilter = document.querySelectorAll('.elements .item');
for (let i = 0; i < priceFilter.length; i++) {
  priceFilter[i].addEventListener('click', () => {
    const priceRange = priceFilter[i].getAttribute('data-price'); //Get the data price (Low/Med/High)
    
    let filtered = []; //empty array to store the new coffee shops depending on price

    for (let j = 0; j < coffeeShops.length; j++) {
      const cafe = coffeeShops[j];
      if (
        (priceRange === "low" && cafe.price <= 5) || (priceRange === "mid" && cafe.price >= 6 && cafe.price <= 7) || (priceRange === "high" && cafe.price > 7)
      ) {
        filtered.push(cafe); //adds the new coffee shops depending on price to the array
      }
    }
    showCafes(filtered); //displays the array based on price range
  });
}

// Toggle rating/price sort dropdown selections
const dropdown = document.querySelector('.dropdown');
const content = document.querySelector('.content');
dropdown.addEventListener('click', () => {
  content.classList.toggle('show');
});

// Sorting function for Rating and Price
const sortItems = document.querySelectorAll('.content .item');
for (let i = 0; i < sortItems.length; i++) {
  sortItems[i].addEventListener('click', () => {
    const sortType = sortItems[i].getAttribute('data-sort'); // Get the sort type (Rating or Price)

    // Sort the array based on the selected sort type
    if (sortType === 'Rating') {
      coffeeShops.sort((a, b) => b.rating - a.rating); // Sort by rating (highest to lowest)
    } else if (sortType === 'Price') {
      coffeeShops.sort((a, b) => a.price - b.price); // Sort by price (lowest to highest)
    }

    // Updates cafes after sorting either Rating or Price
    showCafes(coffeeShops);
  });
}
