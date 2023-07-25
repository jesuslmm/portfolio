/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 pc2.gltf -t -r public
Author: darekagomi (https://sketchfab.com/darekagomi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pc-9801ux-2befdff3817c4b1f86373149f3328e2f
Title: PC-9801UX
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    cable_PC9801U001_0: THREE.Mesh;
    ["FD1_���������������007_0"]: THREE.Mesh;
    ["FD1_���������������006_0"]: THREE.Mesh;
    ["FD1_���������������005_0"]: THREE.Mesh;
    ["FD1_���������������004_0"]: THREE.Mesh;
    ["FD2_���������������007_0"]: THREE.Mesh;
    ["FD2_���������������006_0"]: THREE.Mesh;
    ["FD2_���������������005_0"]: THREE.Mesh;
    ["FD2_���������������004_0"]: THREE.Mesh;
    ["0"]: THREE.Mesh;
    PC9801U_PC9801U001_0: THREE.Mesh;
    ["2"]: THREE.Mesh;
    ["1"]: THREE.Mesh;
    PCKD854n_PCKD854n001_0: THREE.Mesh;
    PCKD854n_Lamp001_0: THREE.Mesh;
    ["FD3_���������������007_0"]: THREE.Mesh;
    ["FD3_���������������006_0"]: THREE.Mesh;
    ["FD3_���������������005_0"]: THREE.Mesh;
    ["FD3_���������������004_0"]: THREE.Mesh;
    ["FD4_���������������007_0"]: THREE.Mesh;
    ["FD4_���������������006_0"]: THREE.Mesh;
    ["FD4_���������������005_0"]: THREE.Mesh;
    ["FD4_���������������004_0"]: THREE.Mesh;
  };
  materials: {
    ["PC9801U.001"]: THREE.MeshStandardMaterial;
    [".007"]: THREE.MeshStandardMaterial;
    [".006"]: THREE.MeshStandardMaterial;
    [".005"]: THREE.MeshStandardMaterial;
    [".004"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Lamp.001"]: THREE.MeshStandardMaterial;
    ["PC9801UX.001"]: THREE.MeshStandardMaterial;
    ["PCKD854n.001"]: THREE.MeshStandardMaterial;
  };
};

export function Pc2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/pc2/pc2.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[35.38, 21.57, -6.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      >
        <mesh
          geometry={nodes["FD1_���������������007_0"].geometry}
          material={materials[".007"]}
        />
        <mesh
          geometry={nodes["FD1_���������������006_0"].geometry}
          material={materials[".006"]}
        />
        <mesh
          geometry={nodes["FD1_���������������005_0"].geometry}
          material={materials[".005"]}
        />
        <mesh
          geometry={nodes["FD1_���������������004_0"].geometry}
          material={materials[".004"]}
        />
      </group>
      <group
        position={[35.38, 15.236, -6.869]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      >
        <mesh
          geometry={nodes["FD2_���������������007_0"].geometry}
          material={materials[".007"]}
        />
        <mesh
          geometry={nodes["FD2_���������������006_0"].geometry}
          material={materials[".006"]}
        />
        <mesh
          geometry={nodes["FD2_���������������005_0"].geometry}
          material={materials[".005"]}
        />
        <mesh
          geometry={nodes["FD2_���������������004_0"].geometry}
          material={materials[".004"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes["2"].geometry} material={materials["Lamp.001"]} />
        <mesh
          geometry={nodes["1"].geometry}
          material={materials["PC9801UX.001"]}
        />
      </group>
      <group
        position={[-0.077, 75.996, -33.893]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      >
        <mesh
          geometry={nodes.PCKD854n_PCKD854n001_0.geometry}
          material={materials["PCKD854n.001"]}
        />
        <mesh
          geometry={nodes.PCKD854n_Lamp001_0.geometry}
          material={materials["Lamp.001"]}
        />
      </group>
      <group
        position={[85.791, 0, 48.96]}
        rotation={[-Math.PI / 2, 0, -0.436]}
        scale={3}
      >
        <mesh
          geometry={nodes["FD3_���������������007_0"].geometry}
          material={materials[".007"]}
        />
        <mesh
          geometry={nodes["FD3_���������������006_0"].geometry}
          material={materials[".006"]}
        />
        <mesh
          geometry={nodes["FD3_���������������005_0"].geometry}
          material={materials[".005"]}
        />
        <mesh
          geometry={nodes["FD3_���������������004_0"].geometry}
          material={materials[".004"]}
        />
      </group>
      <group
        position={[108.829, 0, 72.691]}
        rotation={[Math.PI / 2, 0, -3.054]}
        scale={3}
      >
        <mesh
          geometry={nodes["FD4_���������������007_0"].geometry}
          material={materials[".007"]}
        />
        <mesh
          geometry={nodes["FD4_���������������006_0"].geometry}
          material={materials[".006"]}
        />
        <mesh
          geometry={nodes["FD4_���������������005_0"].geometry}
          material={materials[".005"]}
        />
        <mesh
          geometry={nodes["FD4_���������������004_0"].geometry}
          material={materials[".004"]}
        />
      </group>
      <mesh
        geometry={nodes.cable_PC9801U001_0.geometry}
        material={materials["PC9801U.001"]}
        position={[96.526, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5}
      />
      <mesh
        geometry={nodes["0"].geometry}
        material={materials.Material}
        position={[10.349, 86.658, -27.724]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      />
      <mesh
        geometry={nodes.PC9801U_PC9801U001_0.geometry}
        material={materials["PC9801U.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={3}
      />
    </group>
  );
}

useGLTF.preload("/pc2/pc2.gltf");