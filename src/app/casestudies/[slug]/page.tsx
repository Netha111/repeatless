import { notFound } from "next/navigation";
import BlogHero from "../components/Header";
import BlogBody from "../components/body1";
import CTASection from "../components/CTA";
import { getBlogBySlug, blogs } from "../../../../public/data/blogs";
import { AppRoutes } from "../../../../.next/types/routes";


type Params = { params: { slug: string } } & PageProps<AppRoutes>; // Updated Params type with valid type argument

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export default function BlogPage({ params }: Params) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return notFound();

  return (
    <div>
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[150px] pt-12">
        <BlogHero
          title={blog.hero.title}
          description={blog.hero.description}
          meta={blog.hero.meta}
          image={blog.hero.image}
          video={blog.hero.video}
        />
        <BlogBody sections={blog.body.sections} />
      </section>
      <CTASection />
    </div>
  );
}



