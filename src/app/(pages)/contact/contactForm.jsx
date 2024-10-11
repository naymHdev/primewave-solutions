"use client";

import Button from "@/components/common/Button";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
      {/* Left Section - Contact Form */}
      <section className="">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 rounded-none focus:outline-none border-b border-b-secondary"
              type="text"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Company Name
            </label>
            <input
              {...register("company", { required: "Company Name is required" })}
              className="w-full p-3 rounded-none focus:outline-none border-b border-b-secondary"
              type="text"
              placeholder="Your Company Name"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-3 rounded-none focus:outline-none border-b border-b-secondary"
              type="email"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Phone
            </label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-3 rounded-none focus:outline-none border-b border-b-secondary"
              type="tel"
              placeholder="Your Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 rounded-none focus:outline-none border-b border-b-secondary"
              rows={4}
              placeholder="Your Message"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <Button
            label="Submit"
            type="submit"
            bg="bg-primary"
            hover="hover:bg-legendary"
          />
        </form>
      </section>

      {/* Right Section - Google Maps Embed */}
      <section className="">
        <div className="w-full h-80 md:h-[540px]">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094237!2d144.96315781531577!3d-37.81362797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b4ccf82fe0ec!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1601682612028!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
