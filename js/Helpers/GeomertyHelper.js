import * as THREE from 'three';

// Not finished yet...
export class CreateGeometry {
  constructor() { }

  extrudegeometry1(shape) {
    this.shape = shape;
    var extrudeSettings1 = {
      bevelSize: 3,
      bevelThickness: 3,
      bevelOffset: 2,
      steps: 1,
      amount: 10
    };
    var geometry1 = new THREE.ExtrudeGeometry(this.shape, extrudeSettings1);
    return geometry1;
  }

  extrudegeometry2(shape, path) {
    this.shape = shape;
    this.path = path;
    var extrudeSettings2 = {
      bevelEnabled: false,
      steps: 1,
      extrudePath: this.path,
    };
    var geometry2 = new THREE.ExtrudeGeometry(this.shape, extrudeSettings2);
    return geometry2;
  }

};