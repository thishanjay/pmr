"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquareText, CheckCircle } from "lucide-react";

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

  const isValidEmail = (email: string): boolean => /^\S+@\S+\.\S+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className="px-4 md:px-8 py-12 m-2">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 border-b-8 border-red-900 pb-6">
          <h1 className="text-5xl font-extrabold text-red-900 tracking-tight">Contact Us</h1>
          <p className="text-gray-600 mt-2 font-medium uppercase tracking-widest text-sm italic">
            Get in touch with the PMR Editorial Office
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Contact Info (The "Business Card") */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl h-full relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-2">
                  <MapPin size={24} />
                  Office Address
                </h2>
                
                <div className="space-y-6">
                  <address className="not-italic text-lg leading-relaxed text-gray-300">
                    <span className="text-white font-bold block mb-1">Co-editor, PMR</span>
                    Faculty of Management, <br />
                    University of Peradeniya, <br />
                    Peradeniya 20400, <br />
                    Sri Lanka
                  </address>

                  <div className="pt-6 border-t border-gray-800 space-y-4">
                    <div className="flex items-center gap-4 group/item">
                      <div className="p-3 bg-gray-800 rounded-xl text-red-400 group-hover/item:bg-red-900 transition-colors">
                        <Phone size={20} />
                      </div>
                      <p className="text-gray-300 font-medium">081-2385707</p>
                    </div>

                    <div className="flex items-center gap-4 group/item">
                      <div className="p-3 bg-gray-800 rounded-xl text-red-400 group-hover/item:bg-red-900 transition-colors">
                        <Mail size={20} />
                      </div>
                      <a href="mailto:editorpmr@gmail.com" className="text-gray-300 font-medium hover:text-white transition-colors">
                        editorpmr@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 text-white opacity-5 transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                <MessageSquareText size={200} />
              </div>
            </div>
          </div>

          {/* Card 2: Contact Form (The "Message Terminal") */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
                Send Us a Message
              </h2>

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-2xl mb-8 flex items-center gap-3 animate-in fade-in zoom-in duration-300">
                  <CheckCircle className="text-green-600" />
                  <p className="font-semibold text-sm">Your message has been sent successfully! We will get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g., Prof. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl bg-gray-50 border transition-all focus:ring-2 focus:ring-red-900/20 outline-hidden ${
                        errors.name ? "border-red-500" : "border-gray-200 focus:border-red-900"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@university.edu"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 rounded-xl bg-gray-50 border transition-all focus:ring-2 focus:ring-red-900/20 outline-hidden ${
                        errors.email ? "border-red-500" : "border-gray-200 focus:border-red-900"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Manuscript Query / Feedback"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 rounded-xl bg-gray-50 border transition-all focus:ring-2 focus:ring-red-900/20 outline-hidden ${
                      errors.subject ? "border-red-500" : "border-gray-200 focus:border-red-900"
                    }`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your inquiry in detail..."
                    className={`w-full px-5 py-3 rounded-xl bg-gray-50 border transition-all focus:ring-2 focus:ring-red-900/20 outline-hidden resize-none ${
                      errors.message ? "border-red-500" : "border-gray-200 focus:border-red-900"
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-3 bg-red-900 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-red-800 active:scale-95 transition-all"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}