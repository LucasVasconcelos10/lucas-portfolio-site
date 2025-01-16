'use client'
import React from 'react';
import { MeshPhysicalMaterial, BufferGeometry} from 'three';

export default function ThreeFloor(props) {

    React.useEffect(() => {
        
    })
    
    return (
        <mesh {...props} receiveShadow>
            <BoxGeometry args={[20,1,10]}/>
            <MeshPhysicalMaterial color='white' />
        </mesh>
    )
}