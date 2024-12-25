// import React from "react";
// import { BackgroundGradient } from "../components/ui/patentcard";
// // import Image from "next/image";
// import shoe from "../Images/certi1.png"

// export default function Patents() {
//   return (
//     (<div>
//       <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900">
//         <img
//           src={shoe}
//           alt="jordans"
//           height="400"
//           width="400"
//           className="object-contain" />
//         <p
//           className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//           Air Jordan 4 Retro Reimagined
//         </p>

//         <p className="text-sm text-neutral-600 dark:text-neutral-400">
//           The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
//           February 17, 2024. Your best opportunity to get these right now is by
//           entering raffles and waiting for the official releases.
//         </p>
//         <button
//           className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
//           <span>Buy now </span>
//           <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
//             $100
//           </span>
//         </button>
//       </BackgroundGradient>
//     </div>)
//   );
// }




// import Image from 'next/image';
import React from 'react';
function Patents() {
  return (
    <>
      <div className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border ">
        <div className="relative text-center z-10 px-0 py-16 rounded-2xl  w-fit bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')]  h-[100px] mx-auto">
          <>
            <img
              src={'/chat_zinhdw.webp'}
              alt="grid"
              width={600}
              className="mx-auto w-[85%]"
              height={600}
            />
            <h1 className="text-xl font-semibold tracking-tight text-white">
              Create Group Effortlessly
            </h1>
            <p className="text-base pt-2  text-gray-300 capitalize">
              Seamless chats, crystal-clear videos, and <br />
              premium audio quality
            </p>
          </>
        </div>
      </div>
    </>
  );
}
export default Patents;
