//@DEPRECATED

/*
 * Loads dynamic functions
 * @return: void
 */
function loadJS(filename){
    var file = document.createElement('script');
    file.setAttribute("type", "text/javascript");
    file.setAttribute("src", filename);
    (document.getElementsByTagName('HEAD')[0]||document.body).appendChild(file);
    console.log("JS File successfully loaded:" + filename);
}

//third party addins
loadJS("js/jquery.min.js");
loadJS("js/underscore.js");
loadJS("js/backbone-min.js");
//loadJS("js/backbone-dev.js")
loadJS("js/three.min.js");
//project addins
loadJS("js/cube.js");
loadJS("js/root.js");
