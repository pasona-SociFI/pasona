// import Head from 'next/head';
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Pasona - Home</title>
//         <meta name="description" content="Buy and sell creator tokens on Pasona." />
//       </Head>

//       <main className="p-4">
//         <h1 className="text-2xl font-bold">Welcome to Pasona</h1>
//         <p className="mt-4">The marketplace for creator tokens. Connect with your favorite creators in a whole new way.</p>
//         <div className="mt-8">
//           {/* Update Link usage here */}
//           <Link href="/marketplace" passHref>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Explore Marketplace
//             </button>
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }


import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Pasona - Home</title>
        <meta name="description" content="Buy and sell creator tokens on Pasona." />
      </Head>

      <main className="flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-gray-800 mt-10 mb-4">Welcome to Soc-Fi</h1>
        <p className="text-xl text-gray-600 text-center max-w-md">
          The marketplace for creator tokens. Connect with your favorite creators in a whole new way.
        </p>
        
        <div className="mt-8 mb-10">
          {/* Assuming you have a placeholder or relevant hero image */}
          <img src="/home.png" alt="Pasona Marketplace" className="rounded-lg shadow-lg" style={{ maxWidth: '600px' }} />
        </div>

        <div className="mt-8">
          <Link href="/marketplace" passHref>
            <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-150 ease-in-out transform hover:-translate-y-1">
              Explore Marketplace
            </button>
          </Link>
        </div>

        {/* Featured Creators Section */}
        <section className="mt-16 w-full">
          {/* Content omitted for brevity */}
        </section>
      </main>
    </div>
  );
}

