
$(function() {

    // fixed header
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    $(window).on("scroll load resize", function()
    {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH ) 
        {
            header.addClass("fixed");
        }
        else
        {
            header.removeClass("fixed");
        }
    });

    // smooth scroll

    $("[data-scroll]").on("click", function(event)
    {
        event.preventDefault();

        let elementid = $(this).data('scroll');
        let elementOffset = $(elementid).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 1000)
        console.log(elementOffset);
    });

    // navToggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

});