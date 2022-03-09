import '/css/style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import  {squarePoints} from '../css/assets/SquareShape';
import { White } from './Constants/constants';
import { CreateMaterial } from './Helpers/MaterialHelper';
// import { createshape } from './Helpers/ShapeHelper';
import { squarePoints } from '../css/assets/SquareShape';
import { CreateShape } from './Helpers/ShapeHelper';
import { CreateGeometry } from './Helpers/GeomertyHelper';


function run() {
  //#region Scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //#endregion

  //#region Drawing shapes
  function objects() {

    const cube = new CreateShape().Cube();
    const sphere = new CreateShape().Sphere();
    const torus = new CreateShape().Torus();
    const TetraHedron = new CreateShape().TetraHedron();
    scene.add(cube, sphere, torus, TetraHedron);
    //#endregion


    //#region Today's Training
    debugger
    const points = squarePoints;
    console.log(points);
    let i = 0;
    // forEach loop
    // points.forEach(myfunction);
    // function myfunction() {
    //   console.log(points[i].point.x, points[i].point.y);
    //   i++;
    // }

    points.forEach(() => {
      console.log(points[i].point.x, points[i].point.y);
      i++;
    });
    //#endregion
    //#region Materials
    const material1 = new CreateMaterial().MeshStandardMaterial();
    // const material2 = new CreateMaterial().MeshNormalMaterial();
    // const material3 = new CreateMaterial().MeshBasicMaterial();
    // const material4 = new CreateMaterial().MeshNormalMaterial();
    //#endregion

    //#region Current Work is going on

    // const shape = new THREE.Shape([
    //   new THREE.Vector2(points[0].point.x, points[0].point.y),
    //   new THREE.Vector2(points[1].point.x, points[1].point.y),
    //   new THREE.Vector2(points[2].point.x, points[2].point.y),
    //   new THREE.Vector2(points[3].point.x, points[3].point.y)
    // ]);

    var shape = new THREE.Shape([
      new THREE.Vector2(-20, 60),
      new THREE.Vector2(20, 60),
      new THREE.Vector2(20, -60),
      new THREE.Vector2(-20, -60)
    ]);

    // var point1 = new THREE.Vector3(0, 0, 0);
    //   var point2 = new THREE.Vector3(0, 10, depth);
    //   var path = new THREE.LineCurve3(point1, point2)

    // console.log(points[0].point.x , points[0].point.y )
    // console.log(points[1].point.x , points[1].point.y )
    // console.log(points[2].point.x , points[2].point.y )
    // console.log(points[3].point.x , points[3].point.y )

    // Extrude using Depth

    const geometrynew = new CreateGeometry().ExtrudeGEometry1(shape);
    var mesh1 = new THREE.Mesh(geometrynew, material1);
    scene.add(mesh1);

    // var geometry2 = new CreateGeometry().ExtrudeSetting2(shape , path)
    // var mesh2 = new THREE.Mesh(geometry2, material1);
    // scene.add(mesh2);

    // Extrude Using Path
    // Mesh2

    // var point1 = new THREE.Vector3(0, 0, 0);
    // var point2 = new THREE.Vector3(0, 10, depth);
    // var path = new THREE.LineCurve3(point1, point2)
    // var extrudeSettings2 = {
    //   bevelEnabled: false,
    //   steps: 1,
    //   extrudePath: path,
    // };
    // var geometry2 = new THREE.ExtrudeGeometry(shape, extrudeSettings2);
    // var mesh2 = new THREE.Mesh(geometry2, material2);
    // scene.add(mesh2);

    // var point3 = new THREE.Vector3(0, 0, 0);
    // var point4 = new THREE.Vector3(0, 0, depth);
    // var path = new THREE.LineCurve3(point3, point4)
    // var extrudeSettings3 = {
    //   bevelEnabled: false,
    //   steps: 1,
    //   extrudePath: path,
    // };
    // var geometry3 = new THREE.ExtrudeGeometry(shape, extrudeSettings3);
    // var mesh3 = new THREE.Mesh(geometry3, material3);
    // scene.add(mesh3);

    // var point5 = new THREE.Vector3(0, 0, 0);
    // var point6 = new THREE.Vector3(0, -10, depth);
    // var path = new THREE.LineCurve3(point5, point6)
    // var extrudeSettings4 = {
    //   bevelEnabled: false,
    //   steps: 1,
    //   extrudePath: path,
    // };
    // var geometry4 = new THREE.ExtrudeGeometry(shape, extrudeSettings4);
    // var mesh4 = new THREE.Mesh(geometry4, material4);
    // scene.add(mesh4);
  }
  //#endregion

  //#region OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z = 100;
  //#endregion

  //#region lights
  function lights() {
    scene.add(new THREE.AmbientLight(White));
  }
  //#endregion
  //#region Animate
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();
  objects();
  lights();
  //#endregion
}
run();





























animate();
//#endregion