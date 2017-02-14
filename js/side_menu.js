function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
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

$(document).ready(function(){

	var ac_count = 0;
	var ed_count = 0;
	var la_count = 0;
	var in_count = 0;
	var ex_count = 0;
	var new_div = '';
    
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        html : true,
        content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" rel="" aria-hidden="true"></i>'
    });

    $(document).on("click", ".popover .close" , function(){
        $(this).parents(".popover").popover('hide');
    });

	$('#addAchi').click(function() {
		if(document.getElementById("achivement_div") == null)
		{
			var $firstprice=$(".originalAchivementDiv");
			var $newpricetype=$firstprice.clone();
			$newpricetype.attr('id','achivement_div');
			//console.log($newpricetype.find(".achivement_main_div .originalArchi").length);
			$newpricetype.find(".achivement_main_div_sample").attr("class","achivement_main_div");
			$newpricetype.find(".div_heading").parent().attr("id","achivement_div");
			
			$(".add_newdiv").append($newpricetype.fadeIn());
			$newpricetype.find(".achivement_main_div .originalArchi").each(function(){
				this.id = "achivement_div"+ac_count;
				$('#achivement_div'+ac_count).popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				$('#achivement_heading').popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				new_div = '#achivement_div'+ac_count;
				$('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	    $(this).css("overflow", "auto");        /* For the mozilla browser problem */
	});
				ac_count++;	
			});
			$('html, body').animate({scrollTop: $(new_div).offset().top}, 1500);
			deleteDivById();
		}
		else
		{
			alert("Already there");		
		}
	});

	$('#addEduc').click(function() {
		if(document.getElementById("education_div") == null)
		{
			var $firstprice=$(".originalEducationDiv");
			var $newpricetype=$firstprice.clone();
			$newpricetype.attr('id','education_div');
			//console.log($newpricetype.find(".achivement_main_div .originalArchi").length);
			$newpricetype.find(".education_main_div_sample").attr("class","education_main_div");
			$newpricetype.find(".div_heading").parent().attr("id","education_div");

			$(".add_newdiv").append($newpricetype.fadeIn());
			$newpricetype.find(".education_main_div .originalArchi").each(function(){
				this.id = "education_div"+ed_count;
				$('#education_div'+ed_count).popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				$('#education_heading').popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				new_div = '#education_div'+ed_count;
				$('.fixed_textarea').scroll(function () {
	    $(this).css("overflow", "hidden");      /* for the mozilla browser problem */
	    $(this).animate({scrollTop: $(this).outerHeight()});
	    while ($(this).scrollTop() > 0) {       /* for the copy and paste case */               
	        lines=$(this).val().slice(0,-1);
	        $(this).val(lines);
	    }
	});
				ed_count++;	
			});
			$('.customdatepickerleft')
                .rangePicker({ minDate:[2,1990], maxDate:[02,2017], RTL:false })
                // subscribe to the "done" event after user had selected a date
                .on('datePicker.done', function(e, result){
                    if( result instanceof Array )
                        console.log(new Date(result[0][1], result[0][0] - 1), new Date(result[1][1], result[1][0] - 1));
                    else
                        console.log(result);
                });
			$('html, body').animate({scrollTop: $(new_div).offset().top}, 1500);
      		$('#education_div'+ed_count).css("background-color","white");
			deleteDivById();
		}
		else
		{
			alert("Already there");		
		}
	});
	
	$("#addLang").click(function(){
		if(document.getElementById("languages_div") == null)
		{
			var $firstprice=$(".originallanguagesDiv");
			var $newpricetype=$firstprice.clone();
			$newpricetype.attr('id','languages_div');
			//console.log($newpricetype.find(".achivement_main_div .originalArchi").length);
			$newpricetype.find(".languages_main_div_sample").attr("class","languages_main_div");
			$newpricetype.find(".div_heading").parent().attr("id","languages_div");

			$(".add_newdiv").append($newpricetype.fadeIn());
			$newpricetype.find(".languages_main_div .originalArchi").each(function(){
				this.id = "languages_div"+la_count;
				$('#languages_div'+la_count).popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				$('#languages_heading').popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
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
			});
			$('html, body').animate({scrollTop: $(new_div).offset().top}, 1500);
			deleteDivById();
		}
		else
		{
			alert("Already there");		
		}
	});

	$("#addInte").click(function(){
		if(document.getElementById("interests_div") == null)
		{
			var $firstprice=$(".originalInterestsDiv");
			var $newpricetype=$firstprice.clone();
			$newpricetype.attr('id','interests_div');
			//console.log($newpricetype.find(".achivement_main_div .originalArchi").length);
			$newpricetype.find(".interests_main_div_sample").attr("class","interests_main_div");
			$newpricetype.find(".div_heading").parent().attr("id","interests_div");
			
			$(".add_newdiv").append($newpricetype.fadeIn());
			$newpricetype.find(".interests_main_div .originalArchi").each(function(){
				this.id = "interests_div"+in_count;
				$('#interests_div'+in_count).popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				$('#interests_heading').popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
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
			});
			$('html, body').animate({scrollTop: $(new_div).offset().top}, 1500);
			deleteDivById();
		}
		else
		{
			alert("Already there");		
		}
	});

	$("#addExpe").click(function(){
		if(document.getElementById("experience_div") == null)
		{
			var $firstprice=$(".originalExperienceDiv");
			var $newpricetype=$firstprice.clone();
			$newpricetype.attr('id','experience_div');
			//console.log($newpricetype.find(".achivement_main_div .originalArchi").length);
			$newpricetype.find(".experience_main_div_sample").attr("class","experience_main_div");
			$newpricetype.find(".div_heading").parent().attr("id","experience_div");
			
			$(".add_newdivExpe").append($newpricetype.fadeIn());
			$newpricetype.find(".experience_main_div .originalArchi").each(function(){
				this.id = "experience_div"+ex_count;
				$('#experience_div'+ex_count).popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
				$('#experience_heading').popover
				({
				    placement : 'top',
				    html : true,
				    content : '<i class="fa fa-plus" id="add_achivement" aria-hidden="true"></i><i class="fa fa-trash del_achivement" aria-hidden="true"></i>'
				});
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
			});
			$('.customdatepickerright')
		        .rangePicker({ minDate:[2,1990], maxDate:[02,2017], RTL:true })
		        // subscribe to the "done" event after user had selected a date
		        .on('datePicker.done', function(e, result){
		            if( result instanceof Array )
		                console.log(new Date(result[0][1], result[0][0] - 1), new Date(result[1][1], result[1][0] - 1));
		            else
		                console.log(result);
		        });
             // update settings
			//$('.customdatepicker').rangePicker({ setDate:[[2,2009],[3,2009]], closeOnSelect:false });    
			$('html, body').animate({scrollTop: $(new_div).offset().top}, 1500);
			deleteDivById();
           
		}
		else
		{
			alert("Already there");		
		}
	});

	$(document).on('click','.del_achivement',function(){
    	$("#"+$("#delete_div").val()).remove();
	});
});
