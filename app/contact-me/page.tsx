import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/vutru-bg.webp)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white bg-opacity-70 backdrop-filter backdrop-blur-md flex items-center justify-center">
        <div className="w-full h-full p-6 flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
