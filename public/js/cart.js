const plus = document.querySelectorAll(".cart-item__quantity--plus");
const minus = document.querySelectorAll(".cart-item__quantity--minus");
const inputQuantity = document.querySelectorAll(".cart-item__input");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener(
    "click",
    () => (inputQuantity[i].value = Number(inputQuantity[i].value) + 1)
  );
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => {
    inputQuantity[i].value =
      Number(inputQuantity[i].value) > 0
        ? Number(inputQuantity[i].value) - 1
        : 0;
  });
}

for (let i = 0; i < inputQuantity.length; i++) {
  inputQuantity[i].addEventListener("change", () => {
    inputQuantity[i].value =
      Number(inputQuantity[i].value) < 0 ? 0 : Number(inputQuantity[i].value);
  });
}
