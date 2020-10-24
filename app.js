const auth = "563492ad6f91700001000001c84723fce83d46c993eddb350985e0bc";
const url = "https://api.pexels.com/v1/curated?per_page=15&page=1";
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.search-input');
const submitBtn = document.querySelector('.submit-btn');
let searchValue = searchInput.value;

submitBtn.addEventListener('click', searchPhotos(searchValue))

async function curatedPhotos() {
    const data = await getPhotos(url);
    console.log(data);
    imgGallery(data);
}

async function searchPhotos(query) {
    const searchUrl = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`
    const data = await getPhotos(searchUrl);
    imgGallery(data);
}


async function getPhotos(url) {
    const dataFetch = await fetch(url, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    return data;
}

function imgGallery(data) {
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `<img src="${photo.src.large}"/>
        <p>${photo.photographer}</p>`;
        gallery.appendChild(galleryImg);
    });
}


// curatedPhotos();