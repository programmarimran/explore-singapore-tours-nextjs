import Form from "@/components/contact-us/Form";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.0724395465846!2d90.39838371499067!3d23.92114738451371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e7dc1a3b7c03%3A0x9cf0d63bbfd507cf!2sGazipur!5e0!3m2!1sen!2sbd!4v1660928947923!5m2!1sen!2sbd"
          className="w-full h-64 rounded-lg border dark:border-gray-700"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Form />
    </div>
  );
};

export default page;
