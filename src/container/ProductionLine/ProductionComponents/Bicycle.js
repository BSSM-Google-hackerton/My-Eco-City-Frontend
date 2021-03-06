/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: TheDrone (https://sketchfab.com/thedrone)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/bicycle-197dd882a69846e0825e80566996cbba
title: Bicycle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TransformControls } from "@react-three/drei";

export default function Bicycle( props ) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bicycle.gltf')
  return (
    <TransformControls enabled={props.orbit} showX={props.orbit} showZ={props.orbit} showY={props.orbit}>
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.36}>
        <group position={[-0.58, 0, 2.64]}>
          <mesh geometry={nodes.bicycle_seat_0.geometry} material={materials.bicycle_seat} />
        </group>
        <group position={[2, 0, 1.05]}>
          <mesh geometry={nodes.bicycle_wheel_origin_forward_0.geometry} material={materials.bicycle_wheel_origin_forward} />
        </group>
        <group position={[-1.6, 0, 1.05]}>
          <mesh geometry={nodes.bicycle_wheel_origin_back_0.geometry} material={materials.bicycle_wheel_origin_back} />
        </group>
        <group position={[2, 0, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.bicycle_wheel_forward_0.geometry} material={materials.bicycle_wheel_forward_rubber} />
          <mesh geometry={nodes.bicycle_wheel_forward_1.geometry} material={materials.bicycle_wheel_forward_interior} />
        </group>
        <group position={[-1.6, 0, 1.05]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.bicycle_wheel_back_0.geometry} material={materials.bicycle_wheel_back_rubber} />
          <mesh geometry={nodes.bicycle_wheel_back_1.geometry} material={materials.bicycle_wheel_back_interior} />
        </group>
        <group position={[0.01, 0, 0.82]} rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.bicycle_pedals_0.geometry} material={materials.bicycle_pedals_pedals} />
          <mesh geometry={nodes.bicycle_pedals_1.geometry} material={materials.bicycle_pedals_bright} />
        </group>
        <group position={[2, 0, 1.05]}>
          <mesh geometry={nodes.bicycle_needles_forward_0.geometry} material={materials.bicycle_needles_forward} />
        </group>
        <group position={[-1.6, 0, 1.05]}>
          <mesh geometry={nodes.bicycle_needles_back_0.geometry} material={materials.bicycle_needles_back} />
        </group>
        <group position={[0.01, -0.12, 0.82]}>
          <mesh geometry={nodes.bicycle_gear_main_0.geometry} material={materials.bicycle_gear_main} />
        </group>
        <group position={[-1.6, -0.12, 1.05]}>
          <mesh geometry={nodes.bicycle_gear_back_0.geometry} material={materials.bicycle_gear_back} />
        </group>
        <group position={[-1.6, 0, 1.05]}>
          <mesh geometry={nodes.bicycle_chain_0.geometry} material={materials.bicycle_chain} />
        </group>
        <group position={[-0.7, 0, 1.85]}>
          <mesh geometry={nodes.bicycle_cover_back_0.geometry} material={materials.bicycle_cover_back} />
        </group>
        <group position={[1.81, 0, 2.39]} rotation={[0, -1, 0]}>
          <mesh geometry={nodes.bicycle_cover_forward_0.geometry} material={materials.bicycle_cover_forward} />
        </group>
        <group position={[2, 0, 1.05]} rotation={[0, -0.44, 0]}>
          <mesh geometry={nodes.bicycle_body_forward_0.geometry} material={materials.bicycle_body_forward_painted} />
          <mesh geometry={nodes.bicycle_body_forward_1.geometry} material={materials.bicycle_body_forward_bright} />
          <mesh geometry={nodes.bicycle_body_forward_2.geometry} material={materials.bicycle_body_forward_connection} />
        </group>
        <group position={[1.08, 0, 3.02]} rotation={[0, -0.61, 0]}>
          <mesh geometry={nodes.bicycle_helm_0.geometry} material={materials.bicycle_helm_handle} />
          <mesh geometry={nodes.bicycle_helm_1.geometry} material={materials.bicycle_helm_bright} />
        </group>
        <group position={[-1.6, 0, 1.05]} rotation={[0, 0.87, 0]}>
          <mesh geometry={nodes.bicycle_body_main_0.geometry} material={materials.bicycle_body_main_painted} />
          <mesh geometry={nodes.bicycle_body_main_1.geometry} material={materials.bicycle_body_main_bright} />
        </group>
      </group>
    </group>
    </TransformControls>
  )
}

useGLTF.preload('/bicycle.gltf')
