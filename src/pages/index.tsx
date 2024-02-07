import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pasona - Home</title>
        <meta name="description" content="Buy and sell creator tokens on Pasona." />
      </Head>

      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Pasona</h1>
        <p className="mt-4">The marketplace for creator tokens. Connect with your favorite creators in a whole new way.</p>
        <div className="mt-8">
          {/* Update Link usage here */}
          <Link href="/marketplace" passHref>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Marketplace
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
