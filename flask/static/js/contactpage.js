jQuery(document).ready(function($) {
	if ($('.floating-labels').length > 0) floatLabels();

	function floatLabels() {
		// console.log("here");
		var inputFields = $('#contact form.floating-labels .cd-label').next();
		// console.log(inputFields);
		inputFields.each(function() {
			var singleInput = $(this);
			//check if user is filling one of the form fields
			checkVal(singleInput);
			singleInput.keyup(function() {
				checkVal(singleInput);
			});
		});
	}

	function checkVal(inputField) {
		(inputField.val() == '') ? inputField.prev('.cd-label').removeClass('float'): inputField.prev('.cd-label').addClass('float');
	}
});
// (function($) {
// 	$.fn.serializeJson = function() {
// 		var serializeObj = {};
// 		$(this.serializeArray()).each(function() {
// 			serializeObj[this.name] = this.value;
// 		});
// 		return serializeObj;
// 	};
// })(jQuery);
$("#contact form").on("submit", function(event) {
	// var me = this;
	// console.log(me);
	event.preventDefault();

	var _data = $(this).serialize();
	console.log(_data);


	$.post('/info_pc', _data, function(data) {
		// console.log(data.status);
		alert(data);

		if (data.status == true) {
			alert('报名成功');
		} else {
			alert('验证码错误');
		};
		var verify = document.getElementById('kaptcha');
		verify.setAttribute('src', '/pil?' + Math.random());
	}).fail(function() {
		alert("服务器错误报名失败");
	});
});
var verify = document.getElementById('kaptcha');
var $verify = $('#kaptcha');
$verify.click(function() {
	// body...
	verify.setAttribute('src', '/pil?' + Math.random());

});
// $(function() {
// 	$("#contact_send").click(function() {
// 		$.post("/info", {
// 			name: $("#contact_name").val(),
// 			gender: $("#contact_gender").val(),
// 			phone: $("#contact_phone").val(),
// 			phone_2: $("#contact_phone2").val(),
// 			dorm: $("#contact_dorm").val(),
// 			group: $("#contact_group").val(),
// 			intro: $("#contact_intro").val(),
// 			info: $("#contact_info").val()
// 		}, function(data) {
// 			alert(data.status);
// 		});
// 	})
// })