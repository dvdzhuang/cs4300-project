function main() {
    const canvas = document.querySelector('#canvas');
    const renderer = new WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2;  // canvas default = 2 = 300/150
    const near = 0.1;
    const far = 5;
    const camera = new PerspectiveCamera
        (fov, aspect, near, far);

    camera.position.z = 2;


    requestAnimationFrame(render);


    //scene.add(cube);
    //renderer.render(scene, camera);

}