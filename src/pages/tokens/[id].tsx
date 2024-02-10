// // Import necessary modules
// import Head from 'next/head';
// import Link from 'next/link';

// // Placeholder data for a token. Replace with dynamic data fetching later.
// const token = {
//   id: '1',
//   name: 'Token 1',
//   price: '100',
//   description: 'This is a detailed description of Token 1.',
//   creator: {
//     id: '1',
//     name: 'Creator Name',
//   },
// };

// export default function TokenDetail() {
//   return (
//     <div>
//       <Head>
//         <title>{token.name} - Token Details</title>
//       </Head>

//       <main className="p-4">
//         <h1 className="text-2xl font-bold">{token.name}</h1>
//         <p className="mt-2">{token.description}</p>
//         <div className="mt-2">
//           <span className="text-lg font-bold">${token.price}</span>
//         </div>

//         <Link href={`/creators/${token.creator.id}`} passHref>
//           <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
//             Visit Creator Profile
//           </button>
//         </Link>
//       </main>
//     </div>
//   );
// }

// import Head from 'next/head';
// import Link from 'next/link';
// import creators from '../../data/creators';

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   // Find the token by iterating over each creator's tokens
//   let tokenDetail = null;
//   for (const creator of creators) {
//     const token = creator.tokens.find(token => token.id === id);
//     if (token) {
//       tokenDetail = { ...token, creator: { id: creator.id, name: creator.name } };
//       break;
//     }
//   }

//   if (!tokenDetail) {
//     return { notFound: true };
//   }

//   return {
//     props: { token: tokenDetail },
//   };
// }

// export default function TokenDetail({ token }) {
//   return (
//     <div>
//       <Head>
//         <title>{token.name} - Token Details</title>
//       </Head>

//       <main className="p-4">
//         <h1 className="text-2xl font-bold">{token.name}</h1>
//         <p className="mt-2">{token.description}</p>
//         <div className="mt-2">
//           <span className="text-lg font-bold">${token.price}</span>
//         </div>

//         <Link href={`/creators/${token.creator.id}`} passHref>
//           <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
//             Visit Creator Profile
//           </button>
//         </Link>
//       </main>
//     </div>
//   );
// }

import Head from 'next/head';
import Link from 'next/link';
import creators from '../../data/creators';


// Define interfaces for your data structures
interface Creator {
  id: string;
  name: string;
}

interface Token {
  id: string;
  name: string;
  price: string;
  description: string;
  creator: Creator;
}

// Define the type for your component's props
interface TokenDetailProps {
  token: Token;
}

export async function getServerSideProps(context: { params: { id: any; }; }) {
  const { id } = context.params;
  let tokenDetail = null;

  creators.some(creator => {
    const token = creator.tokens.find(token => token.id === id);
    if (token) {
      tokenDetail = { ...token, creator: { id: creator.id, name: creator.name } };
      return true; // Break the loop once the token is found
    }
    return false; // Continue searching
  });

  if (!tokenDetail) {
    return { notFound: true };
  }

  return {
    props: { token: tokenDetail },
  };
}

export default function TokenDetail({ token }: TokenDetailProps) {
  // Check if token is not undefined before rendering
  if (!token) {
    return <div>Loading...</div>; // or any other fallback UI or handling
  }

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
