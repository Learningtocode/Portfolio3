/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */ 
 
 $("document").ready(function() { 
     $(".Carrot").css("color", "blue"); 
     $(".Rabbit").css("color","gold"); 
     $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe); 
     $('#1').bind('click', alertButtonClick); 
     $('#2').bind('click', replaceWHtml); 
     $('#2').bind('click', replaceWText); 
     $('#ham').bind('click', addAPara); 
     $('#cat').bind('click', removeAPara); 
     $('#hidelogo').bind('click', hideTheImage);
     $('#showlogo').bind('click', showTheImage);
 });

function mouseOverMe() {
    $("h1").html("Up");
}
 
function mouseOutMe(){
    $("h1").html("What");
} 
 
function alertButtonClick(){
    alert("Welcome");
}  
 
function replaceWHtml(){
    $('#dog').html('<h6>And I would walk 5oo more</h6>');
} 
 
function replaceWText(){
    $('#dog').text('<h6>And I would walk 5oo more</h6>');
}
 
function addAPara(){
    $('#cat').append('<p>Just to be the man</p>');
} 
 
function removeAPara(){
    $('#cat').remove();
} 
 
 function hideTheImage(){
     $('#logo').hide('puff', {}, 2500);
 }