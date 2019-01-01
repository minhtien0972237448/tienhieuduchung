$(document).ready(function () {
    $('.similar_products').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<img src='images/next_left.png'>", "<img src='images/next_right.png'>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });


    var q = 0;
    $('.quantity-plus').click(function () {
        var q = parseInt($('#quantity').val());
        $('#quantity').val(q + 1);
    });

    $('.quantity-minus').click(function () {
        var q = parseInt($('#quantity').val());
        if (q > 0) {
            $('#quantity').val(q - 1);
        }
    });


    $('[data-toggle="popover"]').popover();
    $('.add-to-cart').click(function () {

    });
});