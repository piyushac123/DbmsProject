$(document).ready(function(){
               $('.hamburger').click(function(){
                  $('.menu').toggleClass('menu1');
                   $('.item').toggleClass('item1');
                   $('.hamburger').toggleClass('active11');
               });
            });
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(18.4541965, 73.8477759),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}