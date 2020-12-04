import * as THREE from './three.module.js';
export { geometry }

const geometry = new THREE.Geometry();
geometry.vertices.push(
    new THREE.Vector3(0, -1, -1),
    new THREE.Vector3(0, -1, 1),
    new THREE.Vector3(0, 1, -1),
    new THREE.Vector3(0, 1, 1),
    new THREE.Vector3(-1 / 4, 0, -1  / 4),
    new THREE.Vector3(-1 / 4, 0, 1 / 4),
    new THREE.Vector3(1 / 4, 0, -1 / 4),
    new THREE.Vector3(1 / 4, 0, 1 / 4),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, 1, 0)
)

geometry.faces.push(
    new THREE.Face3(5, 3, 9),
    new THREE.Face3(4, 9, 2),
    new THREE.Face3(6, 2, 11),
    new THREE.Face3(7, 11, 3),
    new THREE.Face3(6, 4, 2),
    new THREE.Face3(7, 6, 11),
    new THREE.Face3(5, 7, 3),
    new THREE.Face3(4, 5, 9),
    new THREE.Face3(6, 0, 4),
    new THREE.Face3(7, 10, 6),
    new THREE.Face3(5, 1, 7),
    new THREE.Face3(4, 8, 5),
    new THREE.Face3(0, 8, 4),
    new THREE.Face3(10, 0, 6),
    new THREE.Face3(1, 10, 7),
    new THREE.Face3(8, 1, 5),
    new THREE.Face3(3, 2, 9),
    new THREE.Face3(2, 3, 11),
    new THREE.Face3(0, 1, 8),
    new THREE.Face3(0, 10, 1)
)
