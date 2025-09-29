let newBt = document.querySelector(".newBt");
let coffeeDrinkBt = document.querySelector(".coffeeDrinkBt");
let dessertBt = document.querySelector(".dessertBt");
let foodBt = document.querySelector(".foodBt");
let goodsBt = document.querySelector(".goodsBt");

let coffeeBt = document.querySelector(".coffeeBt");
let drinkBt = document.querySelector(".drinkBt");
let teeBt = document.querySelector(".teeBt");

let wholecakeBt = document.querySelector(".wholecakeBt");
let pieceofcakeBt = document.querySelector(".pieceofcakeBt");
let macaronBt = document.querySelector(".macaronBt");
let cookieAndsnackBt = document.querySelector(".cookieAndsnackBt");

let newSub = document.querySelector(".new-sub");
let coffeeDrinkSub = document.querySelector(".coffeeDrink-sub");
let dessertSub = document.querySelector(".dessert-sub");
let foodSub = document.querySelector(".food-sub");
let goodsSub = document.querySelector(".goods-sub");

let newWrap = document.querySelector(".new");

let coffeeDrink = document.querySelector(".coffeeDrink");

let coffeeWrap = document.querySelector(".coffeeWrap");
let drinkWrap = document.querySelector(".drinkWrap");
let teeWrap = document.querySelector(".teeWrap");

let dessert = document.querySelector(".dessert");

let wholecakeWrap = document.querySelector(".wholecakeWrap");
let pieceofcakeWrap = document.querySelector(".pieceofcakeWrap");
let macaronWrap = document.querySelector(".macaronWrap");
let cookieAndsnackWrap = document.querySelector(".cookieAndsnackWrap");

let food = document.querySelector(".food");

let goods = document.querySelector(".goods");

newBt.addEventListener("click", function () {
  newSub.style.display = "block";

  coffeeDrinkSub.style.display = "none";
  dessertSub.style.display = "none";
  foodSub.style.display = "none";
  goodsSub.style.display = "none";

  newWrap.style.display = "block";

  coffeeDrink.style.display = "none";
  dessert.style.display = "none";
  food.style.display = "none";
  goods.style.display = "none";
});
coffeeDrinkBt.addEventListener("click", function () {
  coffeeDrinkSub.style.display = "block";

  newSub.style.display = "none";
  dessertSub.style.display = "none";
  foodSub.style.display = "none";
  goodsSub.style.display = "none";

  coffeeDrink.style.display = "block";

  newWrap.style.display = "none";
  dessert.style.display = "none";
  food.style.display = "none";
  goods.style.display = "none";
});
dessertBt.addEventListener("click", function () {
  dessertSub.style.display = "block";

  newSub.style.display = "none";
  coffeeDrinkSub.style.display = "none";
  foodSub.style.display = "none";
  goodsSub.style.display = "none";

  dessert.style.display = "block";

  newWrap.style.display = "none";
  coffeeDrink.style.display = "none";
  food.style.display = "none";
  goods.style.display = "none";
});
foodBt.addEventListener("click", function () {
  foodSub.style.display = "block";

  newSub.style.display = "none";
  coffeeDrinkSub.style.display = "none";
  dessertSub.style.display = "none";
  goodsSub.style.display = "none";

  food.style.display = "block";

  newWrap.style.display = "none";
  coffeeDrink.style.display = "none";
  dessert.style.display = "none";
  goods.style.display = "none";
});
goodsBt.addEventListener("click", function () {
  goodsSub.style.display = "block";

  newSub.style.display = "none";
  coffeeDrinkSub.style.display = "none";
  dessertSub.style.display = "none";
  foodSub.style.display = "none";

  goods.style.display = "block";

  newWrap.style.display = "none";
  coffeeDrink.style.display = "none";
  dessert.style.display = "none";
  food.style.display = "none";
});

coffeeBt.addEventListener("click", () => {
  coffeeWrap.style.display = "flex";

  drinkWrap.style.display = "none";
  teeWrap.style.display = "none";
});
drinkBt.addEventListener("click", () => {
  drinkWrap.style.display = "flex";

  coffeeWrap.style.display = "none";
  teeWrap.style.display = "none";
});
teeBt.addEventListener("click", () => {
  teeWrap.style.display = "flex";

  coffeeWrap.style.display = "none";
  drinkWrap.style.display = "none";
});

wholecakeBt.addEventListener("click", () => {
  wholecakeWrap.style.display = "flex";

  pieceofcakeWrap.style.display = "none";
  macaronWrap.style.display = "none";
  cookieAndsnackWrap.style.display = "none";
});

pieceofcakeBt.addEventListener("click", () => {
  pieceofcakeWrap.style.display = "flex";

  wholecakeWrap.style.display = "none";
  macaronWrap.style.display = "none";
  cookieAndsnackWrap.style.display = "none";
});

macaronBt.addEventListener("click", () => {
  macaronWrap.style.display = "flex";

  wholecakeWrap.style.display = "none";
  pieceofcakeWrap.style.display = "none";
  cookieAndsnackWrap.style.display = "none";
});
cookieAndsnackBt.addEventListener("click", () => {
  cookieAndsnackWrap.style.display = "flex";

  wholecakeWrap.style.display = "none";
  pieceofcakeWrap.style.display = "none";
  macaronWrap.style.display = "none";
});
