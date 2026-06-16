import Blog from "../components/sections/Blog";
import AnimatedHero from "../components/common/SimpleHero";

const BlogPage = () => {
  return (
    <>
      <AnimatedHero path="/blog" title="Blog" />
      <Blog />
    </>
  );
};

export default BlogPage;
