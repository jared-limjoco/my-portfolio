export default function SocMedItem({ href, imgSrc: Icon }) {
  return (
    <div
      className="inline-flex items-center bg-indigo-600 p-1 rounded-md cursor-pointer transition-all duration-300 ease-in-out animate-popFadeIn hover:scale-110 hover:bg-indigo-800"
      onClick={() => window.open(href, '_blank')}
    >
      {/* Social Media Icon */}
      <Icon className="w-8 h-8 text-white p-1 rounded-md" />

    </div>
  );
}
