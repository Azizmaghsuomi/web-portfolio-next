"use client";

import React, { useState } from "react";
import GithubIcon from "@/public/github-icon.svg";
import Linkdin from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSelection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // وضعیت ارسال

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    // فرم را ارسال کنید
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify({
          access_key: "d765c82b-633c-49de-8018-d44d2f2f0f99",
          email,
          subject,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // پاک کردن مقادیر فرم پس از ارسال موفق
      setEmail("");
      setSubject("");
      setMessage("");
      alert(" thanks for message! Message sent successfully✅");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false); // پایان ارسال
    }
  };

  return (
    <section
      id="contact"
      className="grid  md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2 ">
          Let&lsquo;s connect
        </h5>
        <p className="text-[#ABD7BE] mb-4 max-w-md">
          I&lsquo;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&lsquo;ll
          try my best to get back to you!
        </p>

        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/Azizmaghsuomi">
            <Image
              src={GithubIcon}
              alt="github icon"
              className="hover:scale-110 duration-500"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/aziz-maghsuomi-901975203">
            <Image
              src={Linkdin}
              alt="LinkedIn icon"
              className="hover:scale-110 duration-500"
            />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col ">
          <input
            type="hidden"
            name="access_key"
            value="d765c82b-633c-49de-8018-d44d2f2f0f99"
          />
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              name="email"
              placeholder="Aziz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              name="subject"
              placeholder="Subject..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Message..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`${
              isSending
                ? "bg-primary-300 text-[#2a325b] font-bold"
                : "bg-primary-500 hover:bg-primary-600"
            } text-white mt-2 font-medium py-2.5 px-5 rounded-lg block w-full`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSelection;
