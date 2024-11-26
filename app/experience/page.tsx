'use client';

import Header from '@/app/ui/header';
import DownloadButton from '@/app/util/download-button';
import SelectedComponentPage from '@/app/experience/selected-component-page';

export default function Experience() {
  return (
    <main className="flex min-h-screen bg-zinc-900 bg-grid-pattern bg-grid-size flex-col overflow-hidden">
      <div>
        <Header />
        <DownloadButton 
          title="My Resume"
          documentTitle="LIMJOCO_CV" 
          downloadLink="/LIMJOCO_CV.pdf" 
        />
        <SelectedComponentPage />
      </div>
    </main>
  );
}
