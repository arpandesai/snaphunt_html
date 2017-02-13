<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/bootstrap.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/query.js"></script>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/side_menu.css">
	<link rel="stylesheet" href="css/jquery-ui.css">
	<link rel="stylesheet" href="font-awesome/css/font-awesome.css">
	<script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
	<script src="js/jquery-ui.js"></script>
	<script src="js/side_menu.js"></script>
</head>
	
	<div id="mySidenav" class="sidenav">
  		<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  		<span id="addAchi">Add Achivement</span>
  		<span>Add Education</span>
  		<span>Add Language</span>
  		<span>Add Interests</span>
  		<span>Add Experience</span>
	</div>

<!-- Use any element to open the sidenav -->
<span onclick="openNav()" class="side_menu"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></span>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->


	<div class="container">
		<div class="col-lg-12 color_change_on_click">
			<div class="col-lg-2" data-toggle="modal" data-target="#change_photo">
				<img class="img-circle user_photo" src="user.png" style="position:relative;" />
				<!--<i class="fa fa-retweet fa-2x user_icon icon_color"></i>-->
			</div>

			<div class="col-lg-6">
				
				<h2><textarea placeholder="vincent cleme" class="form-control background_transparent width100px resume_heading fixed_textarea user_name" rows="1" required></textarea></h2>
				
				<!--<div class="input-group width100 heading_top">
					<div class="col-lg-1 icon_div">
				  		<svg class="lnr lnr-map-marker icon_color heading_3_icons"><use xlink:href="#lnr-map-marker"></use></svg>
				  	</div>
				  	<div class="col-lg-11 padding_left0">
				  		<textarea placeholder="4, leng kee road,#06-07 sis building singapore-159088" class="form-control background_transparent fixed_textarea padding_left0" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
				  	</div>
				</div>-->

				<!--<div class="input-group width100 heading_top">
				  	<div class="col-lg-1 icon_div">
				  		<svg class="lnr lnr-phone-handset icon_color heading_3_icons"><use xlink:href="#lnr-phone-handset"></use></svg>
				  	</div>
				  	<div class="col-lg-11 padding_left0">
				  		<textarea placeholder="+85255032830" class="form-control background_transparent fixed_textarea padding_left0" rows="1" aria-describedby="basic-addon1" onkeydown="return limitLines(this, event)" required ></textarea>
				  	</div>
				</div> -->
				
				<div class="input-group">
					<span class="input-group-addon padding_top0"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
    				<textarea rows="1" placeholder="4, leng kee road,#06-07 sis building singapore-159088" class="form-control background_transparent fixed_textarea padding_left0 padding_top0" onkeydown="return limitLines(this, event)"></textarea>     
				</div>

				<div class="input-group">
					<span class="input-group-addon padding_top0"><i class="fa fa-phone" aria-hidden="true"></i></span>
    				<textarea rows="1" placeholder="+85255032830" class="form-control background_transparent fixed_textarea padding_left0 padding_top0" onkeydown="return limitLines(this, event)"></textarea>     
				</div>

				<div class="input-group">
				  	<span class="input-group-addon padding_top0"><i class="fa fa-at" aria-hidden="true"></i></span>
					<textarea placeholder="vincentdeme@gmail.com" class="form-control background_transparent fixed_textarea padding_left0 padding_top0" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
				</div>
			</div>

			<div class="col-lg-3">

			</div>
		</div>		
		

		<div class="clear"></div>
		<hr/>
		<div class="clear"></div>

		<div class="col-lg-12 color_change_on_click">
			<div class="padding_left1">
			<span style="width:1%" class="float_left">	
				<svg class="lnr lnr-user icon_color"><use xlink:href="#lnr-user"></use></svg>
			</span>
			<span style="width:98%" class="float_left padding_left1">
				<span class="float_left">
					<textarea placeholder="Summary" class="form-control background_transparent fixed_textarea resume_heading" rows="1" aria-describedby="basic-addon1" onkeydown="return limitLines(this, event)" required ></textarea>
				</span>
				<span class="float_right delete_icon">
					<i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>
				</span>
			</span>
			</div>
			<div class="col-md-12">
				<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." class="form-control background_transparent resume_detail" rows="3" aria-describedby="basic-addon1" required></textarea>
			</div>
		</div>
		
		<div class="clear"></div>
		<hr/>
		<div class="clear"></div>


		<div class="col-lg-12">
			<div class="col-lg-4 border_right add_newdiv">
				<div class="originalAchivementDiv">
					<div class="achivement_main_div">
						<div class="input-group color_change_on_click" data-trigger="focus" data-toggle="popover">
							<span class="input-group-addon"><i class="fa fa-flag-o icon_color fa-2x" aria-hidden="true"></i></span>
							<textarea rows="1" placeholder="Achivement" class="form-control background_transparent fixed_textarea resume_heading padding_left0" onkeydown="return limitLines(this, event)"></textarea>     
						</div>

						<div class="input-group color_change_on_click width100" data-trigger="focus" data-toggle="popover">
							<span class="input-group-addon"><i class="fa fa-trophy icon_color" aria-hidden="true"></i></span>
							<textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon" class="form-control background_transparent fixed_textarea " onkeydown="return limitLines(this, event)"></textarea>     
						</div>
					</div>
				</div>
				<div class="achivement_main_div" id="achivement_div">
				
				<!-- <div class="input-group color_change_on_click div_heading" id="achivement_heading" data-trigger="focus" data-toggle="popover">
				  	<div class="col-lg-1">
				  	<i class="fa fa-flag-o fa-2x icon_color" aria-hidden="true"></i>
				  	</div>
				  	<div class="col-lg-11">
				  	<span class="float_left">
				  		<textarea placeholder="Achievements" class="form-control background_transparent fixed_textarea resume_heading" rows="1" onkeydown="return limitLines(this, event)"required ></textarea>
				  	</span>

				  	</div>
				</div> -->

				<!--<div class="input-group color_change_on_click width100" id="achivement_div0" data-trigger="focus" data-toggle="popover">
					  	<div class="col-lg-1">
					  		<i class="fa fa-trophy icon_color" aria-hidden="true"></i>
					  	</div>
					  	<div class="col-md-11">
					  		<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea" rows="2" required ></textarea>
					  	</div>
					</div>
					
					
					<hr class="div_single_border"/>
					<div class="input-group color_change_on_click width100" id="achivement_div1" data-trigger="focus" data-toggle="popover">
					  	<div class="col-lg-1">
					  		<i class="fa fa-trophy icon_color trophy" aria-hidden="true"></i>
					  	</div>
					  	<div class="col-md-11">
					  		<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea" rows="2" required ></textarea>
					  	</div>
					</div>
					<hr class="div_single_border"/> -->


				<div class="input-group color_change_on_click div_heading" id="achivement_heading" data-trigger="focus" data-toggle="popover">
					<span class="input-group-addon"><i class="fa fa-flag-o icon_color fa-2x" aria-hidden="true"></i></span>
    				<textarea rows="1" placeholder="Achivement" class="form-control background_transparent fixed_textarea resume_heading padding_left0" onkeydown="return limitLines(this, event)"></textarea>     
				</div>



					<div class="input-group color_change_on_click width100" id="achivement_div0" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-trophy icon_color" aria-hidden="true"></i></span>
    					<textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon" class="form-control background_transparent fixed_textarea " onkeydown="return limitLines(this, event)"></textarea>     
					</div>

					<hr class="div_single_border"/>

					<div class="input-group color_change_on_click width100" id="achivement_div1" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-trophy icon_color" aria-hidden="true"></i></span>
    					<textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon" class="form-control background_transparent fixed_textarea " onkeydown="return limitLines(this, event)"></textarea>     
					</div>

					<hr class="div_single_border"/>
				
				</div>
				

				<hr/>

				<div class="education_main_div" id="education_div">
					<!-- <div class="input-group color_change_on_click div_heading width100" id="education_heading" data-trigger="focus" data-toggle="popover">
						<div class="col-lg-1">
					  		<i class="fa fa-graduation-cap icon_color fa-2x" aria-hidden="true"></i>
					  	</div>
					  	<div class="col-lg-11">
					  	<textarea placeholder="Education" class="form-control background_transparent fixed_textarea resume_heading" rows="1" onkeydown="return limitLines(this, event)"required ></textarea>
					  	</div>
					</div> -->
					

					<div class="input-group color_change_on_click div_heading" id="achivement_heading" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-graduation-cap icon_color fa-2x" aria-hidden="true"></i></span>
    					<textarea rows="1" placeholder="Education" class="form-control background_transparent fixed_textarea resume_heading padding_left0" onkeydown="return limitLines(this, event)"></textarea>     
					</div>					

					
					
					<div class="color_change_on_click" id="education_div0"  data-trigger="focus" data-toggle="popover">
						<div class="float_left width60">
							<textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="master in computer applications" required ></textarea>
						</div>
						<div class="width34 float_right">
							<div class="input-group">
							<input type="text" id="date0" name="testdate" class="form-control datepicker background_transparent" value="01/01/2004">
						    <label class="input-group-addon padding_left0 background_transparent " for="date0">
						       <svg class="lnr lnr-calendar-full calendar_icon"><use xlink:href="#lnr-calendar-full"></use></svg>
						    </label>     
						    </div>
						</div>
						<div class="clearfix"></div>
					</div>
					<hr class="div_single_border"/>
					<div class="color_change_on_click" id="education_div1"  data-trigger="focus" data-toggle="popover">
						<div class="width60 float_left">
							<textarea class="form-control background_transparent fixed_textarea" rows="2" placeholder="bachlor in computer applications" required ></textarea>
						</div>
						<div class="width34 float_right">
							<div class="input-group">
							<input type="text" id="date1" name="testdate" class="form-control datepicker background_transparent" value="01/01/2000">
						    <label class="input-group-addon padding_left0 background_transparent " for="date1">
						       <svg class="lnr lnr-calendar-full calendar_icon"><use xlink:href="#lnr-calendar-full"></use></svg>
						    </label>     
						    </div>
						</div>
						<div class="clearfix"></div>
					</div>
					<hr class="div_single_border"/>
					
				</div>

				<hr/>

				<div class="languages_main_div" id="languages_div">
					
					<!--<div class="input-group color_change_on_click div_heading width100" id="achivement_heading" data-trigger="focus" data-toggle="popover">
						<div class="col-lg-1">
					  		<i class="fa fa-language fa-2x icon_color" aria-hidden="true"></i>
					  	</div>
					  	<div class="col-lg-11">
					  		<textarea placeholder="Languages" class="form-control background_transparent fixed_textarea resume_heading" rows="1" onkeydown="return limitLines(this, event)"required ></textarea>
					  	</div>
					</div> -->

					<div class="input-group color_change_on_click div_heading" id="achivement_heading" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-language icon_color fa-2x" aria-hidden="true"></i></span>
    					<textarea rows="1" placeholder="Languages" class="form-control background_transparent fixed_textarea resume_heading padding_left0" onkeydown="return limitLines(this, event)"></textarea>     
					</div>	

					<div id="languages_div0" class="color_change_on_click" data-trigger="focus" data-toggle="popover">
						<div class="float_left width50">
							<textarea placeholder="English" class="form-control background_transparent fixed_textarea" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>	
						</div>
						<div class="float_right width50">
							<textarea placeholder="Proficient" class="form-control background_transparent fixed_textarea" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
						</div>
						<div class="clearfix"></div>
					</div>
					<hr class="div_single_border"/>
					<div id="languages_div1" class="color_change_on_click" data-trigger="focus" data-toggle="popover">
						<div class="float_left width50">
							<textarea placeholder="Hindi" class="form-control background_transparent fixed_textarea" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>	
						</div>
						<div class="float_right width50">
							<textarea placeholder="Fluent" class="form-control background_transparent fixed_textarea" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
						</div>
						<div class="clearfix"></div>
					</div>
					<hr class="div_single_border"/>
				</div>
					
				<div class="clear"></div>
				<hr/>

				<div class="interests_main_div" id="interests_div">
					<!--
					<div class="input-group color_change_on_click div_heading width100" id="achivement_heading" data-trigger="focus" data-toggle="popover">
						<div class="col-lg-1">
					  	<svg class="lnr lnr-star icon_color"><use xlink:href="#lnr-star"></use></svg>
					  	</div>
					  	<div class="col-lg-11">
					  	<textarea placeholder="Interests" class="form-control background_transparent fixed_textarea resume_heading" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
					  	</div>
					</div>

					<div id="interests_div0" class="input-group color_change_on_click width100" data-trigger="focus" data-toggle="popover">
					  	<div class="col-lg-1">
					  		<svg class="lnr lnr-star-empty icon_color"><use xlink:href="#lnr-star-empty"></use></svg>
					  	</div>
					  	<div class="col-lg-11">
					  		<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" class="form-control background_transparent fixed_textarea" rows="2" required ></textarea>
					  	</div>
					</div>
					<hr class="div_single_border"/>
					<div id="interests_div1" class="input-group color_change_on_click width100" data-trigger="focus" data-toggle="popover">
					  	<div class="col-lg-1">
					  		<svg class="lnr lnr-star-empty icon_color"><use xlink:href="#lnr-star-empty"></use></svg>
					  	</div>
					  	<div class="col-lg-11">
					  		<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" class="form-control background_transparent fixed_textarea" rows="2" required ></textarea>
					  	</div>
					</div>
					<hr class="div_single_border"/>-->

					<div class="input-group color_change_on_click div_heading" id="achivement_heading" data-trigger="focus" data-toggle="popover">
					<span class="input-group-addon"><i class="fa fa-star-o icon_color fa-2x" aria-hidden="true"></i></span>
    				<textarea rows="1" placeholder="Interests" class="form-control background_transparent fixed_textarea resume_heading padding_left0" onkeydown="return limitLines(this, event)"></textarea>     
				</div>



					<div class="input-group color_change_on_click width100" id="interests_div0" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-star icon_color" aria-hidden="true"></i></span>
    					<textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon" class="form-control background_transparent fixed_textarea " onkeydown="return limitLines(this, event)"></textarea>     
					</div>

					<hr class="div_single_border"/>

					<div class="input-group color_change_on_click width100" id="interests_div1" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-star icon_color" aria-hidden="true"></i></span>
    					<textarea rows="2" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." class="form-control background_transparent fixed_textarea textarea_with_icon" class="form-control background_transparent fixed_textarea " onkeydown="return limitLines(this, event)"></textarea>     
					</div>

					<hr class="div_single_border"/>


				</div>	
			</div>

			
			<div class="col-lg-8">



				<div class="experience_main_div" id="experience_div">
					<!-- <div class="input-group color_change_on_click div_heading width100" id="achivement_heading" data-trigger="focus" data-toggle="popover">
						<div class="col-lg-1 exp_div_col1">
					  	<i class="fa fa-briefcase fa-2x icon_color" aria-hidden="true"></i>
					  	</div>
					  	<div class="col-lg-11 padding_left0">
					  	<textarea placeholder="Experience" class="form-control background_transparent fixed_textarea resume_heading width100 padding_left0" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
					  	</div>
					</div> -->

					<div class="input-group color_change_on_click div_heading" id="achivement_heading" data-trigger="focus" data-toggle="popover">
						<span class="input-group-addon"><i class="fa fa-briefcase icon_color fa-2x" aria-hidden="true"></i></span>
    					<textarea rows="1" placeholder="Experience" class="form-control background_transparent fixed_textarea resume_heading padding_left0 " onkeydown="return limitLines(this, event)"></textarea>     
					</div>


				<div id="experience_div0" data-trigger="focus" data-toggle="popover">
					<div class="color_change_on_click">
						<div class="float_left width80">
							<textarea placeholder="Software" class="form-control background_transparent fixed_textarea company_name" rows="1" onkeydown="return limitLines(this, event)" required></textarea>
						</div>
						<div class="float_right width16">
								<div class="input-group">
								<input type="text" id="date3" name="testdate" class="form-control datepicker background_transparent" value="01/01/2000">
							    <label class="input-group-addon padding_left0 background_transparent" for="date3">
							       <svg class="lnr lnr-calendar-full calendar_icon"><use xlink:href="#lnr-calendar-full"></use></svg>
							    </label>     
							    </div>
							</div>
						<div class="clearfix"></div>
					
					<div>
						<textarea placeholder="ABC Limitd" class="form-control background_transparent fixed_textarea position_name" rows="1" onkeydown="return limitLines(this, event)" required ></textarea>	
					</div>
					<div>
						<div class="input-group width100">
						<div class="col-lg-1 company_add_div">
					  		<svg class="lnr lnr-map-marker icon_color heading_3_icons"><use xlink:href="#lnr-map-marker"></use></svg>
					  	</div>
					  	<div class="col-lg-11 padding_left0">
							<textarea placeholder="safilo far east, Hong Kong" class="form-control background_transparent fixed_textarea " rows="1" onkeydown="return limitLines(this, event)" required ></textarea>
					  	</div>
						</div>
					</div>
					<div>
						<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." class="form-control background_transparent fixed_textarea" rows="4" required ></textarea>
					</div>
					</div>
					<hr class="div_single_border"/>
				</div>
				</div>

				<hr/>

			</div>
		</div>

		<div class="modal fade" id="change_photo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		        	<span aria-hidden="true">&times;</span>
		        </button>
		        <h4 class="modal-title">Photo</h4>
		      </div>
		      <div class="modal-body">
		        <img class="img-circle user_photo" src="user.png"/>
		      </div>
		      <div class="modal-footer">
		      	<span class="float_left">Import photo</span><br/>
		        <button type="button" class="btn btn-default button_border float_left">From Computer</button><br/><br/>
		        <button type="button" class="btn button_border float_left facebook_button">From Facebook</button>
		        <button type="button" class="btn btn-success button_border float_right">Ok</button>
		      </div>
		    </div>
		    <p class="modal-additional text-center">Disclaimer. Please keep that in some states is USA it’s not allowed to add photo to your resume</p>
			</div>
		</div>

	</div>
	
	<input type="hidden" id="delete_div" value="" class="click_div_id"/>


</body>

</html>