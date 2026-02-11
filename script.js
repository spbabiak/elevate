$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav .menu').toggleClass('show');
});

for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}

$('.feature').on('click', function() {
     if($(this).hasClass('hidden')) {
        $(this).removeClass('hidden');
        $(this).find('p').show();
    }else {
        $(this).addClass('hidden');
        $(this).find('p').hide();
    }
});