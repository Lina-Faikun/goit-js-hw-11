import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const searchQuery = event.target.elements.query.value.trim();

  if (!searchQuery) {
    iziToast.error({
      title: "Error",
      message: "Поле пошуку не може бути порожнім!",
    });
    return;
  }

  loader.style.display = "block"; // Показати індикатор завантаження

  try {
    const images = await fetchImages(searchQuery);

    if (images.length === 0) {
      iziToast.warning({
        title: "No results",
        message: "Sorry, no images found!",
      });
    } else {
      renderImages(images);
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: error.message,
    });
  } finally {
    loader.style.display = "none"; // Приховати індикатор після завантаження
  }
});
