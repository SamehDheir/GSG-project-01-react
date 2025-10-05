import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CameraIcon,
  ClockIcon,
  PhoneIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

export default function Categories() {
  const categories = [
    { name: "Phones", icon: DevicePhoneMobileIcon },
    { name: "Computers", icon: ComputerDesktopIcon },
    { name: "SmartWatch", icon: ClockIcon },
    { name: "Camera", icon: CameraIcon },
    { name: "Headphones", icon: PhoneIcon },
    { name: "Gaming", icon: PuzzlePieceIcon },
  ];

  return (
    <div className="px-12 my-15">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block  w-[20px] h-[40px] rounded bg-primary"></span>
        <h5 className="text-primary text-sm font-bold text-[16px]">
          Categories
        </h5>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-semibold md:text-[32px] text-[28px]">
          Browse By Category
        </h2>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 bg-gray-100 rounded-full p-1 mr-1  hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            <path
              className="border"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 bg-gray-100 rounded-full p-1 hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center mt-10">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col items-center border p-6 md:w-50 w-full cursor-pointer 
              
                         hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-300" />
              <h4 className="font-medium mt-2 text-[16px]">{cat.name}</h4>
            </div>
          );
        })}
      </div>
      <hr className="my-10 text-gray-200 border-1" />
    </div>
  );
}
