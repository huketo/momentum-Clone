const searchBar = document.querySelector("div .search-bar");
const searchForm = document.querySelector(".search-form");
const searchUnderbar = document.querySelector(".search-underbar");
const searchEngine = document.querySelector(".search-engine");
const searchEngineImg = document.querySelector(".search-engine__img");
const searchEngineCheck = document.querySelector("#search-engine__check");
const searchEngineSelect = document.querySelector(".fa-chevron-down");
const searchInput = document.querySelector("#search-keyword");

const FOCUSING_KEY = "focusing";

searchInput.style.cursor = "pointer";
searchEngineCheck.checked = "true";

searchBar.addEventListener("mouseover", () => {
  if (searchInput.style.cursor === "pointer")
    searchUnderbar.classList.add(FOCUSING_KEY);
});

searchBar.addEventListener("mouseleave", () => {
  if (searchInput.style.cursor === "pointer")
    searchUnderbar.classList.remove(FOCUSING_KEY);
});

searchInput.addEventListener("focus", () => {
  searchUnderbar.classList.add(FOCUSING_KEY);
  searchEngineImg.classList.add(FOCUSING_KEY);
  searchInput.style.cursor = "text";
});

searchInput.addEventListener("blur", () => {
  searchUnderbar.classList.remove(FOCUSING_KEY);
  searchEngineImg.classList.remove(FOCUSING_KEY);
  searchInput.style.cursor = "pointer";
});

searchEngineSelect.addEventListener("click", () => {
  if (searchEngineCheck.checked) {
    searchEngineSelect.classList.add(FOCUSING_KEY);
  } else {
    searchEngineSelect.classList.remove(FOCUSING_KEY);
  }
});
