import * as THREE from 'three';
import { White } from '../../Constants/ColorConstants';

// It is used to directly add Sphere to the scene...
export class CreateSphere {
    constructor(SphereHealper) {
        // Insert the Geometrical values, color and position of the Sphere
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

};


