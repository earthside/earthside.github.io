/* ----------------------------------------------
	Item Name: Sava - Creative pricing tables
	Author: Ashish Maraviya
	Version: 3.0
	Copyright 2023-2024
---------------------------------------------- */
$(function () {
	'use strict';
	
	// color picker start
    (function() {
        $('<div class="color-picker">' +
			'<a href="#" class="handle">' +
			'<i class="fas fa-cog fa-spin"></i>' +
			'</a><div class="sec-position"><div class="settings-header">' +
			'<h3>Select Color</h3>' +
			'</div>' +
			'<div class="section">' +
			'<div class="colors o-auto">' +
			'<a href="#" class="color-1" ></a>' +
			'<a href="#" class="color-2" ></a>' +
			'<a href="#" class="color-3" ></a>' +
			'<a href="#" class="color-4" ></a>' +
			'<a href="#" class="color-5" ></a>' +
			'<a href="#" class="color-6" ></a>' +
			'</div>' +
			'</div>' +
			'</div>' +
		'</div>').appendTo($('body'));
	})();
    var body_event = $("body");
    body_event.on("click", ".color-1", function() {
        $("#color" ).attr("href", "css/color-1.css" );
        return false;
		
	});
    body_event.on("click", ".color-2", function() {
        $("#color" ).attr("href", "css/color-2.css" );
        return false;
	});
    body_event.on("click", ".color-3", function() {
        $("#color" ).attr("href", "css/color-3.css" );
        return false;
	});
	body_event.on("click", ".color-4", function() {
        $("#color" ).attr("href", "css/color-4.css" );
        return false;
	});
    body_event.on("click", ".color-5", function() {
        $("#color" ).attr("href", "css/color-5.css" );
        return false;
	});
	body_event.on("click", ".color-6", function() {
        $("#color" ).attr("href", "css/color-6.css" );
        return false;
	});
    $('.color-picker').animate({right: '-190px'});
    body_event.on("click", ".color-picker a.handle", function(e) {
        e.preventDefault();
        var div = $('.color-picker');
        if (div.css('right') === '-190px') {
            $('.color-picker').animate({right: '0px'});
		}
        else {
            $('.color-picker').animate({right: '-190px'});
		}
	});
	// color picker end
});