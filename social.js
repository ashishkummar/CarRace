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

/* if (window.location.protocol == "http:") {
        var restOfUrl = window.location.href.substr(5);
        window.location = "https:" + restOfUrl;
    } */