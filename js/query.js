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
	
	$(document).on("click",".color_change_on_click",function(){
		$(".color_change_on_click").css("background-color","#B2ECDD");
		$(".icon_color").css("background-color","#B2ECDD");
		$(".container").css("background-color","#B2ECDD");
		$(".user_photo").css("opacity","0.2");
		$(this).css("background-color","white");
		$(this).find("i").css("background-color","white");
		$(this).find(".user_photo").css("opacity","10");
	});

	$(".color_change_on_click").mouseenter(function() {
	    $(this).css("border","1px solid #60d5ba");
	}).mouseleave(function() {
	     $(this).css("border", "1px solid transparent");
	});


	$(".container").click(function(){
		$(".color_change_on_click").css("background-color","white");
		$(".icon_color").css("background-color","white");
		$(".container").css("background-color","white");
	});
	$("body").click(function(){
		$(".color_change_on_click").css("background-color","white");
		$(".icon_color").css("background-color","white");
		$(".container").css("background-color","white");
	});
	$(document).on('click','.del_achivement',function(){
		$("#"+$("#delete_div").val()).remove();
	});

	deleteDivById();

	$('[data-toggle="popover"]').popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" rel="" aria-hidden="true"></i>'
    });

    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });
});

function deleteDivById(){
	$('[data-toggle="popover"]').on('show.bs.popover', function () {
		if($(this).hasClass('div_heading')==true){
			$("#delete_div").val($(this).parent().attr('id'));
		}
		else{
			$("#delete_div").val(this.id);
		}	

	});
}
/*
$(function(){
  var count = 2;
  $(document).on('click','#add_achivement',function(){
  	$(".color_change_on_click").css("background-color","#B2ECDD");
  	$(".icon_color").css("background-color","#B2ECDD");
    $('.achivement_main_div').append('<div id="achivement_div'+count+'" class="input-group color_change_on_click" data-trigger="focus" data-toggle="popover"><i class="input-group-addon fa fa-trophy fa-2x icon_color" id="basic-addon1" aria-hidden="true"></i><textarea placeholder="Achivements Details" class="form-control background_transparent fixed_textarea" rows="2" required ></textarea></div>');
    $('#achivement_div'+count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
    });
    deleteDivById();
    count++;
  });
});
*/
$(function(){
  var ac_count =ed_count=la_count=in_count =ex_couny= ed_count = 2;
  $(document).on('click','#add_achivement',function(){
  	var div_name = $("#delete_div").val();
  	$(".color_change_on_click").css("background-color","#B2ECDD");
  	$(".icon_color").css("background-color","#B2ECDD");
  	if(div_name.indexOf('achivement_div')!= -1)
  	{
  		$('.achivement_main_div').append('<div id="achivement_div'+ac_count+'" class="input-group color_change_on_click" data-trigger="focus" data-toggle="popover"><i class="input-group-addon fa fa-trophy fa-2x icon_color" id="basic-addon1" aria-hidden="true"></i><textarea placeholder="Achivements Details" class="form-control background_transparent fixed_textarea" rows="2" required ></textarea></div>');
  		$('#achivement_div'+ac_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
    });
  		ac_count++;
  	}
  	else if(div_name.indexOf('education_div')!= -1)
  	{
  		$('.education_main_div').append('<div id="education_div'+ed_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="Education Details" required ></textarea></div>');
  		$('#education_div'+ed_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
    });
  		ed_count++;
	}
    else if(div_name.indexOf('languages_div')!= -1)
  	{
  		$('.languages_main_div').append('<div id="languages_div'+la_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="Education Details" required ></textarea></div>');
  		$('#languages_div'+la_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
    });
  		la_count++;
	}
    
    deleteDivById();
  });
});
