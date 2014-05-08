(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Path.png", id:"Path"},
		{src:"images/Path_1.png", id:"Path_1"},
		{src:"images/Path_0.png", id:"Path_0"},
		{src:"images/Path_0_1.png", id:"Path_0_1"}
	]
};

// stage content:
(lib.IdentZaangHTML5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		$("#canvas").remove();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Layer 3
	this.text = new cjs.Text("PJ IS A GAY LORD", "96px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 868;
	this.text.setTransform(510,323.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(70));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AifDNIAAmZIE/AAIAAGZg");
	this.shape.setTransform(16,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE600").s().p("AjkDyIAAnkIHJAAIAAHkg");
	this.shape_1.setTransform(22.9,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AkpEYIAAowIJTAAIAAIwg");
	this.shape_2.setTransform(29.8,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB300").s().p("AluE/IAAp9ILdAAIAAJ9g");
	this.shape_3.setTransform(36.7,31.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AmzFkIAArIINnAAIAALIg");
	this.shape_4.setTransform(43.6,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8000").s().p("An4GLIAAsVIPxAAIAAMVg");
	this.shape_5.setTransform(50.5,39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("Ao9GwIAAtgIR7AAIAANgg");
	this.shape_6.setTransform(57.4,43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF4D00").s().p("AqCHXIAAusIUFAAIAAOsg");
	this.shape_7.setTransform(64.3,47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF3300").s().p("ArHH8IAAv4IWPAAIAAP4g");
	this.shape_8.setTransform(71.2,50.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF1900").s().p("AsMIjIAAxFIYZAAIAARFg");
	this.shape_9.setTransform(78.1,54.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AtRJJIAAyRIajAAIAASRg");
	this.shape_10.setTransform(85,58.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F50A00").s().p("AusKHIAA0NIdZAAIAAUNg");
	this.shape_11.setTransform(94.1,64.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB1400").s().p("AwGLFIAA2JMAgNAAAIAAWJg");
	this.shape_12.setTransform(103.2,70.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E01F00").s().p("AxhMCIAA4EMAjDAAAIAAYEg");
	this.shape_13.setTransform(112.3,77.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D62900").s().p("Ay8NAIAA6AMAl5AAAIAAaAg");
	this.shape_14.setTransform(121.3,83.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC3300").s().p("A0XN/IAA79MAovAAAIAAb9g");
	this.shape_15.setTransform(130.4,89.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C23D00").s().p("A1xO9IAA95MArjAAAIAAd5g");
	this.shape_16.setTransform(139.5,95.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B84700").s().p("A3MP6IAA/0MAuZAAAIAAf0g");
	this.shape_17.setTransform(148.6,101.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AD5200").s().p("A4nQ4MAAAghwMAxPAAAMAAAAhwg");
	this.shape_18.setTransform(157.7,108.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A35C00").s().p("A6CR2MAAAgjsMA0FAAAMAAAAjsg");
	this.shape_19.setTransform(166.7,114.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#996600").s().p("A7dS1MAAAglpMA27AAAMAAAAlpg");
	this.shape_20.setTransform(175.8,120.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8F7000").s().p("A83TzMAAAgnlMA5vAAAMAAAAnlg");
	this.shape_21.setTransform(184.9,126.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#857A00").s().p("A+SUwMAAAgpgMA8lAAAMAAAApgg");
	this.shape_22.setTransform(194,132.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7A8500").s().p("A/tVuMAAAgrcMA/bAAAMAAAArcg");
	this.shape_23.setTransform(203.1,139.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#708F00").s().p("EghIAWtMAAAgtZMBCRAAAMAAAAtZg");
	this.shape_24.setTransform(212.1,145.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#669900").s().p("EgijAXrMAAAgvVMBFHAAAMAAAAvVg");
	this.shape_25.setTransform(221.2,151.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5CA300").s().p("Egj9AYoMAAAgxQMBH7AAAMAAAAxQg");
	this.shape_26.setTransform(230.3,157.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#52AD00").s().p("EglYAZmMAAAgzMMBKxAAAMAAAAzMg");
	this.shape_27.setTransform(239.4,163.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#47B800").s().p("EgmzAakMAAAg1IMBNnAAAMAAAA1Ig");
	this.shape_28.setTransform(248.4,170.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3DC200").s().p("EgoOAbjMAAAg3FMBQdAAAMAAAA3Fg");
	this.shape_29.setTransform(257.5,176.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33CC00").s().p("EgppAchMAAAg5BMBTTAAAMAAAA5Bg");
	this.shape_30.setTransform(266.6,182.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#29D600").s().p("EgrDAdeMAAAg68MBWHAAAMAAAA68g");
	this.shape_31.setTransform(275.7,188.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1FE000").s().p("EgseAecMAAAg84MBY9AAAMAAAA84g");
	this.shape_32.setTransform(284.8,194.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#14EB00").s().p("Egt5AfbMAAAg+1MBbzAAAMAAAA+1g");
	this.shape_33.setTransform(293.8,201.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0AF500").s().p("EgvUAgZMAAAhAxMBepAAAMAAABAxg");
	this.shape_34.setTransform(302.9,207.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00FF00").s().p("EgwvAhWMAAAhCsMBheAAAMAAABCsg");
	this.shape_35.setTransform(312,213.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0FF407").s().p("EgyjAiaMAAAhEzMBlHAAAMAAABEzg");
	this.shape_36.setTransform(323.6,220.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1DE90F").s().p("Eg0XAjeMAAAhG7MBovAAAMAAABG7g");
	this.shape_37.setTransform(335.3,227.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2CDE16").s().p("Eg2MAkiMAAAhJDMBsZAAAMAAABJDg");
	this.shape_38.setTransform(346.9,233.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3AD31D").s().p("Eg4AAlmMAAAhLLMBwBAAAMAAABLLg");
	this.shape_39.setTransform(358.6,240.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#49C824").s().p("Eg51AmqMAAAhNTMBzrAAAMAAABNTg");
	this.shape_40.setTransform(370.2,247.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#57BD2C").s().p("Eg7pAnuMAAAhPbMB3TAAAMAAABPbg");
	this.shape_41.setTransform(381.9,254.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66B333").s().p("Eg9eAoyMAAAhRjMB68AAAMAAABRjg");
	this.shape_42.setTransform(393.5,261);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#75A83A").s().p("Eg/SAp1MAAAhTpMB+lAAAMAAABTpg");
	this.shape_43.setTransform(405.1,267.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#839D42").s().p("EhBGAq5MAAAhVxMCCNAAAMAAABVxg");
	this.shape_44.setTransform(416.8,274.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#929249").s().p("EhC7Ar9MAAAhX5MCF3AAAMAAABX5g");
	this.shape_45.setTransform(428.4,281.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A08750").s().p("EhEvAtBMAAAhaBMCJfAAAMAAABaBg");
	this.shape_46.setTransform(440.1,288.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AF7C57").s().p("EhGkAuFMAAAhcJMCNJAAAMAAABcJg");
	this.shape_47.setTransform(451.7,294.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BD715F").s().p("EhIYAvJMAAAheRMCQxAAAMAAABeRg");
	this.shape_48.setTransform(463.4,301.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC6666").s().p("EhKNAwNMAAAhgZMCUbAAAMAAABgZg");
	this.shape_49.setTransform(475,308.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CF696B").s().p("EhKfAwyMAAAhhjMCU/AAAMAAABhjg");
	this.shape_50.setTransform(476.9,312.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D16B70").s().p("EhKyAxYMAAAhivMCVlAAAMAAABivg");
	this.shape_51.setTransform(478.7,316.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D46E75").s().p("EhLEAx+MAAAhj7MCWJAAAMAAABj7g");
	this.shape_52.setTransform(480.6,319.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D6707A").s().p("EhLXAyjMAAAhlGMCWuAAAMAAABlGg");
	this.shape_53.setTransform(482.4,323.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D97380").s().p("EhLpAzJMAAAhmRMCXTAAAMAAABmRg");
	this.shape_54.setTransform(484.3,327.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DB7585").s().p("EhL8AzvMAAAhndMCX4AAAMAAABndg");
	this.shape_55.setTransform(486.1,331.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DE788A").s().p("EhMOA0VMAAAhopMCYdAAAMAAABopg");
	this.shape_56.setTransform(488,334.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E07A8F").s().p("EhMhA07MAAAhp1MCZCAAAMAAABp1g");
	this.shape_57.setTransform(489.8,338.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E37D94").s().p("EhMzA1gMAAAhq/MCZnAAAMAAABq/g");
	this.shape_58.setTransform(491.7,342.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E68099").s().p("EhNGA2GMAAAhsLMCaNAAAMAAABsLg");
	this.shape_59.setTransform(493.5,346.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E8829E").s().p("EhNYA2sMAAAhtXMCaxAAAMAAABtXg");
	this.shape_60.setTransform(495.4,350);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB85A3").s().p("EhNrA3RMAAAhuiMCbXAAAMAAABuig");
	this.shape_61.setTransform(497.2,353.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#ED87A8").s().p("EhN9A33MAAAhvtMCb7AAAMAAABvtg");
	this.shape_62.setTransform(499.1,357.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F08AAD").s().p("EhOQA4dMAAAhw5MCcgAAAMAAABw5g");
	this.shape_63.setTransform(500.9,361.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F28CB3").s().p("EhOiA5DMAAAhyFMCdFAAAMAAAByFg");
	this.shape_64.setTransform(502.8,365.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F58FB8").s().p("EhO1A5pMAAAhzRMCdqAAAMAAABzRg");
	this.shape_65.setTransform(504.6,368.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F791BD").s().p("EhPHA6OMAAAh0bMCePAAAMAAAB0bg");
	this.shape_66.setTransform(506.5,372.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FA94C2").s().p("EhPaA60MAAAh1nMCe1AAAMAAAB1ng");
	this.shape_67.setTransform(508.3,376.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FC96C7").s().p("EhPsA7aMAAAh2zMCfZAAAMAAAB2zg");
	this.shape_68.setTransform(510.2,380.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF99CC").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape_69.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,947.8,444.1);


// symbols:
(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,727);


(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.Path_1 = function() {
	this.initialize(img.Path_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.Path_0 = function() {
	this.initialize(img.Path_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);


(lib.Path_0_1 = function() {
	this.initialize(img.Path_0_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;