$(document).ready(function () {

    $("#cv").on("click",function(){
        location.href = "https://hamza-dev.fr/Hamza.pdf"
    })

    $("#nanodoc").on("click",function(){
        location.href = "https://hamza-dev.fr/Nanodoc/"
    })

 $("#vvaavis").on("click",function(){
        location.href = "https://hamza-dev.fr/VvaAvis.mp4"
    })
    //SCRIPT MOBILE AFFICHAGE TEXT
    
    function textslide() {
        if (j == 1) {
            $(".h2").css("display", "none");
            $(".h2-1").css("display", "inline");
            $("#haut").css("display", "block");
        }
        if (j == 0) {
            $(".h2").css("display", "");
            $(".h2-1").css("display", "none");
        }
    }

    $(".CV").on("click", function () {
        console.log("ok");
        window.location.href = "https://hamza-dev.fr/CV_Hamza.pdf";
    });

    function animation() {
        if (i == 1) {
            $(".rond2").css("background-color", "black");
            if (
                window.matchMedia("(min-width: 700px) and (max-width: 1600px)").matches
            ) {
                $(".cercle1").animate({
                    right: "450px",
                    height: "100px",
                    width: "100px",
                    opacity: 1,
                });
            } else {
                $(".cercle1").animate({
                    right: "300px",
                    height: "300px",
                    width: "300px",
                    opacity: 1,
                });
            }
        } else {
            $(".cercle1").animate(
                {
                    left: "50%",
                    height: "200px",
                    width: "200px",
                    opacity: 0,
                },
                "fast",
                function () {
                    $(this).removeAttr("style");
                }
            );
            $(".rond2").css("background-color", "grey");
        }
        if (i == 2) {
            $(".rond3").css("background-color", "black");
            if (
                window.matchMedia("(min-width: 700px) and (max-width: 1600px)").matches
            ) {
                $(".cercle2").animate({
                    left: "450px",
                    height: "100px",
                    width: "100px",
                    opacity: 1,
                });
            } else {
                $(".cercle2").animate({
                    left: "300px",
                    height: "300px",
                    width: "300px",
                    opacity: 1,
                });
            }
        } else {
            $(".cercle2").animate(
                {
                    right: "50%",
                    height: "200px",
                    width: "200px",
                    opacity: 0,
                },
                "fast",
                function () {
                    $(this).removeAttr("style");
                }
            );
            $(".rond3").css("background-color", "grey");
        }
        if (i == 0) {
            $(".rond1").css("background-color", "black");
        } else {
            $(".rond1").css("background-color", "grey");
        }
    }

    //SCRIPT COMPETENCE

    var i = 0;
    $("#nextcompetence").on("click", function () {
        if (i < 3) {
            i = i + 1;

            affichercompetence();
        }
    });
    $("#previouscompetence").on("click", function () {
        if (i > 0) {
            i = i - 1;

            affichercompetence();
        }
    });
    function affichercompetence() {
        if (i === 0) {
            $(".icone i").css("display", "flex");
            $("#text").text("Mes compétences en Web");
            $(".icone img").css("display", "none");
        }
        if (i === 1) {
            $(".icone img").css("display", "flex");
            $("#text").text("Mes compétences en programmation");
            $("#text").css("font-size", "24px");
            $(".icone i").css("display", "none");
            $("#5").css("display", "none");
            $("#6").css("display", "none");
            $("#7").css("display", "none");
            $("#8").css("display", "none");
        }
        if (i === 2) {
            $(".icone img").css("display", "none");
            $("#text").text("Mes compétences en base de données");
            $("#text").css("font-size", "24px");
            $(".icone i").css("display", "none");
            $("#5").css("display", "flex");
            $("#6").css("display", "flex");
            $("#7").css("display", "none");
            $("#8").css("display", "none");
        }
        if (i === 3) {
            $(".icone img").css("display", "none");
            $("#text").text("Mes compétences en Framework");
            $("#text").css("font-size", "24px");
            $(".icone i").css("display", "none");
            $("#5").css("display", "none");
            $("#6").css("display", "none");
            $("#7").css("display", "flex");
            $("#8").css("display", "flex");
        }

    }
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        
            $(window).scrollTop(0);
    
    }

    
});
