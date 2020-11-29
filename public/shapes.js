//import * as THREE from './three.module.js';
//export { shapes }

const scene = new THREE.Scene();
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;

const geometry = new THREE.BoxGeometry
    (boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshBasicMaterial
    ({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);


function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
}



let shapes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2)
]