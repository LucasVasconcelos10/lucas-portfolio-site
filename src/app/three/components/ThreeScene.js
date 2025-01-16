'use client'
import * as THREE from 'three';
import ThreeFloor from './ThreeFloor';
import React from 'react';

export default function ThreeScene() {
    const canvasContainerRef = React.useRef(null)

    React.useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()

        renderer.setSize(window.innerWidth, window.innerHeight)
        canvasContainerRef.current?.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(20, 1, 10);
        const material = new THREE.MeshPhysicalMaterial({ color: THREE.Color.NAMES.white });
        const floor = new THREE.Mesh(geometry, material)
        const light = new THREE.AmbientLight(THREE.Color.NAMES.aquamarine, 0.3)
        scene.add(floor, light)

        // scene.add(light)

        camera.position.set(-6, 7, 7)
        camera.lookAt(0,0,0)

        renderer.render(scene, camera)
        
        // const animate = () => {
        //     // cube.rotation.x += 0.01
        //     // cube.rotation.y += 0.01
        //     renderer.render(scene, camera)
        //     requestAnimationFrame(animate)
        // }
        
        // animate()
    }, [])

    return (
        <div ref={canvasContainerRef}>
        </div>
    )
}