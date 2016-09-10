//model
function Year(yx, yy, lx, ly, slide, year) {
	// body...  
	this.yx = 2 * yx;
	this.yy = 2 * yy;
	this.lx = 2 * lx;
	this.ly = 2 * ly;
	this.slide = slide;
	this.year = year;
}
Year.prototype = {
	rectWH: 12,
	circleR: 12,
	init: function(canvas) {

		var ctx = canvas.getContext('2d');
		var canW = $("#event-can").width();
		var canH = $("#event-can").height();
		this.drawLine(ctx, canW, canH);
		this.drawRect(ctx, canW, canH);
		this.drawCircle(ctx, canW, canH);
		this.getYearLabel(canW, canH);
	},
	drawLine: function(ctx, canW, canH) {
		/* body... */
		ctx.beginPath();
		ctx.strokeStyle = "rgba(109, 109, 109, 0.9)";
		ctx.lineWidth = 2;
		ctx.lineCap = "round";
		ctx.moveTo(this.yx * canW, this.yy * canH);
		ctx.lineTo(this.lx * canW, this.ly * canH);
		// console.log(this.yx * canW);
		ctx.stroke();
		ctx.closePath();

	},
	drawRect: function(ctx, canW, canH) {
		ctx.beginPath();
		ctx.fillStyle = "rgb(0, 255, 184)";
		ctx.fillRect(this.yx * canW - 6, this.yy * canH - 6, this.rectWH, this.rectWH);
		ctx.closePath();
	},
	drawCircle: function(ctx, canW, canH) {
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 255, 184)";
		ctx.fillStyle = "rgb(0, 255, 184)";
		ctx.arc(this.lx * canW - 2, this.ly * canH - 2, this.circleR, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.arc(this.lx * canW - 2, this.ly * canH - 2, 2, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.closePath();
	},
	getYearLabel: function(canW, canH) {
		var html = '<div class="yearLabel">' + this.year + '</div>';
		var html2 = '<div class="yearLabel"></div>';
		var $label = $(html);
		var $label2 = $(html2);
		var slide = this.slide;
		var $event_years = $("#events #event-years");
		var $event_details = $("#events #event-details");
		var $eventsNav = $("#events .fp-slidesNav");
		$label.appendTo('#events #event-years #yearLabels');
		$label2.appendTo('#events #event-years #yearLabels');
		$label.css({
			"left": (this.yx * canW / 2 - 20) + "px",
			"top": (this.yy * canH / 2 - 20) + "px",
			"cursor": "pointer",
		});
		$label2.css({
			"left": (this.lx * canW / 2 - 40) + "px",
			"top": (this.ly * canH / 2 - 20) + "px",
			"cursor": "pointer",
		});
		$label.click(function() {
			$.fn.fullpage.silentMoveTo('events_page', slide);
			var $eventsback = $('#events #event-details .triangle');
			var $eventsNav = $("#events .fp-slidesNav");
			var $event_years = $("#events #event-years");
			var $event_slides = $("#events #event-details .slide");
			var $event_img = $("#events #event-details .imgContent");
			$event_details.css('visibility', 'visible');
			$eventsNav.css('opacity', '1');
			$event_slides.css('opacity', '1');
			$event_img.css('opacity', '1');
			$eventsback.show();
			$event_years.css({
				"transform": "scale3d(0.7,0.7,0.7)",
				"opacity": '0',
				"z-index": "-1",
			});
		});
	},

};

var $event_canvas = $("#event-can"),
	$screenW = $(window).width(),
	$screenH = $(window).height();

//controler

function drawYears() {

	$event_canvas.css({
		"width": $screenW,
		"height": $screenH,
	});
	var canvas = document.getElementById('event-can');
	canvas.width = 2 * $screenW;
	canvas.height = 2 * $screenH;
	var y2000 = new Year(0.0656, 0.3972, 0.0489, 0.5361, 0, 2000),
		y2004 = new Year(0.1242, 0.6935, 0.1130, 0.5257, 1, 2004),
		y2005 = new Year(0.1848, 0.3259, 0.2026, 0.5185, 2, 2005),
		y2006 = new Year(0.2697, 0.6944, 0.2869, 0.4777, 3, 2006),
		y2007 = new Year(0.3260, 0.3675, 0.3583, 0.5027, 4, 2007),
		y2008 = new Year(0.4557, 0.5879, 0.4370, 0.4259, 6, 2008),
		y2009 = new Year(0.5427, 0.2768, 0.5224, 0.4824, 8, 2009),
		y2010 = new Year(0.5651, 0.6712, 0.5885, 0.4667, 10, 2010),
		y2011 = new Year(0.6223, 0.3620, 0.6453, 0.5148, 11, 2011),
		y2012 = new Year(0.6916, 0.5962, 0.6984, 0.4148, 13, 2012),
		y2013 = new Year(0.7895, 0.3194, 0.7750, 0.4351, 15, 2013),
		y2014 = new Year(0.7693, 0.6685, 0.8338, 0.5157, 11, 2014),
		y2015 = new Year(0.8572, 0.2481, 0.8812, 0.4583, 12, 2015),
		y2016 = new Year(0.9078, 0.6203, 0.9354, 0.5000, 13, 2016);
	// console.log(y2011.circleR);
	y2000.init(canvas);
	y2004.init(canvas);
	y2005.init(canvas);
	y2006.init(canvas);
	y2007.init(canvas);
	y2008.init(canvas);
	y2009.init(canvas);
	y2010.init(canvas);
	y2011.init(canvas);
	y2012.init(canvas);
	y2013.init(canvas);
	y2014.init(canvas);
	y2015.init(canvas);
	y2016.init(canvas);


	//drawDashline
	var ctx = canvas.getContext('2d');
	var canW = $("#event-can").width();
	var canH = $("#event-can").height();
	ctx.beginPath();
	ctx.strokeStyle = "rgba(109, 109, 109, 0.9)";
	ctx.setLineDash([12, 12]);
	ctx.lineWidth = 2;
	ctx.lineCap = "round";
	ctx.moveTo(0, 1.0 * canH);
	ctx.lineTo(y2000.lx * canW, y2000.ly * canH);
	ctx.lineTo(y2004.lx * canW, y2004.ly * canH);
	ctx.lineTo(y2005.lx * canW, y2005.ly * canH);
	ctx.lineTo(y2006.lx * canW, y2006.ly * canH);
	ctx.lineTo(y2007.lx * canW, y2007.ly * canH);
	ctx.lineTo(y2008.lx * canW, y2008.ly * canH);
	ctx.lineTo(y2009.lx * canW, y2009.ly * canH);
	ctx.lineTo(y2010.lx * canW, y2010.ly * canH);
	ctx.lineTo(y2011.lx * canW, y2011.ly * canH);
	ctx.lineTo(y2012.lx * canW, y2012.ly * canH);
	ctx.lineTo(y2013.lx * canW, y2013.ly * canH);
	ctx.lineTo(y2014.lx * canW, y2014.ly * canH);
	ctx.lineTo(y2015.lx * canW, y2015.ly * canH);
	ctx.lineTo(y2016.lx * canW, y2016.ly * canH);
	ctx.lineTo(2 * canW, 1.0 * canH);
	ctx.stroke();
	ctx.closePath();


}
drawYears();

var $eventsback = $('#events #event-details .triangle');

$eventsback.click(function() {
	event.preventDefault();
	var $events = $("#events #events-details");
	var $event_years = $("#events #event-years");
	var $eventsNav = $("#events .fp-slidesNav");
	var $event_slides = $("#events #event-details .slide");
	var $event_img = $("#events #event-details .imgContent");

	$events.css('visibility', 'hidden');
	$eventsNav.css('opacity', '0');
	$event_slides.css('opacity', '0');
	$event_img.css('opacity', '0');
	// $events.css('opacity', '0');
	// $eventsNav.css('opacity', '0');
	$eventsback.hide();
	$event_years.css({
		"transform": 'scale3d(1,1,1)',
		"opacity": '1',
		"z-index": "7",
	});

});