// якоря

document.addEventListener("DOMContentLoaded", function () {
    var smoothScrollLinks = document.querySelectorAll(".smoothScroll");
    var headerHeight = 120;

    smoothScrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            var targetId = link.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset =
                    targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offset - headerHeight,
                    behavior: "smooth",
                });
            }
        });
    });
});
