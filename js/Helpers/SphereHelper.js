import * as THREE from 'three';

import { White } from './../Constants/constants';
export class CreateSphere {

    constructor(SphereHealper) {
    // Insert values of the Sphere
        var radius = 5;
        var color = White;
        var positionX = -50;
        var positionY = 50;
        var positionZ = 30;

        const geo = new THREE.SphereGeometry(radius);
        const mat = new THREE.MeshStandardMaterial({ color: color });
        const sphere = new THREE.Mesh(geo, mat);
        sphere.position.set(positionX, positionY ,positionZ);

        return sphere;
    }

};

