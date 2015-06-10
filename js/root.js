//
console.log("[DEBUG]:[START ROOT.JS]");

//create Cubes and load them into the Model
var cubeModels = []
var cubesArr = createRubixCube(cubes,100,100,100);

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

