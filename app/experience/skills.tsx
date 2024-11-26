import Item from '@/app/ui/experience/Item';

const languages = [
  { name: 'C', href: '/experience/languages/c.png' },
  { name: 'Java', href: '/experience/languages/java.png' },
  { name: 'JavaScript', href: '/experience/languages/javascript.png' },
  { name: 'Kotlin', href: '/experience/languages/kotlin.png' },
  { name: 'Python', href: '/experience/languages/python.png' },
  { name: 'TypeScript', href: '/experience/languages/typescript.png' },
];

const frameworks = [
  { name: 'Vue', href: '/experience/frameworks/vue.png' },
  { name: 'React', href: '/experience/frameworks/react.png' },
  { name: 'Next.js', href: '/experience/frameworks/nextjs.png' },
  { name: 'Node.js', href: '/experience/frameworks/nodejs.png' },
  { name: 'Express.js', href: '/experience/frameworks/expressjs.png' },
  { name: 'NPM', href: '/experience/frameworks/npm.png' },
];

const databases = [
  { name: 'SQL', href: '/experience/databases/sql.png' },
  { name: 'MongoDB', href: '/experience/databases/mongodb.png' },
  { name: 'SQLite', href: '/experience/databases/sqlite.png' },
];

const designapis = [
  { name: 'Tailwind CSS', href: '/experience/designapis/tailwindcss.png' },
  { name: 'Figma', href: '/experience/designapis/figma.png' },
  { name: 'Adobe Photoshop', href: '/experience/designapis/photoshop.png' },
  { name: 'paint.net', href: '/experience/designapis/paintnet.png' },
];

const others = [
  { name: 'Vercel', href: '/experience/others/vercel.png' },
  { name: 'Github', href: '/experience/others/github.png' },
  { name: 'Git', href: '/experience/others/git.png' },
  { name: 'Discord', href: '/experience/others/discord.png' },
  { name: 'Notion', href: '/experience/others/notion.png' },
  { name: 'VS Code', href: '/experience/others/vscode.png' },
  { name: 'Visual Studio', href: '/experience/others/visualstudio.png' },
  { name: 'IntelliJ IDEA', href: '/experience/others/intellij.png' },
];

export default function Skills() {
  return (
    <div className="mx-auto w-full sm:w-2/3 pb-2 gap-4 justify-center rounded-md bg-zinc-800 scrollbar-thin scrollbar-track-rounded overflow-x-hidden overflow-y-auto max-h-96 shadow-md animate-popFadeIn">
      {/* Languages Section */}
      <div className="mb-4 bg-[#1D1D20] m-4 rounded-md">
        <h1 className="text-center font-bold text-white text-xl pt-2">Languages</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-2 pb-4 rounded-md">
          {languages.map((language, index) => (
            <Item 
              key={index} 
              name={language.name} 
              href={language.href} 
            />
          ))}
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="mb-4 bg-[#1D1D20] m-4 rounded-md">
        <h1 className="text-center font-bold text-white text-xl pt-2">Frameworks</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-2 pb-4 rounded-md">
          {frameworks.map((framework, index) => (
            <Item 
              key={index} 
              name={framework.name} 
              href={framework.href} 
            />
          ))}
        </div>
      </div>

      {/* Databases Section */}
      <div className="mb-4 bg-[#1D1D20] m-4 rounded-md">
        <h1 className="text-center font-bold text-white text-xl pt-2">Databases</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-2 pb-4 rounded-md">
          {databases.map((database, index) => (
            <Item 
              key={index} 
              name={database.name} 
              href={database.href} 
            />
          ))}
        </div>
      </div>

      {/* Design & API Section */}
      <div className="mb-4 bg-[#1D1D20] m-4 rounded-md">
        <h1 className="text-center font-bold text-white text-xl pt-2">Design & API</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-2 pb-4 rounded-md">
          {designapis.map((designapi, index) => (
            <Item 
              key={index} 
              name={designapi.name} 
              href={designapi.href} 
            />
          ))}
        </div>
      </div>

      {/* Other Tools Section */}
      <div className="mb-4 bg-[#1D1D20] m-4 rounded-md">
        <h1 className="text-center font-bold text-white text-xl pt-2">Other Tools</h1>
        <div className="flex flex-wrap justify-center gap-4 pt-2 pb-4 rounded-md">
          {others.map((other, index) => (
            <Item 
              key={index} 
              name={other.name} 
              href={other.href} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
