import { fetchPages } from "@/lib/notion";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchPages();
  console.log(posts.results[0].properties.cover.files[0].file.url);

  return (
    <div className='flex items-center gap-4'>
      {posts.results.map((post) => (
        <Link
          href={`/course/${post.properties.slug.rich_text[0].plain_text}`}
          key={post.id}
          className='p-4 bg-gray-100 rounded-lg'
        >
          <Image
            src={`${post.properties.cover.files[0].file.url}`}
            alt={post.properties.title.title[0].plain_text}
            width={200}
            height={200}
          />
          <h1>{post.properties.title.title[0].plain_text}</h1>
        </Link>
      ))}
    </div>
  );
}
