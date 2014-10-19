$(document).ready(function(){

	console.log("it works.");
	
	
	
	var mil = "start";
	var min = "start";
	
	var charClass = "0";
	var subClass = "0";
	var origin = "0";
	var star = "0";
	var friend = "0";
	var gender = "0";
	var attraction = "0";
	var strength = "0";
	var weakness = "0";
	var love = "0";
	var downfall = "0";
	
	
	
	
	var milImg = function(y){
	
		var z = ("url(images/" + y + ".jpg)");
		$(".millions").css("backgroundImage", z);
		console.log("new mil img");
		
	};
	
	
	
	
	
	var minImg = function(y){
	
		var z = ("url(images/" + y + ".jpg)");
		$(".minnow").css("backgroundImage", z);
		console.log("new min img");
		
	};
	
	
	
	
	
	
	
	
	var milState = function(y){
		mil = y;
		console.log("new mil");
//		milImg(mil);
		
	};
	
	
	var minState = function(y){
		min = y;
		console.log("new min");
//		minImg(min);
	};
	
	
	
	var show = function(y){
		console.log(y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	var milHide = function(){
		$(".millions .show").addClass("hide");
		$(".millions .show").removeClass("show");
	}
	
	
	//--------------------------------------------------------------
	//--------------------------------------------------------------
	//--------------------------------------------------------------
	
	
	
	$(".millions").click(function(){
		
		console.log("clicked millions");

	});
	
	
	
	$(".a1").hover(function(){
		$(".a1x").css("display","block");
		},function(){
		$(".a1x").css("display","none");
	});
	
	$(".a1").click(function(){
		charClass = "fighter";
		milHide();
		show(".b");
	});
	
	$(".a2").hover(function(){
		$(".a2x").css("display","block");
		},function(){
		$(".a2x").css("display","none");
	});
	
	$(".a2").click(function(){
		charClass = "mage";
		milHide();
		show(".c");
	});
	
	$(".a3").hover(function(){
		$(".a3x").css("display","block");
		},function(){
		$(".a3x").css("display","none");
	});
	
	$(".a3").click(function(){
		charClass = "rogue";
		milHide();
		show(".d");
	});
	
	$(".a4").hover(function(){
		$(".a4x").css("display","block");
		},function(){
		$(".a4x").css("display","none");
	});
	
	$(".a4").click(function(){
		charClass = "healer";
		milHide();
		show(".e");
	});
	
	
	
	
	$(".b1").hover(function(){
		$(".b1x").css("display","block");
		},function(){
		$(".b1x").css("display","none");
	});
	
	$(".b1").click(function(){
		subClass = "miner";
		milHide();
		show(".f");
	});
	
	$(".b2").hover(function(){
		$(".b2x").css("display","block");
		},function(){
		$(".b2x").css("display","none");
	});
	
	$(".b2").click(function(){
		subClass = "transport";
		milHide();
		show(".f");
	});
	
	$(".b3").hover(function(){
		$(".b3x").css("display","block");
		},function(){
		$(".b3x").css("display","none");
	});
	
	$(".b3").click(function(){
		subClass = "gatherer";
		milHide();
		show(".f");
	});
	
	$(".b4").hover(function(){
		$(".b4x").css("display","block");
		},function(){
		$(".b4x").css("display","none");
	});
	
	$(".b4").click(function(){
		subClass = "digger";
		milHide();
		show(".f");
	});
	
	
	
	
	
	$(".c1").hover(function(){
		$(".c1x").css("display","block");
		},function(){
		$(".c1x").css("display","none");
	});
	
	$(".c1").click(function(){
		subClass = "researcher";
		milHide();
		show(".f");
	});
	
	$(".c2").hover(function(){
		$(".c2x").css("display","block");
		},function(){
		$(".c2x").css("display","none");
	});
	
	$(".c2").click(function(){
		subClass = "fieldAgent";
		milHide();
		show(".f");
	});
	
	$(".c3").hover(function(){
		$(".c3x").css("display","block");
		},function(){
		$(".c3x").css("display","none");
	});
	
	$(".c3").click(function(){
		subClass = "cartographer";
		milHide();
		show(".f");
	});
	
	$(".c4").hover(function(){
		$(".c4x").css("display","block");
		},function(){
		$(".c4x").css("display","none");
	});
	
	$(".c4").click(function(){
		subClass = "brain";
		milHide();
		show(".f");
	});
	
	
	
	
	
	
	
	$(".d1").hover(function(){
		$(".d1x").css("display","block");
		},function(){
		$(".d1x").css("display","none");
	});
	
	$(".d1").click(function(){
		subClass = "tank";
		milHide();
		show(".f");
	});
	
	$(".d2").hover(function(){
		$(".d2x").css("display","block");
		},function(){
		$(".d2x").css("display","none");
	});
	
	$(".d2").click(function(){
		subClass = "slicer";
		milHide();
		show(".f");
	});
	
	$(".d3").hover(function(){
		$(".d3x").css("display","block");
		},function(){
		$(".d3x").css("display","none");
	});
	
	$(".d3").click(function(){
		subClass = "spitter";
		milHide();
		show(".f");
	});
	
	$(".d4").hover(function(){
		$(".d4x").css("display","block");
		},function(){
		$(".d4x").css("display","none");
	});
	
	$(".d4").click(function(){
		subClass = "janitor";
		milHide();
		show(".f");
	});
	
	
	
	
	
	
	
	
	$(".e1").hover(function(){
		$(".e1x").css("display","block");
		},function(){
		$(".e1x").css("display","none");
	});
	
	$(".e1").click(function(){
		subClass = "dancer";
		milHide();
		show(".f");
	});
	
	$(".e2").hover(function(){
		$(".e2x").css("display","block");
		},function(){
		$(".e2x").css("display","none");
	});
	
	$(".e2").click(function(){
		subClass = "actor";
		milHide();
		show(".f");
	});
	
	$(".e3").hover(function(){
		$(".e3x").css("display","block");
		},function(){
		$(".e3x").css("display","none");
	});
	
	$(".e3").click(function(){
		subClass = "grinder";
		milHide();
		show(".f");
	});
	
	$(".e4").hover(function(){
		$(".e4x").css("display","block");
		},function(){
		$(".e4x").css("display","none");
	});
	
	$(".e4").click(function(){
		subClass = "whisperer";
		milHide();
		show(".f");
	});
	
	
	
	
	
	
	
	$(".f1").hover(function(){
		$(".f1x").css("display","block");
		},function(){
		$(".f1x").css("display","none");
	});
	
	$(".f1").click(function(){
		origin = "depths";
		milHide();
		show(".g");
	});
	
	$(".f2").hover(function(){
		$(".f2x").css("display","block");
		},function(){
		$(".f2x").css("display","none");
	});
	
	$(".f2").click(function(){
		origin = "shallows";
		milHide();
		show(".g");
	});
	
	$(".f3").hover(function(){
		$(".f3x").css("display","block");
		},function(){
		$(".f3x").css("display","none");
	});
	
	$(".f3").click(function(){
		origin = "cave";
		milHide();
		show(".g");
	});
	
	$(".f4").hover(function(){
		$(".f4x").css("display","block");
		},function(){
		$(".f4x").css("display","none");
	});
	
	$(".f4").click(function(){
		origin = "grotto";
		milHide();
		show(".g");
	});
	
	
	
	
	
	
	
	
	
	
	
	
	$(".g1").hover(function(){
		$(".g1x").css("display","block");
		},function(){
		$(".g1x").css("display","none");
	});
	
	$(".g1").click(function(){
		star = "red";
		milHide();
		show(".h");
	});
	
	$(".g2").hover(function(){
		$(".g2x").css("display","block");
		},function(){
		$(".g2x").css("display","none");
	});
	
	$(".g2").click(function(){
		star = "white";
		milHide();
		show(".h");
	});
	
	$(".g3").hover(function(){
		$(".g3x").css("display","block");
		},function(){
		$(".g3x").css("display","none");
	});
	
	$(".g3").click(function(){
		star = "neutron";
		milHide();
		show(".h");
	});
	
	$(".g4").hover(function(){
		$(".g4x").css("display","block");
		},function(){
		$(".g4x").css("display","none");
	});
	
	$(".g4").click(function(){
		star = "new";
		milHide();
		show(".h");
	});
	
	
	
	
	
	
	
	
	
	$(".h1").hover(function(){
		$(".h1x").css("display","block");
		},function(){
		$(".h1x").css("display","none");
	});
	
	$(".h1").click(function(){
		friend = "queen";
		milHide();
		show(".i");
	});
	
	$(".h2").hover(function(){
		$(".h2x").css("display","block");
		},function(){
		$(".h2x").css("display","none");
	});
	
	$(".h2").click(function(){
		friend = "whisperer";
		milHide();
		show(".i");
	});
	
	$(".h3").hover(function(){
		$(".h3x").css("display","block");
		},function(){
		$(".h3x").css("display","none");
	});
	
	$(".h3").click(function(){
		friend = "miner";
		milHide();
		show(".i");
	});
	
	$(".h4").hover(function(){
		$(".h4x").css("display","block");
		},function(){
		$(".h4x").css("display","none");
	});
	
	$(".h4").click(function(){
		friend = "no";
		milHide();
		show(".i");
	});
	
	
	
	
	
	
	
	
	
	
	
	
	$(".i1").hover(function(){
		$(".i1x").css("display","block");
		},function(){
		$(".i1x").css("display","none");
	});
	
	$(".i1").click(function(){
		gender = "dominant";
		milHide();
		show(".j");
	});
	
	$(".i2").hover(function(){
		$(".i2x").css("display","block");
		},function(){
		$(".i2x").css("display","none");
	});
	
	$(".i2").click(function(){
		gender = "leftward";
		milHide();
		show(".j");
	});
	
	$(".i3").hover(function(){
		$(".i3x").css("display","block");
		},function(){
		$(".i3x").css("display","none");
	});
	
	$(".i3").click(function(){
		gender = "insubordinate";
		milHide();
		show(".j");
	});
	
	$(".i4").hover(function(){
		$(".i4x").css("display","block");
		},function(){
		$(".i4x").css("display","none");
	});
	
	$(".i4").click(function(){
		gender = "looping";
		milHide();
		show(".j");
	});
	
	
	
	
	
	
	
	
	
	
	
	$(".j1").hover(function(){
		$(".j1x").css("display","block");
		},function(){
		$(".j1x").css("display","none");
	});
	
	$(".j1").click(function(){
		attraction = "same";
		milHide();
		show(".k");
	});
	
	$(".j2").hover(function(){
		$(".j2x").css("display","block");
		},function(){
		$(".j2x").css("display","none");
	});
	
	$(".j2").click(function(){
		attraction = "opposite";
		milHide();
		show(".k");
	});
	
	$(".j3").hover(function(){
		$(".j3x").css("display","block");
		},function(){
		$(".j3x").css("display","none");
	});
	
	$(".j3").click(function(){
		attraction = "counter";
		milHide();
		show(".k");
	});
	
	$(".j4").hover(function(){
		$(".j4x").css("display","block");
		},function(){
		$(".j4x").css("display","none");
	});
	
	$(".j4").click(function(){
		attraction = "all";
		milHide();
		show(".k");
	});
	
	
	
	
	
	
	
	
	
	
	
	$(".k1").hover(function(){
		$(".k1x").css("display","block");
		},function(){
		$(".k1x").css("display","none");
	});
	
	$(".k1").click(function(){
		strength = "empathy";
		milHide();
		show(".l");
	});
	
	$(".k2").hover(function(){
		$(".k2x").css("display","block");
		},function(){
		$(".k2x").css("display","none");
	});
	
	$(".k2").click(function(){
		strength = "judgement";
		milHide();
		show(".l");
	});
	
	$(".k3").hover(function(){
		$(".k3x").css("display","block");
		},function(){
		$(".k3x").css("display","none");
	});
	
	$(".k3").click(function(){
		strength = "smell";
		milHide();
		show(".l");
	});
	
	$(".k4").hover(function(){
		$(".k4x").css("display","block");
		},function(){
		$(".k4x").css("display","none");
	});
	
	$(".k4").click(function(){
		strength = "poetry";
		milHide();
		show(".l");
	});
	
	
	
	
	
	
	
	
	
	
	
	$(".l1").hover(function(){
		$(".l1x").css("display","block");
		},function(){
		$(".l1x").css("display","none");
	});
	
	$(".l1").click(function(){
		weakness = "hubris";
		milHide();
		show(".m");
	});
	
	$(".l2").hover(function(){
		$(".l2x").css("display","block");
		},function(){
		$(".l2x").css("display","none");
	});
	
	$(".l2").click(function(){
		weakness = "scale";
		milHide();
		show(".m");
	});
	
	$(".l3").hover(function(){
		$(".l3x").css("display","block");
		},function(){
		$(".l3x").css("display","none");
	});
	
	$(".l3").click(function(){
		weakness = "miscalculation";
		milHide();
		show(".m");
	});
	
	$(".l4").hover(function(){
		$(".l4x").css("display","block");
		},function(){
		$(".l4x").css("display","none");
	});
	
	$(".l4").click(function(){
		weakness = "trust";
		milHide();
		show(".m");
	});
	
	
	
	
	
	
	
	
	
	
	$(".m1").hover(function(){
		$(".m1x").css("display","block");
		},function(){
		$(".m1x").css("display","none");
	});
	
	$(".m1").click(function(){
		love = "level3";
		milHide();
		show(".n");
	});
	
	$(".m2").hover(function(){
		$(".m2x").css("display","block");
		},function(){
		$(".m2x").css("display","none");
	});
	
	$(".m2").click(function(){
		love = "level2";
		milHide();
		show(".n");
	});
	
	$(".m3").hover(function(){
		$(".m3x").css("display","block");
		},function(){
		$(".m3x").css("display","none");
	});
	
	$(".m3").click(function(){
		love = "level1";
		milHide();
		show(".n");
	});
	
	$(".m4").hover(function(){
		$(".m4x").css("display","block");
		},function(){
		$(".m4x").css("display","none");
	});
	
	$(".m4").click(function(){
		love = "no";
		milHide();
		show(".n");
	});
	
	
	
	
	
	
	
	
	
	$(".n1").hover(function(){
		$(".n1x").css("display","block");
		},function(){
		$(".n1x").css("display","none");
	});
	
	$(".n1").click(function(){
		downfall = "hesitation";
		milHide();
		show(".o");
	});
	
	$(".n2").hover(function(){
		$(".n2x").css("display","block");
		},function(){
		$(".n2x").css("display","none");
	});
	
	$(".n2").click(function(){
		downfall = "miss";
		milHide();
		show(".o");
	});
	
	$(".n3").hover(function(){
		$(".n3x").css("display","block");
		},function(){
		$(".n3x").css("display","none");
	});
	
	$(".n3").click(function(){
		downfall = "cowardice";
		milHide();
		show(".o");
	});
	
	$(".n4").hover(function(){
		$(".n4x").css("display","block");
		},function(){
		$(".n4x").css("display","none");
	});
	
	$(".n4").click(function(){
		downfall = "ideal";
		milHide();
		show(".o");
	});
	
	
	
	
	
	
	
	
	
	$(".o1").hover(function(){
		$(".o1x").css("display","block");
		},function(){
		$(".o1x").css("display","none");
	});
	
	$(".o1").click(function(){
//		downfall = "hesitation";
		milHide();
		show(".p");
	});
	
	
	
	
	
	
	
	$(".p1").hover(function(){
		$(".p1x").css("display","block");
		},function(){
		$(".p1x").css("display","none");
	});
	
	$(".p1").click(function(){
//		downfall = "hesitation";
		milHide();
		show(".q");
	});
	
	
	
	
	
	
	
	
	
	
	$(".q1").hover(function(){
		$(".q1x").css("display","block");
		},function(){
		$(".q1x").css("display","none");
	});
	
	$(".q1").click(function(){
//		downfall = "hesitation";
		milHide();
		show(".r");
	});
	
	
	
	
	
	
	
	
	
	
	
	//--------------------------------------------------------------
	//--------------------------------------------------------------
	//--------------------------------------------------------------
	
	
	
	
	
	minImg("richardson");
	
	
	$(".minnow").click(function(){
	
		console.log("clicked minnow");

	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});