import Skils from "@/components/modules/home/Skils";
import ProjectsComponents from "@/components/modules/projects/ProjectsComponents";

const page = () => {
  return (
    <div>
      <Skils></Skils>
      <ProjectsComponents></ProjectsComponents>
    </div>
  );
};

export default page;

// <section className="container mx-auto px-4 mt-8">
//   <h2 className="text-center font-bold text-2xl sm:text-3xl lg:text-[32px]">Today's deals</h2>

//   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[35px] mt-6">
//     {/* SUPER DEALS BLOCK */}
//     <div className="relative bg-[url('https://ae01.alicdn.com/kf/S750461e03a75471cac965e67d7d557229.jpg')] bg-cover bg-no-repeat group/super rounded-2xl overflow-hidden">
//       <div className="pt-6 flex flex-col items-center text-center">
//         <h5 className="text-xl sm:text-2xl font-bold text-white">SuperDeals</h5>
//         <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium text-sm">
//           <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S493ec270c78c4b8b90b8993ec0197d3a6/48x48.png" alt="clock" className="size-6" />
//           <span>Ends in: 18:23:20</span>
//           <span><ChevronRight size={17} /></span>
//         </div>
//       </div>

//       <div className="py-6 px-4 sm:px-6 md:px-8 overflow-hidden">
//         <Swiper
//           slidesPerView={1.2}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           spaceBetween={16}
//           navigation={{
//             nextEl: ".next-el",
//             prevEl: ".prev-el"
//           }}
//           loop
//           modules={[Navigation]}
//         >
//           {data.map(({ discountPercentage, id, price, thumbnail, title }) => (
//             <SwiperSlide key={id}>
//               <Card
//                 id={id}
//                 discountPercentageShow={true}
//                 price={price}
//                 thumbnail={thumbnail}
//                 title={title}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/super:opacity-100 transition-all duration-300">
//         <div className="prev-el w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
//         <div className="next-el w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
//       </div>
//     </div>

//     {/* BIG SAVE BLOCK */}
//     <div className="relative bg-[url('https://ae01.alicdn.com/kf/Sc8908a992f6341cda52c8b6ac2d302efG.jpg')] bg-cover bg-no-repeat group/big rounded-2xl overflow-hidden">
//       <div className="pt-6 flex flex-col items-center text-center">
//         <h5 className="text-xl sm:text-2xl font-bold text-white">Big Save</h5>
//         <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium text-sm relative overflow-hidden">
//           <div className="flex relative">
//             <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S588971e0387446a4bcf202557655fc61t.png" alt="clock1" className="size-6 rounded-full relative z-10" />
//             <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S213f18d82e794cb580fc2b59738b061fQ.png" alt="clock2" className="size-6 rounded-full absolute left-4 z-[2]" />
//             <Image width={24} height={24} src="https://ae01.alicdn.com/kf/S1d5267d0fddd4213810e41ed1a4ebf247.png" alt="clock3" className="size-6 rounded-full absolute left-8 z-[1]" />
//           </div>
//           <span>500+ Brands</span>
//           <span><ChevronRight size={17} /></span>
//         </div>
//       </div>

//       <div className="py-6 px-4 sm:px-6 md:px-8 overflow-hidden">
//         <Swiper
//           slidesPerView={1.2}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           spaceBetween={16}
//           navigation={{
//             nextEl: ".next-el-brand",
//             prevEl: ".prev-el-brand"
//           }}
//           loop
//           modules={[Navigation]}
//         >
//           {data.map(({ id, price, thumbnail, title, discountPercentage }) => (
//             <SwiperSlide key={id}>
//               <Card
//                 id={id}
//                 discountPercentageShow={false}
//                 price={price}
//                 thumbnail={thumbnail}
//                 title={title}
//                 discountPercentage={discountPercentage}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/big:opacity-100 transition-all duration-300">
//         <div className="prev-el-brand w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
//         <div className="next-el-brand w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
//       </div>
//     </div>
//   </div>
// </section>
