import SectionName from "@/components/common/SectionName";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <SectionName
        name="Contact Us"
        title="Let’s work together"
        details="We're passionate about innovation, brilliant ideas, and the execution that brings it all together in one beautiful experience. If you are too, call or send us an email to get started."
      />
      <div className="container mx-auto px-4 md:px-0">
        <div className="md:ml-[293px]">
          <Link href="/contact">
            <button className="text-white bg-secondary px-8 py-3 font-medium text-xl">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
