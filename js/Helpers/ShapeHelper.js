
import * as THREE from 'three';
import { Red, White, Aqua, Chocolate } from '../Constants/constants';

export class CreateShape {

  Cube() {
    // Insert the Geometrical values, color and position of the Cube
    var length = 20;
    var width = 20;
    var height = 30;
    var positionX = 40;
    var positionY = 30;
    var positionZ = 40;
    var color = Red;

    const geo = new THREE.BoxGeometry(length, width, height);
    const mat = new THREE.MeshStandardMaterial({ color: color });
    const cube = new THREE.Mesh(geo, mat);
    cube.position.set(positionX, positionY, positionZ);
    return cube;
  }
  Sphere() {
    var radius = 5;
    var color = White;
    var positionX = -50;
    var positionY = 50;
    var positionZ = 30;

    const geo = new THREE.SphereGeometry(radius);
    const mat = new THREE.MeshStandardMaterial({ color: color });
    const sphere = new THREE.Mesh(geo, mat);
    sphere.position.set(positionX, positionY, positionZ);

    return sphere;
  }
  Torus() {
    var Radius = 10;
    var Tube = 3;
    var RadialSegments = 16;
    var TubularSegements = 100;
    // var Arc = null;
    var color = Aqua;
    var positionX = 40;
    var positionY = -30;
    var positionZ = 40;
    var wireframe = true;

    const geometry = new THREE.TorusGeometry(Radius, Tube, RadialSegments, TubularSegements);
    const material = new THREE.MeshBasicMaterial({ color: color, wireframe: wireframe });
    const torus = new THREE.Mesh(geometry, material);
    torus.position.set(positionX, positionY, positionZ);
    return torus;
  }
  TetraHedron() {
    var radius = 16;
    var detail = 0;
    var color = Chocolate;
    var positionX = -40;
    var positionY = -30;
    var positionZ = 40;

    const Geo = new THREE.TetrahedronGeometry(radius, detail);
    const Mat = new THREE.MeshStandardMaterial({ color: color });
    const mesh = new THREE.Mesh(Geo, Mat);
    mesh.position.set(positionX, positionY, positionZ)
    return mesh;
  }
};
