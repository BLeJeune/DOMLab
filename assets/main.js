// Let's grab the hero div
const hero = document.querySelector(`.hero`);

// Let's modify the background image
hero.style.backgroundImage = `url('./assets/backimg2.jpg')`;

const name = document.querySelector(`.hero h1 span`);
name.innerHTML = `Blaise LeJeune`

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `Hello!!`;

const profilePic = document.querySelector(`.profile-img`);
profilePic.src = `./assets/profile-img.jpg`;

// My favorite things to do!

const favorites = [{
    img: `./assets/img3.jpg`,
    title: `Sleeping`,
    desc: `Something I do every night.`,
  },
  {
    img: `./assets/img2.jpg`,
    title: `Traveling`,
    desc: `Enjoy doing this in the summer.`,
  },
  {
      img: `./assets/img1.jpg`,
      title: `Sports`,
      desc: `Love to watch and play.`,
  }
]

// Grab the gallery

const gallery = document.querySelector(`.info-gallery`);

// Map over favorites array and generate an info item for each
// Then place them in the gallery.

favorites.map((favorite) => {
// Create a new element
let newel = document.createElement(`div`);
newel.classList.add(`info-item`);
// lets generate the HTML for the item
newel.innerHTML = `
<img src="${favorite.img}" alt="${favorite.title}" class="item-img"/>
<h4>${favorite.title}</h4>
<p>${favorite.desc}</p>
`
// Then lets add it to the DOM!
gallery.appendChild(newel);
})
