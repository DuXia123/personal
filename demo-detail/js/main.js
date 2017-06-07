(function($){
	"use strict";

	$(window).load(function() {
		var $container = $('#fh5co-projects-feed'),
		containerWidth = $container.outerWidth();

		$container.masonry({
			itemSelector : '.fh5co-project',
			columnWidth: function( containerWidth ) {
				if( containerWidth <= 330 ) {
					return 310;
				} else {
					return 330;
				}
			},

			isAnimated: !Modernizr.csstransitions
		});
	});
	
	$(".blog img").mouseenter(function(){
		var a=this;
		//alert(1);
		$(a).css({'width':'500px','height':'450px'});
	});
	
	$(".blog img").mouseout(function(){
		var a=this;
		//alert(1);
		$(a).css({'width':'100%','height':'100%'});
	});
		


})(window.jQuery);