import Head from "next/head";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>welcom to my blog</title>
        <meta name="description" content="i write about all kind of stuff" />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
