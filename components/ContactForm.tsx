import React from "react";

const ContactForm = () => {
  return (
    <div className="p-8 bg-gray-900 rounded-lg shadow-lg h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Contact Information
      </h2>
      <div className="mb-6">
        <p className="text-sm text-gray-400">Name:</p>
        <p className="text-lg text-white font-semibold">
          Lê Văn Hoàng Vũ
        </p>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-400">Email:</p>
        <p className="text-lg text-white font-semibold">
          vuhoangvanle@gmail.com
        </p>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-400">Address:</p>
        <p className="text-lg text-white font-semibold">
        Bình Chánh,Thành Phố Hồ Chí Minh
        </p>
      </div>
      <div className="mb-6">
        <p className="text-sm text-gray-400">Phone Number:</p>
        <p className="text-lg text-white font-semibold">
        0989XXXXXX
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
