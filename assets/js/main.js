$(document).ready(function(){


	/* ---------- INDEX.HTML ---------- */
	
	// don't show the sequence until the html page is ready
	$('#sequence').hide();

	// then fade in sequence
	$('#sequence').fadeIn(1000);

	// initially hide the bottom
	$('#about-preview').hide();
	$('#code-preview').hide();
	$('#art-preview').hide();
	$('#contact-preview').hide();

	// show about preview
	$("#abt-seq").on("click", function(){
		
		$('#sequence').hide();
		$('#about-preview').fadeIn(2000);

	});

	// show code preview
	$("#code-seq").on("click", function(){
		
		$('#sequence').hide();
		$('#code-preview').fadeIn(2000);

	});

	// show art preview
	$("#art-seq").on("click", function(){
		
		$('#sequence').hide();
		$('#art-preview').fadeIn(2000);

	});

	// show contact preview
	$("#con-seq").on("click", function(){
		
		$('#sequence').hide();
		$('#contact-preview').fadeIn(2000);

	});

	// from previews, go back to home
	$(document).on("click", ".back-home", function(){
		$('#about-preview').hide();
		$('#code-preview').hide();
		$('#art-preview').hide();
		$('#contact-preview').hide();

		$('#sequence').fadeIn(1000);
	});

	// from title, return to index page
	$(document).on("click", ".title-back-home", function(){
		window.location.assign("index.html");
	});

	/* ---------- CODE.HTML ---------- */
	$('#autotrack').on("click", function(){
		window.location.assign("http://autotrackofficial.herokuapp.com")
	});

	$('#codehive').on("click", function(){
		window.location.assign("http://codehive.herokuapp.com");
	});

	$('#soundscout').on("click", function(){
		window.location.assign("http://realsoundscout.herokuapp.com");
	});

	/* ---------- ART.HTML ---------- */
	var slideIndex = 1;
	showSlides(slideIndex);

	$('.prev').on("click", function(){
		plusSlides(-1);
	});

	$('.next').on("click", function(){
		plusSlides(1);
	});

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		
		if (n > slides.length) {slideIndex = 1} 
		
		if (n < 1) {slideIndex = slides.length}
		
		for (i = 0; i < slides.length; i++) {
			$(slides[i]).hide(); 
		}

		

		$(slides[slideIndex-1]).css({display:'block'}); 
	}
});