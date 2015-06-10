function createRubixCube(width, height, depth) {
    var cubes = [];
    
    var geom = new THREE.BoxGeometry(width, height, depth, 15, 15, 15);
    var mat = createMat();

    for (var i = 0; i < 27; i++) {
        var mesh = new THREE.Mesh(geom, mat[i]);
        cubes.push(mesh);
    }

    posCubes(cubes);

    return cubes;
}

function posCubes(cubes) {
    cubes[0].position.set(0, 110, 110);
    cubes[1].position.set(-110, 110, 110);
    cubes[2].position.set(-110, 0, 110);
    cubes[3].position.set(-110, -110, 110);
    cubes[4].position.set(0, -110, 110);
    cubes[5].position.set(110, -110, 110);
    cubes[6].position.set(110, 0, 110);
    cubes[7].position.set(110, 110, 110);
    cubes[8].position.set(0, 0, 110);
    cubes[9].position.set(0, 110, 0);
    cubes[10].position.set(-110, 110, 0);
    cubes[11].position.set(-110, 0, 0);
    cubes[12].position.set(-110, -110, 0);
    cubes[13].position.set(0, -110, 0);
    cubes[14].position.set(110, -110, 0);
    cubes[15].position.set(110, 0, 0);
    cubes[16].position.set(110, 110, 0);
    cubes[17].position.set(0, 0, 0);
    cubes[18].position.set(0, 110, -110);
    cubes[19].position.set(-110, 110, -110);
    cubes[20].position.set(-110, 0, -110);
    cubes[21].position.set(-110, -110, -110);
    cubes[22].position.set(0, -110, -110);
    cubes[23].position.set(110, -110, -110);
    cubes[24].position.set(110, 0, -110);
    cubes[25].position.set(110, 110, -110);
    cubes[26].position.set(0, 0, -110);
}

function createMat() {
    var mat = [];
    var white = new THREE.MeshPhongMaterial({color: 0xFFFFFF, shininess: 0.40});
    var black = new THREE.MeshPhongMaterial({color: 0x000000, shininess: 0.40});
    var red = new THREE.MeshPhongMaterial({color: 0xCC0000, shininess: 0.40});
    var green = new THREE.MeshPhongMaterial({color: 0x00B200, shininess: 0.40});
    var blue = new THREE.MeshPhongMaterial({color: 0x0066FF, shininess: 0.40});
    var yellow = new THREE.MeshPhongMaterial({color: 0xFFFF00, shininess: 0.40});
    var orange = new THREE.MeshPhongMaterial({color: 0xFF9900, shininess: 0.40});

    white.specular.setHex(0x010101);
    black.specular.setHex(0x010101);
    red.specular.setHex(0x010101);
    green.specular.setHex(0x010101);
    blue.specular.setHex(0x010101);
    yellow.specular.setHex(0x010101);
    orange.specular.setHex(0x010101);

    //cube0
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube1
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube2
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube3
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube4
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube5
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube6
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube7
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube8
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(blue);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube9
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube 10
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube 11
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube12
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube13
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube14
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube15
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube16
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube17
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube18
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube19
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube20
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube21
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(orange);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube22
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube 23
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(white);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube 24
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube25
    var materialCode = [];
    materialCode.push(red);
    materialCode.push(black);
    materialCode.push(yellow);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    //cube26
    var materialCode = [];
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(black);
    materialCode.push(green);
    mat.push(new THREE.MeshFaceMaterial(materialCode));

    return mat;
}