jQuery(document).ready(function(){
	
	jQuery(".slide").owlCarousel({
		
	  'navigation' : true,
      'singleItem':true,
      'autoPlay':5000,
      'lazyLoad':true
		
	});
	
	
	jQuery(".main-menu ul li").hover(
		function(){
			jQuery(this).children("ul").slideToggle(1000);
		}
		
	);
	
	jQuery(".main-menu ul ul").parent("li").children("a").append(' <i class="fa fa-angle-down"></i>');
	
	
	
	
	
});





