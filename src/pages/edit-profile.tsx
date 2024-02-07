// Import necessary modules
import Head from 'next/head';

export default function EditProfile() {
  return (
    <div>
      <Head>
        <title>Edit Profile</title>
      </Head>

      <main className="p-4">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Your name" />
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea id="bio" name="bio" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="A short bio"></textarea>
          </div>
          {/* Add more fields as needed */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}
