"use client";

import React, { useState, useCallback } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdXavQXlwKjP9dYvkYpHOg6-QLWHeI2J2tLNDhYYAsQpw7ofw/formResponse";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    maritalStatus: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const formBody = new URLSearchParams({
        "entry.1510645988": encodeURIComponent(formData.name),           // Name field
        "entry.938203700": encodeURIComponent(formData.email),          // Email field
        "entry.1549808739": encodeURIComponent(formData.phone),         // Phone field
        "entry.1578212786": encodeURIComponent(formData.city),          // City field
        "entry.505635382": encodeURIComponent(formData.qualification),      // Qualification field
        "entry.17107752": encodeURIComponent(formData.maritalStatus),        // Marital Status field
        "entry.1610243820": encodeURIComponent(formData.message),        // Message field
      });

      try {
        await fetch(GOOGLE_FORM_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          qualification: "",
          maritalStatus: "",
          message: "",
        });
        setIsSubmitted(true);
      } catch (error) {
        console.error("Form submission error:", error);
        setIsSubmitted(false);
      }
    },
    [formData]
  );

  return (
    <form
      className="isolate space-y-8 rounded-2xl bg-gradient-to-b from-n-8/15 to-n-8/5    border border-n-0 p-12 max-w-[50rem] mb-24"
      onSubmit={handleSubmit}
    >
      {/* <div>
        <h1 className="ml-10 text-4xl font-semibold italic mb-8 text-gold">Begin Your Journey to UK!</h1>
      </div> */}
      {/* <h2 className="h3 mb-4 md:mb-8 uppercase italic">
      Begin Your Journey to <span className="ml-2">UK!</span>
      </h2> */}


      {/* First Row: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="border-r border-neutral-400 pr-4">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="peer block w-full border-b border-neutral-400 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
            required
          />
        </div>
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          className="peer block w-full border-b border-neutral-400 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
          required
        />
      </div>

      {/* Second Row: Phone and City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-r border-neutral-400 pr-4">
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9\s\-\(\)]*"
            inputMode="numeric"
            className="peer block w-full border-b border-neutral-400 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
            required
            maxLength={10}
            minLength={10}
          />
        </div>
        <TextInput
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="peer block w-full border-b border-neutral-400 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
          required
        />
      </div>

      {/* Third Row: Qualification and Marital Status */}
      

      {/* Message */}
      <TextInput
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="peer block w-full border-b border-neutral-400 bg-transparent px-4 pb-3 pt-6 text-sm text-neutral-950 ring-0 transition focus:border-neutral-950 focus:outline-none focus:ring-0"
        required
      />

      <Button type="submit" className="mt-4 ml-64 w-36 p-2 text-white hover:text-orange-400 rounded-lg mx-auto bg-black">Submit</Button>

      {isSubmitted && <p className="mt-4 text-gradient">Form successfully submitted</p>}
    </form>
  );
};

export default ContactForm;
