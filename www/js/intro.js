(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 36,
	color: "#FFFFFF",
	manifest: [
		{src:"img/CompoundPath_0.png", id:"CompoundPath_0"},
		{src:"img/Image.png", id:"Image"},
		{src:"img/Bitmap1.png", id:"Bitmap1"},
		{src:"img/Bitmap2.png", id:"Bitmap2"},
		{src:"img/Image_1.png", id:"Image_1"}
	]
};

// stage content:
(lib.InstaAnimationHTMLHalf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_266 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		$("#canvas").remove();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(266).call(this.frame_266).wait(1));

	// +
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(297.6,277.7,0.75,0.75);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:267.6,y:327.7,alpha:1},26).wait(45).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// i
	this.instance_1 = new lib.Symbol8("synched",0);
	this.instance_1.setTransform(297.3,338.3,0.75,0.75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:257.3,y:388.3,alpha:1},26).wait(44).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// n
	this.instance_2 = new lib.Symbol9("synched",0);
	this.instance_2.setTransform(338.7,337.8,0.75,0.75);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:308.7,y:387.8,alpha:1},26).wait(43).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// s
	this.instance_3 = new lib.Symbol10("synched",0);
	this.instance_3.setTransform(407.1,338.2,0.75,0.75);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:377.1,y:388.2,alpha:1},26).wait(42).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// t
	this.instance_4 = new lib.Symbol11("synched",0);
	this.instance_4.setTransform(466.2,328.6,0.75,0.75);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:436.2,y:378.6,alpha:1},26).wait(41).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// a
	this.instance_5 = new lib.Symbol12("synched",0);
	this.instance_5.setTransform(521.2,338.2,0.75,0.75);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:491.2,y:388.2,alpha:1},25).wait(40).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// p
	this.instance_6 = new lib.Symbol13("synched",0);
	this.instance_6.setTransform(601.6,352.3,0.75,0.75);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:571.6,y:402.3,alpha:1},23).wait(39).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// l
	this.instance_7 = new lib.Symbol14("synched",0);
	this.instance_7.setTransform(655.8,319.5,0.75,0.75);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:625.8,y:369.5,alpha:1},21).wait(38).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// a
	this.instance_8 = new lib.Symbol15("synched",0);
	this.instance_8.setTransform(702.4,338.2,0.75,0.75);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(55).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:672.4,y:388.2,alpha:1},18).wait(37).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// n
	this.instance_9 = new lib.Symbol16("synched",0);
	this.instance_9.setTransform(777.4,337.8,0.75,0.75);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:747.4,y:387.8,alpha:1},15).wait(36).to({startPosition:0},0).to({alpha:0},45).wait(36).to({startPosition:0},0).to({_off:true},81).wait(15));

	// Isolation Mode
	this.instance_10 = new lib.Symbol3();
	this.instance_10.setTransform(1024,768,0.37,0.37,0,0,0,1431,375.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).wait(52).to({_off:true},81).wait(15));

	// Layer 3
	this.instance_11 = new lib.Symbol6("synched",0);
	this.instance_11.setTransform(511.9,700,0.5,0.5);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.Symbol4();
	this.instance_12.setTransform(511.9,700,0.5,0.5,0,0,0,290.5,68);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},52).to({startPosition:0},38).to({alpha:0},45).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(163).to({_off:false},0).to({alpha:1},36).wait(34).to({alpha:0},33).wait(1));

	// Page1
	this.instance_13 = new lib.Symbol5("synched",0);
	this.instance_13.setTransform(512,384,0.5,0.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(163).to({_off:false},0).to({alpha:1},36).to({startPosition:0},34).to({alpha:0},33).wait(1));

	// Page1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap2, null, new cjs.Matrix2D(1,0,0,1,-512,-384)).s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(267));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);


// symbols:
(lib.CompoundPath_0 = function() {
	this.initialize(img.CompoundPath_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,581,136);


(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,1536);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,430);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("AGIK9QgighAAgyIAAr4QAAjKhOhYQhQhYi1AAQl4AAAAGPIAALjQAAAygjAhQgiAigxAAQgxAAgigiQghghgBgyIAAzBQABgxAhgiQAighAxAAQAxAAAiAhQAjAiAAAxIAAAbQA9hLBjgrQBmgsByAAQI+AAAAIpIAAMfQAAAygkAhQghAigxAAQgyAAghgig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.3,-73.5,118.6,147.1);


(lib.Symbol15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("Am6JvQiQh3AAjUQAAjNCSh1QCUh3D7AAIGRAAIAAg9QAAiShZhRQhYhSicAAQhtAAhLAiQhOAhhGBPQgrAxgxAAQguAAggggQgfgeAAgtQgBgcAUgjQA9hgBlg/QCThYDNAAQEDAACWCOQCXCPAAD2IAAM4QAAAvghAhQgiAhguAAQgvAAghghQgighAAgvIAAgnQhBBOhsAuQhrArh/AAQj9AAiOh3gAjvBjQhvA6AACHQAACDBrA6QBQAuCGAAQCbAABthYQB9hkAAiwIAAhpImRAAQh5AAhNApg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.8,-74.2,117.6,148.6);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("AiGPtQhWhggBi1IAA6vQABgtAiglQAlgjAtAAQAxAAAiAjQAhAiAAAwIAAavQAABbAfAjQAVAaAvAAQAvAAAfAgQAgAhABAtQgBAvggAgQgfAggvAAQigAAhVhgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.2,-110.1,44.4,220.3);


(lib.Symbol13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("ApWPeQgjgkAAguIAA8FQAAgvAjgiQAhgjAwAAQAwAAAjAjQAiAiAAAvIAAAfQA/hIBegsQBsgyB7AAQE7AACnC9QCkC9AAFsQAAFminDAQioDAk3AAQh9AAhrg0QhcgrhAhIIAAJnQAAAugjAkQgjAjgvAAQguAAgjgjgAkwqeQhmCKAAD6QAAD8BoCJQBnCJC7AAQGZAAAAoOQAAoNmgAAQi5AAhkCJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.4,-102.5,127,205);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("AowJDQh7iGAAjoQAAmYDgkGQDhkHFcAAQDgAACTCAIAEgPQAXhgBYAAQAsAAAXAeQAWAbgHAnIjZTBQgHApgfAcQgfAcgqAAQgqAAgVgcQgXgcAIgpIAki/QhNCPiDBPQiCBQioAAQjtAAiBiOgAk/lcQisDSAAFCQAACiBKBeQBVBrCpAAQDkAACajCQCDimAukDIA6lUQiRiNjTAAQj5AAioDNg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-72.1,136.9,144.4);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("AjhMzQhOhMAAiEQAAgvAJgsICTs7Ih5AAQggAAgWgWQgUgUAAggQAAgsAggeQAggfAsAAIBzAAIA5k8QAGglAggeQAigdAnAAQAqAAAWAdQAVAcgHAnIg4E8IDGAAQAhAAAUAWQAVAUAAAgQAAAsggAeQghAfgrAAIjAAAIiRM7QgFAdAAAZQgBBGAnAmQAmAkBBAAQAiAAAXAWQAVAXABAiQgBAqgiAeQgiAegsAAQiRAAhQhQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-89.9,68.7,179.9);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("Al+KHQh8g/hAhfQgLgTAAgaQAAgkAagYQAZgbAkAAQAnAAAbAfQB7CTDzgBQCaAABgg2QBtg9AAh6QAAhWhqg8QgngWjChLQihg6hKg/QhqhcAAiKQAAjNCWhwQCLhnDnAAQCNAAB8A+QBzA5AxBRQAQAaAAAXQAAAkgaAZQgZAZgkAAQgkAAgcgbQg8g8hDgdQhRgkhtAAQh9AAhPArQhfA1AABrQAABgBqA/QAwAdC4BHQCiA8BHA5QBqBYAACIQAADcieB3QiWBukHAAQijAAiMhHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.2,-71.8,116.6,143.7);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("AE/KuQgYgbAHgpICIr5QAOhUAAg+QAAj9kxAAQmLAAhLGkIiELkQgIApgeAbQgfAcgqAAQgqAAgXgcQgYgbAIgpIDYzCQAIgoAegbQAfgcAqAAQApAAAXAcQAZAbgHAoIgTBhQA6haBug5QB3g/CSAAQD3AAB5BsQBqBeAACnQAABTgOBQIiNMfQgIApgeAbQgfAcgqAAQgqAAgXgcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65,-71.4,130.1,142.9);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("Ai7KlQgXgbAHgpIDWzBQAHgpAggbQAegcArAAQAqAAAXAcQAXAbgHApIjXTBQgHApgfAbQgeAcgrAAQgrAAgWgcg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.6,-70.5,41.3,141.1);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("AhaDxQgUgZAEghIAShpIhpAAQggAAgUgXQgVgZAFgfQAFggAZgWQAZgWAgAAIBtAAIARhuQAGghAZgVQAXgWAeAAQAgAAAVAXQAUAZgEAhIgQBpIBnAAQAhAAAVAXQAUAZgEAgQgEAggZAVQgZAWggAAIhvAAIgRBwQgFAfgYAWQgXAVggAAQghAAgVgXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-26.4,52.7,53);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.CompoundPath_0, null, new cjs.Matrix2D(2.113,0,0,0.643,-613.7,-43.7)).s().p("Ehf4AG1IAAtpMC/xAAAIAANpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-613.7,-43.7,1227.5,87.5);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Image_1();
	this.instance.setTransform(-246.5,-213.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-246.5,-213.5,500,430);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.CompoundPath_0, null, new cjs.Matrix2D(1,0,0,1,-290.5,-68)).s().p("EgtYAKnIAA1OMBaxAAAIAAVOg");
	this.shape.setTransform(290.5,68);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,581,136);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A98").s().p("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");
	this.shape.setTransform(1431,375.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2862,751.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;