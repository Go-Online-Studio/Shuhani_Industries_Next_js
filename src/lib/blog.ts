import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  author: string;
  contentHtml: string;
  content: string; // Raw markdown body
}

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Retrieves all blog posts sorted by date in descending order.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
      .map(async (fileName) => {
        // Remove file extension to get the slug
        const slug = fileName.replace(/\.mdx?$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Compile markdown body to HTML
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        return {
          slug,
          contentHtml,
          content: matterResult.content,
          title: matterResult.data.title || "Untitled Post",
          date: matterResult.data.date || new Date().toISOString().split("T")[0],
          excerpt: matterResult.data.excerpt || "",
          coverImage: matterResult.data.coverImage || "/images/bannerImage.webp",
          tags: matterResult.data.tags || [],
          author: matterResult.data.author || "Suhani Industries",
        } as BlogPost;
      })
  );

  // Sort posts by date desc
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Retrieves all slugs for static path generation.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}

/**
 * Retrieves a single blog post by its slug.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  let fullPath = "";

  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Compile markdown body to HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    content: matterResult.content,
    title: matterResult.data.title || "Untitled Post",
    date: matterResult.data.date || new Date().toISOString().split("T")[0],
    excerpt: matterResult.data.excerpt || "",
    coverImage: matterResult.data.coverImage || "/images/bannerImage.webp",
    tags: matterResult.data.tags || [],
    author: matterResult.data.author || "Suhani Industries",
  } as BlogPost;
}
