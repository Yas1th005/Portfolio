
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import pic from "../Images/profilepic.png"

export function ThreeDCardDemo() {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border  ">
        
        <CardItem translateZ="100" className="w-full mt-4 h-[400px]">
          <img
            src={pic}
            height="1000"
            width="1000"
            className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <br/>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          Vanshmani Jha
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Founder | Building DeskAVR @SpectoV
        </CardItem>
        <br/><br/>
      </CardBody>
    </CardContainer>)
  );
}
