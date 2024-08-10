import type { Metadata } from "next";
import React from "react";
import { Form } from "../components/Form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us page",
};

const ContactUs = () => (
  <>
    <h1>Contact Us</h1>
    <Form
      env={{
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID || "",
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || "",
        EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY || "",
      }}
    />
  </>
);

export default ContactUs;
