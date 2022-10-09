const dotBlocks = Array.from(document.querySelectorAll(".dot-block"));
const dots = Array.from(document.querySelectorAll(".yellow-dot"));
const amountInput = document.querySelector(".amount-number");
const dotsValues = dots.map((item) => item.dataset.value);

for (let block of dotBlocks) {
  block.addEventListener("click", function (e) {
    dotClickHandler(e);
  });
}

amountInput.addEventListener("input", function (e) {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
  highlightValue(this.value);
});

function dotClickHandler(e) {
  let currentDot;

  if (e.target.classList.contains("dot-block")) {
    currentDot = e.target.firstElementChild;
    highlightDot(currentDot);
  } else {
    currentDot = e.target;
    highlightDot(currentDot);
  }

  insertAmount(currentDot.dataset.value);
}

function highlightDot(currentDot) {
  dots.map((item) => item.classList.remove("clicked"));
  currentDot.classList.add("clicked");
}

function insertAmount(amount) {
  amountInput.value = amount;
}

function highlightValue(amount) {
  if (dotsValues.includes(amount)) {
    let currentDot = document.querySelector(`[data-value="${amount}"]`);
    highlightDot(currentDot);
  }
}
