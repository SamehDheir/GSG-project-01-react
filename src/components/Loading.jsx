const Loading = ({
  message = "Loading...",
  variant,
  count = 4,
  countMobile = 2,
  countIpad = 3,
}) => {
  const items = Array.from({ length: count });
  const mobileItems = Array.from({ length: countMobile });
  const ipadItems = Array.from({ length: countIpad });

  if (variant === "offer") {
    // skeleton matching OfferDay layout
    return (
      <div className="px-5 sm:px-10 lg:px-20 my-10 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-[20px] h-[40px] rounded bg-gray-300"></span>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>

        <div className="flex flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="h-8 bg-gray-300 rounded w-44"></div>
            <div className="w-full md:w-60 mt-2 md:mt-0 flex gap-2">
              <div className="h-8 bg-gray-300 rounded w-14"></div>
              <div className="h-8 bg-gray-300 rounded w-14"></div>
              <div className="h-8 bg-gray-300 rounded w-14"></div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* mobile*/}
        <div className="sm:hidden grid grid-cols-2 gap-4 my-4">
          {mobileItems.map((_, i) => (
            <div key={"m" + i} className="space-y-3">
              <div className="w-full h-36 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* ipad / tablet */}
        <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4 my-4">
          {ipadItems.map((_, i) => (
            <div key={"ipad" + i} className="space-y-3">
              <div className="w-full h-36 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-6 my-6">
          {items.map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="w-full h-36 sm:h-40 md:h-44 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <div className="inline-block bg-gray-300 h-12 w-44 rounded"></div>
        </div>
      </div>
    );
  }

  // skeleton matching Products layout
  if (variant === "products") {
    return (
      <div className="px-5 sm:px-20 my-10 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block w-[20px] h-[40px] rounded bg-gray-300"></span>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>

        {/* mobile grid (visible on small screens) */}
        <div className="sm:hidden grid grid-cols-2 gap-6 my-6">
          {mobileItems.map((_, i) => (
            <div key={"mprod" + i} className="space-y-3">
              <div className="w-full h-36 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        {/* desktop grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full my-6">
          {items.map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="w-full h-36 sm:h-44 bg-gray-300 rounded-lg"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <div className="inline-block bg-gray-300 h-12 w-44 rounded"></div>
        </div>
      </div>
    );
  }

  if (variant === "productDetails") {
    return (
      <div className="animate-pulse px-4 py-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="hidden lg:flex lg:flex-col lg:gap-3 lg:col-span-2">
            <div className="h-20 rounded bg-gray-300" />
            <div className="h-20 rounded bg-gray-300" />
            <div className="h-20 rounded bg-gray-300" />
            <div className="h-20 rounded bg-gray-300" />
          </div>

          <div className="col-span-1 lg:col-span-5">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] rounded bg-gray-300" />
            <div className="mt-4 h-4 w-1/3 rounded bg-gray-300" />
            <div className="mt-2 h-3 w-1/4 rounded bg-gray-300" />
          </div>

          <div className="col-span-1 lg:col-span-5 space-y-4">
            <div className="h-6 w-3/4 rounded bg-gray-300" />
            <div className="h-4 w-1/2 rounded bg-gray-300" />
            <div className="h-8 w-1/3 rounded bg-gray-300" />
            <div className="mt-2 space-y-2">
              <div className="h-3 w-full rounded bg-gray-300" />
              <div className="h-3 w-full rounded bg-gray-300" />
              <div className="h-3 w-4/5 rounded bg-gray-300" />
            </div>
            <div className="mt-4 h-10 w-full rounded bg-gray-300" />
            <div className="mt-2 h-10 w-2/3 rounded bg-gray-300" />
          </div>
        </div>

        {/* related products skeleton */}
        <div className="mt-8">
          <div className="h-6 w-40 rounded bg-gray-300 mb-4" />

          {/* mobile */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
            {mobileItems.map((_, i) => (
              <div key={"mrel" + i} className="space-y-2">
                <div className="h-40 rounded bg-gray-300" />
                <div className="h-3 w-3/4 rounded bg-gray-300" />
              </div>
            ))}
          </div>

          {/* ipad */}
          <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4">
            {ipadItems.map((_, i) => (
              <div key={"ipadrel" + i} className="space-y-2">
                <div className="h-44 rounded bg-gray-300" />
                <div className="h-3 w-3/4 rounded bg-gray-300" />
              </div>
            ))}
          </div>

          {/* desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-4">
            {items.map((_, i) => (
              <div key={"drel" + i} className="space-y-2">
                <div className="h-44 rounded bg-gray-300" />
                <div className="h-3 w-3/4 rounded bg-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loading;
