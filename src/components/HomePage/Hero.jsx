'use client'
import { useRouter } from "next/navigation";
import SearchIcon from "../../../public/icons/SearchIcon";
import Link from "next/link";
const Hero = () => {
    const router = useRouter();
  
    const handleSearch = (e) => {
      e.preventDefault();
      const searchInput = e.target.elements.searchInput;
      const query = searchInput.value.trim();
      if (query) {
        router.push(`/search?query=${encodeURIComponent(query)}`);
      }
    };
 
  return (
 <>
 
  {/* Search Section */}
      <section className="relative z-20 -mt-28 px-4">
        <div className="mx-auto w-full max-w-4xl">
          <div className="bg-gradient-to-r from-sky-200/90 to-sky-300/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
              Find Your Profitable{" "}
              <span className="text-[#22C55E]">Business</span> Today.
            </h2>

            <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-3">
                {/* Input Field */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    name="searchInput"
                    placeholder="Search Your Business"
                    className="pl-10 pr-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Advanced Search Link */}
            <div className="mt-4 text-right">
              <Link
                href="/advanced-search"
                className="text-blue-500 hover:text-blue-400 flex items-center justify-end gap-1"
              >
                <span>🔍</span> Advanced Search
              </Link>
            </div>
          </div>
        </div>
      </section>
 
 
 </>
  );
};

export default Hero;