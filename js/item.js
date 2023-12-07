const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const quantity = document.querySelector("#quantity");

add.addEventListener(
  "click",
  () => (quantity.value = Number(quantity.value) + 1)
);
subtract.addEventListener("click", () => {
  quantity.value = Number(quantity.value) > 0 ? Number(quantity.value) - 1 : 0;
});

quantity.addEventListener("change", () => {
  quantity.value = Number(quantity.value) < 0 ? 0 : Number(quantity.value);
});
