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
		$('#about-preview').fadeOut();
		$('#code-preview').fadeOut();
		$('#art-preview').fadeOut();
		$('#contact-preview').fadeOut();

		$('#sequence').fadeIn(1000);
	});
});