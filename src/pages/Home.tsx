import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

function Home() {
  return (
    // <div className="absolute top-28 left-0 right-0 flex items-center justify-center text-4xl font-bold text-slate-900">
    //   Hi My name is Ken
    // </div>
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>Hello</Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
