import * as THREE from 'three';
import { Aquamarine } from '../Constants/ColorConstants';

// Working on it...(Not finished yet)
export class CreateMaterial {
    constructor() {}

    meshstandardmaterial() {
        let color = null;
        let wireframe = false;
        let roughness = 0;
        let metalness = 0;
        let emissive = null;
        let opacity = 0.2;
        const mat = new THREE.MeshStandardMaterial({
            color: color,
            wireframe: wireframe,
            roughness,
            metalness,
            emissive,
            opacity,
            map: new THREE.TextureLoader().load('../images/wood1.jpg')
        });
        return mat;
    }
    
    meshnormalmaterial() {
        const mat1 = new THREE.MeshNormalMaterial({
            color: 0xff0000,
        });
        return mat1;
    }

    meshbasicmaterial() {
        let color = Aquamarine;
        const mat2 = new THREE.MeshBasicMaterial({
            color: color,
        });
        return mat2;
    }

};