import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Welcome to Juan French</h1>
      <p className="text-gray-500 dark:text-gray-400">
        This is a starter template for using Clerk with Next.js 13 and the new
        app directory.
      </p>
    </div>
  );
}
