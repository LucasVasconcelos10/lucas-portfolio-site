'use client'
import * as THREE from 'three';
import ThreeFloor from './ThreeFloor';
import { FontLoader, TextGeometry } from 'three-stdlib';
import React from 'react';

export default function ThreeScene() {
    const canvasContainerRef = React.useRef(null)

    React.useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()

        renderer.setSize(window.innerWidth, window.innerHeight)
        canvasContainerRef.current?.appendChild(renderer.domElement)

        const globeGeometry = new THREE.SphereGeometry(5, 64, 64);
        const material = new THREE.MeshPhysicalMaterial({ color: THREE.Color.NAMES.black });
        const globe = new THREE.Mesh(globeGeometry, material)
        const light = new THREE.AmbientLight(THREE.Color.NAMES.white, 0.8)
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10).normalize();
        scene.add(directionalLight);
        scene.add(globe, light)

        let words = ["Hello", "World", "Three.js", "Globe", "Rotation", "Amazing", "Visualization"];
        // words = words.map(word => word.split('').reverse().join())

        const fontLoader = new FontLoader()
        const word3ds = []
        fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
            words.forEach((word, index) => {
                //Create text geometry for each word

                const textGeometry = new TextGeometry(word, {
                    font: font,
                    size: 1,
                    height: 0.1
                })

                //create mats for text
                const textMaterial = new THREE.MeshBasicMaterial({ color: THREE.Color.NAMES.white })
                const textMesh = new THREE.Mesh(textGeometry, textMaterial)

                // Calculate the position of the text on the surface of the sphere using spherical coordinates
                const angle = (index / words.length) * Math.PI * 2; // Spread the words evenly around the sphere
                const radius = 6; // Distance from the center of the globe (radius of the sphere)

                // Positioning the words on the sphere's surface
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const z = Math.sin(angle) * 3; // Slightly offset to get better spacing (if necessary)

                // Position text just above the surface
                textMesh.position.set(x, y, z);

                // Make the words face outward, aligning with the normal of the sphere
                const normal = new THREE.Vector3(x, y, z).normalize();
                textMesh.lookAt(new THREE.Vector3(0, 0, 0).add(normal));

                // Add the text mesh to the scene
                word3ds.push(textMesh);
                scene.add(textMesh);
            })
        })

        // 6. Set initial camera position
        const radius = 40; // Distance from the center of the sphere
        camera.position.set(0, 0, radius); // Position the camera at (0, 0, radius)
        camera.lookAt(0, 0, 0); // Ensure the camera is always looking at the center (the globe)

        // 7. Animation loop
        let angle = 0; // Angle for camera rotation
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the globe around the Y-axis (clockwise)
            globe.rotation.y -= 0.01;

            // Rotate the words and camera around the Y-axis (counter-clockwise)
            angle += 0.005; // Control the speed of the camera rotation

            // Rotate the words along the globe's surface
            scene.traverse((object) => {
                if (word3ds.includes(object)) {
                    const objectAngle = angle + ((Math.random()) * (word3ds.indexOf(object))) * Math.PI;
                    const x = Math.sin(objectAngle) * 7;
                    // const y = Math.tan(objectAngle) * 7;
                    const z = Math.cos(objectAngle) * 7;
                    object.position.set(x, 0, z); // Adjust the position
                    const normal = new THREE.Vector3(x, word3ds.indexOf(object), z).normalize();
                    object.lookAt(new THREE.Vector3(0, 0, 0).add(normal));
                }
            });

            // Rotate the camera around the Y-axis
            // camera.position.x = radius * Math.sin(angle); // Update camera position based on angle
            // camera.position.z = radius * Math.cos(angle); // Update camera position based on angle
            // camera.lookAt(0, 0, 0); // Ensure the camera is always looking at the center

            // Render the scene from the perspective of the camera
            renderer.render(scene, camera);
        }

        animate()
        
        // 8. Resize handling (responsive canvas)
        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={canvasContainerRef}>
        </div>
    )
}