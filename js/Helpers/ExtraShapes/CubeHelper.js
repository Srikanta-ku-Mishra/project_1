
import * as THREE from 'three';
import { Red } from '../../Constants/ColorConstants';

// It is used to directly add cube to the scene...
export class CreateCube {
  constructor() {
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
};
