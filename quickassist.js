(function ($) {
    $.fn.quickassist = function () {
        if (!jQuery.ui) {
            alert("Quickassist requires jQuery UI to work.");
        } else {
            var Quickassist = $(this);
            var QuickassistSize = 100;
            var QuickassistPosition = ["left", "right"][Math.floor(Math.random() * ["left", "right"].length)];
            var QuickassistDisplay = "initial" /*initial, none*/;
            var QuickassistHidden = QuickassistSize * 0.1;
            var QuickassistAnimation = ["easeOutBack"];
            var QuickassistAnimationDuration = [1000];
            Quickassist.draggable({containment: "window"});
            Quickassist.attr("data-position", QuickassistPosition);
            Quickassist.css({
                "display": QuickassistDisplay,
                "top": "0",
                "left": QuickassistPosition === "left" ? "-" + QuickassistHidden + "px" : ($(window).width() - QuickassistSize) + QuickassistHidden + "px",
                "cursor": "pointer",
                "position": "fixed",
                "height": QuickassistSize + "px",
                "width": QuickassistSize + "px",
                "border-radius": "50%",
                "transition": "opacity 0.1s, box-shadow 0.1s"
            });
            Quickassist.on("mousedown", function (e) {
                Quickassist.stop();
            });
            Quickassist.on("mouseup", function (e) {
                Quickassist.stop();
                Quickassist.css({
                    "opacity": "1",
                    "transition": "opacity 0.1s, box-shadow 0.1s"
                });
                var winHeight = $(window).height();
                var windowWidth = $(window).width();
                var QuickXAxis = $(this).offset().left + (QuickassistSize / 2);
                var QuickYAxis = $(this).offset().top + (QuickassistSize / 2);
                if ((QuickXAxis < windowWidth / 2)) {
                    // Left
                    Quickassist.attr("data-position", "left");
                    Quickassist.animate({"left": "-" + QuickassistHidden + "px"}, QuickassistAnimationDuration[Math.floor(Math.random() * QuickassistAnimationDuration.length)], QuickassistAnimation[Math.floor(Math.random() * QuickassistAnimation.length)]);
                } else {
                    // Right
                    Quickassist.attr("data-position", "right");
                    Quickassist.animate({"left": (windowWidth - QuickassistSize) + QuickassistHidden + "px"}, QuickassistAnimationDuration[Math.floor(Math.random() * QuickassistAnimationDuration.length)], QuickassistAnimation[Math.floor(Math.random() * QuickassistAnimation.length)]);
                }
            });
            $(window).resize(function () {
                Quickassist.trigger("mouseup");
            });
            $(document).on("click", function (e) {
                Quickassist.trigger("mouseup");
            });
            $.fn.quicktoggle = function (e) {
                var Quickassist = $(this);
                Quickassist.stop();
                Quickassist.toggle("drop", {
                    direction: Quickassist.attr("data-position")
                }, 100);
            };
        }
    };
}(jQuery));