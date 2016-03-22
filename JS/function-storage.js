function reSizeWebsite() {

	var mainBodyHeight = $("body").height() - $("#main-header").height();

	$("#main-main").css("height", mainBodyHeight);		
			
	var skillsdi = $(".skills-box .skills-image").width();
	$(".skills-box .skills-image").css({"height":skillsdi,"line-height":skillsdi});
			
	var projectImgWidth = $("#project-container .project-holder .project-main-image").width()*0.5;
	$("#project-container .project-holder .project-main-image").css({"height":projectImgWidth});
		
	for(var i=1;i<=3;i++) {
		
		if($(".content-main-information:nth-child("+i+")").height() >= mainBodyHeight) {
			$(".content-main-information:nth-child("+i+")").css({"max-height":mainBodyHeight}).addClass("nospace").removeClass("space");

		} else {
			$(".content-main-information:nth-child("+i+")").css({"max-height":"none"}).addClass("space").removeClass("nospace");
			
			if($(".content-main-information:nth-child("+i+")").height() >= $("#main-main").height()) {
				$(".content-main-information:nth-child("+i+")").css({"max-height":$("#main-main").height()}).addClass("nospace").removeClass("space");
			}
		}
	}
}