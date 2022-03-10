console.log('Social JS loaded..');
////  code for  iPhone... It

document.addEventListener("gesturestart", function (e) {
	e.preventDefault();
    document.body.style.zoom = 1;
});

document.addEventListener("gesturechange", function (e) {
	e.preventDefault();

  document.body.style.zoom = 1;
});
document.addEventListener("gestureend", function (e) {
	  e.preventDefault();
    document.body.style.zoom = 1;
});
 

/////////////

/////////////


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
	 


window.addEventListener('orientationchange', doOnOrientationChanges);

function doOnOrientationChanges() {

	switchToOtherMode()


}


function switchToOtherMode() {

	if (window.matchMedia("(orientation: portrait)").matches) {			
		 window.open("https://shellgame.in/p/index.html", "_self");
		console.log('you are in Port mode');		
	} 
	else {			
			console.log(' Landsc -- ... (switchToOtherMode)');

	}


}

////

if (window.matchMedia("(orientation: portrait)").matches) {
	//_frameLandPort.landPortMC.gotoAndStop(1);
	window.open("https://shellgame.in/p", "_self");
	setTimeout(orientationLSCP, 10);	
	}
	else{}


	function orientationLSCP(){
		window.open("https://shellgame.in/p", "_self");
		//_frameLandPort.landPortMC.gotoAndStop(1);
	}
	
	orientationLSCP();
		
		//----------------------------------------------------
		
 }
		