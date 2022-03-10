import '/css/style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { White } from './Constants/ColorConstants';
import { CreateMaterial } from './Helpers/MaterialHelper';
import { squarePoints } from '../css/assets/SquareShape';
import { CreateShape } from './Helpers/ShapeHelper';
import { CreateGeometry } from './Helpers/GeomertyHelper';
import { Path } from '../css/assets/path';


  //#region Creating Scene , camera and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  //#endregion

  //#region Adding shapes
  function objects() {

    // Adding different shapes using Class and Method(ex - CreateShape)
    const cube = new CreateShape().cube();
    const sphere = new CreateShape().sphere();
    const torus = new CreateShape().torus();
    const TetraHedron = new CreateShape().tetraHedron();
    scene.add(cube, sphere, torus, TetraHedron);
    //#endregion

    //#region Ongoing Projects(Practicing)
    debugger //Adding Debugger for Debugging

    // Adding Materials using Class and Method(ex - CreateMaterial)
    const material1 = new CreateMaterial().meshstandardmaterial();
    // const material2 = new CreateMaterial().meshnormalmaterial(); 
    // const material3 = new CreateMaterial().meshbasicmaterial();
    // const material4 = new CreateMaterial().meshnormalmaterial();

    //#region Practices
    // forEach loop examples
    // points.forEach(myfunction);
    // function myfunction() {
    //   console.log(points[i].point.x, points[i].point.y);
    //   i++;
    // }

    // const shape = points.forEach(points => {
    //   console.log(points.point.x , points.point.y);
    //   new THREE.Shape([
    //     new THREE.Vector2(points.point.x , points.point.y),
    //   ]);
    // });
    //#endregion

    // Creating new array and pushing values(Co-ordinates) from a given file(ex - squareppoints)
    const newpoints = squarePoints;
    console.log(newpoints);
    var new1 = [];
    newpoints.forEach(point => {
      console.log(point.point.x, point.point.y)
      new1.push(point.point.x, point.point.y);
    });
    console.log(new1);

    // To see the output
    // console.log(new1[0].point.x , new1[0].point.y )
    // console.log(new1[1].point.x , new1[1].point.y )
    // console.log(new1[2].point.x , new1[2].point.y )
    // console.log(new1[3].point.x , new1[3].point.y )

    // Adding values of shape using array
    // var shape = new THREE.Shape([
    //   new THREE.Vector2(new1[0] , new1[1]),
    //   new THREE.Vector2(new1[2] , new1[3]),
    //   new THREE.Vector2(new1[4] , new1[5]),
    //   new THREE.Vector2(new1[6] , new1[7])
    // ]);

    // Adding value to shapes using numbers
    var shape = new THREE.Shape([
      new THREE.Vector2(-20, 60),
      new THREE.Vector2(20, 60),
      new THREE.Vector2(20, -60),
      new THREE.Vector2(-20, -60)
    ]);

    // Creating new array and pushing values(Co-ordinates) from a file(ex - path)
    const points = Path;
    var new2 = [];
    points.forEach(point => {
      console.log(point.point.x, point.point.y, point.point.z)
      new2.push(point.point.x, point.point.y, point.point.z)
    })
    console.log(new2);

    // Different Methods to used to print the values of an Array
    points.map(x => console.log(x.point.x, x.point.y));
    points.forEach(x => console.log(x.point.x, x.point.y));

    // Experimenting new methods using array
    // var point1 = [];
    // var point2 = [];
    // point1.push(points[0].point.x , points[0].point.y ,points[0].point.z);
    // point2.push(points[1].point.x , points[1].point.y ,points[1].point.z);
    // console.log(point1 ,point2);


    // Creating path to Extrude the object 
    var point1 = new THREE.Vector3(new2[0], new2[1], new2[2]);
    var point2 = new THREE.Vector3(new2[3], new2[4], new2[5]);
    var path = new THREE.LineCurve3(point1, point2)



    // Adding Geometries using class and methods(ex - CreateGeometry)
    const geometry1 = new CreateGeometry().extrudegeometry1(shape);
    var mesh1 = new THREE.Mesh(geometry1, material1);
    scene.add(mesh1);

    var geometry2 = new CreateGeometry().extrudegeometry2(shape, path)
    var mesh2 = new THREE.Mesh(geometry2, material1);
    scene.add(mesh2);

    // Extrude Using Path(Without Using any class)
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

  //#region OrbitControls and Lights
  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z = 100;

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





























