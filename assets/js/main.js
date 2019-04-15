(function() {
  // Multi-Level Accordion Menu - by CodyHouse.co
  var accordionsMenu = document.getElementsByClassName('cd-accordion--animated');

	if( accordionsMenu.length > 0 && window.requestAnimationFrame) {
		for(var i = 0; i < accordionsMenu.length; i++) {(function(i){
			accordionsMenu[i].addEventListener('change', function(event){
				animateAccordion(event.target);
			});
		})(i);}

		function animateAccordion(input) {
			var bool = input.checked,
				dropdown =  input.parentNode.getElementsByClassName('cd-accordion__sub')[0];
			
			Util.addClass(dropdown, 'cd-accordion__sub--is-visible'); // make sure subnav is visible while animating height

			var initHeight = !bool ? dropdown.offsetHeight: 0,
				finalHeight = !bool ? 0 : dropdown.offsetHeight;

			Util.setHeight(initHeight, finalHeight, dropdown, 200, function(){
				Util.removeClass(dropdown, 'cd-accordion__sub--is-visible');
				dropdown.removeAttribute('style');
			});
		}
	}
}());