/*var nav = document.getElementsByClassName('iconn2');
nav[0].onmouseover = function fg() {
    var sousNav = document.getElementsByClassName('souMenu');
    sousNav[0].style.visibility = "visible";
}

nav[0].onmouseout = function fg1() {
    var sousNav = document.getElementsByClassName('souMenu');
    sousNav[0].style.visibility = "hidden";
}*/

var nav = document.querySelectorAll('.iconn2'); //li
var sousNav = document.querySelectorAll('.souMenu');
var jumiaCont = document.querySelector('#jumiaCont');

nav[0].onmouseover = function() {
    var sousNav = document.querySelectorAll('.souMenu');
    sousNav[0].style.visibility = "visible";
}

Nav[0].onmouseout = function() {
    var sousNav = document.querySelectorAll('.souMenu');
    sousNav[0].onmouseover = function() {
        sousNav[0].style.visibility = "visible";
    }
    sousNav[0].onmouseout = function() {
        sousNav[0].style.visibility = "hidden";
    }
}