const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default Loading;
