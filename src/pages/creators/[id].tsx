// Import necessary modules
import Head from 'next/head';
import Link from 'next/link';

// This is a placeholder for creator data. Replace with dynamic data fetching later.
const creator = {
  id: '1',
  name: 'Creator Name',
  bio: 'This is a short bio of the creator.',
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com/' },
    { platform: 'Instagram', url: 'https://instagram.com/' },
  ],
  tokens: [
    { id: '1', name: 'Token 1', price: '100', description: 'Description of Token 1' },
    // Add more tokens as needed
  ],
};

export default function CreatorProfile() {
  return (
    <div>
      <Head>
        <title>{creator.name} - Profile</title>
      </Head>

      <main className="p-4">
        <h1 className="text-2xl font-bold">{creator.name}</h1>
        <p className="mt-2">{creator.bio}</p>

        <h2 className="mt-6 text-xl font-semibold">Social Links</h2>
        <ul className="list-disc pl-8">
          {creator.socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="text-blue-500 hover:underline">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Tokens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {creator.tokens.map((token) => (
            <div key={token.id} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">{token.name}</h3>
              <p>{token.description}</p>
              <div className="mt-2">
                <span className="text-lg font-bold">${token.price}</span>
              </div>
              <Link href={`/tokens/${token.id}`} passHref>
                <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
                  View Token
                </button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
