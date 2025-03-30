// src/app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AmpliFire - Music Player',
  description: 'A fiery music player with a dark gothic theme',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}