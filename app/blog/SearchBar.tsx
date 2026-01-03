export default function SearchBar({
  searchTerm,
  setSearchTerm,
  categories = [],
  selectedCategory,
  setSelectedCategory,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categories?: string[];
  selectedCategory?: string;
  setSelectedCategory?: (cat: string) => void;
}) {
  return (
    <div className="mb-10 max-w-xs md:max-w-3xl md:w-full mx-auto relative flex flex-row gap-3 items-center">
      <div className="relative grow">
        <input
          type="text"
          placeholder="Search posts by title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 md:px-8 py-2 md:py-4 pr-10 md:pr-14 text-lg md:text-xl font-bold md:font-extrabold rounded-full border-2 border-blue-400 bg-neutral-800 text-white placeholder-neutral-400 focus:border-blue-500 focus-visible:outline-none transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-5 md:pr-6 pointer-events-none">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-blue-400 drop-shadow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {categories.length > 0 && setSelectedCategory && (
        <div className="hidden md:block relative">
          <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none px-6 py-4 pr-12 text-lg font-bold rounded-full border-2 border-blue-400 bg-neutral-800 text-white focus:border-blue-500 focus-visible:outline-none transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl min-w-[140px] max-w-[220px] h-[60px] font-sans"
            style={{ fontFamily: "Rubik, sans-serif" }}
          >
            <option
              value=""
              className="font-bold text-lg bg-neutral-800 text-white font-sans"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              All Categories
            </option>
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
                className="font-bold text-lg bg-neutral-800 text-white font-sans"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                {cat}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
