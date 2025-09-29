fetch("./data.json")
  .then(res => {
    return res.json();
  })
  .then(obj => twoSome(obj));

const twoSome = obj => {
  const newItems = document.querySelector(".newWrap");
  const coffeeItems = document.querySelector(".coffeeWrap");
  const drinkItems = document.querySelector(".drinkWrap");
  const teeItems = document.querySelector(".teeWrap");
  const wholecakeItems = document.querySelector(".wholecakeWrap");
  const pieceofcakeItems = document.querySelector(".pieceofcakeWrap");
  const macaronItems = document.querySelector(".macaronWrap");
  const cookieAndsnackItems = document.querySelector(".cookieAndsnackWrap");
  const foodItems = document.querySelector(".foodWrap");
  const goodsItems = document.querySelector(".goodsWrap");

  for (let i = 0; i < obj.new.length; i++) {
    const Name = obj.new[i].name;
    const Price = obj.new[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/new/new" + (i + 1) + ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    newItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.coffee.length; i++) {
    const Name = obj.coffee[i].name;
    const Price = obj.coffee[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/coffee/coffee" +
      (i + 1) +
      ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    coffeeItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.drink.length; i++) {
    const Name = obj.drink[i].name;
    const Price = obj.drink[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/drink/drink" + (i + 1) + ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    drinkItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.tee.length; i++) {
    const Name = obj.tee[i].name;
    const Price = obj.tee[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/tee/tee" + (i + 1) + ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    teeItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.wholecake.length; i++) {
    const Name = obj.wholecake[i].name;
    const Price = obj.wholecake[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/wholecake/wholecake" +
      (i + 1) +
      ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    wholecakeItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.pieceofcake.length; i++) {
    const Name = obj.pieceofcake[i].name;
    const Price = obj.pieceofcake[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/pieceofcake/pieceofcake" +
      (i + 1) +
      ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    pieceofcakeItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.macaron.length; i++) {
    const Name = obj.macaron[i].name;
    const Price = obj.macaron[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/macaron/macaron" +
      (i + 1) +
      ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    macaronItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.cookieAndsnack.length; i++) {
    const Name = obj.cookieAndsnack[i].name;
    const Price = obj.cookieAndsnack[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/cookieAndsnack/cookieAndsnack" +
      (i + 1) +
      ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    cookieAndsnackItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.food.length; i++) {
    const Name = obj.food[i].name;
    const Price = obj.food[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/food/food" + (i + 1) + ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    foodItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }

  for (let i = 0; i < obj.goods.length; i++) {
    const Name = obj.goods[i].name;
    const Price = obj.goods[i].price;

    const liItem = document.createElement("li");
    const itemImage = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemPrice = document.createElement("span");

    liItem.className = "item";
    itemImage.className = "itemImage";
    itemName.className = "itemName";
    itemPrice.className = "itemPrice";

    itemImage.style.background =
      "url('./image/goods/goods" + (i + 1) + ".jpeg') no-repeat center center";
    itemImage.style.backgroundSize = "contain";
    itemName.textContent = `${Name}`;
    itemPrice.textContent = `${Price}`;

    goodsItems.appendChild(liItem);
    liItem.appendChild(itemImage);
    liItem.appendChild(itemName);
    liItem.appendChild(itemPrice);
  }
};
