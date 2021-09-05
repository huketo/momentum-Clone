const musicGenres = document.querySelectorAll(".playlist-song");

const jazz = musicGenres[0];
const edm = musicGenres[1];
const hipHop = musicGenres[2];
const relax = musicGenres[3];

jazz.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=IRyJe-0Uie0");
});

edm.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=-ObdvMkCKws");
});

hipHop.addEventListener("click", () => {
  window.open("https://www.youtube.com/watch?v=uMGLB4y0SMk");
});

relax.addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=R5QroPKsyYc&list=PLfP6i5T0-DkIkXUym_3Be2Z8IENeuOqyk"
  );
});
