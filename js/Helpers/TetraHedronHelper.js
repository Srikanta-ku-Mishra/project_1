import * as THREE from 'three';
import { Chocolate } from '../Constants/constants';

export class CreateTetraHedron {
    constructor(helper){
        // Insert the Geometrical values, color and position of the TetraHedron
        var radius = 16;
        var detail = 0;
        var color = Chocolate;
        var positionX = -40;
        var positionY = -30;
        var positionZ = 40;
   
        const Geo = new THREE.TetrahedronGeometry(radius , detail);
        const Mat = new THREE.MeshStandardMaterial({color: color });
        const mesh = new THREE.Mesh(Geo, Mat);
        mesh.position.set(positionX, positionY ,positionZ)
        return mesh;
        }
    }