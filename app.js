const auth = "563492ad6f91700001000001c84723fce83d46c993eddb350985e0bc";
const url = "https://api.pexels.com/v1/curated?per_page=15&page=1";
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.search-form');
let searchValue;

// Event Listners
searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    searchPhotos(searchValue);
})

function updateInput(event) {
    searchValue = event.target.value;
}

async function curatedPhotos() {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    console.log(data);
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src="${photo.src.large}"/>
        <p>${photo.photographer}</p>`;
        gallery.appendChild(galleryImg);
    });
}

async function searchPhotos(query) {
    const dataFetch = await fetch(`https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    console.log(data);
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src="${photo.src.large}"/>
        <p>${photo.photographer}</p>`;
        gallery.appendChild(galleryImg);
    });
}

curatedPhotos();