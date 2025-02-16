"use client";

import Iridescence from "@/components/reactbits/Backgrounds/Iridescence/Iridescence";
import ASCIIText from "@/components/reactbits/TextAnimations/ASCIIText/ASCIIText";

export default function Home() {
  return (
    <div className="h-[200vh] w-full overflow-x-hidden">
      <div className="h-screen w-full absolute z-0 top-0 left-0">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className="relative h-screen w-full z-10 mt-[8%] ml-0 pl-[4%] flex flex-row gap-4">
        <div className="glass w-[55%] h-[70%] rounded-3xl flex p-10">
          <h1 className="text-6xl text-white">
            <div>
              Same brain.
            </div>
            <div>
              Better technique.
            </div>
          </h1>
        </div>
        <div className="w-[35%] h-[70%] flex justify-center items-center">
          {/* Additional content */}
        </div>
      </div>
    </div>  
  );
}
