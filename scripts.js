/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// array of car objects.
let cars = [
  { make: "Honda", model: "Ek", year: 1998, engine: "D16Y7", imageURL: "images/ekpic.jpeg" } ,
  { make: "Acura", model: "Integra", year: 2000, engine: "B18b1", imageURL: "images/integraimg.jpeg" },
  { make: "Porsche", model: "911", year: 1989, engine: "903", imageURL: "images/911pic.jpeg" },
  { make: "Bmw", model: "M3", year: 2025, engine: "S58", imageURL: "images/m3pic.jpeg" },
  { make: "Nissan", model: "Silvia", year: 2000, engine: "SR20ET", imageURL: "images/s15pic.webp"},
  { make: "Nissan", model: "Gtr", year: 2015, engine: "VR38DET", imageURL: "images/r35pic.jpeg"},
  { make: "Chevrolet", model: "Corevette", year: 2009, engine: "LS9", imageURL: "images/zr1 pic.jpg"}
];


// This function adds cars the page to display the data in the array
function showCars() {

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < cars.length; i++) {
    //creating a var for each car
    let car = cars[i];
    //creating a variable for the image 
    let imageURL = car.imageURL;
  
   
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCarContent(nextCard, car.model, imageURL, car); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}



function editCarContent(card, newTitle, newImageURL, car) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";
  
  //turning all the bullets into objects
  const bullets = card.querySelectorAll("li");
  bullets[0].textContent = "Make: " + car.make;
  bullets[1].textContent = "Year: " + car.year;
  bullets[2].textContent = "Engine: " + car.engine;


  //creating the button
  const deleteBtn = document.createElement("button");
  //putting the x as the button
  deleteBtn.textContent = "✕";
  
  //delets the object out the array
  deleteBtn.addEventListener("click", () => {
    cars = cars.filter(car => car.model !== newTitle);
    showCars();
  });
  //put the button onto the car 
  card.appendChild(deleteBtn);

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}


//sorts the cars acending order.
function sortAZ() {
  cars.sort((a, b) => {
    if (a.model < b.model) return -1;
    if (a.model > b.model) return 1;
    return 0;
  });
  showCars();
}

// sorts the car decending order
function sortZA() {
  cars.sort((a, b) => {
    if (b.model < a.model) return -1;
    if (b.model > a.model) return 1;
    return 0;
  });
  showCars();
}

// This calls the addCard() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCars);

//removs the last car from the array
function removeLastCar() {
  cars.pop(); // Remove last item in titles array
  showCars(); // Call showCards again to refresh
}
