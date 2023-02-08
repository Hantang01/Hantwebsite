function mainsite() {
    $("#startthing").fadeOut(900);
    $("#main").fadeIn(900);
    $(".banner").fadeIn(900);
    setTimeout(function () {
      var typed = new Typed("#Bruh",
          {
              strings: app.Texts,
              typeSpeed: 40,
              backDelay: 500,
              onComplete: function() {
                  return $("span").siblings(".typed-cursor").css("opacity", "0");
              }
          });
  }, 1350);
    
}

function statcheckeropen() {
    $("#main").fadeOut(300);
    $(".projects").fadeIn(300);

}
