import Image from "next/image";
import Pc from "../3dmodels/Pc";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

export default function Presentation() {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-3/5 bg-gray-600">
          <div className="flex flex-col p-44 pb-12 text-6xl font-extrabold text-slate-800">
            <span className="mb-2">Fullstack</span>
            <span>Developer</span>
            <p className="text-xl mt-8 text-white font-normal">
              Im a crafter of{" "}
              <span className="font-extrabold text-white">GOOD </span>
              and
              <span className="font-extrabold text-white"> SOLID </span>
              fullstack products
            </p>
          </div>
          <div className="flex p-36">
            <p className="absolute -mt-14 font-bold text-2xl ml-2">
              Main stack:
            </p>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="Next.js Logo"
                src="/images/nextLogo.png"
                width={100}
                height={100}
              />
            </div>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="Typescript Logo"
                src="/images/tsLogo.png"
                width={130}
                height={130}
              />
            </div>
            <div className="px-3 mt-4 animate-trans-top-1">
              <Image
                alt="TailwindCSS Logo"
                src="/images/tailwindLogo.png"
                width={100}
                height={100}
              />
            </div>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="PostgreSQL Logo"
                src="/images/postgreSQL.png"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="absolute right-96 mt-28">
          <p className="rotate-6 font-bold text-white text-right py-6 text-2xl">
            <span className="hover:animate-bounce">👋</span>
            Hi! Im Jesús
          </p>
        </div>
        <div className="w-2/5 h-full bg-slate-800"></div>
      </div>
      <div className="h-screen absolute top-0 right-96">
        <Canvas dpr={[1, 2]} shadows>
          <fog attach="fog" args={["#101010", 0, 10]} />
          <Environment preset="city" />
          <group position={[0, -0.5, 0]}>
            <Pc />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
              <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={1024}
                mixBlur={1}
                opacity={2}
                depthScale={1.1}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.25}
                roughness={3}
                mirror={1}
              />
            </mesh>
            <mesh
              receiveShadow
              rotation-x={-Math.PI / 2}
              position={[0, 0.001, 0]}
            >
              <planeGeometry args={[10, 10]} />
              <shadowMaterial transparent color="black" opacity={0.4} />
            </mesh>
          </group>
          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2.3}
            minPolarAngle={Math.PI / 2.3}
            enableZoom={false}
            enablePan={false}
          />
          <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]}>
            <spotLight
              position={[10, 10, 5]}
              angle={0.15}
              penumbra={1}
              intensity={10}
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
          </PerspectiveCamera>
        </Canvas>
      </div>
    </>
  );
}
