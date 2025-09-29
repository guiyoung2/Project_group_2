$(function () {
  let cass_icon = $(".cass_icon");
  let terra_icon = $(".terra_icon");
  let kelly_icon = $(".kelly_icon");
  let hite_icon = $(".hite_icon");
  let kloud_icon = $(".kloud_icon");
  let filite_icon = $(".filite_icon");
  let mango_icon = $(".mango_icon");
  let max_icon = $(".max_icon");
  let toktok_icon = $(".toktok_icon");

  let cass = Math.round($(".cass").offset().top);
  let terra = Math.round($(".terra").offset().top);
  let kelly = Math.round($(".kelly").offset().top);
  let hite = Math.round($(".hite").offset().top);
  let kloud = Math.round($(".kloud").offset().top);
  let filite = Math.round($(".filite").offset().top);
  let mango = Math.round($(".mango").offset().top);
  let max = Math.round($(".max").offset().top);
  let toktok = Math.round($(".toktok").offset().top);

  let upButton = $(".upButton");

  cass_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: cass }, 300);
  });
  terra_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: terra }, 300);
  });
  kelly_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: kelly }, 300);
  });
  hite_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: hite }, 300);
  });
  kloud_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: kloud }, 300);
  });
  filite_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: filite }, 300);
  });
  mango_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: mango }, 300);
  });
  max_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: max }, 300);
  });
  toktok_icon.off().on("click", function () {
    $("html, body").animate({ scrollTop: toktok }, 300);
  });

  upButton.off().on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  $(window).scroll(function () {
    let scrollT = $(window).scrollTop();
    let upButton_box = Math.round($(".terra").offset().top);

    if (scrollT >= upButton_box) {
      upButton.addClass("btn_on");
    } else {
      upButton.removeClass("btn_on");
    }
  });
});
