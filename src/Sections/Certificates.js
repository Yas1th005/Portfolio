// // import React from 'react';
// // import Carousel, {
// //   Slider,
// //   SliderContainer,
// //   SliderDotButton,
// //   SliderNextButton,
// //   SliderPrevButton,
// // } from '../Each/CertiCarausel.tsx';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import imgPreview from '../Images/certi1.png';
// // function Certificate() {
// //   const OPTIONS = { loop: true };
// //   return (
// //     <>
// //       <div className="bg-background p-4 bg-black">
// //         <Carousel options={OPTIONS} isScale={true}>
// //           <SliderContainer>
// //             <Slider className="sm:w-[65%] W-[90%]">
// //               <div className="2xl:h-[450px] sm:h-full h-[420px]">
// //                 <img
// //                   src={imgPreview}
// //                   width={900}
// //                   height={500}
// //                   alt="image"
// //                   className="h-[40vh] object-cover rounded-lg w-[50vw] mx-auto"
// //                 />
// //                 <p className='color-white mb-[30px] w-[60%] mx-auto'>
// // The golden rays of dawn stretched across the horizon, painting the sky with hues of orange and pink.
// // A gentle breeze whispered through the trees, carrying the scent of blooming flowers.
// // Somewhere in the distance, the soft chirping of birds announced the start of a new day.</p>
// //               </div>
// //             </Slider>
// //             <Slider className="sm:w-[65%] W-[90%]">
// //               <div className="2xl:h-[450px] sm:h-full h-[420px]">
// //                 <img
// //                   src={imgPreview}
// //                   width={900}
// //                   height={500}
// //                   alt="image"
// //                   className="h-full object-cover rounded-lg w-full"
// //                 />
// //                 <p className='color-white'>
// // The golden rays of dawn stretched across the horizon, painting the sky with hues of orange and pink.
// // A gentle breeze whispered through the trees, carrying the scent of blooming flowers.
// // Somewhere in the distance, the soft chirping of birds announced the start of a new day.</p>
// //               </div>
// //             </Slider>
// //             <Slider className="sm:w-[65%] W-[90%]">
// //               <div className="2xl:h-[450px] sm:h-full h-[420px]">
// //                 <img
// //                   src={imgPreview}
// //                   width={900}
// //                   height={500}
// //                   alt="image"
// //                   className="h-full object-cover rounded-lg w-full"
// //                 />
// //                 <p className='color-white'>
// // The golden rays of dawn stretched across the horizon, painting the sky with hues of orange and pink.
// // A gentle breeze whispered through the trees, carrying the scent of blooming flowers.
// // Somewhere in the distance, the soft chirping of birds announced the start of a new day.</p>
// //               </div>
// //             </Slider>
// //             <Slider className="sm:w-[65%] W-[90%]">
// //               <div className="2xl:h-[450px] sm:h-full h-[420px]">
// //                 <img
// //                   src={imgPreview}
// //                   width={900}
// //                   height={500}
// //                   alt="image"
// //                   className="h-full object-cover rounded-lg w-full"
// //                 />
// //               </div>
// //             </Slider>
// //           </SliderContainer>
// //           <SliderPrevButton className="absolute top-[50%] p-2 border-2 rounded-full left-4 dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
// //             <ChevronLeft className="w-8 h-8 " />
// //           </SliderPrevButton>
// //           <SliderNextButton className="absolute right-4 p-2 border-2 rounded-full top-[50%] dark:bg-black/25 dark:border-white  bg-white/25 backdrop-blur-sm text-white disabled:opacity-20">
// //             <ChevronRight className="w-8 h-8" />
// //           </SliderNextButton>
// //           <div className="flex justify-center py-4">
// //             <SliderDotButton />
// //           </div>
// //         </Carousel>
// //       </div>
// //     </>
// //   );
// // }
// // export default Certificate;




// // import preview from '@/assets/preview';
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
//   DialogImage,
//   DialogClose,
//   DialogDescription,
//   DialogContainer,
// } from '.';
// import { Plus } from 'lucide-react';
// const items = [
//   {
//     id: 1,
//     // url: preview.galleryNew,
//     title: 'Accordion',
//     description:
//       'Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience. Dive deeper into each piece with expandable information panels, offering insights into the artist, technique, and story behind each image. ',
//     tags: ['Sunrise', 'Mountains', 'Golden', 'Scenic', 'Inspiring'],
//   },
//   {
//     id: 2,
//     // url: preview.globe,
//     title: 'Globe Section',
//     description: `Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective. Our globe section integrates real-time data feeds, showcasing everything from climate patterns and population densities to economic indicators and cultural hotspots. Customizable layers let you focus on specific data sets, while intuitive tooltips provide in-depth information at every turn. `,
//     tags: ['Misty', 'Path', 'Mysterious', 'Serene', 'Rugged'],
//   },
//   {
//     id: 3,
//     // url: preview.mousetrail,
//     title: 'Image Mouse Trail',
//     description: `Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics; it's an interactive showcase of your content, products, or artwork. Each image in the trail can be clickable, leading to detailed views or related content, turning casual mouse movements into opportunities for discovery.`,
//     tags: ['Pathway', 'Adventure', 'Peaks', 'Challenging', 'Breathtaking'],
//   },
// ];
// export default function Certificate() {
//   return (
//     <div className="flex gap-4">
//       {items.map((item, i) => {
//         return (
//           <>
//             <Dialog
//               transition={{
//                 type: 'spring',
//                 bounce: 0.05,
//                 duration: 0.5,
//               }}>
//               <DialogTrigger
//                 style={{
//                   borderRadius: '12px',
//                 }}
//                 className="flex w-full flex-col overflow-hidden  border    dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950">
//                 <DialogImage
//                   src={item.url.src}
//                   alt=""
//                   className=" h-64 w-full object-cover"
//                 />
//                 <div className="flex flex-grow flex-row items-end justify-between p-3">
//                   <div>
//                     <DialogTitle className="text-zinc-950 text-xl dark:text-zinc-50">
//                       {item.title}
//                     </DialogTitle>
//                   </div>
//                   <button className="absolute bottom-2 right-2 p-2 dark:bg-gray-900 bg-gray-400 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800">
//                     <Plus className="w-6 h-6" />
//                   </button>
//                 </div>
//               </DialogTrigger>
//               <DialogContainer className="pt-20">
//                 <DialogContent
//                   style={{
//                     borderRadius: '24px',
//                   }}
//                   className=" relative flex h-full mx-auto flex-col overflow-y-auto border dark:bg-black bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-950 lg:w-[900px] w-[80%] ">
//                   <DialogImage
//                     src={item.url.src}
//                     alt=""
//                     className="h-full  object-contain w-[60%] mx-auto"
//                   />
//                   <div className="p-6">
//                     <DialogTitle className="text-5xl text-zinc-950 dark:text-zinc-50">
//                       {item.title}
//                     </DialogTitle>

//                     <DialogDescription
//                       disableLayoutAnimation
//                       variants={{
//                         initial: { opacity: 0, scale: 0.8, y: -40 },
//                         animate: { opacity: 1, scale: 1, y: 0 },
//                         exit: { opacity: 0, scale: 0.8, y: -50 },
//                       }}>
//                       <p className="mt-2 text-zinc-500 dark:text-zinc-500">
//                         {item.description}
//                       </p>
//                     </DialogDescription>
//                   </div>
//                   <DialogClose className="text-zinc-50  dark:bg-gray-900 bg-gray-400 p-4 hover:bg-gray-500 rounded-full dark:hover:bg-gray-800" />
//                 </DialogContent>
//               </DialogContainer>
//             </Dialog>
//           </>
//         );
//       })}
//     </div>
//   );
// }



// import React from 'react';
// import {
//   TabDes,
//   TabHeader,
//   TabImage,
//   TabImageContainer,
//   TabItem,
//   TabList,
//   TabsProvider,
// } from '../components/ui/certificate';
// const tabs = [
//   {
//     title: 'How do UI components improve UX?',
//     id: 'improve',
//     description:
//       'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
//   },
//   {
//     title: 'Important of UI component.',
//     id: 'important',
//     description:
//       'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
//   },
//   {
//     title: 'Is UI and UX Same?',
//     id: 'same',
//     description:
//       '     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
//   },
// ];
// function Certificates() {
//   return (
//     <>
//       <div className=" w-full  h-full">
//         <TabsProvider
//           defaultValue="improve"
//           className="md:grid md:grid-cols-12 items-center justify-center">
//           <TabList className="md:col-span-5">
//             {tabs.map((tab, index) => (
//               <TabItem key={index} value={tab.id}>
//                 <TabHeader value={tab.id}>{tab.title}</TabHeader>
//                 <TabDes value={tab.id}>
//                   {' '}
//                   <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
//                     {tab.description}
//                   </p>
//                   <img
//                     src={tab.imageUrl}
//                     alt={tab.title}
//                     className="md:hidden block rounded-md"
//                   />
//                 </TabDes>
//               </TabItem>
//             ))}
//           </TabList>
//           <TabImageContainer className="md:col-span-7">
//             {tabs.map((tab, index) => (
//               <TabImage key={index} value={tab.id}>
//                 <img
//                   src={tab.imageUrl}
//                   alt={tab.title}
//                   className="w-full h-full object-cover rounded-md"
//                 />
//               </TabImage>
//             ))}
//           </TabImageContainer>
//         </TabsProvider>
//       </div>
//     </>
//   );
// }
// export default Certificates;





import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const tabs = [
  {
    title: 'Analyzing and Visualizing Data with Microsoft Power BI',
    id: 'improve',
    description:
      'The certificate below verifies that Vanshmani has successfully completed the course Power BI for Beginners',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D562DAQEHyv8gxGfeGw/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1731307431974?e=1735668000&v=beta&t=s2RyC8iNrQTsxWdTD3pYyW4HCfatKKrh21bMLrCYvoY',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    id: 'important',
    description:
      'Amazon Web Services (AWS) · AWS CLOUD · DevOps · AWS',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D562DAQGwPe3LBVZpEg/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1721909610064?e=1735668000&v=beta&t=o-3Go2jYaYLJrQ3vBHgD2vfku59_UTK1-jrf0v4Lu4s',
  },
  {
    title: 'Google Cloud Certified Cloud Digital Leader',
    id: 'same',
    description:
      'Google Cloud Platform (GCP) · google cloud · Cloud Storage · google cloud firebase',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D562DAQFwfULR0ZnM1g/profile-treasury-document-cover-images_480/profile-treasury-document-cover-images_480/0/1721909386332?e=1735668000&v=beta&t=bsYjNsYUrJvVTKKYDJaPhUZV06Xrc3UO8YprWBF5B3c',
  },
];
function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = async (index) => {
    setActiveIndex(activeIndex === index ? index : index);
  };
//   const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <div className=" md:grid grid-cols-12 p-2 items-center justify-center w-full h-full relative">
        <div className="rounded-sm col-span-5">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden mb-2  ${
                activeIndex === index
                  ? 'active border-2 dark:border-[#656fe2]  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]'
                  : 'bg-transparent border-2 dark:hover:border-[#656fe2]'
              }
            `}
              onClick={() => handleClick(index)}>
              <h3
                className={`p-4 cursor-pointer transition-all font-semibold  dark:text-white text-black bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${
                  activeIndex === index
                    ? 'bg-[#F2F2F2] '
                    : 'dark:bg-[#11112b] bg-white'
                }
               `}>
                {tab.title}
              </h3>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                      delay: 0.14,
                    }}>
                    <p className={`dark:bg-white bg-[#F2F2F2] text-black p-3`}>
                      {tab.description}
                    </p>
                    <img
                      src={tab.imageUrl}
                      alt={tab.title}
                      className="mb-2 max-w-full h-full md:hidden block  rounded-md object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <>
          {
            tabs.map((tab, index) => {
              return (
                <>
                  <AnimatePresence mode="popLayout">
                    {activeIndex === index && (
                      <motion.div className="p-4 h-[400px] overflow-hidden col-span-7">
                        <motion.img
                          src={tab.imageUrl}
                          alt={tab.title}
                          className="mb-2 max-w-full h-full  rounded-md object-cover"
                          width={800}
                          initial={{ opacity: 0, overflow: 'hidden' }}
                          animate={{ opacity: 1, overflow: 'hidden' }}
                          exit={{ opacity: 0, overflow: 'hidden' }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2,
                          }}
                          height={800}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              );
            })}
        </>
      </div>
    </>
  );
}
export default Certificates;

