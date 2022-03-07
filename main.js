import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const material = new THREE.MeshStandardMaterial({
  // color: 0x00ff00,
  map: new THREE.TextureLoader().load('wood1.jpg'),
  metalness: 0.2,
  roughness: 1
});
const material2 = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.2,
  roughness: 1
})
const material3 = new THREE.MeshStandardMaterial({
  color: 0x63daf6,
  metalness: 0.2,
  roughness: 1
})
const material4 = new THREE.MeshStandardMaterial({
  color: 0x93ee56,
  metalness: 0.2,
  roughness: 1
})

var depth = 5;
var shape = new THREE.Shape([
  new THREE.Vector2(-20, 60),
  new THREE.Vector2(20, 60),
  new THREE.Vector2(20, -60),
  new THREE.Vector2(-20, -60)
]);


// Extrude using Depth

var extrudeSettings1 = {
  bevelSize: 3,
  bevelThickness: 3,
  bevelOffset: 2,
  steps: 1,
  amount: depth
};

var geometry1 = new THREE.ExtrudeGeometry(shape, extrudeSettings1);

var mesh1 = new THREE.Mesh(geometry1, material);



scene.add(mesh1);

// Extrude Using Path

var point1 = new THREE.Vector3(0, 0, 0);

var point2 = new THREE.Vector3(0, 10, depth);

var path = new THREE.LineCurve3(point1, point2)

var extrudeSettings2 = {
  bevelEnabled: false,
  steps: 1,
  extrudePath: path,
};

var geometry2 = new THREE.ExtrudeGeometry(shape, extrudeSettings2);
var mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh2);

var point3 = new THREE.Vector3(0, 0, 0);

var point4 = new THREE.Vector3(0, 0, depth);

var path = new THREE.LineCurve3(point3, point4)

var extrudeSettings3 = {
  bevelEnabled: false,
  steps: 1,
  extrudePath: path,
};

var geometry3 = new THREE.ExtrudeGeometry(shape, extrudeSettings3);

var mesh3 = new THREE.Mesh(geometry3, material3);
scene.add(mesh3);


var point5 = new THREE.Vector3(0, 0, 0);

var point6 = new THREE.Vector3(0, -10, depth);

var path = new THREE.LineCurve3(point5, point6)

var extrudeSettings4 = {
  bevelEnabled: false,
  steps: 1,
  extrudePath: path,
};

var geometry4 = new THREE.ExtrudeGeometry(shape, extrudeSettings4);

var mesh4 = new THREE.Mesh(geometry4, material4);
scene.add(mesh4);




scene.add(new THREE.AmbientLight(0xffffff))
camera.position.z = 50;
const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
  requestAnimationFrame(animate);


  controls.update();
  renderer.render(scene, camera);
};

animate();