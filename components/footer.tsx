import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Kenneth Aremoh. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js 13, TypeScript, Tailwind CSS, Framer Motion and hosted on Vercel
        hosting.
      </p>
    </footer>
  );
}
