import TopBar from "./_components/Home-page/TopBar";
import SearchBar from "./_components/Home-page/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Navigation */}
      <TopBar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-14 md:pt-24 px-4">

        {/* Big Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-gray-900 text-center mb-4 leading-[1.05]">
          Discover Anything.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-center text-sm md:text-base max-w-xl mb-8">
          Search products, stores, prices, and trends across the web in one place.
        </p>

        {/* Search */}
        <div className="w-full max-w-2xl">
          <SearchBar />
        </div>

      </section>
    </main>
  );
}