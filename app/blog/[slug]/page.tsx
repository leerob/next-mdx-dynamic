export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`docs/${slug}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ slug: 'hello-world' }];
}

export const dynamicParams = false;
