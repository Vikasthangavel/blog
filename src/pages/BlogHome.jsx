import AuthorCard from "../components/AuthorCard";
import FeaturedPost from "../components/FeaturedPost";
import TabSection from "../components/TabSection";
import SkillsSection from "../components/SkillsSection";
import "./BlogHome.css";

const BlogHome = () => {
  return (
    <main className="blog-home">
      <AuthorCard />
      <FeaturedPost />
      <TabSection />
      <SkillsSection />
    </main>
  );
};

export default BlogHome;
