"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export const Form = ({ env }: { env: any }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !env.EMAILJS_SERVICE_ID ||
      !env.EMAILJS_TEMPLATE_ID ||
      !env.EMAILJS_PUBLIC_KEY ||
      !form.current
    )
      throw new Error(
        "One of the sendForm params (serviceID, templateID, form, publicKey) is missing. Please check your environment variables"
      );
    emailjs
      .sendForm(
        env.EMAILJS_SERVICE_ID,
        env.EMAILJS_TEMPLATE_ID,
        form.current,
        env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="user_name">
          Name
        </label>
        <input type="text" id="user_name" name="user_name" required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea rows={8} id="message" name="message" required />
      </div>
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
};
