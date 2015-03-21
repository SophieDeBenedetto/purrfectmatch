$(function(){
	hideForm();
	contactShelter();
	showForm();
	hideCancel();
});



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
