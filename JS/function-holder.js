function reSizeWebsite() {
	$("#content-holder").css("height", $("#main-content").height() - $("#main-navigation").height());

	if($("#content-holder").height() <= $("#content-main-holder").height()) {
		$( "#content-main-holder" ).css("max-height",$( "#content-holder" ).height()).addClass( "content-main-holder-nospace" ).removeClass( "content-main-holder-space" );
		console.log("no-space");
	} else {
		$( "#content-main-holder" ).css("max-height",$( "#content-holder" ).height()).addClass( "content-main-holder-space" ).removeClass( "content-main-holder-nospace" );
		console.log("space");
	}
}