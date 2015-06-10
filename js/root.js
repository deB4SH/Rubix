//
console.log("[DEBUG]:[START ROOT.JS]");

//globals
var renderer;
var scene;
var camera;
var cameraControl;
var clock = new THREE.Clock();
var cubeModels = []

var canvasWidth = 0;
var canvasHeight = 0;
var aspect = 0;

function boot(){
    initGame();
    addToSite();
    createScene();
    debug();
}

function addToSite(){
    var container = document.getElementById("container");
    container.appendChild(renderer.domElement);
}

function initGame(){
    
    var container = document.getElementById("container");
    //setup for window
    canvasWidth = container.clientWidth;
    canvasHeight = container.clientHeigth;
    aspect = canvasWidth / canvasHeight;
    //camera
    camera = new THREE.PerspectiveCamera(45,aspect,0.1,20000);
    camera.position.set(0,0,0);
    //set renderer
    renderer = Detector.webgl? new THREE.WebGLRenderer({antialias: true}): errorPOP();
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setClearColor(0xFFFFFF);
    renderer.setSize(canvasWidth,canvasHeight);
    //controls for cam
    //cameraControl = new THREE.OrbitControls(camera, renderer.domElement);
}

function createScene(){
    //create basic scene
    scene = new THREE.Scene();
    
    initCubes();
    
}

function initCubes(){
    var cubesArr = createRubixCube(100,100,100);
    for(var i=0;i<cubesArr.length;i++){
        cubeModels.push(
            new Cube({
                x: cubesArr[i].position.x,
                y: cubesArr[i].position.y,
                z: cubesArr[i].position.z,
                width: "100",
                height: "100",
                depth: "100",
                element: cubesArr[i]    
            })
        )
    }
}

function debug(){
    console.log(cubeModels);
}

function errorPOP(){
    alert("WebGL wont work on your site! :(");
}


boot();