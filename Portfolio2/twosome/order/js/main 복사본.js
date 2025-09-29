let total = [];

const main = document.querySelector(".main_area");
const name = document.querySelector(".name_info");
const playing = document.querySelector(".playing");
const calculate = document.querySelector(".calculate");

// 인원 버튼
function up(max) {
  const people = document.getElementById("people");
  people.value = parseInt(people.value) + 1;
  if (people.value >= parseInt(max)) {
    people.value = max;
  }
}
function down(min) {
  const people = document.getElementById("people");
  people.value = parseInt(people.value) - 1;
  if (people.value <= parseInt(min)) {
    people.value = min;
  }
}
// 판돈 버튼
function one(max) {
  const money = document.getElementById("money");
  money.value = parseInt(money.value) + 100;
  if (money.value >= parseInt(max)) {
    money.value = max;
  }
}
function five(max) {
  const money = document.getElementById("money");
  money.value = parseInt(money.value) + 500;
  if (money.value >= parseInt(max)) {
    money.value = max;
  }
}
function ten(max) {
  const money = document.getElementById("money");
  money.value = parseInt(money.value) + 1000;
  if (money.value >= parseInt(max)) {
    money.value = max;
  }
}
function zero() {
  money.value = 0;
}
// 입력완료 버튼
const submit = () => {
  const people = document.getElementById("people");
  const money = document.getElementById("money");
  if (people.value < 1 || people.value > 10) {
    return alert("인원수를 확인해주세요!");
  }
  if (money.value <= 0 || money.value > 10000) {
    return alert("판돈을 확인해주세요!");
  }
  // alert("굿");
  document.querySelector(".main_area").style.display = "none";
  document.querySelector(".name_info").style.display = "block";

  let namebox = document.querySelector(".name_area");
  let box = null;
  let peoples = people.value;

  for (let i = 1; i <= peoples; i++) {
    box = document.createElement("input");
    box.className = "nametag";
    box.setAttribute("type", "text");
    box.setAttribute("placeholder", "이름 입력");
    box.setAttribute("id", "info" + i);

    namebox.append(box);
  }
};

const nameValue = () => {
  let name = document.querySelector(".name_area");
  let name_array = [];
  let name_box_info = null;
  let money = document.getElementById("money");

  let name_length = document.querySelector(".name_area").children.length;
  for (let i = 0; i < name_length; i++) {
    name_array.push(name.children[i].value);
    if (name.children[i].value == "") {
      return alert("이름을 입력해주세요!");
    }
  }
  let zero_box = new Array();
  for (let i = 0; i < name_length; i++) {
    zero_box.push(0);
  }

  let around_result = [];
  for (let i = 0; i < name_length; i++) {
    around_result.push(zero_box);
  }

  console.log(around_result);
  for (let i = 0; i < name_length; i++) {
    name_box_info = document.createElement("div");
    name_box_info.className = "box_info";

    name_box_info.innerHTML = `
                          <h4>${name_array[i]}</h4>
                          <div class="box_wrap">
                            <div class="box_one" >100</div>
                            <div class="box_five" >500</div>
                            <div class="box_ten"  >1000</div>
                            <input type="number" class="money_pan" id="pan_money${i}" value="${money.value}" />
                            <span class="reset_pan">리셋</span>
                          </div>
                            
                            `;
    document.querySelector(".players").append(name_box_info);
  }

  let box_wrap = document.querySelectorAll(".box_wrap");
  box_wrap.forEach(function (obj) {
    let divs = obj.querySelectorAll("div");
    divs.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        let val = Number(obj.querySelector(".money_pan").value);
        let plus = parseInt(e.target.innerText);
        obj.querySelector(".money_pan").value = val + plus;
      });
    });
    let reset = obj.querySelector(".reset_pan");
    reset.addEventListener("click", function () {
      obj.querySelector(".money_pan").value = money.value;
    });
  });

  let winner = document.querySelector(".winner");
  let pan_arr = document.querySelectorAll(".money_pan");
  let money_round = [];

  winner.addEventListener("click", function () {
    if (around_result[0][0] == 0 && around_result[0][1] == 0) {
      around_result = [];
    }
    const money_result = [];
    for (let i = 0; i < name_array.length; i++) {
      money_result.push(Number(pan_arr[i].value));
    }
    money_round.push(money_result);
    console.log(money_round);
    choice.style.display = "block";
  });

  let winner_list = null;
  let choice = document.querySelector(".winner_choice");
  let choice_list = document.querySelector(".choice_wrap");

  for (let i = 0; i < name_array.length; i++) {
    winner_list = document.createElement("div");
    winner_list.className = "winner_box";
    winner_list.innerHTML = `${name_array[i]}`;

    choice_list.append(winner_list);
  }

  let winner_wrap = Array.from(document.querySelectorAll(".winner_box"));
  let around_winner = [];
  let aa = 0;

  winner_wrap.forEach(function (obj2, k) {
    if (around_result.length == 1) {
      for (let i = 0; i < name_length; i++) {
        around_result.push(10);
      }
    }
    obj2.addEventListener("click", function (e) {
      around_winner.push(e.target.innerText);
      choice.style.display = "none";

      money_round.forEach(function () {
        aa = name_array.indexOf(e.target.innerText);
        money_round[money_round.length - 1].splice(aa, 1, 0);
      });

      around_result.splice(k, 0, money_round[money_round.length - 1]);
      console.log(around_result);
      for (let i = 0; i < around_result.length - 1; i++) {
        // if (around_result.length == 1) return console.log("길이가 1임");
        for (let j = 0; j < name_array.length; j++) {
          if (around_result[i][j] == 0 && around_result[i + 1][j] == 0) {
            for (let k = 0; k < name_array.length; k++) {
              around_result[i][k] =
                Number(around_result[i][k]) + Number(around_result[i + 1][k]);
            }
            around_result.splice(i + 1, 1);
          }
        }
      }

      console.log(around_result);
      box_wrap.forEach(function (obj) {
        obj.querySelector(".money_pan").value = money.value;
      });
    });
  });

  let num = 0;
  let cc = [];
  let test = [];

  document.querySelector(".name_info").style.display = "none";
  document.querySelector(".playing").style.display = "block";

  let game_over = document.querySelector(".game_over");
  game_over.addEventListener("click", function () {
    let result_box = null;
    let result_money = null;
    let abc = null;
    let result = document.querySelector(".player_cal");
    for (let i = 0; i < name_array.length; i++) {
      result_box = document.createElement("div");
      result_box.className = "result_box";
      result_box.innerHTML = ` <div>${name_array[i]}</div>`;

      abc = document.createElement("div");
      abc.className = "r_m_wrap";
      for (let j = 0; j < name_array.length; j++) {
        if (!around_result[i][j] == 0 || !around_result[i][j] == "0") {
          result_money = document.createElement("div");
          result_money.className = "result_money_wrap";
          result_money.innerHTML = `<span>${name_array[j]} &nbsp; ${around_result[i][j]}</span>`;
          abc.append(result_money);
        }
      }
      result.append(result_box);
      result.append(abc);
    }

    document.querySelector(".playing").style.display = "none";
    document.querySelector(".calculate").style.display = "block";
  });

  let home = document.querySelector(".again_setting");

  home.addEventListener("click", function () {
    window.location.reload();
  });
};
