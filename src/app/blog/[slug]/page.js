import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/siteData";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: `${post.title} | Sticks and Ropes`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="section-shell mx-auto max-w-3xl">
      <p className="text-xs uppercase tracking-[0.18em] text-forest-700">Blog</p>
      <h1 className="mt-2 text-4xl font-semibold text-forest-950">{post.title}</h1>
      <p className="mt-2 text-sm text-forest-700">
        {post.author} | {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-GB")} | {post.readTime}
      </p>
      <p className="mt-4 text-base text-forest-900">{post.excerpt}</p>

      <div className="mt-8 space-y-6">
        {post.content.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold text-forest-950">{section.heading}</h2>
            <p className="mt-2 text-sm leading-7 text-forest-800">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/blog" className="btn-secondary">
          Back to all posts
        </Link>
      </div>
    </article>
  );
}
