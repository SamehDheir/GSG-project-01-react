const Error = ({ message = "Something went wrong!" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 text-red-500 mb-4 animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <p className="text-gray-600 font-medium">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
