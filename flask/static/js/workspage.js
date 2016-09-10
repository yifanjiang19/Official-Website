var $work_left = $("#works .controlarrows .leftarrow");
var $work_right = $("#works .controlarrows .rightarrow");
var $worksCtn = $('#works .worksCtn');
var $workback = $('#works .works-details .triangle');
var $works = $("#works .works-details");

//var $worksCtn = $(".worksCtn");
var $controlarrows = $("#works .controlarrows");
console.log(typeof(slideNum));

$("#works .work_view").on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	var me = this;
	var slideNum = $(me).data("slide");
	var $worksNav = $("#works .fp-slidesNav");
	// console.log("click");
	// 先滑到指定位置
	//在同时降低透明度和大小
	//接着消失 使用display none
	// 将z-index降低为-1
	//出现背景的展示页面
	$.fn.fullpage.silentMoveTo('works_page', slideNum);
	// var dfd = $.Deferred;
	// dfd.done(function() {
	// 	/* body... */
	//
	// });
	// $worksCtn.animate({
	//    opacity: 0.25,
	// }, 1000, function() {
	//    // Animation complete.
	//    $works.css('visibility', 'visible');
	//    $worksNav.css('visibility', 'visible');
	// });
	$worksCtn.css({
		"transform": 'scale3d(0.5,0.5,0.5)',
		"opacity": '0',
		"z-index": "-1",
	});
	$controlarrows.hide();
	$controlarrows.css({
		"z-index": "-1",
	})
	var timer = setTimeout(function() {
		/* body... */
		$works.css('opacity', '1');
		$worksNav.css('opacity', '1');
	}, 300);


});


$work_left.click(function() {
	$worksCtn.animate({
		left: 0,
	}, 500, function() {
		// Animation complete.
		$work_left.hide();
		$work_right.show();
	});
}).mouseenter(function() {
	$worksCtn.animate({
		left: 0,
	}, 500, function() {
		// Animation complete.
		$work_left.hide();
		$work_right.show();
	});
});
$work_right.click(function() {
	$worksCtn.animate({
		left: "-3.1rem",
	}, 500, function() {
		// Animation complete.
		$work_left.show();
		$work_right.hide();
	});
}).mouseenter(function() {
	$worksCtn.animate({
		left: "-3.1rem",
	}, 500, function() {
		// Animation complete.
		$work_left.show();
		$work_right.hide();
	});
});
// function changePage(e) {
// 	e.preventDefault();
// 	/* Act on the event */
// 	var me = this;
// 	var slideNum = $(me).data("slide");
// 	var $works = $("#works .works-details");
// 	var $worksNav = $("#works .fp-slidesNav");
// 	console.log(typeof(slideNum));
// 	// console.log("click");
// 	// 先滑到指定位置
// 	//在同时降低透明度和大小
// 	//接着消失 使用display none
// 	// 将z-index降低为-1
// 	//出现背景的展示页面
// 	$.fn.fullpage.silentMoveTo('works_page', slideNum);
// 	var dtd = $.Deferred;
// 	dtd.then(function() {
// 		/* body... */
// 		$works.css('visibility', 'visible');
// 		$worksNav.css('visibility', 'visible');
// 	})

// }
$workback.click(function() {
	event.preventDefault();

	var $worksNav = $("#works .fp-slidesNav");

	// $works.css('visibility', 'hidden');
	// $worksNav.css('visibility', 'hidden');
	$works.css('opacity', '0');
	$worksNav.css('opacity', '0');

	$worksCtn.css({
		"transform": 'scale3d(1,1,1)',
		"opacity": '1',
		"z-index": "7",
	});
	$controlarrows.css({
		"z-index": "7",
	});
	$controlarrows.show();

});