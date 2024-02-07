// Import necessary modules
import Head from 'next/head';
import Link from 'next/link';

// Placeholder data for a token. Replace with dynamic data fetching later.
const token = {
  id: '1',
  name: 'Token 1',
  price: '100',
  description: 'This is a detailed description of Token 1.',
  creator: {
    id: '1',
    name: 'Creator Name',
  },
};

export default function TokenDetail() {
  return (
    <div>
      <Head>
        <title>{token.name} - Token Details</title>
      </Head>

      <main className="p-4">
        <h1 className="text-2xl font-bold">{token.name}</h1>
        <p className="mt-2">{token.description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold">${token.price}</span>
        </div>

        <Link href={`/creators/${token.creator.id}`} passHref>
          <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
            Visit Creator Profile
          </button>
        </Link>
      </main>
    </div>
  );
}
