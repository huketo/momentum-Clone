const searchBar = document.querySelector("div .search-bar");
const searchForm = document.querySelector(".search-form");
const searchUnderbar = document.querySelector(".search-underbar");
const searchEngineDiv = document.querySelector(".search-engine");
const searchEngineImg = document.querySelector(".search-engine__img");
const searchEngineCheck = document.querySelector("#search-engine__check");
const searchEngineChevron = document.querySelector(".fa-chevron-down");
const searchEngineList = document.querySelectorAll(".search-engine__list li");
const searchInput = document.querySelector("#search-keyword");

const FOCUSING_KEY = "focusing";
const GOOGLE_KEY = "Google";
const NAVER_KEY = "Naver";

let searchEngine = GOOGLE_KEY;

searchInput.style.cursor = "pointer";
searchEngineCheck.checked = "true";

// 검색 바 hover
searchBar.addEventListener("mouseover", () => {
  if (searchInput.style.cursor === "pointer")
    searchUnderbar.classList.add(FOCUSING_KEY);
});

searchBar.addEventListener("mouseleave", () => {
  if (searchInput.style.cursor === "pointer")
    searchUnderbar.classList.remove(FOCUSING_KEY);
});

// 검색 키워드 입력시 포커싱
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

// 검색엔진 박스 화살표 포커싱
searchEngineChevron.addEventListener("click", () => {
  if (searchEngineCheck.checked) {
    searchEngineChevron.classList.add(FOCUSING_KEY);
  } else {
    searchEngineChevron.classList.remove(FOCUSING_KEY);
  }
});

// 검색엔진 고르기
searchEngineList[0].addEventListener("click", () => {
  searchEngine = searchEngineList[0].innerText;
  searchEngineImg.innerText = searchEngine[0];
  searchEngineCheck.checked = true;
});

searchEngineList[1].addEventListener("click", () => {
  searchEngine = searchEngineList[1].innerText;
  searchEngineImg.innerText = searchEngine[0];
  searchEngineCheck.checked = true;
});

// 검색 엔진별 동작
function searchKeyword(event) {
  event.preventDefault();
  let keyword = searchInput.value;

  if (searchEngine === GOOGLE_KEY) {
    window.open("https://www.google.co.kr/search?q=" + keyword);
  } else if (searchEngine === NAVER_KEY) {
    window.open("https://search.naver.com/search.naver?query=" + keyword);
  }
  searchInput.value = "";
}

// Submit 시 새창 열고 검색결과
searchForm.addEventListener("submit", searchKeyword);
