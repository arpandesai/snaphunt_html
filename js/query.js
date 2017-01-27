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
		$(".color_change_on_click").css("background-color","lightgray");
		$(".icon_color").css("background-color","lightgray");
		$(".container").css("background-color","lightgray");
		$(".user_photo").css("opacity","0.2");
		$(this).css("background-color","white");
		$(this).find(".icon_color").css("background-color","white");
		$(this).find(".user_photo").css("opacity","10");
	});

	$(".color_change_on_click").mouseenter(function() {
	    $(this).css("border","1px solid darkgray");
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

$(function(){
  var ac_count =ed_count=la_count=in_count =ex_couny= ed_count = 2;
  $(document).on('click','#add_achivement',function(){
  	var div_name = $("#delete_div").val();
  	$(".color_change_on_click").css("background-color","lightgray");
  	$(".icon_color").css("background-color","lightgray");
  	if(div_name.indexOf('achivement_div')!= -1)
  	{
  		$('.achivement_main_div').append('<div class="input-group color_change_on_click width100" id="achivement_div'+ac_count+'" data-trigger="focus" data-toggle="popover"><div class="col-lg-1"><img src="svg/trophy.svg" class="trophy"/></div><div class="col-md-11"><textarea placeholder="Achievements Details" class="form-control background_transparent fixed_textarea" rows="2" required ></textarea></div></div>');
  										  		
  		$('#achivement_div'+ac_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
  		ac_count++;
  	}
  	else if(div_name.indexOf('education_div')!= -1)
  	{
  		$('.education_main_div').append('<div id="education_div'+ed_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><div class="float_left width60"><textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="Education Details" required ></textarea></div><div class="width32 float_right"><div class="input-group"><input type="text" id="date'+ed_count+'" name="testdate" class="form-control datepicker background_transparent" value="" placeholder="date"><label class="input-group-addon padding_left0 background_transparent " for="date'+ed_count+'"><svg class="lnr lnr-calendar-full"><use xlink:href="#lnr-calendar-full"></use></svg></label></div></div><div class="clearfix"></div>');
  		$('#education_div'+ed_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
  		ed_count++;
	  }
    else if(div_name.indexOf('languages_div')!= -1)
  	{
  		$('.languages_main_div').append('<div id="languages_div'+la_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><div class="float_left"><textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="Language Details" required ></textarea></div><div class="float_right"><textarea placeholder="Languages Level" class="form-control background_transparent fixed_textarea" rows="1" onkeydown="return limitLines(this, event)" required ></textarea></div><div class="clearfix"></div></div> ');
      $('#languages_div'+la_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
  		la_count++;
	  }
    else if(div_name.indexOf('interests_div')!= -1)
    {
      $('.interests_main_div').append('<div id="interests_div'+in_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><div class="col-lg-1"><svg class="lnr lnr-star-empty"><use xlink:href="#lnr-star-empty"></use></svg></div><div class="col-lg-11"><textarea placeholder="Interests Details" class="form-control background_transparent fixed_textarea" rows="2" required >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</textarea></div></div>');       
      $('#interests_div'+in_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
      in_count++;
    }
    deleteDivById();
  });
});

$( function() {
    $('.datepicker').datepicker();
    $('.lnr-calendar-full').datepicker();
  } );