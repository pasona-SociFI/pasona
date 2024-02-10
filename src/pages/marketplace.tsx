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

// import Head from 'next/head';
// import Link from 'next/link';

// // Updated example data to include a creator ID for each token
// const tokens = [
//   { id: 1, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 2, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 3, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 4, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 5, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 6, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 7, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 8, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 9, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },
//   { id: 10, name: "Creator Token A", price: "100", description: "This is a creator token.", creatorId: 'creator1' },

//   // Add more tokens as needed, each with a unique creatorId
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
//               {/* Corrected Link usage */}
//               <Link href={`/creators/${token.creatorId}`} passHref>
//                 <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                   Visit Creator
//                 </button>
//               </Link>
//               <button className="mt-4 ml-2 bg-blue-500 text-white rounded px-4 py-2">Buy Token</button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }


import Head from 'next/head';
import Link from 'next/link';

// Example data with fictional tokens for well-known celebrities/influencers
const tokens = [
  { id: 1, name: "Mr. Beast Challenge Token", price: "300", description: "Exclusive access to participate in a challenge.", creatorId: 'mrBeast' },
  { id: 2, name: "Elon Musk Innovations Token", price: "500", description: "Insider view on upcoming tech and innovations.", creatorId: 'elonMusk' },
  { id: 3, name: "Ariana Grande Backstage Pass", price: "400", description: "Backstage access to concerts and events.", creatorId: 'arianaGrande' },
  { id: 4, name: "Gordon Ramsay Cooking Masterclass", price: "350", description: "Exclusive cooking masterclass.", creatorId: 'gordonRamsay' },
  { id: 5, name: "Serena Williams Tennis Clinic Token", price: "450", description: "Participate in a tennis clinic.", creatorId: 'serenaWilliams' },
  { id: 6, name: "Casey Neistat Filmmaking Tips Token", price: "250", description: "Filmmaking tips and behind-the-scenes access.", creatorId: 'caseyNeistat' },
  { id: 7, name: "Billie Eilish Private Concert Token", price: "600", description: "Access to a private concert stream.", creatorId: 'billieEilish' },
  { id: 8, name: "David Dobrik Surprise Vlog Token", price: "320", description: "Be part of a surprise vlog.", creatorId: 'davidDobrik' },
  { id: 9, name: "LeBron James Training Session Token", price: "550", description: "Exclusive training session insights.", creatorId: 'leBronJames' },
  { id: 10, name: "Kim Kardashian Beauty Secrets Token", price: "400", description: "Beauty and fashion secrets revealed.", creatorId: 'kimKardashian' },
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

