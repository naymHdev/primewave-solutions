import SectionName from "@/components/common/SectionName";
import { solutionData } from "@/data/solutions";
import { RiMessage3Line } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

const Solutions = () => {
  return (
    <>
      <SectionName
        name="Solutions"
        title="Remodeler's Frustrations Into Solutions"
        details="Through innovative strategies and practical solutions, these frustrations can be effectively managed."
      />
      <div className="container mx-auto px-4 md:px-0 mt-4">
        <div>
          {solutionData?.map((solution) => (
            <div
              key={solution.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left panel */}
              <div className=" rounded-lg shadow-lg border border-secondary">
                <div className=" flex gap-3 items-center bg-secondary rounded-t-lg p-6">
                  <div className="text-2xl md:text-5xl">🧐</div>
                  <h2 className="md:text-2xl font-black text-white ">
                    {solution?.left_panel?.title}
                  </h2>
                </div>
                <div className="p-6 space-y-8 mt-4">
                  {solution.left_panel.points?.map((itm, index) => (
                    <ul key={index} className="flex items-center gap-4">
                      <RiMessage3Line className=" size-16 text-secondary" />
                      <li className="font-medium">{itm}</li>
                    </ul>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className=" rounded-lg shadow-lg border border-legendary">
                <div className=" flex gap-3 items-center bg-legendary rounded-t-lg p-6">
                  <div className="text-5xl">
                    <Image
                      src="/images/PrimeWave-logo.png"
                      alt="PrimeWave Solutions Logo"
                      width={80}
                      height={80}
                      priority={true}
                      quality={100}
                    />
                  </div>
                  <h2 className="md:text-2xl font-black text-white ">
                    {solution?.right_panel?.title}
                  </h2>
                  <div className="text-2xl md:text-4xl">🎉</div>
                </div>
                <div className="p-6 space-y-8 mt-4">
                  {solution?.right_panel.points?.map((itm, index) => (
                    <ul key={index} className="flex items-center gap-4">
                      <MdVerified className="size-10 text-secondary" />
                      <li className=" font-semibold">{itm}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Solutions;
