import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  gallery.innerHTML = ""; // Очистка перед новим пошуком

  if (images.length === 0) {
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a class="gallery__item" href="${largeImageURL}">
        <div class="photo-card">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </div>
      </a>
    `
    )
    .join("");

  gallery.innerHTML = markup;

  // Оновлення SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a");
  lightbox.refresh();
}
