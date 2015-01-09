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
     $('#2').bind('click', "Are you late?");
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
 
function Are you late?() {
    
}