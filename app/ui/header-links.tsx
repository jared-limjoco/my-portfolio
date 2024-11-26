'use client';

import {
  UserCircleIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Define the links for the navigation
const links = [
  { name: 'About Me', href: '/', icon: UserCircleIcon },
  { name: 'Experience', href: '/experience', icon: DocumentDuplicateIcon },
  { name: 'Contact', href: '/contact', icon: UserGroupIcon },
];

export default function HeaderLinks() {
  const pathname = usePathname();
  return (
    <header className="bg-gradient-to-b from-black/50 to-transparent">
      <div className="flex items-center justify-center gap-8 p-4">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center gap-2 px-4 py-2 text-zinc-400 font-medium rounded-md transition-colors hover:animate-blink',
                {
                  '!text-indigo-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-5 h-5" />
              <span className="hidden md:block">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
