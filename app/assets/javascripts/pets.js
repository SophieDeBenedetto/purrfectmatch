$(function(){
	favPetListener();
	hideForm();
	contactShelter();
	showForm();
	hideCancel();
});


	function favPetListener() {
 $("#like-btn").on("click", function(){
   alert("Sign in to like a pet!");
 });
}

function hideForm() {
	$('.showform').hide();
}

function showForm() {
	$('#form-link').click(function(){
		$('.showform').fadeToggle();
	});
}

function contactShelter() {
	$('.contact-shelter').click(function(){
		alert("Sign in to contact this shelter!");
	});
}
function hideCancel() {
	$('.cancel-btn').click(function(){
		$('.showform').hide();
	})
}
