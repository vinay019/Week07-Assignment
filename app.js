const form = document.getElementById("search-form");
const responseContainer = document.getElementById("responseContainer");
const apiKey = "tLKURmeetERrwuqbLebQfIciS8qpjlbpmonJc9aa";

async function fetchNASAImage(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.hdurl) {
    responseContainer.innerHTML = "";

    const img = document.createElement("img");
    img.src = data.hdurl;
    img.alt = data.title;
    img.className = "fullscreen-img";

    responseContainer.appendChild(img);
  } else {
    responseContainer.innerHTML =
      "Soz! Sorry! Apologies! No image found for the chosen date. Please try another date.";
  }
}

const defaultDate = "2025-07-01";
fetchNASAImage(defaultDate);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const date = document.getElementById("dateInput").value;
  fetchNASAImage(date);
});
