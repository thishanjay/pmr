"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<boolean>(false);

  // Validate email
  const isValidEmail = (email: string): boolean => /^\S+@\S+\.\S+$/.test(email);

  // Shared change handler for inputs and textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Here you can handle actual submission (API/email)
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="px-8 py-12 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-red-900 mb-10">Contact Us</h1>

      {/* Postal Address & Contact Info */}
      <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-red-900 mb-4">
          Contact Info
        </h2>
        <p className="text-gray-800 mb-2">
          Co-editor, Peradeniya Management Review
        </p>
        <p className="text-gray-800 mb-2">
          Faculty of Management, University of Peradeniya
        </p>
        <p className="text-gray-800 mb-1">Peradeniya 20400, Sri Lanka</p>
        <p className="text-gray-800 mb-1">Call: 081-2385707</p>
        <p className="text-gray-800">
          Email:{" "}
          <a
            href="mailto:editorpmr@gmail.com"
            className="text-blue-600 underline hover:text-red-900"
          >
            editorpmr@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="mb-10 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-red-900 mb-4">
          Send Us a Message
        </h2>

        {success && (
          <p className="bg-green-100 text-green-800 p-3 rounded mb-4">
            Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-800 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-800 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-800 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 border rounded ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-900 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
