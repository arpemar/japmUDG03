//LAS 3 COSAS MAS IMPORTANTES SON: SCENE + CAMERA + REDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#000000"); //COLOR DE FONDO
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

window.addEventListener('resize', ()=>{
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width/height;
        camera.updateProjectionMatrix();
    }
);

///FIGURAS**********
    //ESFERA BLANCA
    var geometry = new THREE.SphereGeometry(0.5, 10, 10);
    var material = new THREE.MeshBasicMaterial( { color: "#FFFFFF", flatShading: true, metalness: 0, roughness: 1} );
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube); //MOSTRAR CUBO

    //ESFERA VERDE
    var geometry = new THREE.SphereGeometry(1, 10, 10);
    var material = new THREE.MeshBasicMaterial( { color: "#2BEB0D", flatShading: true, metalness: 0, roughness: 1, wireframe: true} );
    var cube2 = new THREE.Mesh(geometry, material);
    scene.add(cube2); //MOSTRAR CUBO

    //CUBO MEDIANO:
    var geometry = new THREE.BoxGeometry(5, 0.1, 0.1);
    var material = new THREE.MeshBasicMaterial({color:"#E74C3C"});
    var wirefreameCube = new THREE.Mesh(geometry, material);
    scene.add(wirefreameCube);

    //CUBO MEDIANO:
    var geometry = new THREE.BoxGeometry(0.1, 5, 0.1);
    var material = new THREE.MeshBasicMaterial({color:"#F4D03F"});
    var wirefreameCube2 = new THREE.Mesh(geometry, material);
    scene.add(wirefreameCube2);

    //CUBO MEDIANO:
    var geometry = new THREE.BoxGeometry(0.1, 0.1, 5);
    var material = new THREE.MeshBasicMaterial({color:"#1533BB"});
    var wirefreameCube3 = new THREE.Mesh(geometry, material);
    scene.add(wirefreameCube3);

    var geometry = new THREE.CircleGeometry(2.5, 200, 10);
    var material = new THREE.MeshBasicMaterial( { color: "#0DEBD7", wireframe: true} );
    var cube3 = new THREE.Mesh(geometry, material);
    scene.add(cube3); //MOSTRAR CUBO

    var geometry = new THREE.CircleGeometry(2.5, 200, 10);
    var material = new THREE.MeshBasicMaterial( { color: "#EB0EA8", wireframe: true} );
    var cube4 = new THREE.Mesh(geometry, material);
    scene.add(cube4); //MOSTRAR CUBO

//LUZ AMBIENTAL:
var luzDeAmbiente = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(luzDeAmbiente); //MOSTRAR

//POINT LIGHT::
var pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

//ANIMACION::
function animate() {
    requestAnimationFrame(animate);
    cube2.rotation.x+=0.01;
    cube2.rotation.y+=0.01;

    wirefreameCube.rotation.x -= 0.005;
    wirefreameCube.rotation.z -= 0.005;

    wirefreameCube2.rotation.x += 0.005;
    wirefreameCube2.rotation.y += 0.005;

    wirefreameCube3.rotation.z += 0.005;
    wirefreameCube3.rotation.y += 0.005;

    cube3.rotation.x+=0.01;
    cube3.rotation.y+=0.01;

    cube4.rotation.x-=0.01;
    cube4.rotation.y+=0.01;
    renderer.render(scene,camera);
}

animate();

