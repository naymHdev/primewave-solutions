import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";
import React from "react";
import ContactForm from "./contactForm";
import ReviewSection from "@/components/Pages/Reviews/Reviews";
import RouteBanner from "@/components/common/RouteBanner";

const ContactUs = () => {
  return (
    <>
      <RouteBanner
        src="/videos/contactUS.mp4"
        name="Let's Transform Your Home Together"
        title="Expertise in Remodeling & Design"
        subtitle="Reach out today for a consultation and let us bring your dream home
            to life."
      />
      <div className=" mt-16 md:mt-0">
        <SectionName
          name="We're Here to Help"
          title="Let's Discuss How We Can Help Your Business Grow."
          details="Whether you need help with your website or want to discuss your social media strategy, we’re just a click. Simply fill out the contact form and one of our team members will get back to you as soon as possible. Alternatively, you can contact us directly by email – hello.primewave@gmail.com"
        />
        <ResponsiveContainer>
          <ContactForm />
        </ResponsiveContainer>
        <ReviewSection />
      </div>
    </>
  );
};

export default ContactUs;
