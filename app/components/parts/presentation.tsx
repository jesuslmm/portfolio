import Image from "next/image";
import Pc from "../3dmodels/Pc";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Pc2 } from "../3dmodels/Pc2";
import { Pc1 } from "../3dmodels/Pc1";

export default function Presentation() {
  return (
    <div id="main">
      <div className="h-screen flex">
        <div className="lg:w-3/5 h-screen w-full bg-gray-600 ">
          <div className="py-36 text-6xl font-extrabold text-slate-800 text-center">
            <h1>
              Fullstack <br />
              Developer{" "}
            </h1>
            <p className="text-2xl text-white font-normal hidden md:block relative top-24">
              Im a crafter of{" "}
              <span className="font-extrabold text-white">GOOD </span>
              and
              <span className="font-extrabold text-white"> SOLID </span>
              fullstack products
            </p>
            <p className="text-xl hidden lg:block relative top-32 mx-32 text-white font-normal">
              I am a creative and resourceful programmer with a strong
              understanding of software development principles. I am passionate
              about solving problems and creating innovative solutions.
            </p>

            <p className="text-lg md:hidden text-white relative top-10">
              Im a crafter of GOOD and SOLID fullstack products
            </p>
          </div>
          <div className="flex lg:p-36 py-44 mt-28 md:mt-0">
            <p className="font-bold text-2xl">Main stack:</p>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="Next.js Logo"
                src="/images/nextLogo.png"
                width={130}
                height={130}
              />
            </div>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="Typescript Logo"
                src="/images/tsLogo.png"
                width={150}
                height={150}
              />
            </div>
            <div className="px-3 mt-4 animate-trans-top-1">
              <Image
                alt="TailwindCSS Logo"
                src="/images/tailwindLogo.png"
                width={150}
                height={150}
              />
            </div>
            <div className="px-3 animate-trans-top-1">
              <Image
                alt="PostgreSQL Logo"
                src="/images/postgreSQL.png"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <div className="absolute lg:right-96 lg:mt-28 md:right-40 md:mt-72 md:top-9 right-3 top-96">
          <p className="rotate-6 font-bold text-white text-right py-6 text-2xl">
            <span className="hover:animate-bounce">👋</span>
            Hi! Im Jesús
          </p>
        </div>
        <div className=" w-2/5 h-full bg-slate-800"></div>
      </div>
      <div
        className="h-screen absolute xl:top-16 xl:left-auto md:w-[680px] w-[400px] lg:top-28 lg:right-0 md:mt-0
      md:top-12 md:-ml-12 top-36"
      >
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
    </div>
  );
}
