const MainNav = () => {
  return (
    <nav className="shrink-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="h-9 pl-9 pr-4 w-64 bg-gray-50 border border-gray-200 rounded-md text-sm placeholder:text-gray-400 text-gray-900 focus:ring-2 focus:ring-[#c5a667]/50 focus:border-[#c5a667] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bell h-5 w-5"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-gray-200"></div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
          <div className="h-8 w-8 rounded-full bg-cover bg-center border border-gray-200">
            X
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Nina Williams</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down h-4 w-4 text-gray-400"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
