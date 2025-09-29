const items = document.querySelectorAll(".item");
const itemWrap = document.querySelectorAll(".itemWrap");
const itemWraps = document.querySelectorAll(".itemName");

const orderList = document.querySelector(".itemList");

const totalcount = document.querySelector(".totalcount");
const totalmoney = document.querySelector(".totalmoney");

const trashBt = document.querySelector(".trash");
const payBt = document.querySelector(".pay");
const bacordBt = document.querySelector(".bacord");

totalcount.textContent = 0;
totalmoney.textContent = 0;

const Up = e => {
  totalcount.innerText++;
  e.target.nextSibling.innerText++;

  let v = totalmoney.innerText;
  totalmoney.innerText =
    Number(v) +
    parseInt(e.target.previousSibling.innerText.slice(0, -1).replace(/,/g, ""));
};

const Down = e => {
  totalcount.innerText--;
  e.target.previousSibling.innerText--;
  if (e.target.previousSibling.innerText == 0) {
    // console.log(e.target.parentElement);
    e.target.parentElement.remove();
  }
  let v = totalmoney.innerText;
  totalmoney.innerText =
    Number(v) -
    parseInt(
      e.target.parentElement.childNodes[1].innerText
        .slice(0, -1)
        .replace(/,/g, "")
    );
};

let orderNum = 0;

itemWrap.forEach(v => {
  v.addEventListener("click", e => {
    const orderItem = document.createElement("li");
    const orderName = document.createElement("h4");
    const orderPrice = document.createElement("span");
    const upBt = document.createElement("button");
    const count = document.createElement("span");
    const downBt = document.createElement("button");

    // console.log(e.target.parentElement.childNodes[1]);
    if (e.target.className == "item") {
      orderName.textContent = e.target.childNodes[1].innerText;
      orderPrice.textContent = e.target.childNodes[2].innerText;
      orderList.appendChild(orderItem);
      orderItem.appendChild(orderName);
      orderItem.appendChild(orderPrice);
      orderItem.appendChild(upBt);
      orderItem.appendChild(count);
      orderItem.appendChild(downBt);

      totalcount.innerText++;
      let v = totalmoney.innerText;
      totalmoney.innerText =
        Number(v) +
        parseInt(orderPrice.innerText.slice(0, -1).replace(/,/g, ""));
    } else if (
      e.target.className == "itemImage" ||
      e.target.className == "itemName" ||
      e.target.className == "itemPrice"
    ) {
      orderName.textContent = e.target.parentElement.childNodes[1].innerText;
      orderPrice.textContent = e.target.parentElement.childNodes[2].innerText;

      orderList.appendChild(orderItem);
      orderItem.appendChild(orderName);
      orderItem.appendChild(orderPrice);
      orderItem.appendChild(upBt);
      orderItem.appendChild(count);
      orderItem.appendChild(downBt);

      totalcount.innerText++;
      let v = totalmoney.innerText;
      totalmoney.innerText =
        Number(v) +
        parseInt(orderPrice.innerText.slice(0, -1).replace(/,/g, ""));
    }
    count.textContent = 1;
    upBt.textContent = "+";
    downBt.textContent = "-";

    orderItem.className = "orderItem";
    count.className = "ordercount";
    upBt.className = "up";
    downBt.className = "down";

    upBt.onclick = Up;
    downBt.onclick = Down;
  });
});

const prepare = () => {
  alert("시스템 점검중입니다!");
};

trashBt.addEventListener("click", () => {
  while (orderList.hasChildNodes()) {
    orderList.removeChild(orderList.firstChild);
  }
  totalcount.textContent = 0;
  totalmoney.textContent = 0;
});

payBt.addEventListener("click", prepare);
bacordBt.addEventListener("click", prepare);
