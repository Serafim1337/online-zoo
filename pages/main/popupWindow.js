const testimonialBlock = document.querySelector(".testimonials-section");
const cardsSection = document.querySelector(".testimonials-cards");

cardsSection.addEventListener("click", function (e) {
  if (!e.target.closest(".testimonial-card")) return;
  if (document.documentElement.clientWidth > 980) return;
  showOverlay();
  showPopup(e.target.closest(".testimonial-card"));
});

function showOverlay() {
  overlay.hidden = !overlay.hidden;
  body.classList.toggle("lock");
}

function showPopup(card) {
  card.classList.toggle("popup-card");
  overlay.before(card);
  card.firstElementChild.classList.toggle("popup-card-colored");
}
