function doFirst() {
    // $(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });
};

window.addEventListener('load', doFirst);