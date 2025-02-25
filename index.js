(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,1999,1171]]},
		{name:"index_atlas_2", frames: [[0,0,1999,1171]]},
		{name:"index_atlas_3", frames: [[0,0,1920,1081]]},
		{name:"index_atlas_4", frames: [[0,0,1920,1041],[0,1043,1920,651]]},
		{name:"index_atlas_5", frames: [[0,1575,1860,402],[0,1144,1920,429],[0,0,1768,647],[0,649,1920,493]]},
		{name:"index_atlas_6", frames: [[0,0,1083,561],[0,563,1083,561],[1085,539,633,633],[0,1126,1075,334],[502,1554,1441,149],[1077,1174,749,378],[0,1462,500,500],[1085,0,872,537]]},
		{name:"index_atlas_7", frames: [[0,1438,283,530],[0,906,283,530],[285,1740,561,236],[1601,716,406,277],[1247,0,710,268],[285,1231,598,234],[885,1165,400,309],[353,875,400,354],[1199,716,400,309],[353,437,900,180],[0,361,351,543],[0,0,579,359],[848,1686,590,208],[1287,1027,590,208],[799,1476,590,208],[353,619,608,254],[848,1896,826,143],[755,875,442,288],[1255,437,555,277],[581,0,664,298],[285,1467,512,271],[581,300,1224,135],[1440,1626,393,256],[1391,1237,291,387]]},
		{name:"index_atlas_8", frames: [[1930,495,76,185],[582,1033,149,190],[1062,839,200,200],[741,990,147,195],[0,960,200,200],[0,182,481,163],[1241,1355,200,73],[1062,1144,360,82],[833,0,663,133],[282,1205,275,93],[602,878,121,64],[1648,1144,121,64],[1264,1026,519,71],[202,960,537,71],[1002,548,76,51],[1456,175,18,18],[1785,1026,182,182],[766,304,60,60],[529,0,302,302],[291,347,182,182],[0,548,1000,76],[1565,1308,250,78],[0,1192,280,96],[0,878,600,80],[833,197,1000,80],[0,1316,826,24],[483,304,281,235],[1002,602,281,235],[833,279,288,267],[1062,1099,718,43],[1537,745,236,218],[1647,495,281,248],[1364,495,281,248],[1443,1355,98,98],[252,626,250,250],[1648,1210,264,96],[1362,175,47,16],[766,453,60,22],[504,626,250,250],[1498,0,434,195],[1307,1273,256,80],[401,1033,179,170],[1364,279,331,214],[1697,279,331,214],[1775,745,180,279],[678,1342,243,62],[1537,965,221,37],[202,1033,197,157],[957,1228,348,69],[2033,0,3,246],[0,626,250,250],[0,1342,232,73],[456,1342,220,71],[483,182,24,21],[1099,1299,140,140],[907,808,90,25],[1123,279,239,321],[833,135,527,46],[890,1154,103,22],[1062,1064,103,22],[833,183,413,12],[1835,197,72,72],[957,1299,140,140],[907,709,74,68],[1411,175,43,16],[907,779,91,27],[766,427,62,24],[756,626,149,362],[0,347,289,139],[1285,602,71,72],[1285,745,250,250],[0,0,527,180],[0,488,162,56],[1914,1210,103,91],[733,1187,222,127],[234,1342,220,71],[1817,1308,220,71],[1424,1144,222,127],[1934,0,97,262],[164,488,125,39],[1957,756,69,69],[1957,827,69,69],[766,366,59,59],[907,626,82,81],[1362,135,129,38],[907,839,153,313],[1957,682,71,72],[1264,997,187,21],[1062,1041,160,21]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._20_point = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5_point = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bigCar1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bigCar2 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_19 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_21 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_22 = function() {
	this.initialize(img.CachedTexturedBitmap_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1968,2138);


(lib.CachedTexturedBitmap_23 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_25 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_27 = function() {
	this.initialize(img.CachedTexturedBitmap_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1976,2140);


(lib.CachedTexturedBitmap_28 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_29 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_30 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_31 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_33 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_46 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_47 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_49 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_51 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Car1L = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Car1R = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Car = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.carBL = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.carBM = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.carBR = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.chooUrLub = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CiazGlow = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CiazGlowL = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CiazGlowR = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Cityscape = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Cityscapecopy = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.congrats_screen_last = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.elecPole = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Ellipse1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Ellipse2btn = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Exit_Full_screen = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.fb_gl_signin = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Finish = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.FinishLine = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.FUEL = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Full_screen = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.GO = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.google_sign_in = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.grass_buldle = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.grayBlue = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.grayCrashed = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Hand = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.helixOil = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.hotAir1 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hotAir2 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hotAir3 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Layer1copy = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Layer18 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Layer19 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Layer21 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Layer22 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Line = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.linesNew = function() {
	this.initialize(ss["index_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.montains = function() {
	this.initialize(img.montains);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2132,321);


(lib.Mute = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.navig_inst = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.nextnew = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.nreBG = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.playAgai = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Polygon1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Regularoilcopy = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.RETRY = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.RMoil = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.road = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rotateBGjpg = function() {
	this.initialize(img.rotateBGjpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2210,1081);


(lib.rtfnl = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.score5 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.SELECTYOURCAR = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Shadow = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Shadowcopy = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Shape1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.shareonsocial = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Shelfuel = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.Shell_jan2013_PECTEN_RGB = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.Start = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.START = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.tapinstructions = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.TIME = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.TimeUp = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.tree1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.tree_cutted = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.twitter_btn = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.Unmute = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Untitled2 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_2 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_3 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_4 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy10 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy11 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy11_1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy11_2 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy11_3 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy12 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy7 = function() {
	this.initialize(ss["index_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy8 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObjectcopy9 = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_1copy3 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_1copy4 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_2_1 = function() {
	this.initialize(ss["index_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_2copy2 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject_3_1 = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.warning = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.white_bg_billboard = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.windM = function() {
	this.initialize(ss["index_atlas_7"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.wtsAppImg = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.YOURSCORE = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.YOURTIME = function() {
	this.initialize(ss["index_atlas_8"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wind_mil_movieClips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.round(3 * Math.random()));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.windM();
	this.instance.parent = this;
	this.instance.setTransform(-146,-387);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-387,291,387);


(lib.whatsAppshraeButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wtsAppImg();
	this.instance.parent = this;
	this.instance.setTransform(-36,-36);

	this.instance_1 = new lib.CachedTexturedBitmap_33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.55,-45.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsAppshraeButton, new cjs.Rectangle(-45.5,-45.5,91,91), null);


(lib.twitterShareButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.twitter_btn();
	this.instance.parent = this;
	this.instance.setTransform(-36,-36);

	this.instance_1 = new lib.CachedTexturedBitmap_33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.55,-45.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.twitterShareButton, new cjs.Rectangle(-45.5,-45.5,91,91), null);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_31();
	this.instance.parent = this;
	this.instance.setTransform(-14.95,-14.95,0.0992,0.0992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,29.9,29.9);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_30();
	this.instance.parent = this;
	this.instance.setTransform(-15,-15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hand();
	this.instance.parent = this;
	this.instance.setTransform(-289.5,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.5,-179.5,579,359);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hand();
	this.instance.parent = this;
	this.instance.setTransform(-289.5,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.5,-179.5,579,359);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Hand();
	this.instance.parent = this;
	this.instance.setTransform(-289.5,-179.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.5,-179.5,579,359);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GO();
	this.instance.parent = this;
	this.instance.setTransform(-217,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-97.5,434,195);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.GO();
	this.instance.parent = this;
	this.instance.setTransform(-217,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-217,-97.5,434,195);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20_point();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-38,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-92.5,76,185);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-38,-92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-92.5,76,185);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-95,149,190);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-74.5,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-95,149,190);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-97.5,147,195);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-97.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-97.5,147,195);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._20_point();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Cityscape();
	this.instance.parent = this;
	this.instance.setTransform(-1114.85,-201,1.1988,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1114.8,-201,2229.7,402);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_29();
	this.instance.parent = this;
	this.instance.setTransform(-14.95,-14.95,1.6666,1.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-14.9,30,30);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._5_point();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.TREEIMG1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tree1();
	this.instance.parent = this;
	this.instance.setTransform(-0.75,-1.8,0.01,0.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TREEIMG1, new cjs.Rectangle(-0.7,-1.8,1.5,3.6), null);


(lib.timeUpRetryMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.RETRY();
	this.instance.parent = this;
	this.instance.setTransform(-58,173.1);

	this.instance_1 = new lib.VectorSmartObjectcopy11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-128,150.1);

	this.instance_2 = new lib.TimeUp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-221,-221.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeUpRetryMc, new cjs.Rectangle(-221,-221.1,442,442.2), null);


(lib.timeBoxMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function IFiOS() {
				
				  var iDevices = [
				    'iPad Simulator',
				    'iPhone Simulator',
				    'iPod Simulator',
				    'iPad',
				    'iPhone',
				    'iPod'
				  ];
				
				  if (!!navigator.platform) {
				    while (iDevices.length) {
				      if (navigator.platform === iDevices.pop()){ return true; }
				    }
				  }
				
				  return false;
				}
				
				if(IFiOS()){
					
					this.timerTXT.y=-9.45
					
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.TIME();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-40.45);

	this.instance_1 = new lib.CachedTexturedBitmap_28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(15.6,-0.45,0.5,0.5);

	this.timerTXT = new cjs.Text("120", "normal 400 30px 'Roboto'", "#FFFFFF");
	this.timerTXT.name = "timerTXT";
	this.timerTXT.textAlign = "right";
	this.timerTXT.lineHeight = 42;
	this.timerTXT.lineWidth = 68;
	this.timerTXT.parent = this;
	this.timerTXT.setTransform(7.6,-1.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.timerTXT);
	}

	this.instance_2 = new lib.VectorSmartObjectcopy12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62.5,-7.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.timerTXT},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeBoxMc, new cjs.Rectangle(-62.5,-40.4,125,80.9), null);


(lib.taprightbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_27();
	this.instance.parent = this;
	this.instance.setTransform(-748.05,-952.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.taprightbtn, new cjs.Rectangle(-748,-952.7,988,1070), null);


(lib.tapMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_23();
	this.instance.parent = this;
	this.instance.setTransform(-57,-21.6,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(793.4,-34.25,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_51();
	this.instance_2.parent = this;
	this.instance_2.setTransform(777.55,-35.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},24).wait(26));

	// Layer_2
	this.instance_3 = new lib.CachedTexturedBitmap_51();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-77.45,-22.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},24).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-35.4,1155,52.7);


(lib.tapleftmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_22();
	this.instance.parent = this;
	this.instance.setTransform(-204,-953.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tapleftmc, new cjs.Rectangle(-204,-953.1,984,1069), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.white_bg_billboard();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.5756,1.5756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,241.1,493.2), null);


(lib.skipButtonHome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedTexturedBitmap_17();
	this.instance.parent = this;
	this.instance.setTransform(-68.05,-21,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.CachedTexturedBitmap_19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.15,-13.2,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_49();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-70.1,-23,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-30.15,-13.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.1,-23,140,48.5);


(lib.shellOilBtnMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_16();
	this.instance.parent = this;
	this.instance.setTransform(-165.65,152.75,0.5,0.5);

	this.instance_1 = new lib.helixOil();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90,-139.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shellOilBtnMC, new cjs.Rectangle(-165.6,-139.5,331.5,358.8), null);


(lib.shelDashOnStartMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Untitled2();
	this.instance.parent = this;
	this.instance.setTransform(-277.5,-138.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shelDashOnStartMc, new cjs.Rectangle(-277.5,-138.5,555,277), null);


(lib.selectUrCarText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.SELECTYOURCAR();
	this.instance.parent = this;
	this.instance.setTransform(-265.9,-23,1.0092,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.selectUrCarText, new cjs.Rectangle(-265.9,-23,531.9,46), null);


(lib.RotateDevice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.portMCclicp=this;
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		
		
		if(window.userLandedOnMobile==true){
		  window.open("/p", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.instance = new lib.VectorSmartObject_2_1();
	this.instance.parent = this;
	this.instance.setTransform(-277,-507,0.5975,0.6029);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.instance_1 = new lib.CachedTexturedBitmap_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-94.25,78.4,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.instance_2 = new lib.rotateBGjpg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1105,-541);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1105,-541,2210,1081);


(lib.redCarRigntFae = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Car1L();
	this.instance.parent = this;
	this.instance.setTransform(-140.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redCarRigntFae, new cjs.Rectangle(-140.5,-117.5,281,235), null);


(lib.redCarMcClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bigCar1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redCarMcClip, new cjs.Rectangle(0,0,1083,561), null);


(lib.redCarLeftFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Car1R();
	this.instance.parent = this;
	this.instance.setTransform(-140.5,-117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redCarLeftFace, new cjs.Rectangle(-140.5,-117.5,281,235), null);


(lib.redCarCenter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Car();
	this.instance.parent = this;
	this.instance.setTransform(-144,-133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redCarCenter, new cjs.Rectangle(-144,-133.5,288,267), null);


(lib.reachTheFinishMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.rtfnl();
	this.instance.parent = this;
	this.instance.setTransform(-374.5,-189);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.reachTheFinishMC, new cjs.Rectangle(-374.5,-189,749,378), null);


(lib.R2Car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.instance = new lib.carBR();
	this.instance.parent = this;
	this.instance.setTransform(-115,-99,0.655,0.6549);

	this.instance_1 = new lib.CiazGlowR();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-141,-124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-124,288,248);


(lib.pointBoxMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function IFiOS() {
				
				  var iDevices = [
				    'iPad Simulator',
				    'iPhone Simulator',
				    'iPod Simulator',
				    'iPad',
				    'iPhone',
				    'iPod'
				  ];
				
				  if (!!navigator.platform) {
				    while (iDevices.length) {
				      if (navigator.platform === iDevices.pop()){ return true; }
				    }
				  }
				
				  return false;
				}
				
				if(IFiOS()){
					
					this.fuelTXT.y=-5
					
					}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.fuelTXT = new cjs.Text("9999", "normal 400 30px 'Roboto'", "#FFFFFF");
	this.fuelTXT.name = "fuelTXT";
	this.fuelTXT.textAlign = "center";
	this.fuelTXT.lineHeight = 42;
	this.fuelTXT.lineWidth = 105;
	this.fuelTXT.parent = this;
	this.fuelTXT.setTransform(0.2,4.1);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.fuelTXT);
	}

	this.instance = new lib.CachedTexturedBitmap_47();
	this.instance.parent = this;
	this.instance.setTransform(-62.5,-2.9,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.5,-42.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.fuelTXT}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pointBoxMc, new cjs.Rectangle(-62.5,-42.9,125,88.9), null);


(lib.playAgaininCongrts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.playAgai();
	this.instance.parent = this;
	this.instance.setTransform(-110,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.playAgaininCongrts, new cjs.Rectangle(-110,-35.5,220,71), null);


(lib.otherOilBtnMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.RMoil();
	this.instance.parent = this;
	this.instance.setTransform(-121,-153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.otherOilBtnMC, new cjs.Rectangle(-121,-153,239,321), null);


(lib.Obsticlesmovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// Layer_1
	this.instance = new lib.VectorSmartObject_3_1();
	this.instance.parent = this;
	this.instance.setTransform(-109,-28,1.7,1.4384);

	this.instance_1 = new lib.VectorSmartObject_2copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74.9,-56.2,1.4021,1.4017);

	this.instance_2 = new lib.VectorSmartObject_1copy4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.85,-49.2,1.4021,1.4017);

	this.instance_3 = new lib.VectorSmartObjectcopy11_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-49,-141);

	this.instance_4 = new lib.VectorSmartObject_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-66.75,-50.4,0.9998,1.0005);

	this.instance_5 = new lib.Layer18();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-121.95,-12.55,0.9998,1.0005);

	this.instance_6 = new lib.VectorSmartObject_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-100,-37.9,1.1806,1.1807);

	this.instance_7 = new lib.Layer19();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-130.5,-5.9,1.1806,1.1807);

	this.instance_8 = new lib.Layer21();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-71.85,-66.95,0.7471,0.7684);

	this.instance_9 = new lib.Layer22();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-129.8,13.5,0.7471,0.7684);

	this.instance_10 = new lib.tree_cutted();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-145,-70);

	this.instance_11 = new lib.grass_buldle();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-90,-85);

	this.instance_12 = new lib.grayBlue();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-130,-84,0.7855,0.7855);

	this.instance_13 = new lib.grayCrashed();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-130,-84,0.7855,0.7855);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-141,289,262);


(lib.nextButtonMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.nextnew();
	this.instance.parent = this;
	this.instance.setTransform(-116,-37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-37,232,73);


(lib.nextBtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_11();
	this.instance.parent = this;
	this.instance.setTransform(-430.55,-272.35,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-430.55,-272.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.5,-272.3,999.5,585.5);


(lib.muteUnmute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Unmute();
	this.instance.parent = this;
	this.instance.setTransform(-125,-125);

	this.instance_1 = new lib.Mute();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-125,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,250);


(lib.lowOilWarningMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.warning();
	this.instance.parent = this;
	this.instance.setTransform(-196.5,-128);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lowOilWarningMc, new cjs.Rectangle(-196.5,-128,393,256), null);


(lib.logoHelixMail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Shell_jan2013_PECTEN_RGB();
	this.instance.parent = this;
	this.instance.setTransform(-37,-34,1.0001,0.9998);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoHelixMail, new cjs.Rectangle(-37,-34,74,68), null);


(lib.L2Car_original = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.carBL();
	this.instance.parent = this;
	this.instance.setTransform(-148,-102,0.665,0.665);

	this.instance_1 = new lib.CiazGlowL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140.5,-124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-124,288.5,248);


(lib.L2Car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.carBM();
	this.instance.parent = this;
	this.instance.setTransform(-132,-115,0.6525,0.6525);

	this.instance_1 = new lib.CiazGlow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-115,261,231);


(lib.instrctBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.nextnew();
	this.instance.parent = this;
	this.instance.setTransform(-116,-37);

	this.instance_1 = new lib.CachedTexturedBitmap_10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124.8,-47.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,-47.8,240.8,83.8);


(lib.helixOilonroadMcORDINARY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Regularoilcopy();
	this.instance.parent = this;
	this.instance.setTransform(-70,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.helixOilonroadMcORDINARY, new cjs.Rectangle(-70,-87.5,140,140), null);


(lib.helixOilonroadMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Shelfuel();
	this.instance.parent = this;
	this.instance.setTransform(-70,-87);

	this.instance_1 = new lib.Shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-51,65);

	this.instance_2 = new lib.Shadowcopy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51,65.5);

	this.instance_3 = new lib.Regularoilcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-70,-87.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-87.5,140,175);


(lib.googleLoginButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.google_sign_in();
	this.instance.parent = this;
	this.instance.setTransform(-128,-40);

	this.instance_1 = new lib.CachedTexturedBitmap_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-149.6,-58.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.6,-58.4,299,117);


(lib.gamestartbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.START();
	this.instance.parent = this;
	this.instance.setTransform(-46.2,-16.25);

	this.instance_1 = new lib.VectorSmartObjectcopy11_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110,-35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-35.5,220,71);


(lib.gameMapTringle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Polygon1();
	this.instance.parent = this;
	this.instance.setTransform(-12,-10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameMapTringle, new cjs.Rectangle(-12,-10.5,24,21), null);


(lib.fullNormScBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.instance = new lib.Full_screen();
	this.instance.parent = this;
	this.instance.setTransform(-124,-125);

	this.instance_1 = new lib.Exit_Full_screen();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-125,250,250);


(lib.redBarMcGameMap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_7();
	this.instance.parent = this;
	this.instance.setTransform(0,-6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redBarMcGameMap, new cjs.Rectangle(0,-6,413,12), null);


(lib.redBarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(0,-20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redBarMc, new cjs.Rectangle(0,-20,500,40), null);


(lib.fuel_is_over_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(-112.5,-20.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedTexturedBitmap_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-169,-21.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.RETRY();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-57.95,247.6);

	this.instance_3 = new lib.VectorSmartObjectcopy11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-127.95,224.6);

	this.instance_4 = new lib.TimeUp();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-221,-144);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fuel_is_over_MC, new cjs.Rectangle(-221,-144,442,439.6), null);


(lib.finishLineMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FinishLine();
	this.instance.parent = this;
	this.instance.setTransform(-720.5,-74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.finishLineMC, new cjs.Rectangle(-720.5,-74.5,1441,149), null);


(lib.fbSgareBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shareonsocial();
	this.instance.parent = this;
	this.instance.setTransform(-36,-36);

	this.instance_1 = new lib.CachedTexturedBitmap_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.55,-45.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fbSgareBtn, new cjs.Rectangle(-45.5,-45.5,91,91), null);


(lib.fbLoginButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fb_gl_signin();
	this.instance.parent = this;
	this.instance.setTransform(-132,-48);

	this.instance_1 = new lib.CachedTexturedBitmap_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-140.2,-59.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.2,-59,280.5,118);


(lib.elePolMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(Math.round(3 * Math.random()));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer_1
	this.instance = new lib.elecPole();
	this.instance.parent = this;
	this.instance.setTransform(-175.5,-271.5);

	this.instance_1 = new lib.windM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146,-194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1).to({_off:false,x:-176,y:-272},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-272,351.5,543.5);


(lib.roadanimleft_fast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		  // this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyoAtUMAAAhanMBlRAAAMAAABang");
	mask.setTransform(2.025,43.0887);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-154,-245);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146,-265);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-246.9,291,531.9);


(lib.roadanimleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyoAtyMAAAhbjMBlRAAAMAAABbjg");
	mask.setTransform(2.025,43.075);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-154,-245);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146,-265);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-249.9,291,534.9);


(lib.roadanim_right_fast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   //this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyoAtoMAAAhbPMBlRAAAMAAABbPg");
	mask.setTransform(2.025,43.025);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-154,-245);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-146,-265);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-248.9,291,533.9);


(lib.didYouKnow_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_3
	this.instance = new lib.hotAir1();
	this.instance.parent = this;
	this.instance.setTransform(-295,-104);

	this.instance_1 = new lib.hotAir2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-295,-104);

	this.instance_2 = new lib.hotAir3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-295,-104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.instance_3 = new lib.VectorSmartObject();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-264,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-295,-104,590,208);


(lib.crashedMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible=false;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.score5();
	this.instance.parent = this;
	this.instance.setTransform(-97,-167,0.3859,0.3859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.crashedMc, new cjs.Rectangle(-97,-167,193,193), null);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.VectorSmartObjectcopy9();
	this.instance.parent = this;
	this.instance.setTransform(-612,-67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(-612,-67.5,1224,135), null);


(lib.chooSeUrLubriMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.chooUrLub();
	this.instance.parent = this;
	this.instance.setTransform(-359,-21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chooSeUrLubriMc, new cjs.Rectangle(-359,-21.5,718,43), null);


(lib.blueCarMcClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.bigCar2();
	this.instance.parent = this;
	this.instance.setTransform(103,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.blueCarMcClip, new cjs.Rectangle(103,-70,1083,561), null);


(lib.aroCS_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Ellipse2btn();
	this.instance.parent = this;

	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.1,-144.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.1,-144.2,316.5,316.5);


(lib.wind_elec_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   this.stop();
		}
	}
	this.frame_112 = function() {
		/*this.stop();
		
		var _ref = this;
		var AnimIntTime = 1000 + (1000 * (Math.round(3 * Math.random())));
		
		setTimeout(replayMe, AnimIntTime)
		
		function replayMe() {
		 _ref.gotoAndPlay(0);
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(112).call(this.frame_112).wait(1));

	// Layer_1
	this.eleWind = new lib.wind_mil_movieClips();
	this.eleWind.name = "eleWind";
	this.eleWind.parent = this;
	this.eleWind.setTransform(-4,7.95,0.02,0.02,0,0,0,0,2.5);
	this.eleWind.alpha = 0.8398;

	this.timeline.addTween(cjs.Tween.get(this.eleWind).to({regX:0.1,regY:0.1,scaleX:1.65,scaleY:1.65,x:877.25,y:292.45,alpha:1},93,cjs.Ease.quadIn).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-346.2,1123.3000000000002,638.5);


(lib.treeLcodeAnim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frameTree = this;
		
		createjs.Tween.get(frameTree.tMc).to({x:1077, y:905}, 88, createjs.Ease.sineIn).call(handleComplete);
		
		
		function handleComplete(event) {
		
			frameTree.tMc.x =0;
			frameTree.tMc.y =0;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.tMc = new lib.TREEIMG1();
	this.tMc.name = "tMc";
	this.tMc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.tMc).wait(1));

}).prototype = getMCSymbolPrototype(lib.treeLcodeAnim_1, new cjs.Rectangle(-0.7,-1.8,1.5,3.6), null);


(lib.tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (window.gameStatus == 'off') {
		
		}
		this.stop();
		
		
		//
	}
	this.frame_366 = function() {
		this.gotoAndPlay("76");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(366).call(this.frame_366).wait(92));

	// Layer_2
	this.treeLeft = new lib.treeLcodeAnim_1();
	this.treeLeft.name = "treeLeft";
	this.treeLeft.parent = this;
	this.treeLeft.setTransform(1081.75,-75.2);

	this.timeline.addTween(cjs.Tween.get(this.treeLeft).wait(458));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1081,-77,1.5,3.5999999999999943);


(lib.pointFive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,190.3);
	this.instance._off = true;

	this.instance_1 = new lib.Tween13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,25,0.55,0.55);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:25},4).to({_off:true,scaleX:0.55,scaleY:0.55,alpha:0},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-74.9,200.1,365.20000000000005);


(lib.go123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
	}
	this.frame_2 = function() {
		document.playMyMp3('cd1_2_3', true, false);
	}
	this.frame_20 = function() {
		document.playMyMp3('cd1_2_3', false, false);
		document.playMyMp3('cd1_2_3', true, false);
	}
	this.frame_40 = function() {
		document.playMyMp3('cd1_2_3', false, false);
		document.playMyMp3('cd1_2_3', true, false);
	}
	this.frame_59 = function() {
		document.playMyMp3('cd1_2_3', false, false);
		document.playMyMp3('cd1_2_3', true, false);
	}
	this.frame_73 = function() {
		document.playMyMp3('cd_go', true, false);
	}
	this.frame_76 = function() {
		this.stop()
		this.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(18).call(this.frame_20).wait(20).call(this.frame_40).wait(19).call(this.frame_59).wait(14).call(this.frame_73).wait(3).call(this.frame_76).wait(1));

	// GO
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3.5,0,4.46,4.46);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,0);

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(4.45,-0.45,4.396,4.3958);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.5,-0.5);

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.55,-2.55,5.092,5.0919,0,0,0,0.3,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3,0);

	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-1.2,1.8432,1.8428,0,0,0,0,-0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween15("synched",0);
	this.instance_7.parent = this;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_4}]},8).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_6}]},8).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},3).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,alpha:1},10).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:4.5,y:-0.5,alpha:1},11).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},0).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,x:3,y:0,alpha:1},11).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).to({_off:true,regY:0,scaleX:1,scaleY:1,y:0,alpha:1},8).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57).to({_off:false},8).wait(7).to({startPosition:0},0).to({regY:-0.4,scaleX:4.6082,scaleY:4.6072,y:-2.3,alpha:0},3).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-999.9,-471,1999.9,942);


(lib.timeBarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5_txt
	this.instance = new lib.FUEL();
	this.instance.parent = this;
	this.instance.setTransform(-231,65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkFAKaQhPAAg4g4Qg3g3AAhPIAAgBQAAhOA3g4QA4g3BPAAMBILAAAQBPAAA3A3QA4A4AABOIAAABQAABPg4A3Qg3A4hPAAg");
	mask.setTransform(2.35,66.6);

	// Layer_2redBar
	this.redBarMc = new lib.redBarMc();
	this.redBarMc.name = "redBarMc";
	this.redBarMc.parent = this;
	this.redBarMc.setTransform(-247.65,114.2);

	var maskedShapeInstanceList = [this.redBarMc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.redBarMc).wait(1));

	// Layer_4_yellowBar
	this.instance_1 = new lib.CachedTexturedBitmap_46();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-247.65,95.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeBarMc, new cjs.Rectangle(-247.6,65,500,68.19999999999999), null);


(lib.gameMapMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5_txt
	this.instance = new lib.Finish();
	this.instance.parent = this;
	this.instance.setTransform(387,24);

	this.instance_1 = new lib.Start();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.tMc = new lib.gameMapTringle();
	this.tMc.name = "tMc";
	this.tMc.parent = this;
	this.tMc.setTransform(0,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.tMc).wait(1));

	// Layer_3mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A+6A8QgkAAgZgSQgZgRAAgZIAAAAQAAgYAZgSQAZgRAkAAMA92AAAQAjAAAZARQAZASAAAYIAAAAQAAAZgZARQgZASgjAAg");
	mask.setTransform(206.5031,0.0196);

	// Layer_2redBar
	this.redBarMc = new lib.redBarMcGameMap();
	this.redBarMc.name = "redBarMc";
	this.redBarMc.parent = this;

	var maskedShapeInstanceList = [this.redBarMc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.redBarMc).wait(1));

	// Layer_4_yellowBar
	this.instance_2 = new lib.Shape1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameMapMc, new cjs.Rectangle(-20,-30,454,70), null);


(lib.elecPolMcHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(134));

	// Layer_1
	this.instance = new lib.elePolMc2();
	this.instance.parent = this;
	this.instance.setTransform(0.05,-6.55,0.02,0.02,0,0,0,2.5,0);
	this.instance.alpha = 0.6094;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.7813},37,cjs.Ease.quadIn).to({regX:-0.1,scaleX:1.2803,scaleY:1.2803,x:-968.45,y:-84.15,alpha:1},96,cjs.Ease.quadIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1193,-431.7,1196.6,695.2);


(lib.congratsBoardMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.visible=false;
		this.playAgianBtn.cursor = "pointer";
		
		this.wappBTN.addEventListener("click", MouseClicwappBTN.bind(this));
		this.wappBTN.cursor = "pointer";
		function MouseClicwappBTN() {
		
			console.log('share on whatsapp');
			
			shareOnSOcial('WAPP');
		}
		
		//----
		
		this.twBTN.addEventListener("click", MouseClictwBTN.bind(this));
		this.twBTN.cursor = "pointer";
		function MouseClictwBTN() {
		
			console.log('share on twitter');
			shareOnSOcial('TW');
		}
		
		//----
		
		this.fbBTN.addEventListener("click", MouseClicfbBTN.bind(this));
		this.fbBTN.cursor = "pointer";
		function MouseClicfbBTN() {
			
			shareOnSOcial('FB');
		}
		/////////////////----//----//----//----//----//----//----
		//----//----//----//----//----//----//----//----
		
		
		var shareFrame= this;
		
		function shareOnSOcial(_parm) {
		
		var theScore= shareFrame.congsTXT.text;	
			
			switch (_parm) {
		
				case 'FB':				
							// Share on FB
							console.log('share on facebook');
							FB.ui({
							method: 'share_open_graph',
							action_type: 'og.likes',
							action_properties: JSON.stringify({
							object : {
								   'og:url': 'https://ashishkummar.github.io/carrace/', // your url to share
								   'og:title': 'Can you beat my score?',
								   'og:description': 'I just played the Shell Dash game and scored '+theScore+' points! Think you can beat my score? Give it a try: www.shelldash.in',
								   'og:image': 'https://ashishkummar.github.io/carrace/sharer_fb.jpg'
								}
						})
						}, function(response){});
							
						break;
							// end of  fb
				
						case 'TW':
							
					console.log('share on twitter');
				var twtrMsg = escape("I just played the Shell Dash game and scored "+theScore+" points! Think you can beat my score? Give it a try: https://ashishkummar.github.io/carrace/")
				var twtrURL="https://twitter.com/share?url='+escape(https://ashishkummar.github.io/carrace/)+'&text='"+twtrMsg;
				    window.open(twtrURL, '_blank');
				// Share on TW
					break;
					// end of  twitter
				case 'WAPP':
					console.log('share on whatsapp');
				
				var whatAppMsg = escape("I just played the Shell Dash game and scored "+theScore+" points! Think you can beat my score? Give it a try: https://ashishkummar.github.io/carrace/")
				var wsappurl = "whatsapp://send?text="+whatAppMsg;
					window.open(wsappurl, '_blank');		     
				
					// share on wapp
					break;
					// end of  wtsapp	
		
			}
		
		}
		
		
		//
		
		if(window.userLandedOnMobile==false){
			
		this.wappBTN.visible=false;
			this.wappBTN.x=-45;
			this.twBTN.x=45
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.spentTimeTXT = new cjs.Text("0000", "51px 'Arial'", "#404040");
	this.spentTimeTXT.name = "spentTimeTXT";
	this.spentTimeTXT.textAlign = "center";
	this.spentTimeTXT.lineHeight = 59;
	this.spentTimeTXT.lineWidth = 210;
	this.spentTimeTXT.parent = this;
	this.spentTimeTXT.setTransform(-165,-18.75);

	this.instance = new lib.YOURTIME();
	this.instance.parent = this;
	this.instance.setTransform(-245.5,-49.5);

	this.instance_1 = new lib.VectorSmartObject_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-274.5,-79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.spentTimeTXT}]}).wait(1));

	// Layer_4
	this.congsTXT = new cjs.Text("0000", "51px 'Arial'", "#404040");
	this.congsTXT.name = "congsTXT";
	this.congsTXT.textAlign = "center";
	this.congsTXT.lineHeight = 59;
	this.congsTXT.lineWidth = 210;
	this.congsTXT.parent = this;
	this.congsTXT.setTransform(167,-18.75);

	this.instance_2 = new lib.YOURSCORE();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72,-49);

	this.instance_3 = new lib.VectorSmartObjectcopy11_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(55,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.congsTXT}]}).wait(1));

	// Layer_6_social
	this.fbBTN = new lib.fbSgareBtn();
	this.fbBTN.name = "fbBTN";
	this.fbBTN.parent = this;
	this.fbBTN.setTransform(-65.55,131);

	this.twBTN = new lib.twitterShareButton();
	this.twBTN.name = "twBTN";
	this.twBTN.parent = this;
	this.twBTN.setTransform(25.55,131);

	this.wappBTN = new lib.whatsAppshraeButton();
	this.wappBTN.name = "wappBTN";
	this.wappBTN.parent = this;
	this.wappBTN.setTransform(116,131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wappBTN},{t:this.twBTN},{t:this.fbBTN}]}).wait(1));

	// playAgainSc
	this.playAgianBtn = new lib.playAgaininCongrts();
	this.playAgianBtn.name = "playAgianBtn";
	this.playAgianBtn.parent = this;
	this.playAgianBtn.setTransform(2.9,236.45);

	this.timeline.addTween(cjs.Tween.get(this.playAgianBtn).wait(1));

	// Layer_1
	this.instance_4 = new lib.congrats_screen_last();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-449,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.congratsBoardMc, new cjs.Rectangle(-449,-286,900,558), null);


(lib.circRipple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Tween24("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.instance_1 = new lib.Tween25("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,5.04,5.04);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true,scaleX:5.04,scaleY:5.04},7).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},7).to({alpha:0},3).wait(24));

	// Layer_2
	this.instance_2 = new lib.Tween24("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.Tween25("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,5.04,5.04);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,scaleX:5.04,scaleY:5.04},7).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},7).to({alpha:0},3).to({_off:true},1).wait(30));

	// Layer_4
	this.instance_4 = new lib.Tween23("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10.5,91.5);

	this.instance_5 = new lib.Tween21("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10.45,91.45,0.8,0.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween22("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-10.5,91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},6).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:0.8,scaleY:0.8,x:-10.45,y:91.45},4).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},4).to({_off:true,scaleX:1,scaleY:1,x:-10.5,y:91.5},6).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-88,579,359);


(lib.carsLR_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.L.visible=false;
		this.R.visible=false;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_5
	this.L = new lib.redCarLeftFace();
	this.L.name = "L";
	this.L.parent = this;
	this.L.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.L).wait(3));

	// Layer_2
	this.R = new lib.redCarRigntFae();
	this.R.name = "R";
	this.R.parent = this;
	this.R.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.R).wait(3));

	// Layer_1
	this.M = new lib.redCarCenter();
	this.M.name = "M";
	this.M.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.M).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-133.5,288,267);


(lib.carselectionbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		var _this = this;
		var disableAlpha = .20;
		
		this.btnLeft.alpha = disableAlpha;
		this.blueCarMcClip.alpha = .01
		
		this.btnLeft.addEventListener("click", fl_MouseClickbtnLeft.bind(this));
		this.btnLeft.removeEventListener("click");
		
		function fl_MouseClickbtnLeft() {
			
		if(_this.blueCarMcClip.alpha==0.1){return};
		
			window.selectedCar = "A";
			//window.carAddress.gotoAndStop(3);
			_this.blueCarMcClip.alpha = .01;
			
			
			//_this.redCarMcClip.alpha = 1;
			createjs.Tween.get(_this.redCarMcClip).wait(0).to({alpha: 1,}, 300);
			
			
			_this.btnRight.alpha = 1;
			_this.btnLeft.alpha = disableAlpha;
			document.playMyMp3('selecTune', true);
		}
		
		
		////
		this.btnRight.addEventListener("click", fl_ClickTopervCar);
		
		function fl_ClickTopervCar() {
			
			if(_this.redCarMcClip.alpha == .01 ){return;}
			
			window.selectedCar = "B";
			//window.carAddress.gotoAndStop(3);
			
			//_this.blueCarMcClip.alpha = 1;
			createjs.Tween.get(_this.blueCarMcClip).wait(0).to({alpha: 1,}, 300);
				
			_this.redCarMcClip.alpha = .01;
			_this.btnRight.alpha = disableAlpha;
			_this.btnLeft.alpha = 1;
			document.playMyMp3('selecTune2', true);
			
		
		}
		this.selcUrCar.scaleX = 0;
		this.selcUrCar.scaleY = 0;
		
		setTimeout(document.AnimByTween, 300, this.selcUrCar);
		this.redCarMcClip.alpha = 0;
		
		createjs.Tween.get(this.redCarMcClip).wait(350).to({
			alpha: 1,
		}, 800, createjs.Ease.backInOut);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txttop
	this.selcUrCar = new lib.selectUrCarText();
	this.selcUrCar.name = "selcUrCar";
	this.selcUrCar.parent = this;
	this.selcUrCar.setTransform(1111.9,220);

	this.instance = new lib.VectorSmartObjectcopy10();
	this.instance.parent = this;
	this.instance.setTransform(-21.2,810,1.0092,1);

	this.instance_1 = new lib.VectorSmartObject_4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1531.1,783,1.0092,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.selcUrCar}]}).wait(1));

	// redCarMcClip1
	this.redCarMcClip = new lib.redCarMcClip();
	this.redCarMcClip.name = "redCarMcClip";
	this.redCarMcClip.parent = this;
	this.redCarMcClip.setTransform(1133,650.5,1,1,0,0,0,546,280.5);

	this.timeline.addTween(cjs.Tween.get(this.redCarMcClip).wait(1));

	// blueCarMcClip2
	this.blueCarMcClip = new lib.blueCarMcClip();
	this.blueCarMcClip.name = "blueCarMcClip";
	this.blueCarMcClip.parent = this;
	this.blueCarMcClip.setTransform(1145.5,671,1,1,0,0,0,654.5,244);

	this.timeline.addTween(cjs.Tween.get(this.blueCarMcClip).wait(1));

	// ARROW_R
	this.btnLeft = new lib.aroCS_right();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(489,606,1,1,180,0,0,49,49);
	new cjs.ButtonHelper(this.btnLeft, 0, 1, 2, false, new lib.aroCS_right(), 3);

	this.btnRight = new lib.aroCS_right();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(1849,606,1,1,0,0,0,49,49);
	new cjs.ButtonHelper(this.btnRight, 0, 1, 2, false, new lib.aroCS_right(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnRight},{t:this.btnLeft}]}).wait(1));

	// Ellipse_1
	this.instance_2 = new lib.Ellipse1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(621,572);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// bgCarBox
	this.instance_3 = new lib.VectorSmartObjectcopy8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(959,144);

	this.instance_4 = new lib.Cityscapecopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(170,63);

	this.instance_5 = new lib.VectorSmartObjectcopy7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-25,0,1.1671,1);

	this.instance_6 = new lib.Layer1copy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,0,1.1703,1.0384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.carselectionbox, new cjs.Rectangle(-28,0,2247,1081), null);


(lib.car2Mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.R2.visible=false;
		this.stop();
		this.L2.visible=false;
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.R2 = new lib.R2Car();
	this.R2.name = "R2";
	this.R2.parent = this;
	this.R2.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.R2).wait(1));

	// Layer_3_L2
	this.L2 = new lib.L2Car_original();
	this.L2.name = "L2";
	this.L2.parent = this;
	this.L2.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.L2).wait(1));

	// Layer_2_M2
	this.M2 = new lib.L2Car();
	this.M2.name = "M2";
	this.M2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.M2).wait(1));

}).prototype = getMCSymbolPrototype(lib.car2Mc, new cjs.Rectangle(-148.5,-115,295,231), null);


(lib.buliding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200));

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1114.85,201);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1088.85},100).to({x:1114.85},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,0,2255.8,402);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(114));

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(586.4,268.5,0.0876,0.0876,0,0,0,136.4,243.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:120.5,regY:246.6,x:584.65,y:268.7,alpha:0.0239},0).wait(1).to({x:584.2,y:268.55,alpha:0.0558},0).wait(1).to({x:583.6,y:268.4,alpha:0.0974},0).wait(1).to({x:582.85,y:268.15,alpha:0.1506},0).wait(1).to({x:581.95,y:267.9,alpha:0.2172},0).wait(1).to({x:580.8,y:267.6,alpha:0.2993},0).wait(1).to({x:579.4,y:267.2,alpha:0.3975},0).wait(1).to({x:577.85,y:266.75,alpha:0.5104},0).wait(1).to({x:576.1,y:266.25,alpha:0.6335},0).wait(1).to({x:574.35,y:265.75,alpha:0.7601},0).wait(1).to({x:572.6,y:265.25,alpha:0.8837},0).wait(1).to({regX:136.4,regY:243.1,x:572.4,y:264.5,alpha:1},0).wait(1).to({regX:120.5,regY:246.6,scaleX:0.0939,scaleY:0.0939,x:568,y:266.05},0).wait(1).to({scaleX:0.1005,scaleY:0.1005,x:564.9,y:267.35},0).wait(1).to({scaleX:0.1074,scaleY:0.1074,x:561.75,y:268.7},0).wait(1).to({scaleX:0.1145,scaleY:0.1145,x:558.4,y:270.15},0).wait(1).to({scaleX:0.1218,scaleY:0.1218,x:554.95,y:271.65},0).wait(1).to({scaleX:0.1294,scaleY:0.1294,x:551.35,y:273.15},0).wait(1).to({scaleX:0.1374,scaleY:0.1374,x:547.65,y:274.7},0).wait(1).to({scaleX:0.1455,scaleY:0.1455,x:543.8,y:276.4},0).wait(1).to({scaleX:0.154,scaleY:0.154,x:539.8,y:278.1},0).wait(1).to({scaleX:0.1628,scaleY:0.1628,x:535.7,y:279.8},0).wait(1).to({scaleX:0.1719,scaleY:0.1719,x:531.45,y:281.65},0).wait(1).to({scaleX:0.1813,scaleY:0.1813,x:527.05,y:283.5},0).wait(1).to({scaleX:0.191,scaleY:0.191,x:522.45,y:285.45},0).wait(1).to({scaleX:0.201,scaleY:0.201,x:517.75,y:287.45},0).wait(1).to({scaleX:0.2113,scaleY:0.2113,x:512.9,y:289.5},0).wait(1).to({scaleX:0.222,scaleY:0.222,x:507.9,y:291.65},0).wait(1).to({scaleX:0.2331,scaleY:0.2331,x:502.75,y:293.85},0).wait(1).to({scaleX:0.2444,scaleY:0.2444,x:497.4,y:296.15},0).wait(1).to({scaleX:0.2562,scaleY:0.2562,x:491.85,y:298.5},0).wait(1).to({scaleX:0.2683,scaleY:0.2683,x:486.2,y:300.9},0).wait(1).to({scaleX:0.2808,scaleY:0.2808,x:480.35,y:303.45},0).wait(1).to({scaleX:0.2936,scaleY:0.2936,x:474.3,y:306},0).wait(1).to({scaleX:0.3069,scaleY:0.3069,x:468.1,y:308.6},0).wait(1).to({scaleX:0.3205,scaleY:0.3205,x:461.65,y:311.4},0).wait(1).to({scaleX:0.3346,scaleY:0.3346,x:455.05,y:314.15},0).wait(1).to({scaleX:0.3491,scaleY:0.3491,x:448.3,y:317.1},0).wait(1).to({scaleX:0.364,scaleY:0.364,x:441.3,y:320.05},0).wait(1).to({scaleX:0.3793,scaleY:0.3793,x:434.1,y:323.15},0).wait(1).to({scaleX:0.3951,scaleY:0.3951,x:426.7,y:326.25},0).wait(1).to({scaleX:0.4113,scaleY:0.4113,x:419.1,y:329.5},0).wait(1).to({scaleX:0.428,scaleY:0.428,x:411.25,y:332.9},0).wait(1).to({scaleX:0.4451,scaleY:0.4451,x:403.25,y:336.3},0).wait(1).to({scaleX:0.4627,scaleY:0.4627,x:394.95,y:339.8},0).wait(1).to({scaleX:0.4809,scaleY:0.4809,x:386.45,y:343.45},0).wait(1).to({scaleX:0.4995,scaleY:0.4995,x:377.7,y:347.15},0).wait(1).to({scaleX:0.5186,scaleY:0.5186,x:368.75,y:351},0).wait(1).to({scaleX:0.5382,scaleY:0.5382,x:359.5,y:354.9},0).wait(1).to({scaleX:0.5584,scaleY:0.5584,x:350.1,y:358.95},0).wait(1).to({scaleX:0.579,scaleY:0.579,x:340.35,y:363.1},0).wait(1).to({scaleX:0.6003,scaleY:0.6003,x:330.45,y:367.3},0).wait(1).to({scaleX:0.622,scaleY:0.622,x:320.2,y:371.7},0).wait(1).to({scaleX:0.6444,scaleY:0.6443,x:309.7,y:376.15},0).wait(1).to({scaleX:0.6672,scaleY:0.6672,x:299,y:380.75},0).wait(1).to({scaleX:0.6907,scaleY:0.6907,x:288,y:385.4},0).wait(1).to({scaleX:0.7147,scaleY:0.7147,x:276.7,y:390.2},0).wait(1).to({scaleX:0.7393,scaleY:0.7393,x:265.2,y:395.15},0).wait(1).to({scaleX:0.7645,scaleY:0.7645,x:253.3,y:400.15},0).wait(1).to({scaleX:0.7903,scaleY:0.7902,x:241.25,y:405.3},0).wait(1).to({scaleX:0.8166,scaleY:0.8166,x:228.9,y:410.6},0).wait(1).to({scaleX:0.8436,scaleY:0.8436,x:216.25,y:415.95},0).wait(1).to({scaleX:0.8711,scaleY:0.8711,x:203.3,y:421.5},0).wait(1).to({scaleX:0.8993,scaleY:0.8992,x:190.1,y:427.15},0).wait(1).to({scaleX:0.928,scaleY:0.928,x:176.6,y:432.9},0).wait(1).to({scaleX:0.9573,scaleY:0.9573,x:162.85,y:438.75},0).wait(1).to({scaleX:0.9872,scaleY:0.9872,x:148.8,y:444.75},0).wait(1).to({scaleX:1.0177,scaleY:1.0177,x:134.55,y:450.8},0).wait(1).to({scaleX:1.0488,scaleY:1.0488,x:120,y:457},0).wait(1).to({scaleX:1.0804,scaleY:1.0804,x:105.15,y:463.35},0).wait(1).to({scaleX:1.1126,scaleY:1.1126,x:90.05,y:469.8},0).wait(1).to({scaleX:1.1453,scaleY:1.1453,x:74.7,y:476.3},0).wait(1).to({scaleX:1.1785,scaleY:1.1785,x:59.05,y:482.95},0).wait(1).to({scaleX:1.2123,scaleY:1.2123,x:43.25,y:489.75},0).wait(1).to({scaleX:1.2466,scaleY:1.2465,x:27.15,y:496.6},0).wait(1).to({scaleX:1.2813,scaleY:1.2813,x:10.9,y:503.55},0).wait(1).to({scaleX:1.3165,scaleY:1.3165,x:-5.65,y:510.6},0).wait(1).to({scaleX:1.3521,scaleY:1.3521,x:-22.35,y:517.7},0).wait(1).to({scaleX:1.3881,scaleY:1.3881,x:-39.3,y:524.9},0).wait(1).to({scaleX:1.4245,scaleY:1.4245,x:-56.35,y:532.2},0).wait(1).to({scaleX:1.4613,scaleY:1.4613,x:-73.6,y:539.55},0).wait(1).to({scaleX:1.4984,scaleY:1.4984,x:-91.05,y:547},0).wait(1).to({scaleX:1.5358,scaleY:1.5358,x:-108.6,y:554.45},0).wait(1).to({scaleX:1.5735,scaleY:1.5735,x:-126.25,y:562},0).wait(1).to({scaleX:1.6114,scaleY:1.6114,x:-144.1,y:569.55},0).wait(1).to({scaleX:1.6496,scaleY:1.6495,x:-161.95,y:577.2},0).wait(1).to({scaleX:1.6879,scaleY:1.6878,x:-179.9,y:584.85},0).wait(1).to({scaleX:1.7263,scaleY:1.7263,x:-198,y:592.55},0).wait(1).to({scaleX:1.7649,scaleY:1.7649,x:-216.1,y:600.25},0).wait(1).to({scaleX:1.8036,scaleY:1.8035,x:-234.2,y:608},0).wait(1).to({scaleX:1.8423,scaleY:1.8423,x:-252.4,y:615.75},0).wait(1).to({scaleX:1.881,scaleY:1.881,x:-270.6,y:623.5},0).wait(1).to({scaleX:1.9198,scaleY:1.9198,x:-288.75,y:631.25},0).wait(1).to({scaleX:1.9585,scaleY:1.9585,x:-306.95,y:639},0).wait(1).to({scaleX:1.9972,scaleY:1.9971,x:-325.05,y:646.75},0).wait(1).to({scaleX:2.0357,scaleY:2.0357,x:-343.15,y:654.45},0).wait(1).to({scaleX:2.0742,scaleY:2.0742,x:-361.2,y:662.15},0).wait(1).to({scaleX:2.1125,scaleY:2.1125,x:-379.2,y:669.85},0).wait(1).to({scaleX:2.1507,scaleY:2.1507,x:-397.1,y:677.45},0).wait(1).to({scaleX:2.1887,scaleY:2.1886,x:-414.95,y:685.05},0).wait(1).to({scaleX:2.2265,scaleY:2.2264,x:-432.65,y:692.65},0).wait(1).to({scaleX:2.2641,scaleY:2.264,x:-450.35,y:700.15},0).wait(1).to({scaleX:2.3014,scaleY:2.3014,x:-467.85,y:707.6},0).wait(1).to({scaleX:2.3385,scaleY:2.3385,x:-485.25,y:715},0).wait(1).to({scaleX:2.3753,scaleY:2.3753,x:-502.5,y:722.4},0).wait(1).to({scaleX:2.4119,scaleY:2.4118,x:-519.65,y:729.7},0).wait(1).to({scaleX:2.4482,scaleY:2.4481,x:-536.7,y:736.95},0).wait(1).to({scaleX:2.4841,scaleY:2.4841,x:-553.6,y:744.15},0).wait(1).to({scaleX:2.5198,scaleY:2.5197,x:-570.3,y:751.25},0).wait(1).to({scaleX:2.5551,scaleY:2.5551,x:-586.9,y:758.35},0).wait(1).to({scaleX:2.5901,scaleY:2.5901,x:-603.35,y:765.35},0).wait(1).to({scaleX:2.6248,scaleY:2.6248,x:-619.6,y:772.3},0).wait(1).to({regX:135.8,regY:243,scaleX:2.6592,scaleY:2.6591,x:-593.5,y:770},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-954.6,123.9,1550.2,1311.3);


(lib._5_points = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,148);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-12.95,0.3,0.3,0,0,0,0,1.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},2).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:0.9997,scaleY:0.9997,y:-77.95},5).to({_off:true,regY:1.7,scaleX:0.3,scaleY:0.3,y:-12.95,alpha:0},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-177.9,200.1,425.9);


(lib.introAminHandTap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		createjs.Tween.get(window.carAddress.parent.parent).wait(0).to({x:690}, 350);
		
		 
		
			if (window.selectedCar == 'A') {
				window.carOne.M.visible = false;
				window.carOne.R.visible = true;
				window.carOne.L.visible = false;
			} else {
				window.carTwo.M2.visible = false;
				window.carTwo.R2.visible = true;
				window.carTwo.L2.visible = false;
			}
	}
	this.frame_41 = function() {
		createjs.Tween.get(window.carAddress.parent.parent).wait(0).to({
			x: 1530
		}, 350) 
		
		 
		
			if (window.selectedCar == 'A') {
				window.carOne.M.visible = false;
				window.carOne.R.visible = false;
				window.carOne.L.visible = true;
			} else {
				window.carTwo.M2.visible = false;
				window.carTwo.R2.visible = false;
				window.carTwo.L2.visible = true;
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(40).call(this.frame_41).wait(40));

	// Layer_3
	this.instance = new lib.circRipple();
	this.instance.parent = this;
	this.instance.setTransform(10.5,-91.5);
	this.instance.alpha = 0.7813;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({skewY:180,x:768.5},0).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.5,-179.5,1358,359);


(lib.actualCarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		window.carAddress = this;
		
		console.log('Selected car is '+window.selectedCar);
		
		var _CF = this;
		
		document._CF=this;
		
		console.log("user has finally selected "+window.selectedCar)
		
		if (window.selectedCar == "B") {
			_CF.gotoAndStop(3);
		} else {
			//_CF.gotoAndStop(0);
		}
		
		
		window.carOne = this.car1
	}
	this.frame_3 = function() {
		window.carTwo = this.car2;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// point20
	this.pointTwenty = new lib.pointFive();
	this.pointTwenty.name = "pointTwenty";
	this.pointTwenty.parent = this;
	this.pointTwenty.setTransform(2,-250);

	this.timeline.addTween(cjs.Tween.get(this.pointTwenty).wait(4));

	// crashAnim_minus5
	this.crashedMc = new lib.crashedMc();
	this.crashedMc.name = "crashedMc";
	this.crashedMc.parent = this;
	this.crashedMc.setTransform(-16.5,-162.1);

	this.timeline.addTween(cjs.Tween.get(this.crashedMc).wait(4));

	// point5
	this.pointFive = new lib._5_points();
	this.pointFive.name = "pointFive";
	this.pointFive.parent = this;
	this.pointFive.setTransform(-3,-172.85);

	this.timeline.addTween(cjs.Tween.get(this.pointFive).wait(4));

	// Layer_2
	this.car1 = new lib.carsLR_red();
	this.car1.name = "car1";
	this.car1.parent = this;

	this.car2 = new lib.car2Mc();
	this.car2.name = "car2";
	this.car2.parent = this;
	this.car2.setTransform(-7.5,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.car1}]}).to({state:[{t:this.car2}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-329.1,300,462.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.actualCarMc();
	this.instance.parent = this;
	this.instance.setTransform(144,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,-195.6,288,462.6), null);


(lib.naviToPicupMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var msg = this;
		if(window.userLandedOnMobile==true){
			msg.gotoAndStop(1);
			}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.navig_inst();
	this.instance.parent = this;
	this.instance.setTransform(-304,-127);

	this.instance_1 = new lib.tapinstructions();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-413,-39);

	this.instance_2 = new lib.introAminHandTap();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-381.5,510.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-671,-127,1084,817);


(lib.car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(window.gameStatus == 'off'){
		   this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(0,133.5,1,1,0,0,0,144,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:127.5},14).to({y:133.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-201.6,288,468.6);


// stage content:
(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// for blinkDigital from wrapBow//
		//
		var ROOT = this;
		window.gameStatus = 'off'
		window.selectedCar = "A"
		
		document.AnimByTween = function(_objectMc){	
			_objectMc.scaleX = 0;
			_objectMc.scaleY = 0;
			createjs.Tween.get(_objectMc).wait(10).to({alpha:1,scaleX:1,scaleY:1}, 350, createjs.Ease.backInOut).call(activateSkip);
		}
				
		function activateSkip(){
			createjs.Tween.get(ROOT.btnSkip).wait(4000).to({alpha:1}, 700);
		}
		
		
		ROOT.btnSkip.alpha=1;
		ROOT.btnSkip.addEventListener("click", fl_btnSkip);
		
		function fl_btnSkip() {
			var e = "skp"+Math.round(100+(999999*Math.random())).toString()+"@skp.com";
			console.log(e);	
			saveUser('skipButton', e, "from", navigator.platform);
			ROOT.gotoAndStop(1);
		}
		 
		
		
		//
		
		this.facebookLogin.alpha = 0;
		this.facebookLogin.alpha = 0;
		
		
			
		this.facebookLogin.addEventListener("click", fl_facebookLogin);
		
		
		function fl_facebookLogin() {
			if(window.location.hostname=='127.0.0.1'){
				ROOT.gotoAndStop(1);
			}else{
			  loginToFacebook();
			}
		}
		
		///////////  Google login code start hetre ...
		
		var codeOneFrame= this;
		
		 
		this.googleLogin.addEventListener("click", fl_googleLogin);
		
		this.googleLogin.alpha = 0;
		this.googleLogin.alpha = 0;
		this.googleLogin.scaleX = 0;
		this.googleLogin.scaleY = 0;
				
		
		
		
		
		function fl_googleLogin() {
		    // 
			loginToGoogle();
			 
		
		}
		 
		 
		 	
		
		 
		/////////////-------------------------------------------------------------------
		////////////////////////////////////////////////////////////////////////////////
		///////  F A C E B O O K     LOGIN
		////////////////////////////////////////////////////////////
		
		
		
		  window.fbAsyncInit = function() {
		    FB.init({
		        appId      : '2379845198701339',
		      cookie     : true,
		      xfbml      : true,
		      version    : 'v3.2'
		    });
		      
		    FB.AppEvents.logPageView();   
			fbAlreadyLoginCheck();
		
		      
		  };
		
		  (function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "https://connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		   
		   
		   
		function fbAlreadyLoginCheck(){
		      console.log('Fb checking if already login...');
		 	 FB.getLoginStatus(function(response) {
		
			 if(response.status === 'connected'){
					ROOT.gotoAndStop(1);
				 }else{
					 setTimeout(document.AnimByTween, 800, ROOT.facebookLogin);
					 setTimeout(document.AnimByTween, 900, ROOT.googleLogin);
					 }
			}, true); 
		}   
		   
		if(window.location.hostname=='127.0.0.1'){		 
				 
				  
					 setTimeout(document.AnimByTween, 800, ROOT.facebookLogin);
					 setTimeout(document.AnimByTween, 900, ROOT.googleLogin);
					 }   
		   
		   
		   
		   function loginToFacebook(){
		   	
			FB.login(function(response) {
		   console.log(response);
		   
		   
		   if(response.status === 'connected'){
		      // setElements(true);
		      var userId = response.authResponse.userID;
		      // console.log(userId);
		      console.log('login');
		      getUserInfo(userId);
		
		    }else{
		      // setElements(false);
		      console.log('not logged in !');
		    }
		   
		   
		   
		   
		  // handle the response
		}, {scope: 'public_profile,email'});
		   }
		   
		   
		   function getUserInfo(userId) {
		    // body...
		    FB.api(
		      '/'+userId+'/?fields=id,name,email',
		      'GET',
		      {},
		      function(response) {
		        // Insert your code here
		        // console.log(response);
		        var email = response.email;
		       		  
				saveUser(response.name, email, "fromFB", response.id); // 
		         console.log("Storing in db "+(response.name+"    "+response.email+"    "+response.id));
				  ROOT.gotoAndStop(1);
			     	  
				  
				  //document.getElementById("demofb").innerHTML =email;
			   // loginViaEmail(email);
		      }
		    );
		  }
		
		/// end of facebook logon......
		//////////////////////////////////////////////////////////
		  ///////////////////////// GOOGLE SIGN IN ////////////
		/////
		  
		function loginToGoogle() 
		{
			  
		    gapi.load('auth2', function(){
		      // Retrieve the singleton for the GoogleAuth library and set up the client.
		        auth2 = gapi.auth2.init({
		        client_id: '1011563481025-sgkagfmaogvkkv0t9q1u1qsatr2s644q.apps.googleusercontent.com',
		        cookiepolicy: 'single_host_origin',
		        // Request scopes in addition to 'profile' and 'email'
		        //scope: 'additional_scope'
		      });
			  
			  /// step2
			   
			   var 	auth2 = gapi.auth2.getAuthInstance();
					auth2.signIn().then(function (googleUser) {
					console.log('User signed in success .....');
				var profile = googleUser.getBasicProfile();
						console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
						console.log('Name: ' + profile.getName());
						console.log('Image URL: ' + profile.getImageUrl());
						console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
						//		
						saveUser(profile.getName(), profile.getEmail(), "fromGoogle", profile.getId()); // 
						ROOT.gotoAndStop(1);
					 
			
			});
			  
			  //
			  
		      ///attachSignin(document.getElementById('customBtn'));
		    });
			 
		  }
			
		  
		  
		  /////////////////////////////////
		  ////////////STOTE_DATA_IN_DB///////////////////////////////////////////
		  ////////////////////////////////////////////////////////////////////
		  //////////////////////////////////////////////////////////////////////////////////
		
		
		function saveUser(username, email, score, profileImgId){
		            
		            $.ajax({
		                url: 'phpscripts/register.php',
		                dataType: 'text',
		                type: 'post',
		                data: { 'for': 'register', "username": username, "email": email, "score": score, "profileImgId": profileImgId } ,
		                success: function( data ){
		                    console.log(data);
		                },
		                error: function(){
		                    console.log('ajax error'); 
		                }
		            });
		                  
		        }    
		          
		///////////////
		
		console.log(navigator.platform);///
		var _folderOfMp3 = "mp3s/";
		
		var mp3SoundLibs = [
							'BGmusic.mp3',
							'selecTune.mp3',					
							'beginGame.mp3',
							'selecTune2.mp3',
							'normalSpeed.mp3',
							'fastSpeed.mp3',
							'helixPickup.mp3',
							'minOil.mp3',
							'obsHit.mp3',
							'voucher.mp3',
							'raceComplete.mp3',
							'cdStart.mp3',		
							'cdGo.mp3',
							'countDown.mp3',
							'backMusic1.mp3',
							'backMusic2.mp3',										
							'carIdleStart.mp3',
							'carIdleAccelerate.mp3',								
							'idleSpeed.mp3'
							
							]
		
		
		 /* IN USE....
		 BGmusic
		 beginGame
		  selecTune 
		 selecTune2 
		 normalSpeed
		 fastSpeed
		  helixPickup
		   minOil 
		 obsHit
		 voucher 
		 raceComplete  
		
		*/
		
		window.isMuted=false;
		
		var sounds = [];
		
		document.BGmusic = new Audio();
		document.BGmusic.src = (_folderOfMp3 + mp3SoundLibs[0]);
		document.BGmusic.preload='auto';
		sounds.push({Name:'BGmusic', sObj:document.BGmusic, vol:.6}); 
		//--->
		document.selecTune = new Audio();
		document.selecTune.src = (_folderOfMp3 + mp3SoundLibs[1]);
		//document.selecTune.preload='auto';
		sounds.push({Name:'selecTune', sObj:document.selecTune, vol:.4});
		
		
		// After few second in step2 preloading all remaining sounds...
		
		setTimeout(preLoadAllSounds, 4000)
		
		function preLoadAllSounds(){
			
		console.log("Pre-loading all remaining sounds..");
			
		document.beginGame = new Audio();
		document.beginGame.src = (_folderOfMp3 + mp3SoundLibs[2]);
		//document.beginGame.preload='auto';
		
		
		document.selecTune2 = new Audio();
		document.selecTune2.src = (_folderOfMp3 + mp3SoundLibs[3]);
		//document.selecTune2.preload='auto';
		
		document.normalSpeed = new Audio();
		document.normalSpeed.src = (_folderOfMp3 + mp3SoundLibs[4]);
		//document.normalSpeed.preload='auto';
		
		document.fastSpeed = new Audio();
		document.fastSpeed.src = (_folderOfMp3 + mp3SoundLibs[5]);
		//document.fastSpeed.preload='auto';
		
		document.helixPickup = new Audio();
		document.helixPickup.src = (_folderOfMp3 + mp3SoundLibs[6]);
		//document.helixPickup.preload='auto';
		
		document.minOil = new Audio();
		document.minOil.src = (_folderOfMp3 + mp3SoundLibs[7]);
		//document.minOil.preload='auto';
		
		document.obsHit = new Audio();
		document.obsHit.src = (_folderOfMp3 + mp3SoundLibs[8]);
		//document.obsHit.preload='auto';
		
		document.voucher = new Audio();
		document.voucher.src = (_folderOfMp3 + mp3SoundLibs[9]);
		//document.voucher.preload='auto';
		
		document.raceComplete = new Audio();
		document.raceComplete.src = (_folderOfMp3 + mp3SoundLibs[10]);
		//document.raceComplete.preload='auto';
		
		
		document.cd1_2_3 = new Audio();
		document.cd1_2_3.src = (_folderOfMp3 + mp3SoundLibs[11]);
		//document.raceComplete.preload='auto';
		
		
		
		document.cd_go = new Audio();
		document.cd_go.src = (_folderOfMp3 + mp3SoundLibs[12]);
		//document.raceComplete.preload='auto';
		
		
		 
		//---------------xx-------------xx--------------xx-----------
		/*
		document.countDown = new Audio();
		document.countDown.src = (_folderOfMp3 + mp3SoundLibs[13]);
		//document.countDown.preload='auto';
		
		document.backMusic1 = new Audio();
		document.backMusic1.src = (_folderOfMp3 + mp3SoundLibs[14]);
		//document.backMusic1.preload='auto';
		
		document.backMusic2 = new Audio();
		document.backMusic2.src = (_folderOfMp3 + mp3SoundLibs[15]);
		//document.backMusic2.preload='auto';
		 
		document.carIdleStart = new Audio();
		document.carIdleStart.src = (_folderOfMp3 + mp3SoundLibs[16]);
		//document.carIdleStart.preload='auto';
		
		document.carIdleAccelerate = new Audio();
		document.carIdleAccelerate.src = (_folderOfMp3 + mp3SoundLibs[17]);
		//document.carIdleAccelerate.preload='auto';
		 
		document.idleSpeed = new Audio();
		document.idleSpeed.src = (_folderOfMp3 + mp3SoundLibs[18]);
		//document.idleSpeed.preload='auto';
		*/
		//---------------xx-------------xx--------------xx-----------
		
		 
		
		sounds.push({Name:'beginGame', sObj:document.beginGame, vol:.4});
		sounds.push({Name:'selecTune2', sObj:document.selecTune2, vol:.3});
		sounds.push({Name:'normalSpeed', sObj:document.normalSpeed, vol:.5});
		sounds.push({Name:'fastSpeed', sObj:document.fastSpeed, vol:.9});
		sounds.push({Name:'helixPickup', sObj:document.helixPickup, vol:.7});
		sounds.push({Name:'minOil', sObj:document.minOil, vol:.3});
		sounds.push({Name:'obsHit', sObj:document.obsHit, vol:.5});
		sounds.push({Name:'voucher', sObj:document.voucher, vol:.5});
		sounds.push({Name:'raceComplete', sObj:document.raceComplete, vol:.9});
		sounds.push({Name:'cd1_2_3', sObj:document.cd1_2_3, vol:.8});
		sounds.push({Name:'cd_go', sObj:document.cd_go, vol:1});
		
		
		
		//---------------xx-------------xx--------------xx-----------
		/*
		sounds.push({Name:'countDown', sObj:document.countDown, vol:.4});
		sounds.push({Name:'backMusic1', sObj:document.backMusic1, vol:.1});
		sounds.push({Name:'backMusic2', sObj:document.backMusic2, vol:.1});
		sounds.push({Name:'carIdleStart', sObj:document.carIdleStart, vol:.2});
		sounds.push({Name:'carIdleAccelerate', sObj:document.carIdleAccelerate, vol:.6});
		sounds.push({Name:'idleSpeed', sObj:document.idleSpeed, vol:.4});
		*/
		//---------------xx-------------xx--------------xx-----------
		
		}
		
		// End of Preloading All Audios.
		
		
		
		//_soundName, pla/pause, _loop=false, _vol=.4
		document.playMyMp3 = function(_soundName, _action, _loop=false){
			if(window.tabfocused==false){return;}
			
			
		  for(var s=0; s<sounds.length; s++){
		      if(_soundName==sounds[s].Name){
		      //  console.log('playing ' + sounds[s].Name+" in vol "+sounds[s].vol);
		        if(_action){
					if(window.isMuted==false){ 
		              sounds[s].sObj.play();
				      sounds[s].sObj.volume=sounds[s].vol;
					if(_loop==true){sounds[s].sObj.loop=true}
				   }
		        }else{
		          sounds[s].sObj.currentTime = 0;
		          sounds[s].sObj.pause();
		        }
		        break;
		      }
		  }
		  
		}
		//////
		
		
		
		
		window.muteAllGameSounds = function(_prop){
		 for(var s=0; s<sounds.length; s++){
			if(_prop==true)	{
				sounds[s].sObj.volume = 0;
				}
			else{
				sounds[s].sObj.volume = sounds[s].vol;
				}
						
			}
		}
		//	
		/////  tab focus detection /////
		window.tabfocused = true;
		window.FSstate=false;
		
		window.onfocus = function() {
		    window.tabfocused = true;
		    
			console.log(window.isMuted+ ' focus in');	
			//window.isMuted=false;
		 
		   	if(window.isMuted==false){
				window.muteAllGameSounds(false);
			}
			
			//window.ResumeShellGame
			//else{ window.muteAllGameSounds(true)  }
			
		};
		window.onblur = function() {
			
			console.log(window.isMuted+ ' focus out');
			
			window.muteAllGameSounds(true)
			//window.isMuted=true;
		    window.tabfocused = false;
			
			//window.PauseShellGame();
		};
		
		
		////
		this.logoHelix.addEventListener("click", fl_ClickToGoToWebPage);
		this.logoHelix.cursor = "pointer";
		
		function fl_ClickToGoToWebPage() {
			window.open("https://ashishkummar.github.io/carrace/", "_self");
		}
		var _frameLandPort = this;
		
		
		window.onresize = function (event) {
			switchTomessage();
			console.log('resizing the window');
		
		}
		/////---------------------------------------------------------------------------
		////
		
		window.addEventListener('orientationchange', doOnOrientationChange);
		
		function doOnOrientationChange() {
		
			//console.log('\n orientationchange called.. '+ (screen.height > screen.width));
			console.log("orientation: portrait " + (window.matchMedia("(orientation: portrait)").matches))
		
			switchTomessage()
		
		
		}
		
		
		function switchTomessage() {
		
			if (window.matchMedia("(orientation: portrait)").matches) {
		 		_frameLandPort.landPortMC.gotoAndStop(1);
				_frameLandPort.facebookLogin.visible=false;
				_frameLandPort.googleLogin.visible=false;
				window.muteAllGameSounds(true);
				
		
		
		
				 
				console.log('Port | ... (switchTomessage)')
			} else {
				_frameLandPort.landPortMC.gotoAndStop(0);
				_frameLandPort.facebookLogin.visible=true;
				_frameLandPort.googleLogin.visible=true;
				window.muteAllGameSounds(false);
				 
				console.log(' Landsc -- ... (switchTomessage)')
		
			}
		
		
		}
		
		//switchTomessage();
		
		
		console.log("orientation: portrait  "+window.matchMedia("(orientation: portrait)").matches);
		
		console.log("orientation: portrait  "+window.matchMedia("(orientation: landscape)").matches);
		
		
		
		if (window.matchMedia("(orientation: portrait)").matches) {
			
				//console.log('------------------------------------------------'+ _frameLandPort.landPortMC+_frameLandPort.landPortMC.currentFrame);
		    //window.portMCclicp.gotoAndStop(1)	  
			_frameLandPort.landPortMC.gotoAndStop(1);
			
			//console.log('------------------------------------------------'+ _frameLandPort.landPortMC.currentFrame);
				
		setTimeout(orientationLSCP, 10);	
			
		}
		
		//if (window.matchMedia("(orientation: landscape)").matches) {
			//switchTomessage();
		//}
		//
		
		
		function orientationLSCP(){
			_frameLandPort.landPortMC.gotoAndStop(1);
			}
			
			orientationLSCP();
		window.userLandedOnMobile=false;
		
		function detectmob() { 
		 if( navigator.userAgent.match(/Android/i)
		 || navigator.userAgent.match(/webOS/i)
		 || navigator.userAgent.match(/iPhone/i)
		 || navigator.userAgent.match(/iPad/i)
		 || navigator.userAgent.match(/iPod/i)
		 || navigator.userAgent.match(/BlackBerry/i)
		 || navigator.userAgent.match(/Windows Phone/i)
		 ){
		    return true;
		  }
		 else {
		    return false;
		  }
		}		
		//// ////// / / // / /////////
		
		if(detectmob()){
		  window.userLandedOnMobile=true;
		}
		this.roadLFast.visible=false;
		this.roadRFast.visible=false;
		this.stop();
	}
	this.frame_1 = function() {
		var flScFrame = this
		
		
		this.fullNormBtn.scaleX = 0;
		this.fullNormBtn.scaleY = 0;
		
		createjs.Tween.get(this.fullNormBtn).wait(700).to({scaleX:.32, scaleY:.32}, 350, createjs.Ease.backInOut);
		
		//
		this.fullNormBtn.addEventListener("click", fl_MouseClickfullNormBtn.bind(this));
		
		function fl_MouseClickfullNormBtn()
		{
				window.toggleFullScreen();
			 
		}
		
		 
		
		
		this.fullNormBtn.cursor = "pointer";
		
		
		//////
		window.toggleFullScreen  = function(){
		
			//function toggleFullScreen() {
		  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
		   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
		    if (document.documentElement.requestFullScreen) {  
		      document.documentElement.requestFullScreen();  
		    } else if (document.documentElement.mozRequestFullScreen) {  
		      document.documentElement.mozRequestFullScreen();  
		    } else if (document.documentElement.webkitRequestFullScreen) {  
		      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
		    }
			flScFrame.fullNormBtn.gotoAndStop(1);
			window.FSstate=true;
		  } else {  
		    if (document.cancelFullScreen) {  
		      document.cancelFullScreen();  
		    } else if (document.mozCancelFullScreen) {  
		      document.mozCancelFullScreen();  
		    } else if (document.webkitCancelFullScreen) {  
		      document.webkitCancelFullScreen();  
		    } 
			window.FSstate=false;
			flScFrame.fullNormBtn.gotoAndStop(0);
		  }  
		}
		
		////////   hide FS btn on iPhone ///
		
		
		function IFiOS() {
		
		  var iDevices = [
		    'iPad Simulator',
		    'iPhone Simulator',
		    'iPod Simulator',
		    'iPad',
		    'iPhone',
		    'iPod'
		  ];
		
		  if (!!navigator.platform) {
		    while (iDevices.length) {
		      if (navigator.platform === iDevices.pop()){ return true; }
		    }
		  }
		
		  return false;
		}
		
		
		if(IFiOS()){
			
			flScFrame.fullNormBtn.visible=false;
			
		}
		var _mu = this.muteUnmute;
		
		
		this.muteUnmute.scaleX = 0;
		this.muteUnmute.scaleY = 0;
		
		
		createjs.Tween.get(this.muteUnmute).wait(800).to({scaleX:.32, scaleY:.32}, 350, createjs.Ease.backInOut);
		
		this.muteUnmute.addEventListener("click", muteUnmuteHandler.bind(this));
		this.muteUnmute.cursor = "pointer";
		
		function muteUnmuteHandler() {
			
			if (_mu.currentFrame == 0) {
				window.isMuted=true;	
				window.muteAllGameSounds(true);
				_mu.gotoAndStop(1);
			} else {
				window.isMuted=false;
				window.muteAllGameSounds(false);		
				_mu.gotoAndStop(0)
		
			}
		
		}
		
		//
		this.carsBox.gotoAndStop(0);
		
		var _frame1 = this
		
		this.nextBtn.addEventListener("click", fl_nextBtn.bind(this)); // it has alpha 1
		
		function fl_nextBtn() {
			document.playMyMp3('selecTune', true, false);
			_frame1.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		//this.play()
		this.stop();
		
		var frame3 = this;
		
		document.otherOilSelected=false;
		
		this.shellOilBtn.addEventListener("click", fl_MouseClickshellOilBtn.bind(this));
		this.shellOilBtn.cursor = "pointer";
		
		function fl_MouseClickshellOilBtn() {
			document.otherOilSelected=false;	
			frame3.gotoAndStop(3);
			document.playMyMp3('selecTune', true, false);
		}
		
		this.otherOilBtn.addEventListener("click", fl_MouseClickOtherOilBtn.bind(this));
		this.otherOilBtn.cursor = "pointer";
		
		function fl_MouseClickOtherOilBtn() {
			document.otherOilSelected=true;	
			frame3.gotoAndStop(3);
			document.playMyMp3('selecTune', true, false);
		
		}
		//
		
		console.log("Key frame 3, car is "+window.selectedCar); //
		this.chooSeUrLubri.scaleX = this.chooSeUrLubri.scaleY = 0
		
		this.shellOilBtn.scaleX = this.shellOilBtn.scaleY = 0;
		this.otherOilBtn.scaleX = this.otherOilBtn.scaleY = 0;
		
		setTimeout(document.AnimByTween, 100, this.chooSeUrLubri);
		
		setTimeout(document.AnimByTween, 200, this.shellOilBtn);
		
		setTimeout(document.AnimByTween, 300, this.otherOilBtn);
		
		///
		
		
		setTimeout(sectCar, 200)
		
		function sectCar(){ 
			if (window.selectedCar == "B") {
			  document._CF.gotoAndStop(3);
			}
		}
	}
	this.frame_3 = function() {
		this.stop()
		var frame4 = this;
		
		this.instrctBtn.addEventListener("click", fl_MouseClickinstrc.bind(this));
		
		function fl_MouseClickinstrc() {
			 document.playMyMp3('selecTune', true, false);
			 frame4.gotoAndStop(4);
		
		}
		this.naviToPicupMC.alpha=0;
		
		createjs.Tween.get(this.naviToPicupMC).wait(100).to({alpha: 1,}, 200);
		
		this.instrctBtn.scaleX = this.instrctBtn.scaleY = 0;
		
		setTimeout(document.AnimByTween, 200, this.instrctBtn);
	}
	this.frame_4 = function() {
		this.stop()
		var frame5 = this;
		
		 
		this.nextButton.addEventListener("click", fl_MouseClicnextButton.bind(this));
		
		
		function fl_MouseClicnextButton() {
			document.playMyMp3('selecTune', true, false);
			//
			//document.playMyMp3('beginGame', true, false, .1);
			//document.playMyMp3('beginGame', false, false, .1);
			frame5.gotoAndStop(5);
		
		}
		
		
		createjs.Tween.get(frame5.carMc).wait(0).to({x:1090}, 350);
		
		if (window.selectedCar == 'A') {
				window.carOne.M.visible = true;
				window.carOne.R.visible = false;
				window.carOne.L.visible = false;
			} else {
				window.carTwo.M2.visible = true;
				window.carTwo.R2.visible = false;
				window.carTwo.L2.visible = false;
			}
		this.reachTheFinish.alpha=0;
		
		createjs.Tween.get(this.reachTheFinish).wait(100).to({alpha: 1,}, 200);
		
		this.nextButton.scaleX = this.nextButton.scaleY = 0;
		
		setTimeout(document.AnimByTween, 200, this.nextButton);
	}
	this.frame_5 = function() {
		this.stop();
		var frame6 = this;
		
		frame6.startBtn.addEventListener("click", fl_StartTheGame.bind(this));
		
		function fl_StartTheGame() {
		
			
			document.playMyMp3('BGmusic', true, false);
			document.playMyMp3('BGmusic', false, false);
			
			
			frame6.startBtn.visible = false;
			frame6.shelDashOnStart.visible = false;
			frame6.startCountDown.visible = true
			frame6.startCountDown.gotoAndPlay(1);
			window.gameStatus = 'on'
			//
				
			//
			
			 document.playMyMp3('cd1_2_3', true, false);
			 document.playMyMp3('cd1_2_3', false, false);
			
			//document.playMyMp3('cd_go', true, false);
			//document.playMyMp3('cd_go', false, false);
			
			setTimeout(StartAfterCountDown, 3050)
			//_soundName, _action, _loop=false, _vol=.4
			//
			//
			console.log(" window.userLandedOnMobile = " + window.userLandedOnMobile + " window.FSstate = " + window.FSstate);
			if (window.userLandedOnMobile) {
				if (window.FSstate == false) {
					setTimeout(function(){window.toggleFullScreen()},3500);
				}
			}
		
		
		}
		
		function StartAfterCountDown() {
			document.playMyMp3('beginGame', true, false, .8);
			frame6.carMc.play();	
			setTimeout(StartTheRace, 2000);
			
		
		}
		
		function StartTheRace() {
			document.playMyMp3('BGmusic', true, true, .3);
			document.playMyMp3('normalSpeed', true, true);
			//
			frame6.roadL.play();
			frame6.roadR.play();
		
			frame6.TreeR.play();
			frame6.TreeL.play();
			frame6.board.play();
			frame6.windMil.play();
			//
			frame6.buildings.play();
			frame6.gotoAndStop(6);
		
		}
		this.startBtn.scaleX = this.startBtn.scaleY = 0;
		
		setTimeout(document.AnimByTween, 100, this.startBtn);
	}
	this.frame_6 = function() {
		this.stop();
		var frame7 = this;
		
		var _ostFallIntervalTime=2500;
		var _FuelFallIntervalTime=7500;
		
		var carRightPos = 1530;
		var carMiddlePos = 1090;
		var carLeftPos = 690
		var carShitingSpeed=20; 
		var _carCurrentPos="M";
		
		document._gameResult= ""; //'timeup' 'fuelover' 'reached' 'lowfuel'
		
		createjs.Touch.enable(stage);
		frame7.tapLeft.addEventListener("mousedown", fl_moveCar_Left.bind(this));
			function fl_moveCar_Left() {
				tapFrame.tapMC.visible=false;
				if(window.gameStatus == 'off'){return;}
				if (frame7.carMc.x == carRightPos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carMiddlePos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
		    // The tween changed.
		
			if(window.selectedCar=='A'){
			 window.carOne.M.visible=true;
			 window.carOne.R.visible=false;
			 window.carOne.L.visible=false;
			}else{
				window.carTwo.M2.visible=true;
			    window.carTwo.R2.visible=false;
			    window.carTwo.L2.visible=false;
				}
			 
		}
					_carCurrentPos="M";
					
				}
		
				if (frame7.carMc.x == carMiddlePos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carLeftPos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
			//window.carOne.gotoAndStop(1)
			if(window.selectedCar=='A'){
				window.carOne.M.visible=false;
				window.carOne.R.visible=true;
				window.carOne.L.visible=false;
				}else{
				window.carTwo.M2.visible=false;
				window.carTwo.R2.visible=true;
				window.carTwo.L2.visible=false;
		      }
			}
					_carCurrentPos="L";
					
				}
		}
		
		//
			 
		frame7.tapRight.addEventListener("mousedown", fl_moveCar_Right.bind(this));
		
		
		function fl_moveCar_Right() {
		tapFrame.tapMC.visible=false;
		if(window.gameStatus == 'off'){return;}
			if (frame7.carMc.x == carLeftPos) {
				createjs.Tween.get(frame7.carMc).to({
					x: carMiddlePos
				}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
				if(window.selectedCar=='A'){
			window.carOne.M.visible=true;
			window.carOne.R.visible=false;
			window.carOne.L.visible=false;
				}else{
				window.carTwo.M2.visible=true;
				window.carTwo.R2.visible=false;
				window.carTwo.L2.visible=false;
			}
			
		}
			_carCurrentPos="M";
					
		}
				if (frame7.carMc.x == carMiddlePos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carRightPos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
			//window.carOne.gotoAndStop(2)
			if(window.selectedCar=='A'){	
				window.carOne.M.visible=false;
				window.carOne.R.visible=false;
				window.carOne.L.visible=true;
			}else{
				window.carTwo.M2.visible=false;
				window.carTwo.R2.visible=false;
				window.carTwo.L2.visible=true;
			}
			}
					_carCurrentPos="R";
					 
				}
		}
		
		document.addEventListener('keydown', function (event) {
			tapFrame.tapMC.visible=false;
			if (event.code == 'ArrowRight' || event.code == 'KeyD' && window.gameStatus == 'on' ) {
				if (frame7.carMc.x == carLeftPos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carMiddlePos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		
					function handleComplete(event) {
						if(window.selectedCar=='A'){
						window.carOne.M.visible=true;
						window.carOne.R.visible=false;
						window.carOne.L.visible=false;
						}else{
						window.carTwo.M2.visible=true;
						window.carTwo.R2.visible=false;
						window.carTwo.L2.visible=false;
						}
					}
					_carCurrentPos="M";
					
				}
		
				if (frame7.carMc.x == carMiddlePos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carRightPos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
		//	window.carOne.gotoAndStop(2)
			if(window.selectedCar=='A'){
			window.carOne.M.visible=false;
			window.carOne.R.visible=false;
			window.carOne.L.visible=true;
				}else{
					window.carTwo.M2.visible=false;
					window.carTwo.R2.visible=false;
					window.carTwo.L2.visible=true;
				}
			}
					_carCurrentPos="R";
					
				}
			}
			//
			if (event.code == 'ArrowLeft' || event.code == 'KeyA' && window.gameStatus == 'on') {
				if (frame7.carMc.x == carRightPos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carMiddlePos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
			//window.carOne.gotoAndStop(0)
			
		if(window.selectedCar=='A')
		{
			window.carOne.M.visible=true;
			window.carOne.R.visible=false;
			window.carOne.L.visible=false;
		}else{
			window.carTwo.M2.visible=true;
			window.carTwo.R2.visible=false;
			window.carTwo.L2.visible=false;
			
			}	
			}
					_carCurrentPos="M";
					
				}
		
				if (frame7.carMc.x == carMiddlePos) {
					createjs.Tween.get(frame7.carMc).to({
						x: carLeftPos
					}, carShitingSpeed, createjs.Ease.sineIn).call(handleComplete)
		function handleComplete(event) {
			//window.carOne.gotoAndStop(1)
			
			if(window.selectedCar=='A'){
			window.carOne.M.visible=false;
			window.carOne.R.visible=true;
			window.carOne.L.visible=false;
			}else{
					window.carTwo.M2.visible=false;
					window.carTwo.R2.visible=true;
					window.carTwo.L2.visible=false;
				}
			}
					_carCurrentPos="L";
					
				}
		
			}
		
		
		}); 
		
		////TIMER//////////TIMER//////////////////////////////
		
		var totalDuration = 90 // Total Game Duration.
		
		var timeLeft = totalDuration;
		var totalFuel=150;
		var fuelLeft = totalFuel;
		document.timerId = setInterval(countdown, 1000);// Timer
		var lowOilLimit = 35;
		
		if(document.otherOilSelected==true){
			fuelLeft = totalFuel-(totalFuel*25/100);
			frame7.timeBar.redBarMc.scaleX=	((fuelLeft/totalFuel)*100)/100;
		}
		
		
		function countdown() {
			
		if(window.tabfocused == false){return;}	
			
			updateFuelBar(fuelLeft);
			
			if (timeLeft == 0) {
				frame7.timeBox.timerTXT.text = "00";
				window.gameStatus = 'off';
				frame7.TreeL.stop();
				frame7.TreeR.stop();
				frame7.board.stop();
				frame7.elecPoll.stop();
				frame7.windMil.stop();
				document._gameResult='timeup';
				clearAllIntervals();
				timeIsUpRetry();
		
			} else {
				if (timeLeft < 10) {
					timeLeft = "0" + timeLeft;
				}
				timeLeft--;
				fuelLeft-=1.5;		
				frame7.timeBox.timerTXT.text = timeLeft;
				if(fuelLeft<lowOilLimit){
					if(window.gameStatus=='on'){			
						frame7.lowOilMc.visible=true;
					}
					}else{
					frame7.lowOilMc.visible=false;	
				}
			}
			//
			
		}
		
		var blinkSI
		
		function clearAllIntervals(){
			clearInterval(document.blinkSI);
			clearInterval(document.scorePointId);
			
			frame7.congratsMc.visible=true;
			frame7.lowOilMc.visible=false;
			frame7.timeUpRetry.visible=false;
			window.carAddress.crashedMc.visible=false;
		}
		
		
		function updateFuelBar(_fuel){
			frame7.timeBar.redBarMc.scaleX = ((_fuel/totalFuel)*100)/100;	
		} 
		
		///// END of TIMER /////////////////
		
		
		//// SCORE POINTS//and /// distance calculation 
		
		var _totalDistance  = 8000;  //This is a virtual distance for internal calculation.
		var _travelledDis = 0;
		var scorePoints = 0;
		var Reached2Destination = false;
		document.scorePointId = setInterval(calScore, 10);
		
		var TD;
		var isFuelFinished=false;
		
		function calScore(){
			
			if(window.gameStatus=='on'){
				
			frame7.pointBox.fuelTXT.text = scorePoints;
			frame7.congratsMc.congsTXT.text= scorePoints;
			frame7.congratsMc.spentTimeTXT.text = totalDuration-timeLeft;
			_travelledDis++;
			//				
			if(_travelledDis>_totalDistance){
					console.log('Congrts reached to destination.');
					document._gameResult='reached'
				    Reached2Destination=true;
					frame7.distanceBar.redBarMc.scaleX=1;
				    frame7.congratsMc.visible=true;
					frame7.congratsMc.alpha=0;
					createjs.Tween.get(frame7.congratsMc).wait(100).to({alpha:1}, 700);
				
					reachedToDestination();			
					}else{
						 TD = (_travelledDis/_totalDistance);
						 frame7.distanceBar.redBarMc.scaleX=TD;
						 frame7.distanceBar.tMc.x = (frame7.distanceBar.redBarMc.nominalBounds.width*TD);
					}
				}
			}
		
		// Reached To Destination .................... Finish Line Reached....
		
		frame7.finishLineMC.visible=false;
		frame7.finishLineMC.y=457;
			
		function reachedToDestination(){
			
			clearAllIntsOnGameEnd();
			window.muteAllGameSounds(true);
			//
			setTimeout(function (){document.playMyMp3('voucher', true, false)}, 500);
			setTimeout(function (){document.playMyMp3('raceComplete', true, false)}, 1300);
			setTimeout(function (){document.playMyMp3('raceComplete', false, false);document.playMyMp3('raceComplete', true, false)}, 2300);
			
			frame7.distanceBar.redBarMc.scaleX=1;
			frame7.finishLineMC.visible=true;			
			createjs.Tween.get(frame7.finishLineMC).wait(0).to({y:915}, 600);
			frame7.carMc.alpha=1;
			
		}
		// end of finish line reached...///
		 
		
		
		function clearAllIntsOnGameEnd(){
			clearInterval(document.timerId);
			clearInterval(document.scorePointId);
			clearInterval(document.FulelTimerId);
			clearInterval(document.ObstacleTimerId);
			clearInterval(document.blinkSI);
			//
			window.gameStatus = 'off';
			frame7.TreeL.stop();
			frame7.TreeR.stop();
			frame7.board.stop();
			frame7.windMil.stop();
			frame7.elecPoll.stop();
			frame7.roadLFast.stop();
			frame7.roadRFast.stop();
			
			//
			frame7.lowOilMc.visible=false;
		}
			
		////  TIME IS UP - Retry... 
		
		function timeIsUpRetry(){	
			frame7.timeUpRetry.visible=true;
			frame7.timeUpRetry.alpha=0;
			createjs.Tween.get(frame7.timeUpRetry).wait(100).to({alpha:1}, 700);
			
			frame7.congratsMc.visible=false;
			frame7.lowOilMc.visible=false;
		   //
			clearAllIntsOnGameEnd();		
			pauseTheGame();
			window.gameStatus = 'off';
			window.muteAllGameSounds(true);
			setTimeout(document.playMyMp3('voucher', true),1000);
			document._TickerOn=false;
		 }
			
		// retry click	
		// timeIsUpRetry CLICK starts hete .....	
		frame7.timeUpRetry.addEventListener("click", timeUpRetryClick.bind(this));	
			
		function timeUpRetryClick(){
			document._gameResult='';
			frame7.fuelIsOver.visible=false;
			frame7.timeUpRetry.visible=false;
			frame7.finishLineMC.y=457;
			frame7.finishLineMC.visible=false;
			window.carAddress.crashedMc.visible=false;
			startAllIntervals();
			document.playMyMp3('BGmusic', true, true);
			document.playMyMp3('normalSpeed', true, true);
			
			window.gameStatus = 'on';
			window.muteAllGameSounds(false);
			document._TickerOn=true;
			
		}
		
		// playAgainCode starts here
		
		frame7.congratsMc.playAgianBtn.addEventListener("click", playAgianBtnClick.bind(this));	
		
		function playAgianBtnClick(){
			document._gameResult='';
		    frame7.finishLineMC.visible=false	
			frame7.fuelIsOver.visible=false;
			frame7.timeUpRetry.visible=false;
			frame7.congratsMc.visible=false;
			frame7.finishLineMC.y=457;
			frame7.finishLineMC.visible=false;
			window.carAddress.crashedMc.visible=false;
			startAllIntervals();
			
			document.playMyMp3('BGmusic', true, true);
			document.playMyMp3('normalSpeed', true, true);
		 
		}
		
		// playAgainCode ends here
		///////////
			
		// timeIsUpRetry CLICK ENDS hete .....	
				
				
		///	fuelIsOver CLICK starts here .....
		
		// fuel finish fuel click;
		
		frame7.fuelIsOver.addEventListener("click", fuelIsOverClick.bind(this));
		
		function fuelIsOverClick(){
			
			document._TickerOn=true;
			document._gameResult='';
			isHitted=false;
			isHitted2=false;
			obstIsHitted=false;
			blinkCounter=0;
			window.gameStatus = 'on'
			frame7.fuelIsOver.visible=false;
			frame7.timeUpRetry.visible=false;
			frame7.timeUpRetry.visible=false;
			frame7.congratsMc.visible=false;
			frame7.finishLineMC.y=457;
			frame7.finishLineMC.visible=false;
			window.carAddress.crashedMc.visible=false;
			startAllIntervals();
			document.playMyMp3('BGmusic', true, true);
			document.playMyMp3('normalSpeed', true, true);
			console.log('Restarting the game...after fuel Over '); 
		}
		
		function startAllIntervals(){
			
			timeLeft = totalDuration;
			fuelLeft = totalFuel;
			_travelledDis=0;
			scorePoints=0;
			document._gameResult="";
			Reached2Destination=false;
			isFuelFinished=false;
			_didUFrameCount=0;
			blinkCounter=0;
			isBlack=false;
			isTabInFocus=true;
			isHitted=false;
			isHitted2=false;
		    obstIsHitted=false;
			 
			
			document.timerId = setInterval(countdown, 1000);
			document.FulelTimerId = setInterval(fuelFall, _FuelFallIntervalTime);
			document.scorePointId = setInterval(calScore, 10);
			document.ObstacleTimerId = setInterval(ObstacleFall, _ostFallIntervalTime); // setObst fall interval here.
			//
			window.gameStatus = 'on';
			frame7.TreeL.play();
			frame7.TreeR.play();
			frame7.windMil.play();
			frame7.elecPoll.play();
			frame7.board.play();
			frame7.roadLFast.play();
			frame7.roadRFast.play();
			frame7.roadL.play();
			frame7.roadR.play();
			_shelFuel.ObsticlesMc.alpha=1;
			isFuelFinished=false;
			//
			frame7.timeBox.timerTXT.text=totalDuration;
			frame7.pointBox.fuelTXT.texttotalFuel;
			//
			frame7.distanceBar.redBarMc.scaleX=0;
			frame7.distanceBar.tMc.x = (frame7.distanceBar.redBarMc.nominalBounds.width*TD);
			//
			frame7.timeBar.redBarMc.scaleX=1
		
		}
		///	fuelIsOver CLICK ENDS starts here
		// animation of top bar at last screen...
		
		this.timeBar.alpha=0;
		this.timeBox.alpha=0;
		this.pointBox.alpha=0;
		this.distanceBar.alpha=0;
		createjs.Tween.get(this.timeBar).wait(100).to({alpha:1}, 700);
		createjs.Tween.get(this.timeBox).wait(200).to({alpha:1}, 700);
		createjs.Tween.get(this.pointBox).wait(300).to({alpha:1}, 700);
		createjs.Tween.get(this.distanceBar).wait(400).to({alpha:1}, 700);
		var tapFrame = this;
		tapFrame.tapMC.visible = false;
		
		if (window.userLandedOnMobile) {
			tapFrame.tapMC.visible = true;
		} else {
			tapFrame.tapMC.visible = false;
		}
		this.fuelIsOver.cursor = "pointer";
		this.fuelIsOver.visible=false;
		this.timeUpRetry.cursor = "pointer";
		this.timeUpRetry.visible=false;
		var _didU = this;
		var _didUFrameCount = 0
		var movingSpeed = 5
		
		
			function moveDidYouKnow() {
				
				if(window.tabfocused == false){return;}		
				
				_didU.didYouKnow.x -= movingSpeed;
		
				if (_didU.didYouKnow.x < 1150 && _didU.didYouKnow.x > 1140) {
					movingSpeed = .05
				} else {
					movingSpeed = 5;
				}
		
		
				if (_didU.didYouKnow.x < -350) {
					console.log(_didUFrameCount)
					_didUFrameCount += 1;
					_didU.didYouKnow.x = 2600;
					_didU.didYouKnow.gotoAndStop(_didUFrameCount);
					if (_didUFrameCount >= 2) {
						_didUFrameCount = -1
					}
		
				}
				
				if(document._gameResult!='reached'){
					_didU.didYouKnow.alpha=1 
				}
				else{
					  _didU.didYouKnow.alpha=0;
					}
				  
		
				 
			}
		var _fuelFallSpeed = 2500;
		var _fuelFallSpeed = 2500;
		var _obstFallSpeed=1500;
		var _shelFuel = this;
		
		var sFuelPosFrom = [{shx:920,shy:530},{shx:1086,shy:530},{shx:1280,shy:530}];
		var sFuelPosTo = [{shx:465,shy:1257},{shx:1086,shy:1257},{shx:1770,shy:1257}];
		var _fuelCurrentPos  ="L"
		var _fuel2CurrentPos ="M"
		var _obstCurrentPos  ="R";
		 
		var fuelFallPatter = [	{f:'L', f2:'M', O:'R'},
								{f:'R', f2:'L', O:'M'},
								{f:'M', f2:'R', O:'L'}
								];
		
		
		// Set oil falling timing here.......
		
		document.FulelTimerId = setInterval(fuelFall, _FuelFallIntervalTime);   
		
				function fuelFall() {
					obstIsHitted=false;
					isHitted=false;
					isHitted2=false;
					
				if (window.gameStatus == 'on') {
						var _rNum = (Math.round(Math.random()*2));
						var _rNumFuelLoad = (Math.round(Math.random()*1));	
						//_shelFuel.hellixOilMc.gotoAndStop(_rNumFuelLoad);
					
						//_shelFuel.hellixOilMc.visible=true;
					
		 			if(_rNum==0){
						_fuelCurrentPos="L";				
					}else if(_rNum==1){
						_fuelCurrentPos="M";	
					}else if(_rNum==2){
						_fuelCurrentPos="R";						
					}
		 			//
					_shelFuel.hellixOilMc.x = sFuelPosFrom[_rNum].shx;
					_shelFuel.hellixOilMc.y = sFuelPosFrom[_rNum].shy;
					_shelFuel.hellixOilMc.alpha=0;
					_shelFuel.hellixOilMc.scaleX=.40;
					_shelFuel.hellixOilMc.scaleY=.40;
					
					createjs.Tween.get(_shelFuel.hellixOilMc).wait(0).to({alpha:1,scaleX:1,scaleY:1}, 300);
					createjs.Tween.get(_shelFuel.hellixOilMc).wait(0).to({x:sFuelPosTo[_rNum].shx, y: sFuelPosTo[_rNum].shy}, _fuelFallSpeed);
				}
				
				FallOrdinaryFuel(_rNum)
		 }
		 
		 function FallOrdinaryFuel(_randNum){
		
			 console.log('FallOrdFuel ' +_randNum);
			 
					 if(_randNum==0){_randNum=2;_fuel2CurrentPos="R"};
				 	 if(_randNum==1){_randNum=0;_fuel2CurrentPos="L"};
				 	 if(_randNum==2){_randNum=1;_fuel2CurrentPos="M"};
					 
					 
				    
				
					 
					/*
					var sFuelPosFrom = [{shx:920,shy:530},{shx:1086,shy:530},{shx:1280,shy:530}];
					 
					var sFuelPosTo = [{shx:465,shy:1257},{shx:1086,shy:1257},{shx:1770,shy:1257}];
		 
					 */
					 
					 
					 
					 
					 if(_randNum==0){
					    
							_shelFuel.hellixOilMc2.x = 920;
							_shelFuel.hellixOilMc2.y = 530; 
						 
						 createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({alpha:1,scaleX:1,scaleY:1}, 300);
						createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({x:465, y:1257}, _fuelFallSpeed);
					}
					
					else if(_randNum==1){
						
						_shelFuel.hellixOilMc2.x = 1086;
						_shelFuel.hellixOilMc2.y = 530;
						
					    createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({alpha:1,scaleX:1,scaleY:1}, 300);
						createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({x:1068, y:1257}, _fuelFallSpeed);
					}
					
					else if (_randNum==2){
						
						_shelFuel.hellixOilMc2.x = 1280;
						_shelFuel.hellixOilMc2.y = 530;
						
					    createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({alpha:1,scaleX:1,scaleY:1}, 300);
						createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({x:1770, y:1257}, _fuelFallSpeed);
					}			
					
					
					 
					 
					 }
		 
		 
		
		///////////Obstacle Falling///////////////////////////////  ///////   /////////////////////  ///////   ///////
		
		 document.ObstacleTimerId = setInterval(ObstacleFall, _ostFallIntervalTime); // Set Obsticle falling time Gap
				
		          function ObstacleFall() {	
					
				// Ignoring Obstacle at last moment when distance and fuel is very less...
					if( Math.round((_travelledDis/_totalDistance)*100) >97){
						return;
					}
					//
					if(Math.round((fuelLeft/totalFuel)*100)>97){
					return;
					}
					//---->		
					
					if (window.gameStatus == 'on') {
						var _rNum = (Math.round(Math.random()*2));
						var _rNumObstLoad = (Math.round(Math.random()*9));	
							_shelFuel.ObsticlesMc.gotoAndStop(_rNumObstLoad);
						//_shelFuel.hellixOilMc.visible=true;
		 			
						if(_rNum==0){
						_obstCurrentPos="L";				
						}else if(_rNum==1){
						_obstCurrentPos="M";	
						}else if(_rNum==2){
						_obstCurrentPos="R";						
						}
		 			//
					
					  if(_obstCurrentPos!=_fuelCurrentPos){
						_shelFuel.ObsticlesMc.x = sFuelPosFrom[_rNum].shx;
						_shelFuel.ObsticlesMc.y = sFuelPosFrom[_rNum].shy;
						_shelFuel.ObsticlesMc.alpha=.40;
						_shelFuel.ObsticlesMc.scaleX=.40;
						_shelFuel.ObsticlesMc.scaleY=.40;
						 	 createjs.Tween.get(_shelFuel.ObsticlesMc).wait(0).to({alpha:1, scaleX:1, scaleY:1}, 700);
							createjs.Tween.get(_shelFuel.ObsticlesMc).wait(0).to({x:sFuelPosTo[_rNum].shx, y: sFuelPosTo[_rNum].shy}, _obstFallSpeed);
						 }
							//else{
							//console.log('------xx-----------')
							// _shelFuel.hellixOilMc.visible=false;
							 //}
						
						
						
				}
		}
		 
		///////////Obstacle code ENDs here ///////////////////////////  /// 
		
		// points/values
		var _HellixPointValue = 20;
		var _mineralPointValue = 5; 
		var _obsticleValue = 5;
		var _HellixFUELValue = 15;
		var _mineralFUELValue = 5; 
		
		// initialising Sounds
		
		
		///////// HIT TEST Code Begins from here for fuels //////////////////////////////////////////////
		var isHitted=false;
		var isHitted2=false;
		var obstIsHitted=false;
		document._TickerOn=true;
		
		
		
		createjs.Ticker.on("tick", tick);
		 
		 function tick(event) {
			 
			 if(document._TickerOn==false){return;}
			  if(document.visibilityState!='visible'){
				 window.muteAllGameSounds(true);
				 //setTimeout(function(){window.location.reload(true)},1000);
			  } 
			 
			if(window.tabfocused == false){return;}		 
			 
			if(_carCurrentPos==_fuelCurrentPos){
						
						// Cordinate Based hitTest........................................................>>>...
						if(_shelFuel.hellixOilMc.y>715 && _shelFuel.hellixOilMc.y<1020){
							if(isHitted==false){	     
							createjs.Tween.get(_shelFuel.hellixOilMc).wait(0).to({alpha:0}, 200);
								if(_shelFuel.hellixOilMc.currentFrame==0){			    
									fuelLeft+=_HellixFUELValue;
									scorePoints+=_HellixPointValue;
									switchRoad("F");
									document.playMyMp3('helixPickup', false);		
									document.playMyMp3('helixPickup', true);	
									//window.helixPickup = createjs.Sound.play("helixPickup", "none", 0, 0, 0, .5); 
									window.carAddress.pointTwenty.play();
								}
								else 
								{				
								scorePoints+=_mineralPointValue;
								window.carAddress.pointFive.play();
								fuelLeft+=_mineralFUELValue;
								_travelledDis+=100; //@@@
								 document.playMyMp3('minOil', false);
								 document.playMyMp3('minOil', true);	
								}
							
							// limitting on grabing of oil
							if(fuelLeft>totalFuel){
								fuelLeft = totalFuel;				
							}		
									
							isHitted=true;
							}
						}	
							
					}
					///-------------------------
					///------------------------------
					if(_carCurrentPos==_fuel2CurrentPos){
					///// Ordinary oil hittest starts here ////////////-------------------------
						
						if(_shelFuel.hellixOilMc2.y>715 && _shelFuel.hellixOilMc2.y<1020){
							if(isHitted2==false){	     
								createjs.Tween.get(_shelFuel.hellixOilMc2).wait(0).to({alpha:0}, 200);
								scorePoints+=_mineralPointValue;
								window.carAddress.pointFive.play();
								fuelLeft+=_mineralFUELValue;
								_travelledDis+=100; //@@@
								 document.playMyMp3('minOil', false);
								 document.playMyMp3('minOil', true);				
							
							// limitting on grabing of oil
							if(fuelLeft>totalFuel){
								fuelLeft = totalFuel;				
							}		
									
							isHitted2=true;
							}
						}
					}
						
						////----
					
					
					
					
					////////////////////////////////////////////
			//////////////////////
			///////////////////////////hitTest obstacle | Obstacle hit///////////////////////////
		var isBlack=false;
		var blinkCounter=0;
		var reduceFuleBy = 10;
			
		 	if(_carCurrentPos==_obstCurrentPos){		
					if(_shelFuel.ObsticlesMc.y>800 &&   _shelFuel.ObsticlesMc.y<1020){
						if(obstIsHitted==false){
		                _shelFuel.ObsticlesMc.gotoAndStop(10);
						fuelLeft-=reduceFuleBy;	
						document.playMyMp3('obsHit', false);
						document.playMyMp3('obsHit', true);	
						document.playMyMp3('fastSpeed',false);
						document.playMyMp3('normalSpeed',false);					
						window.carAddress.crashedMc.visible=true;				
						console.log('CAR CRASHED... scorePoints reduced by '+_obsticleValue);
						 							
				// Blink the caron hit			
			    document.blinkSI = setInterval(function() {
				if (isBlack===false) {
					frame7.carMc.alpha=.40
					//navigator.vibrate([10]);	
				} else {
					frame7.carMc.alpha=1;
					//navigator.vibrate([10]);
				}
				isBlack=!isBlack;
				blinkCounter+=1;
				//
				// gme off in 300 count
				 if(blinkCounter>(5)){
					 window.gameStatus = 'off';
					 frame7.carMc.alpha=1;
					 clearInterval(document.blinkSI)  
					 pauseTheGame()
					 }
			}, 100);	
					obstIsHitted=true;
					}
					
				}	
			} 
				
			/// check fuel finished or not..
			
			// checking fuel finished. Fuelover , Fuelfinish check
					if(fuelLeft<0){
						console.log('Fuel Finish....');	
						frame7.timeBar.redBarMc.scaleX=0; 
							document._gameResult='fuelover';
							clearAllIntsOnGameEnd();		
							fuelIsOverRetry();
							pauseTheGame();
							window.gameStatus = 'off';
							window.muteAllGameSounds(true);
							setTimeout(document.playMyMp3('voucher', true),1000);
						    document._TickerOn=false;
					   
					}
					
					//checkFocusOfTab();
					moveDidYouKnow();
		}
		
		///
		
		//// FuelUp retry
			
		function fuelIsOverRetry(){
			frame7.fuelIsOver.visible=true;
		    frame7.timeUpRetry.visible=false;	
			frame7.fuelIsOver.alpha=0;	
			createjs.Tween.get(frame7.fuelIsOver).wait(100).to({alpha:1}, 400);
			frame7.carMc.alpha=1;
			frame7.congratsMc.visible=false;
			frame7.lowOilMc.visible=false;
			window.carAddress.crashedMc.visible=false;
			document.playMyMp3('raceComplete', true);
		}
		
		//
		
		
		window.onblur = function() {
			window.tabfocused = false;
			pauseTheGame();
			window.muteAllGameSounds(true)
		}
		window.onfocus = function() {
			
			console.log('ResumeShellGame tab focus');
			window.tabfocused = true;
			
			if(document._gameResult=='reached' ||document._gameResult=='timeup' ||document._gameResult=='fuelover' ){return;}
			resumeGame();
			window.muteAllGameSounds(false)
		}
		
		
		
		function pauseTheGame(){
			
		console.log('Your Game is paused for few seconds.');	
			
			scorePoints-=_obsticleValue; 
			window.gameStatus = 'off';
			frame7.TreeL.stop();
			frame7.TreeR.stop();
			frame7.elecPoll.stop();
			frame7.windMil.stop();
			frame7.board.stop();
			frame7.roadLFast.stop();
			frame7.roadRFast.stop();
			clearInterval(document.scorePointId)
			if(Reached2Destination==false){
				if(window.tabfocused == true){
					if(document._gameResult!="timeup" || document._gameResult!="reached" || document._gameResult!="fuelover"){
			          setTimeout(resumeGame, 500); //resume game after 3 sec after obstacle hit
					}
				}
			}	
		}
		/// re start game after obstacle hit..................................
		function resumeGame(){
			window.carAddress.crashedMc.visible=false;
		    if(document._gameResult!=''){return; window.muteAllGameSounds(true);}	
			//
			document.playMyMp3('normalSpeed',true,true);	
			window.gameStatus = 'on';
			frame7.TreeL.play();
			frame7.TreeR.play();
			frame7.board.play();
			frame7.roadR.play();
			frame7.roadL.play();
			frame7.elecPoll.play();
			frame7.windMil.play();
			frame7.roadLFast.play();
			frame7.roadRFast.play();
			document.scorePointId = setInterval(calScore, 10);
			//
			isHitted=false;
			isHitted2=false;
			obstIsHitted=false;
			blinkCounter=0;
		}
		
		
		document.resumeTheGame=function(){
			resumeGame();
		}
		 		 
		///////// HIT TEST EDNS HREE //
		 
		function switchRoad(_res){
			console.log("switchRoad = "+_res);
			_travelledDis+=200;//-----------<------<------@@@
			frame7.roadRFast.visible=true;
			frame7.roadLFast.visible=true;
			frame7.roadR.visible=false;
			frame7.roadL.visible=false;
			document.playMyMp3('fastSpeed', true, false);
			
		   setTimeout(backToSlow,9000)
				function backToSlow(){	
				frame7.roadRFast.visible=false;
				frame7.roadLFast.visible=false;
				frame7.roadR.visible=true;
				frame7.roadL.visible=true;
				console.log('backToSlow');
		
			}
			//}
			
		}
		
		// check focus tab code start here...
		
		var isTabInFocus=true;
		
		function checkFocusOfTab() {
		 if ( document.hasFocus() ) {
		    window.gameStatus = 'on';
		     if(isTabInFocus==false){
				 resumeGame();
				 console.log("The document has the focus....");
				 }	 
			 isTabInFocus=true;
		  } else {
		
			  window.gameStatus = 'off';
			if(isTabInFocus==true){
		        clearInterval(document.scorePointId);		
				pauseTheGame();		
				console.log( "The document doesn't have the focus.....");		
				}
			isTabInFocus=false;	
		  }
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(5));

	// Shell_Logo
	this.logoHelix = new lib.logoHelixMail();
	this.logoHelix.name = "logoHelix";
	this.logoHelix.parent = this;
	this.logoHelix.setTransform(1730,113);

	this.timeline.addTween(cjs.Tween.get(this.logoHelix).wait(11));

	// keep_Landscape_RotateMobile
	this.landPortMC = new lib.RotateDevice();
	this.landPortMC.name = "landPortMC";
	this.landPortMC.parent = this;
	this.landPortMC.setTransform(1061,541);

	this.timeline.addTween(cjs.Tween.get(this.landPortMC).wait(11));

	// tap
	this.tapMC = new lib.tapMC();
	this.tapMC.name = "tapMC";
	this.tapMC.parent = this;
	this.tapMC.setTransform(597.3,548.25);
	this.tapMC._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tapMC).wait(6).to({_off:false},0).wait(5));

	// fuel_is_over
	this.fuelIsOver = new lib.fuel_is_over_MC();
	this.fuelIsOver.name = "fuelIsOver";
	this.fuelIsOver.parent = this;
	this.fuelIsOver.setTransform(1108,357);
	this.fuelIsOver._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fuelIsOver).wait(6).to({_off:false},0).wait(5));

	// TIME_is_UP_retry
	this.timeUpRetry = new lib.timeUpRetryMc();
	this.timeUpRetry.name = "timeUpRetry";
	this.timeUpRetry.parent = this;
	this.timeUpRetry.setTransform(1106.25,435);
	this.timeUpRetry._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timeUpRetry).wait(6).to({_off:false},0).wait(5));

	// warning_change_oil
	this.lowOilMc = new lib.lowOilWarningMc();
	this.lowOilMc.name = "lowOilMc";
	this.lowOilMc.parent = this;
	this.lowOilMc.setTransform(1092.5,348);
	this.lowOilMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lowOilMc).wait(6).to({_off:false},0).wait(5));

	// Layer_didYouKnow
	this.didYouKnow = new lib.didYouKnow_mc();
	this.didYouKnow.name = "didYouKnow";
	this.didYouKnow.parent = this;
	this.didYouKnow.setTransform(-350,268);
	this.didYouKnow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.didYouKnow).wait(6).to({_off:false},0).wait(5));

	// GO
	this.startCountDown = new lib.go123();
	this.startCountDown.name = "startCountDown";
	this.startCountDown.parent = this;
	this.startCountDown.setTransform(1085,500.5);
	this.startCountDown._off = true;

	this.timeline.addTween(cjs.Tween.get(this.startCountDown).wait(5).to({_off:false},0).to({_off:true},2).wait(4));

	// share_on_social_icons
	this.congratsMc = new lib.congratsBoardMc();
	this.congratsMc.name = "congratsMc";
	this.congratsMc.parent = this;
	this.congratsMc.setTransform(1091.5,450.5);
	this.congratsMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.congratsMc).wait(6).to({_off:false},0).wait(5));

	// Layer_5_fullnormsc_btn
	this.fullNormBtn = new lib.fullNormScBtn();
	this.fullNormBtn.name = "fullNormBtn";
	this.fullNormBtn.parent = this;
	this.fullNormBtn.setTransform(1623.55,825.5,0.32,0.32);
	this.fullNormBtn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fullNormBtn).wait(1).to({_off:false},0).wait(10));

	// mute_unmute
	this.muteUnmute = new lib.muteUnmute();
	this.muteUnmute.name = "muteUnmute";
	this.muteUnmute.parent = this;
	this.muteUnmute.setTransform(1726.75,826.05,0.32,0.32,0,0,0,2.2,1.7);
	this.muteUnmute._off = true;

	this.timeline.addTween(cjs.Tween.get(this.muteUnmute).wait(1).to({_off:false},0).wait(10));

	// skipButton
	this.btnSkip = new lib.skipButtonHome();
	this.btnSkip.name = "btnSkip";
	this.btnSkip.parent = this;
	this.btnSkip.setTransform(1082.6,640.2);
	this.btnSkip.alpha = 0.0703;
	new cjs.ButtonHelper(this.btnSkip, 0, 1, 2, false, new lib.skipButtonHome(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSkip).to({_off:true},1).wait(3));

	// SignIn_FB_Google
	this.instance = new lib.Untitled2();
	this.instance.parent = this;
	this.instance.setTransform(827.5,114);

	this.googleLogin = new lib.googleLoginButton();
	this.googleLogin.name = "googleLogin";
	this.googleLogin.parent = this;
	this.googleLogin.setTransform(-1260.95,500.7);
	new cjs.ButtonHelper(this.googleLogin, 0, 1, 2, false, new lib.googleLoginButton(), 3);

	this.facebookLogin = new lib.fbLoginButton();
	this.facebookLogin.name = "facebookLogin";
	this.facebookLogin.parent = this;
	this.facebookLogin.setTransform(-947.45,500.7,1,1,0,0,0,0.5,0);
	new cjs.ButtonHelper(this.facebookLogin, 0, 1, 2, false, new lib.fbLoginButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.facebookLogin},{t:this.googleLogin},{t:this.instance}]}).to({state:[]},1).wait(10));

	// Layer_6
	this.nextBtn = new lib.nextBtn2();
	this.nextBtn.name = "nextBtn";
	this.nextBtn.parent = this;
	this.nextBtn.setTransform(1165.75,622.75,1,1,0,0,0,58.7,17.2);
	this.nextBtn._off = true;
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2, false, new lib.nextBtn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nextBtn).wait(1).to({_off:false},0).to({_off:true},1).wait(9));

	// SelectCar_box
	this.carsBox = new lib.carselectionbox();
	this.carsBox.name = "carsBox";
	this.carsBox.parent = this;
	this.carsBox.setTransform(1131.65,550.85,1,1,0,0,0,1105,540.5);
	this.carsBox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carsBox).wait(1).to({_off:false},0).to({_off:true},1).wait(9));

	// Layer_7nextButton
	this.nextButton = new lib.nextButtonMc();
	this.nextButton.name = "nextButton";
	this.nextButton.parent = this;
	this.nextButton.setTransform(1089,625.5);
	this.nextButton._off = true;
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.nextButton).wait(4).to({_off:false},0).to({_off:true},1).wait(6));

	// START
	this.shelDashOnStart = new lib.shelDashOnStartMc();
	this.shelDashOnStart.name = "shelDashOnStart";
	this.shelDashOnStart.parent = this;
	this.shelDashOnStart.setTransform(1105.25,279.5);

	this.startBtn = new lib.gamestartbtn();
	this.startBtn.name = "startBtn";
	this.startBtn.parent = this;
	this.startBtn.setTransform(1088.85,624.9);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.startBtn},{t:this.shelDashOnStart}]},5).to({state:[]},1).wait(5));

	// choose_lubricants
	this.chooSeUrLubri = new lib.chooSeUrLubriMc();
	this.chooSeUrLubri.name = "chooSeUrLubri";
	this.chooSeUrLubri.parent = this;
	this.chooSeUrLubri.setTransform(1105,74.5);

	this.instance_1 = new lib.Line();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1100,154);

	this.otherOilBtn = new lib.otherOilBtnMC();
	this.otherOilBtn.name = "otherOilBtn";
	this.otherOilBtn.parent = this;
	this.otherOilBtn.setTransform(1267,270.5);

	this.shellOilBtn = new lib.shellOilBtnMC();
	this.shellOilBtn.name = "shellOilBtn";
	this.shellOilBtn.parent = this;
	this.shellOilBtn.setTransform(948,279.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shellOilBtn},{t:this.otherOilBtn},{t:this.instance_1},{t:this.chooSeUrLubri}]},2).to({state:[]},1).wait(8));

	// Navigate_to_pick_fuel___avoid_obstacles
	this.naviToPicupMC = new lib.naviToPicupMC();
	this.naviToPicupMC.name = "naviToPicupMC";
	this.naviToPicupMC.parent = this;
	this.naviToPicupMC.setTransform(1086,298);

	this.instrctBtn = new lib.instrctBtn();
	this.instrctBtn.name = "instrctBtn";
	this.instrctBtn.parent = this;
	this.instrctBtn.setTransform(1089,505.5);
	new cjs.ButtonHelper(this.instrctBtn, 0, 1, 2, false, new lib.instrctBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instrctBtn},{t:this.naviToPicupMC}]},3).to({state:[]},1).wait(7));

	// Reach_the_finish_line_in_the_fastest_time_possible
	this.reachTheFinish = new lib.reachTheFinishMC();
	this.reachTheFinish.name = "reachTheFinish";
	this.reachTheFinish.parent = this;
	this.reachTheFinish.setTransform(1106.5,280);
	this.reachTheFinish._off = true;

	this.timeline.addTween(cjs.Tween.get(this.reachTheFinish).wait(4).to({_off:false},0).to({_off:true},1).wait(6));

	// txt_time
	this.pointBox = new lib.pointBoxMc();
	this.pointBox.name = "pointBox";
	this.pointBox.parent = this;
	this.pointBox.setTransform(1092.5,88.9);

	this.timeBox = new lib.timeBoxMc();
	this.timeBox.name = "timeBox";
	this.timeBox.parent = this;
	this.timeBox.setTransform(932.5,93.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.timeBox},{t:this.pointBox}]},6).wait(5));

	// Vector_Smart_Object_1
	this.timeBar = new lib.timeBarMc();
	this.timeBar.name = "timeBar";
	this.timeBar.parent = this;
	this.timeBar.setTransform(584.3,90.1,1,1,0,0,0,2.4,99.6);
	this.timeBar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timeBar).wait(6).to({_off:false},0).wait(5));

	// Layer_3
	this.tapRight = new lib.taprightbtn();
	this.tapRight.name = "tapRight";
	this.tapRight.parent = this;
	this.tapRight.setTransform(1967.95,959);
	this.tapRight._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tapRight).wait(6).to({_off:false},0).wait(5));

	// Layer_2
	this.tapLeft = new lib.tapleftmc();
	this.tapLeft.name = "tapLeft";
	this.tapLeft.parent = this;
	this.tapLeft.setTransform(214.9,959);
	this.tapLeft._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tapLeft).wait(6).to({_off:false},0).wait(5));

	// Shape_1_copy
	this.distanceBar = new lib.gameMapMc();
	this.distanceBar.name = "distanceBar";
	this.distanceBar.parent = this;
	this.distanceBar.setTransform(1217.7,99.9);
	this.distanceBar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.distanceBar).wait(6).to({_off:false},0).wait(5));

	// Car__Car__
	this.carMc = new lib.car();
	this.carMc.name = "carMc";
	this.carMc.parent = this;
	this.carMc.setTransform(1090,750);
	this.carMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.carMc).wait(1).to({_off:false},0).wait(10));

	// C_O_D_E__second
	this.hellixOilMc2 = new lib.helixOilonroadMcORDINARY();
	this.hellixOilMc2.name = "hellixOilMc2";
	this.hellixOilMc2.parent = this;
	this.hellixOilMc2.setTransform(2510.4,385);

	this.hellixOilMc = new lib.helixOilonroadMc();
	this.hellixOilMc.name = "hellixOilMc";
	this.hellixOilMc.parent = this;
	this.hellixOilMc.setTransform(2510.4,616);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hellixOilMc},{t:this.hellixOilMc2}]},6).wait(5));

	// Vector_Smart_Object_3
	this.ObsticlesMc = new lib.Obsticlesmovie();
	this.ObsticlesMc.name = "ObsticlesMc";
	this.ObsticlesMc.parent = this;
	this.ObsticlesMc.setTransform(2758,102.35);
	this.ObsticlesMc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ObsticlesMc).wait(6).to({_off:false},0).wait(5));

	// Vector_Smart_Object
	this.instance_2 = new lib.cloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1098,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// Vector_Smart_Object_1
	this.instance_3 = new lib.VectorSmartObject_1copy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(927,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// Layer_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("EgXlgisMAvagAKMBQBBEWMjPsABXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:1083.25,y:785.775}).wait(5));

	// Finish_Line
	this.finishLineMC = new lib.finishLineMC();
	this.finishLineMC.name = "finishLineMC";
	this.finishLineMC.parent = this;
	this.finishLineMC.setTransform(1118.5,915.5);
	this.finishLineMC._off = true;

	var maskedShapeInstanceList = [this.finishLineMC];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.finishLineMC).wait(6).to({_off:false},0).wait(5));

	// Tree_R
	this.TreeR = new lib.tree();
	this.TreeR.name = "TreeR";
	this.TreeR.parent = this;
	this.TreeR.setTransform(1904.4,815,1,1,0,0,180,74.5,181);

	this.timeline.addTween(cjs.Tween.get(this.TreeR).wait(11));

	// Tree_L
	this.TreeL = new lib.tree();
	this.TreeL.name = "TreeL";
	this.TreeL.parent = this;
	this.TreeL.setTransform(256.35,806.95,1,1,0,0,0,74.5,181);

	this.timeline.addTween(cjs.Tween.get(this.TreeL).wait(11));

	// windmil
	this.windMil = new lib.wind_elec_anim();
	this.windMil.name = "windMil";
	this.windMil.parent = this;
	this.windMil.setTransform(1575.65,521.85);

	this.timeline.addTween(cjs.Tween.get(this.windMil).wait(11));

	// BoardHelix
	this.board = new lib.board();
	this.board.name = "board";
	this.board.parent = this;
	this.board.setTransform(441.25,529.6,1,1,0,0,0,136,242.5);

	this.timeline.addTween(cjs.Tween.get(this.board).wait(11));

	// elecPoll
	this.elecPoll = new lib.elecPolMcHolder();
	this.elecPoll.name = "elecPoll";
	this.elecPoll.parent = this;
	this.elecPoll.setTransform(645.25,515.3);

	this.timeline.addTween(cjs.Tween.get(this.elecPoll).wait(11));

	// fast_Road_lines_movings
	this.roadRFast = new lib.roadanim_right_fast();
	this.roadRFast.name = "roadRFast";
	this.roadRFast.parent = this;
	this.roadRFast.setTransform(1258.95,813,1,1,0,0,180);

	this.roadLFast = new lib.roadanimleft_fast();
	this.roadLFast.name = "roadLFast";
	this.roadLFast.parent = this;
	this.roadLFast.setTransform(918.95,813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.roadLFast},{t:this.roadRFast}]}).wait(11));

	// Road_lines_movings
	this.roadR = new lib.roadanimleft();
	this.roadR.name = "roadR";
	this.roadR.parent = this;
	this.roadR.setTransform(1258.95,813,1,1,0,0,180);

	this.roadL = new lib.roadanimleft();
	this.roadL.name = "roadL";
	this.roadL.parent = this;
	this.roadL.setTransform(918.95,813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.roadL},{t:this.roadR}]}).wait(11));

	// newRoad
	this.instance_4 = new lib.road();
	this.instance_4.parent = this;
	this.instance_4.setTransform(221,563);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11));

	// sideLinesNew
	this.instance_5 = new lib.linesNew();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10,506,1.1609,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11));

	// Layer_7
	this.instance_6 = new lib.montains();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-13,262,1.0488,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11));

	// Cityscape
	this.buildings = new lib.buliding();
	this.buildings.name = "buildings";
	this.buildings.parent = this;
	this.buildings.setTransform(1087.9,348,1,1,0,0,0,1114.9,201);

	this.timeline.addTween(cjs.Tween.get(this.buildings).wait(11));

	// Layer_5
	this.instance_7 = new lib.nreBG();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4,0,1.1588,1.1554);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(460,540.5,2408.3,708.5);
// library properties:
lib.properties = {
	id: '311388075ED5E847A1DA2D48765C51B7',
	width: 2210,
	height: 1081,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedTexturedBitmap_22.png?1558326000112", id:"CachedTexturedBitmap_22"},
		{src:"images/CachedTexturedBitmap_27.png?1558326000112", id:"CachedTexturedBitmap_27"},
		{src:"images/montains.png?1558326000112", id:"montains"},
		{src:"images/rotateBGjpg.jpg?1558326000112", id:"rotateBGjpg"},
		{src:"images/index_atlas_.png?1558325999952", id:"index_atlas_"},
		{src:"images/index_atlas_2.png?1558325999952", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1558325999952", id:"index_atlas_3"},
		{src:"images/index_atlas_4.png?1558325999952", id:"index_atlas_4"},
		{src:"images/index_atlas_5.png?1558325999952", id:"index_atlas_5"},
		{src:"images/index_atlas_6.png?1558325999952", id:"index_atlas_6"},
		{src:"images/index_atlas_7.png?1558325999953", id:"index_atlas_7"},
		{src:"images/index_atlas_8.png?1558325999955", id:"index_atlas_8"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['311388075ED5E847A1DA2D48765C51B7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;