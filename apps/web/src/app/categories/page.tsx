import { categories } from "@/functions/categories";
import { posts } from "@repo/db/data";

export default function Page() {
  const postCategories = categories(posts);
  console.log(postCategories);
  return (
    <ul>
      {postCategories.map((category) => (
        <li key={category.name}>{category.name}</li>
      ))}
    </ul>
  );
}
