$(document).ready(function() {

	$('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	});
	
	$(".user_icon").click(function(){
		var user_class=$('#u_photo').attr('class'); 
		if(user_class=="user_photo img-rounded")
		{
			$(".user_photo").addClass("img-circle");
			$(".user_photo").removeClass("img-rounded");
			$(".user_photo").css("transition","0.5s all");
		}
		else
		{
			$(".user_photo").addClass("img-rounded");
			$(".user_photo").removeClass("img-circle");
			$(".user_photo").css("transition","0.5s all");
		}
	});
	
	$( ".color_change_on_click" ).focusout(function() {
    	$(this).css("background-color","lightgray");
    	$(".icon_color").css("background-color","lightgray");
    });
	$( ".color_change_on_click" ).focusin(function() {
    	$(this).css("background-color","white");
    	$(this).find(".icon_color").css("background-color","white");
    });

	$(document).on("click",".color_change_on_click",function(){
		$(".color_change_on_click").css("background-color","lightgray");
		$(".icon_color").css("background-color","lightgray");
		$(".container").css("background-color","lightgray");
    	$(".input-group-addon").css("background-color","lightgray!important");
		$(".user_photo").css("opacity","0.2");
    	$(".delete_icon").css("display","none");
    	$(this).find(".delete_icon").css("display","block");
		$(this).css("background-color","white");
		$(this).find(".icon_color").css("background-color","white");
    	$(this).find(".user_photo").css("opacity","10");
	});

	
	$(".main_div_5type").click(function(){
		var classname=$(this).children().attr('class');
		$(".main_div_5type").children().removeClass("active_top");
		$(this).children().addClass("active_top");
		if(classname=="template")
		{
			$(".template_div").css("display","block");
			$(".section_div").css("display","none");
			$(".font_div").css("display","none");
			$(".color_div").css("display","none");
		}else if(classname=="add_section") {
			$(".template_div").css("display","none");
			$(".section_div").css("display","block");
			$(".font_div").css("display","none");
			$(".color_div").css("display","none");
		}else if(classname=="fonts") {
			$(".template_div").css("display","none");
			$(".section_div").css("display","none");
			$(".font_div").css("display","block");
			$(".color_div").css("display","none");
		}else if(classname=="color_span") {
			$(".template_div").css("display","none");
			$(".section_div").css("display","none");
			$(".font_div").css("display","none");
			$(".color_div").css("display","block");
			
		}
	});

	$(".color_change_on_click").mouseenter(function() {
	    $(this).css("border","1px solid darkgray");
		}).mouseleave(function() {
			 $(this).css("border", "1px solid transparent");
			 $(this).find(".user_photo").css("opacity","10");
	});


	$(".container").click(function(){
		$(".delete_icon").css("display","none");
		$(".color_change_on_click").css("background-color","white");
		$(".icon_color").css("background-color","white");
		$(".container").css("background-color","white");
		$(this).find(".user_photo").css("opacity","10");
		//document.getElementById("mySidenav").style.width = "0";
	});
	$("body").click(function(){
		$(".delete_icon").css("display","none");
		$(".color_change_on_click").css("background-color","white");
		$(".icon_color").css("background-color","white");
		$(".container").css("background-color","white");
		$(this).find(".user_photo").css("opacity","10");
	});
	
	$(document).on('click','.del_achivement',function(){
    	$("#"+$("#delete_div").val()).remove();
	});
			
	var count=1;
	$(document).on("keyup",'.responsibility',function(e) { 
		if (e.keyCode == 13) {
		 var val = $(this).first().clone();
		 $("#test ul").append('<li id="res'+count+'" class="background_transparent responsibility menu-item-divided"><input placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" class="key_respo_input resume_detail ex_textarea background_transparent fixed_textarea width100" maxlength="50" required></li>');
		 count++;
		 e.preventDefault();
		}
	}); 
		
	deleteDivById();
		
	$('[data-toggle="popover"]').popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" id="del_achivement" rel="" aria-hidden="true"></i>'
	});

    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });


    $(document).on('click','.color',function(){
      	var color_code=(($(this).attr('id')));
      	console.log(color_code);

	    if(color_code == "c_9933cc")
		{
			$(".resume_heading").css("color","#9933cc");
			$(".icon_color").css("color","#9933cc");
			$(".resume_heading").addClass("c_9933cc");
			$(".resume_heading").removeClass("c_333366");
			$(".resume_heading").removeClass("c_ff3366");
			$(".resume_heading").removeClass("c_0099ff");
			$(".resume_heading").removeClass("c_ff6633");
			$(".resume_heading").removeClass("c_003e5a");	
		}
		else if(color_code == "c_333366")
		{
			$(".resume_heading").css("color","#333366");
			$(".icon_color").css("color","#333366"); 
			$(".resume_heading").removeClass("c_9933cc");
			$(".resume_heading").addClass("c_333366");
			$(".resume_heading").removeClass("c_ff3366");
			$(".resume_heading").removeClass("c_0099ff");
			$(".resume_heading").removeClass("c_ff6633");
			$(".resume_heading").removeClass("c_003e5a");	
		} 
		else if(color_code == "c_ff3366")
		{
			$(".resume_heading").css("color","#ff3366");
			$(".icon_color").css("color","#ff3366");
			$(".resume_heading").removeClass("c_9933cc");
			$(".resume_heading").removeClass("c_333366");
			$(".resume_heading").addClass("c_ff3366");
			$(".resume_heading").removeClass("c_0099ff");
			$(".resume_heading").removeClass("c_ff6633");
			$(".resume_heading").removeClass("c_003e5a");	
		} 
		else if(color_code == "c_0099ff")
		{
			$(".resume_heading").css("color","#0099ff");
			$(".icon_color").css("color","#0099ff");
			$(".resume_heading").removeClass("c_9933cc");
			$(".resume_heading").removeClass("c_333366");
			$(".resume_heading").removeClass("c_ff3366");
			$(".resume_heading").addClass("c_0099ff");
			$(".resume_heading").removeClass("c_ff6633");
			$(".resume_heading").removeClass("c_003e5a");	
		} 
		else if(color_code == "c_ff6633")
		{
			$(".resume_heading").css("color","#ff6633");
			$(".icon_color").css("color","#ff6633");
			$(".resume_heading").removeClass("c_9933cc");
			$(".resume_heading").removeClass("c_333366");
			$(".resume_heading").removeClass("c_ff3366");
			$(".resume_heading").removeClass("c_0099ff");
			$(".resume_heading").addClass("c_ff6633");
			$(".resume_heading").removeClass("c_003e5a");	
		} 
		else if(color_code == "c_003e5a")
		{
			$(".resume_heading").css("color","#003e5a");
			$(".icon_color").css("color","#003e5a");
			$(".resume_heading").removeClass("c_9933cc");
			$(".resume_heading").removeClass("c_333366");
			$(".resume_heading").removeClass("c_ff3366");
			$(".resume_heading").removeClass("c_0099ff");
			$(".resume_heading").removeClass("c_ff6633");	
			$(".resume_heading").addClass("c_003e5a");
		}	
			
    });

});
  

$(function () {
    $(".color").on('click', function() {
        $('#change_heading_color').modal('hide');
    });
});

/*$(function () {
    $(".sidemenu").on('click', function() {
        document.getElementById("mySidenav").style.width = "0";
    });
});*/



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
  var ac_count = 2;
  var ed_count = 2;
  var la_count = 2;
  var in_count = 2;
  var ex_count = 2;

  $(document).on('click','#add_achivement',function(){
  	var div_name = $("#delete_div").val();
    var new_div = '';
    $(".container").css("background-color","lightgray");
  	$(".color_change_on_click").css("background-color","lightgray");
    $(".icon_color").css("background-color","lightgray");
  	if(div_name.indexOf('achivement_div')!= -1)
  	{
  		$('.achivement_main_div').append('<div class="input-group color_change_on_click width100" id="achivement_div'+ac_count+'" data-trigger="focus" data-toggle="popover"><span class="input-group-addon"><i class="fa fa-trophy" aria-hidden="true"></i></span><textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon"></textarea></div><hr class="div_single_border"/>');
  			                       							  		
  		$('#achivement_div'+ac_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
	  $('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	});
      $('#achivement_div'+ac_count).css("background-color","white");
      new_div = '#achivement_div'+ac_count;
  		ac_count++;
  	}
  	else if(div_name.indexOf('education_div')!= -1)
  	{
  		console.log(ed_count);
      $('.education_main_div').append('<div id="education_div'+ed_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><div class="float_left width52"><textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="Education details" required ></textarea></div><div class="width48 float_right"><div class="input-group selectMonths"><input type="text" class="customdatepicker customdatepickerleft form-control datepicker background_transparent"  placeholder="01/2000 - 01/2000" value="" readonly ><label class="input-group-addon padding_left0 background_transparent"><i class="fa fa-calendar calendar_icon" aria-hidden="true"></i></label></div></div><div class="clearfix"></div></div>');
  		$('#education_div'+ed_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
      $('#education_div'+ed_count).css("background-color","white");
      $('.customdatepickerleft')
        .rangePicker({ minDate:[2,1990], maxDate:[02,2017], RTL:false })
        // subscribe to the "done" event after user had selected a date
        .on('datePicker.done', function(e, result){
            if( result instanceof Array )
                console.log(new Date(result[0][1], result[0][0] - 1), new Date(result[1][1], result[1][0] - 1));
            else
                console.log(result);
      });
	  $('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	  });
      new_div = '#education_div'+ed_count;
  		ed_count++;
	  }
    else if(div_name.indexOf('languages_div')!= -1)
  	{
  		$('.languages_main_div').append('<div id="languages_div'+la_count+'" class="color_change_on_click"  data-trigger="focus" data-toggle="popover"><div class="float_left width50"><textarea class="form-control background_transparent fixed_textarea" rows="1" placeholder="Language" required ></textarea></div><div class="float_right width50"><textarea placeholder="Proficient" class="form-control background_transparent fixed_textarea" rows="1" required ></textarea></div><div class="clearfix"></div></div><hr class="div_single_border"/> ');
      $('#languages_div'+la_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
      $('#languages_div'+la_count).css("background-color","white");
      new_div = '#languages_div'+la_count;
	  $('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	  });
  		la_count++;
	  }
    else if(div_name.indexOf('interests_div')!= -1)
    {
      $('.interests_main_div').append('<div id="interests_div'+in_count+'" class="input-group color_change_on_click width100"  data-trigger="focus" data-toggle="popover"><div class="input-group"><span class="input-group-addon"><i class="fa fa-star" aria-hidden="true"></i></span><input placeholder="Interest1" class="margin_left0 resume_sub_detail form-control background_transparent fixed_textarea textarea_with_icon"></textarea></div><span class=""><textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="padding_top0 resume_detail inte_detail_sub form-control background_transparent fixed_textarea textarea_with_icon"></textarea></span></div><hr class="div_single_border"/>');       
      $('#interests_div'+in_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
      $('#interests_div'+in_count).css("background-color","white");
      new_div = '#interests_div'+in_count;
	  $('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	});
      in_count++;
    }
    else if(div_name.indexOf('experience_div')!= -1)
    {
      $('.experience_main_div').append('<div id="experience_div'+ex_count.toString()+'" data-trigger="focus" data-toggle="popover"><div class="color_change_on_click"><div class="float_left width70"><textarea placeholder="Software" class="sub_heading ex_textarea form-control background_transparent fixed_textarea position_name" rows="1" required></textarea></div><div class="float_right width25"><div class="input-group selectMonths"><input type="text" class="ex_textarea customdatepicker customdatepickerright form-control datepicker background_transparent"  placeholder="01/2017 - 02/2018" value="" readonly ><label class="ex_textarea input-group-addon padding_left0 background_transparent"><i class="fa fa-calendar calendar_icon" aria-hidden="true"></i></label></div></div><div class="clearfix" style="height: 30px;"></div><div><textarea placeholder="ABC Limitd" class="sub_heading ex_textarea form-control background_transparent fixed_textarea company_name" rows="1" required ></textarea></div><div class="input-group"><span class="ex_textarea input-group-addon exper_add"><i class="fa fa-map-marker padding_left0" aria-hidden="true"></i></span><textarea placeholder="safilo far east, Hong Kong" class="ex_textarea form-control background_transparent fixed_textarea padding_left0" rows="1" required></textarea></div><div><textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." class="ex_textarea form-control background_transparent fixed_textarea" rows="4" required ></textarea></div></div><hr class="div_single_border"/></div>');
      $('#experience_div'+ex_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
      $('#experience_div'+ex_count).css("background-color","white");
      $('.customdatepickerright')
        .rangePicker({ minDate:[2,1990], maxDate:[02,2017], RTL:true })
        // subscribe to the "done" event after user had selected a date
        .on('datePicker.done', function(e, result){
            if( result instanceof Array )
                console.log(new Date(result[0][1], result[0][0] - 1), new Date(result[1][1], result[1][0] - 1));
            else
                console.log(result);
      });
      //$('.customdatepicker').rangePicker({ setDate:[[2,2009],[3,2009]], closeOnSelect:false });    
      new_div = '#experience_div'+ex_count;
	  $('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	});
      ex_count++;
    }
    $('html, body').animate({scrollTop: $(new_div).offset().top}, 1500);
    deleteDivById();
  });
  $(document).on('click','#add_new_pi',function(){

  	var div_name = $("#delete_div").val();
	alert(div_name);
    var new_div = '';
    $(".container").css("background-color","lightgray");
  	$(".color_change_on_click").css("background-color","lightgray");
    $(".icon_color").css("background-color","lightgray");
  	if(div_name.indexOf('achivement_div')!= -1)
  	{
  		$('.perinfo_main_div').append('<div class="input-group color_change_on_click width100" id="achivement_div'+ac_count+'" data-trigger="focus" data-toggle="popover"><span class="input-group-addon"><i class="fa fa-trophy" aria-hidden="true"></i></span><textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon"></textarea></div><hr class="div_single_border"/>');
  			                       							  		
  		$('#achivement_div'+ac_count).popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
      });
	  $('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	});
      $('#achivement_div'+ac_count).css("background-color","white");
      new_div = '#achivement_div'+ac_count;
  		ac_count++;
  	}
	});
});


  