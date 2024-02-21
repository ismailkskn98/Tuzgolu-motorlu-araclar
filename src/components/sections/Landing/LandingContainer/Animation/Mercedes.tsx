/* eslint-disable @typescript-eslint/no-explicit-any */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 mercedes.gltf --transform 
Files: mercedes.gltf [1.08MB] > C:\Users\keskin\Desktop\mercedes\mercedes-transformed.glb [715.5KB] (34%)
Author: Jupiter (https://sketchfab.com/jupiterus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercedes-benz-wheel-amg-monoblock-aero-2-cfdf7e25c5a94f36a213ab524abcb1e7
Title: Mercedes-Benz Wheel AMG Monoblock Aero 2
*/
import { useGLTF } from '@react-three/drei';

export function Model() {
  const { nodes, materials } = useGLTF('/mercedes-transformed.glb');
  return (
    <group dispose={null} scale={8}>
      <mesh
        geometry={(nodes.Car_tire_2_Material002_0 as any).geometry}
        material={materials['Material.002']}
        position={[0, -0.331, -0.006]}
        rotation={[0, 0.355, -0.008]}
        scale={0.014}
      />
      <mesh
        geometry={(nodes.Torus_Material001_0 as any).geometry}
        material={materials['Material.001']}
        position={[-0.109, 0.001, -0.001]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.148}
      />
      <mesh
        geometry={(nodes.w140_wheel_AMG_black_0 as any).geometry}
        material={materials.black}
        rotation={[-1.544, 0, -Math.PI]}
        scale={[-1, 1, 1]}
      />
      <mesh
        geometry={(nodes.w140_wheel_AMG_etk_wheel_03a_0 as any).geometry}
        material={materials.etk_wheel_03a}
        rotation={[-1.544, 0, -Math.PI]}
        scale={[-1, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload('/mercedes-transformed.glb');
