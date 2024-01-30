const Shimmer = () => {
  console.log("Shimmer");
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="shimmer h-64 w-full bg-gray-300 animate-pulse"></div>
        <div className="px-6 py-4">
          <div className="shimmer h-4 w-3/4 bg-gray-300 rounded-full mb-2 animate-pulse"></div>
          <div className="shimmer h-3 w-full bg-gray-300 rounded-full mb-2 animate-pulse"></div>
          <div className="shimmer h-3 w-full bg-gray-300 rounded-full mb-2 animate-pulse"></div>
        </div>

        <div className="px-6 py-4">
          <div className="shimmer h-4 w-3/4 bg-gray-300 rounded-full mb-2 animate-pulse"></div>
          <div className="shimmer h-3 w-full bg-gray-300 rounded-full mb-2 animate-pulse"></div>
          <div className="shimmer h-3 w-full bg-gray-300 rounded-full mb-2 animate-pulse"></div>
        </div>
      </div>
    );
}

export default Shimmer;