import Button from "@/components/common/Button";
import ResponsiveContainer from "@/components/common/ResponsiveContainer";
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
      <ResponsiveContainer>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className=" col-span-full md:col-span-2"></div>
          <div className=" col-span-full md:col-span-5">
            <Link href="/contact">
              <Button
                label="CONTACT US"
                bg="bg-secondary"
                hover="hover:bg-legendary"
              />
            </Link>
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default ContactUs;
