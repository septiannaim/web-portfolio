import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Computer3D = () => {
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += 0.005;
    });
    return (
        <group ref={ref} position={[0, 0.5, 0]}>
            {/* Body */}
            <mesh>
                <boxGeometry args={[1.2, 0.7, 0.1]} />
                <meshStandardMaterial color="#222" />
            </mesh>
            {/* Screen */}
            <mesh position={[0, 0.1, 0.06]}>
                <boxGeometry args={[1, 0.5, 0.02]} />
                <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.2} />
            </mesh>
            {/* Keyboard */}
            <mesh position={[0, -0.45, 0.05]}>
                <boxGeometry args={[1.1, 0.15, 0.07]} />
                <meshStandardMaterial color="#333" />
            </mesh>
        </group>
    );
};

export default Computer3D; 