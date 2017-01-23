$(document).ready(function() {
	$('.fixed_textarea').scroll(function () {
    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
    $(this).animate({scrollTop: $(this).outerHeight()});
    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
        lines=$(this).val().slice(0,-1);
        $(this).val(lines);
    }
    $(this).css("overflow", "auto");        /* For the mozilla browser problem */
});
	
	$('[data-toggle="popover"]').popover();
});