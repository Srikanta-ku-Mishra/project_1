import * as THREE from 'three';
import { Aqua } from '../Constants/constants';

export class CreateTorus {
    constructor(Material){
        // Insert the Geometrical values, color and position of the Torus
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

        const geometry = new THREE.TorusGeometry(Radius,Tube,RadialSegments,TubularSegements);
        const material = new THREE.MeshBasicMaterial( { color: color , wireframe: wireframe} );
        const torus = new THREE.Mesh( geometry, material );
        torus.position.set(positionX, positionY, positionZ);
        return torus;   
        }
    };
 
