import React from "react";
import { GlobalOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Information</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-xl font-bold mb-4">
          Sheva Nari O Shishu Kallyan Kendra
        </h2>
        <div className="flex flex-row justify-between">
          <div>
            <p className="mb-4">26 East Tejturi Bazar, Tajgaon</p>
            <p className="mb-4">1215 Dhaka</p>
            <p className="mb-4">Bangladesh</p>
          </div>
          <div>
            <p className="mb-4">
              <span className="mr-2">
                <PhoneOutlined />
              </span>
              +88029114497
            </p>

            <p className="mb-4">
              <span className="mr-2">
                <MailOutlined />
              </span>
              <a href="mailto:sheva@bol-online.com">sheva@bol-online.com</a>
            </p>
            <p className="mb-4">
              <span className="mr-2">
                <GlobalOutlined />
              </span>
              <a
                href="http://www.shevabd.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.shevabd.org
              </a>
            </p>
          </div>
          <div>
            <p className="mb-4">Women's policy</p>
            <p className="mb-4">Educational policy/project</p>
            <p className="mb-4">Human rights</p>
          </div>
        </div>

        <p className="mb-4 mt-4">Contact person: Sayeeda Khan</p>
      </div>
    </div>
  );
};

export default Contact;
