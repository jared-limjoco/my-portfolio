import Image from 'next/image';

export default function Item({ name, href }) {
  return (
    <div
      className="inline-flex items-center bg-[#242427] p-2 pr-2 rounded-md cursor-pointer shadow-md"
    >
      {/* Language Logo */}
      <Image
        src={href}
        alt={`${name} Logo`}
        width={300}
        height={300}
        className="w-8 h-8 rounded-md object-contain"
      />

      {/* Language Name */}
      <h1
        className="ml-2 text-l font-bold text-zinc-400 whitespace-nowrap opacity-100 max-w-[200px] pl-0 pr-1"
      >
        {name}
      </h1>
    </div>
  );
}
