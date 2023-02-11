function next(){
    console.log("hibin");
    $(".startscreen").fadeOut(600);
    $(".home").fadeIn(0);
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

