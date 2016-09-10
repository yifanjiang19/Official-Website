function drawHomeDash() {
	var $home_canvas = $("#home_can"),
		$screenW = $(window).width(),
		$screenH = $(window).height();
	var canvas = document.getElementById("home_can");
	canvas.width = 2 * $screenW;
	canvas.height = 2 * $screenH;

	$home_canvas.css({
		"width": $screenW,
		"height": $screenH,
	});

	var ctx = canvas.getContext('2d');
	var canW = canvas.width;
	var canH = canvas.height;
	ctx.beginPath();
	ctx.strokeStyle = "#7F7F7F";
	ctx.setLineDash([12, 12]);
	ctx.lineWidth = 2;
	ctx.lineCap = "round";
	ctx.moveTo(0.687 * canW, 0.339 * canH);
	ctx.lineTo(0.543 * canW, 0.536 * canH);
	ctx.lineTo(0.406 * canW, 0.631 * canH);
	ctx.lineTo(0.60 * canW, 0.819 * canH);
	ctx.lineTo(0.893 * canW, 0.800 * canH);
	ctx.lineTo(0.820 * canW, 0.455 * canH);
	ctx.lineTo(0.687 * canW, 0.339 * canH);
	ctx.moveTo(0.543 * canW, 0.536 * canH);
	ctx.lineTo(0.60 * canW, 0.819 * canH);
	ctx.lineTo(0.737 * canW, 0.700 * canH);
	ctx.lineTo(0.820 * canW, 0.455 * canH);
	ctx.lineTo(0.543 * canW, 0.536 * canH);
	ctx.lineTo(0.737 * canW, 0.700 * canH);
	ctx.lineTo(0.893 * canW, 0.800 * canH);
	ctx.stroke();
	ctx.closePath();
}

drawHomeDash();

// ctx.beginPath();
// ctx.strokeStyle = "rgba(109, 109, 109, 0.9)";
// ctx.setLineDash([12, 12]);
// ctx.lineWidth = 2;
// ctx.lineCap = "round";
// ctx.moveTo(0, 1.0 * canH);
// ctx.lineTo(y2000.lx * canW, y2000.ly * canH);
// ctx.lineTo(y2004.lx * canW, y2004.ly * canH);
// ctx.lineTo(y2005.lx * canW, y2005.ly * canH);
// ctx.lineTo(y2006.lx * canW, y2006.ly * canH);
// ctx.lineTo(y2007.lx * canW, y2007.ly * canH);
// ctx.lineTo(y2008.lx * canW, y2008.ly * canH);
// ctx.lineTo(y2009.lx * canW, y2009.ly * canH);
// ctx.lineTo(y2010.lx * canW, y2010.ly * canH);
// ctx.lineTo(y2011.lx * canW, y2011.ly * canH);
// ctx.lineTo(y2012.lx * canW, y2012.ly * canH);
// ctx.lineTo(y2013.lx * canW, y2013.ly * canH);
// ctx.lineTo(y2014.lx * canW, y2014.ly * canH);
// ctx.lineTo(y2015.lx * canW, y2015.ly * canH);
// ctx.lineTo(y2016.lx * canW, y2016.ly * canH);
// ctx.lineTo(2 * canW, 1.0 * canH);
// ctx.stroke();
// ctx.closePath();