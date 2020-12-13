import * as THREE from './three.module.js';
export { geo2 }

const geo2 = new THREE.Geometry();
geo2.vertices.push(
    new THREE.Vector3(-0.5, 0.75, -0.25), //torso
    new THREE.Vector3(0.5, 0.75, -0.25),
    new THREE.Vector3(0.5, -0.75, -0.25),
    new THREE.Vector3(-0.5, -0.75, -0.25),
    new THREE.Vector3(-0.5, 0.75, 0.25),
    new THREE.Vector3(0.5, 0.75, 0.25),
    new THREE.Vector3(0.5, -0.75, 0.25),
    new THREE.Vector3(-0.5, -0.75, 0.25),
    new THREE.Vector3(-0.25, 1.25, -0.25), //head
    new THREE.Vector3(0.25, 1.25, -0.25),
    new THREE.Vector3(0.25, 0.75, -0.25),
    new THREE.Vector3(-0.25, 0.75, -0.25),
    new THREE.Vector3(-0.25, 1.25, 0.25),
    new THREE.Vector3(0.25, 1.25, 0.25),
    new THREE.Vector3(0.25, 0.75, 0.25),
    new THREE.Vector3(-0.25, 0.75, 0.25),
    new THREE.Vector3(0, -0.75, -0.25), //legs
    new THREE.Vector3(0, -0.75, 0.25),
    new THREE.Vector3(-0.25, -1.5, 0),
    new THREE.Vector3(0.25, -1.5, 0),
    new THREE.Vector3(-1.25, 0.65, -0.1), //left arm
    new THREE.Vector3(-0.5, 0.65, -0.1),
    new THREE.Vector3(-0.5, 0.45, -0.1),
    new THREE.Vector3(-1.25, 0.45, -0.1),
    new THREE.Vector3(-1.25, 0.65, 0.1),
    new THREE.Vector3(-0.5, 0.65, 0.1),
    new THREE.Vector3(-0.5, 0.45, 0.1),
    new THREE.Vector3(-1.25, 0.45, 0.1),
    new THREE.Vector3(1.25, 0.65, -0.1), //right arm
    new THREE.Vector3(0.5, 0.65, -0.1),
    new THREE.Vector3(0.5, 0.45, -0.1),
    new THREE.Vector3(1.25, 0.45, -0.1),
    new THREE.Vector3(1.25, 0.65, 0.1),
    new THREE.Vector3(0.5, 0.65, 0.1),
    new THREE.Vector3(0.5, 0.45, 0.1),
    new THREE.Vector3(1.25, 0.45, 0.1)
);

geo2.faces.push(
    new THREE.Face3(0, 1, 2), // torso //back
    new THREE.Face3(0, 2, 3),
    new THREE.Face3(5, 4, 7), //front
    new THREE.Face3(5, 7, 6),
    new THREE.Face3(0, 3, 7), //left
    new THREE.Face3(0, 7, 4),
    new THREE.Face3(1, 5, 6), //right
    new THREE.Face3(1, 6, 2), 
    /*new THREE.Face3(6, 7, 3), //bottom
    new THREE.Face3(6, 3, 2),*/
    new THREE.Face3(5, 0, 4), //top
    new THREE.Face3(5, 1, 0),
    new THREE.Face3(8, 9, 10), // head //back
    new THREE.Face3(8, 10, 11),
    new THREE.Face3(13, 12, 15), //front
    new THREE.Face3(13, 15, 14),
    new THREE.Face3(8, 11, 15), //left
    new THREE.Face3(8, 15, 12),
    new THREE.Face3(9, 13, 14), //right
    new THREE.Face3(9, 14, 10), 
    //new THREE.Face3(14, 15, 11), //bottom
    //new THREE.Face3(14, 11, 10),
    new THREE.Face3(13, 8, 12), //top
    new THREE.Face3(13, 9, 8),
    new THREE.Face3(7, 3, 18), //left leg //left
    new THREE.Face3(3, 16, 18), //back
    new THREE.Face3(16, 17, 18), //right
    new THREE.Face3(17, 7, 18), //front
    new THREE.Face3(2, 6, 19), //right leg //right
    new THREE.Face3(6, 17, 19), //front
    new THREE.Face3(17, 16, 19), //left
    new THREE.Face3(16, 2, 19), //back
    new THREE.Face3(20, 21, 22), // left arm //back
    new THREE.Face3(20, 22, 23),
    new THREE.Face3(25, 24, 27), //front
    new THREE.Face3(25, 27, 26),
    new THREE.Face3(20, 23, 27), //left
    new THREE.Face3(20, 27, 24),
    //new THREE.Face3(21, 25, 26), //right
    //new THREE.Face3(21, 26, 22), 
    new THREE.Face3(26, 27, 23), //bottom
    new THREE.Face3(26, 23, 22),
    new THREE.Face3(25, 20, 24), //top
    new THREE.Face3(25, 21, 20),
    new THREE.Face3(28, 29, 30), // right arm //back
    new THREE.Face3(28, 30, 31),
    new THREE.Face3(33, 32, 35), //front
    new THREE.Face3(33, 35, 34),
    new THREE.Face3(28, 31, 35), //left
    new THREE.Face3(28, 35, 32),
    //new THREE.Face3(29, 33, 34), //right
    //new THREE.Face3(29, 34, 30), 
    new THREE.Face3(34, 35, 31), //bottom
    new THREE.Face3(34, 31, 30),
    new THREE.Face3(33, 28, 32), //top
    new THREE.Face3(33, 29, 28),
)