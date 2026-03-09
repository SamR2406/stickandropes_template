import Image from "next/image";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import { blogPosts, imageBank } from "@/data/siteData";

export const metadata = {
  title: "Blog | Sticks and Ropes",
  description: "Posts on nature connection, outdoor learning, and child development.",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <HeroBanner
        image={imageBank.blogHero}
        eyebrow="Blog"
        title="Nature connection and learning insights"
        body="Stories and practical perspectives from outdoor education, home education, and child development."
      />

      <section className="section-shell">
        <div className="stagger grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card">
              <p className="text-xs uppercase tracking-wider text-forest-600">
                {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                {" | "}
                {post.readTime}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-forest-950">{post.title}</h2>
              <p className="mt-2 text-sm text-forest-700">By {post.author}</p>
              <p className="mt-3 text-sm text-forest-800">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="btn-secondary mt-4">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell overflow-hidden">
        <div className="relative h-56 overflow-hidden rounded-2xl">
          <Image src={imageBank.homeFeature} alt="Children collaborating outdoors" fill className="object-cover" sizes="100vw" />
        </div>
      </section>
    </div>
  );
}
