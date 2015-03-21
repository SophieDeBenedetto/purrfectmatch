$(document).ready(function(){
 favPetListener();
 // hideCheck();
 // checkListener();
});



function favPetListener() {
 $("button #like-btn").on("click", function(){
   alert("Sign in to like a pet!");
 });
}

// function hideCheck(){
//  $(".glyphicon glyphicon-ok)".hide();
// }

// function checkListener(){
//  $(".btn btn-primary").fadeToggle();
// }
