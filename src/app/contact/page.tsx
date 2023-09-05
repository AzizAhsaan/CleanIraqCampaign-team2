import React from "react";
import bgimg from "./bgimg.png";
import Image from "next/image";
import MyForm from "./components/MyForm";

function page() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center overflow-hidden form">
        <div className="flex flex-col w-full overflow-hidden rounded-2xl">
          <Image
            src={bgimg}
            alt=""
            className="w-[98%] md:w-[90%] mx-auto mt-20 object-cover m-10 rounded-3xl"
          />
        </div>
        <h1 className="m-5 text-2xl font-medium text-center">
          اكتب استفسارك او طلبك
        </h1>
        <section className=" w-[80%] md:w-[50%] h-auto mb-20">
          <MyForm />
        </section>
      </div>
    </div>
  );
}

export default page;
