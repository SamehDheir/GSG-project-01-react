export default function Topbar() {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-evenly">
      <div className="flex justify-center">
        <p className="text-sm sm:text-md">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="underline font-bold"> ShopNow</span>
        </p>
      </div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn border-0 m-1">
          English
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-black rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li className="hover:bg-gray-900">
            <a>English</a>
          </li>
          <li className="hover:bg-gray-900">
            <a>Arabic</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
