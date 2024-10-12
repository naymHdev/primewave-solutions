import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import SectionName from "@/components/common/SectionName";

const Gallery = () => {
  return (
    <>
      <SectionName
        name="Gallery"
        title="Our Portfolio in Motion"
        details="See our work in action through an interactive gallery of websites, apps, and digital experiences. Explore how each project was crafted with care to deliver stunning results."
      />
      <div>
        <ResponsiveContainer></ResponsiveContainer>
      </div>
    </>
  );
};

export default Gallery;
