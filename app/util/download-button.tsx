import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface DownloadButtonProps {
    title: string;
    documentTitle: string;
    downloadLink: string;
}

export default function DownloadButton({ title, documentTitle, downloadLink }: DownloadButtonProps) {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = downloadLink; // Use the provided download link
    link.download = documentTitle || 'download.pdf'; // Default to 'download.pdf' if no title provided
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center animate-popFadeIn pt-2">
      <button
        onClick={handleDownload}
        className="flex items-center px-4 py-2 bg-zinc-800 text-zinc-500 rounded-md transition-all duration-200 hover:bg-indigo-600 hover:text-white"
      >
        {title || 'Download'}
        <ArrowDownTrayIcon className="w-5 h-5 ml-2" /> 
      </button>
    </div>
  );
}
