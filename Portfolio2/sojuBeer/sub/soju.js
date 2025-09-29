$(function () {
  let fresh_icon = $(".fresh_icon");
  let fresh_red_icon = $(".fresh_red_icon");
  let likefirst_icon = $(".likefirst_icon");
  let jinro_icon = $(".jinro_icon");
  let chengha_icon = $(".chengha_icon");
  let goodday_icon = $(".goodday_icon");
  let meahwa_icon = $(".meahwa_icon");

  let fresh = Math.round($(".fresh").offset().top);
  let fresh_red = Math.round($(".fresh_red").offset().top);
  let likefirst = Math.round($(".likefirst").offset().top);
  let jinro = Math.round($(".jinro").offset().top);
  let chengha = Math.round($(".chengha").offset().top);
  let goodday = Math.round($(".goodday").offset().top);
  let meahwa = Math.round($(".meahwa").offset().top);

  let upButton = $(".upButton");

  fresh_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: fresh }, 300);
  });
  fresh_red_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: fresh_red }, 300);
  });
  likefirst_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: likefirst }, 300);
  });
  jinro_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: jinro }, 300);
  });
  chengha_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: chengha }, 300);
  });
  goodday_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: goodday }, 300);
  });
  meahwa_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: meahwa }, 300);
  });

  upButton.off().on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let upButton_box = Math.round($(".fresh_red").offset().top);

    if (scrollT >= upButton_box) {
      upButton.addClass("btn_on");
    } else {
      upButton.removeClass("btn_on");
    }
  });
});
