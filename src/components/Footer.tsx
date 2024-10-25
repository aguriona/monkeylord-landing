'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300">&copy; 2023 Monkeylord. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
          <a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
