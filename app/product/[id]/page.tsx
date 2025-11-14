export const dynamic = 'force-dynamic';
export const runtime = 'edge';

<<<<<<< HEAD
interface ProductPageParams {
  id: string;
}

// Define the Props type, specifying that params is a Promise
interface Props {
  params: Promise<ProductPageParams>;
  // searchParams would also be a Promise<...> if you used it
}

export default async function ProductPage({ params }: Props) {
  // Await the params object before destructuring and using it
  const { id } = await params;

  return (
    <main>
      <h1>Product ID: {id}</h1>
    </main>
  );
}
=======
export default function ProductPage() {
  notFound(); // 永远不会渲染，Cloudflare Edge Function 接管
}

export const dynamic = 'force-dynamic';
>>>>>>> 3af4c3a (fsdfe)
