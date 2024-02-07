// import Head from 'next/head';

// const tokens = [
//   // Example static data
//   { id: 1, name: "Creator Token A", price: "100", description: "This is a creator token." },
//   // Add more tokens as needed
// ];

// export default function Marketplace() {
//   return (
//     <div>
//       <Head>
//         <title>Marketplace - Pasona</title>
//       </Head>

//       <main className="p-4">
//         <h1 className="text-2xl font-bold">Marketplace</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//           {tokens.map((token) => (
//             <div key={token.id} className="border rounded-lg p-4">
//               <h2 className="text-xl font-semibold">{token.name}</h2>
//               <p>{token.description}</p>
//               <div className="mt-2">
//                 <span className="text-lg font-bold">${token.price}</span>
//               </div>
//               <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Buy Token</button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

import Head from 'next/head';
import Link from 'next/link';

// Updated example data to include a creator ID for each token
const tokens = [
  { id: 1, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
  // Add more tokens as needed, each with a unique creatorId
];

export default function Marketplace() {
  return (
    <div>
      <Head>
        <title>Marketplace - Pasona</title>
      </Head>

      <main className="p-4">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {tokens.map((token) => (
            <div key={token.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">{token.name}</h2>
              <p>{token.description}</p>
              <div className="mt-2">
                <span className="text-lg font-bold">${token.price}</span>
              </div>
              {/* Corrected Link usage */}
              <Link href={`/creators/${token.creatorId}`} passHref>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Visit Creator
                </button>
              </Link>
              <button className="mt-4 ml-2 bg-blue-500 text-white rounded px-4 py-2">Buy Token</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
