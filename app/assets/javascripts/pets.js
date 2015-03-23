$(function(){
	// debugger;
	favPetListener();
	hideForm();
	contactShelter();
	hideModal();
	likePet();
	savePet();
	hideModalLike();
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
	// // $('.contact-shelter').click(function(){
	// 	// alert("Sign in to contact this shelter!");
	$('#myModal').on('shown.bs.modal', function () {
		// debugger;
	$('#myModal').show();

	// $('#myInput').focus()
	});

	// $('.contact-shelter').click(function(){
	// 	debugger;
	// 	$('#myModal').show();
	// });
}

function savePet() {
	// // $('.contact-shelter').click(function(){
	// 	// alert("Sign in to contact this shelter!");
	$('#likeModal').on('shown.bs.modal', function () {
		// debugger;
	$('#likeModal').show();

	// $('#myInput').focus()
	});

	// $('.contact-shelter').click(function(){
	// 	debugger;
	// 	$('#myModal').show();
	// });
}
function hideModal() {
	$('.close').click(function(){
		$('#myModal').hide();
	});
}

function hideModalLike() {
	$('.close').click(function(){
		$('#likeModal').hide();
	});
}
function hideCancel() {
	$('.cancel-btn').click(function(){
		$('.showform').hide();
	})
}

function likePet(){
	$("#like-btn-notice").click(function(){
		alert("Sign in to like and save this pet!");
	});
}
