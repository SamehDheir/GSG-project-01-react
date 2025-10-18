import { useState } from "react";

export default function CategoriesMenu() {
  const [open, setOpen] = useState(false);

  const categoriesInner = (
    <>
      <div className="collapse collapse-arrow  join-item border-base-300 border-0">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Woman’s Fashion
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-base-300 border-0">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Men’s Fashion
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings
        </div>
      </div>
      <div className="collapse join-item border-base-300 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Electronics
        </div>
      </div>
      <div className="collapse join-item border-base-300 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Home & Lifestyle
        </div>
      </div>
      <div className="collapse join-item border-base-300 py-0 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Medicine
        </div>
      </div>
      <div className="collapse join-item border-base-300 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Sports & Outdoor
        </div>
      </div>
      <div className="collapse join-item border-base-300 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Baby’s & Toys
        </div>
      </div>
      <div className="collapse join-item border-base-300 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Groceries & Pets
        </div>
      </div>
      <div className="collapse join-item border-base-300 border-0">
        <div className="collapse-title  hover:bg-primary hover:text-white transition-colors duration-300 font-semibold text-[16px] p-2">
          Health & Beauty
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="sm:hidden w-full">
        <button
          aria-label={open ? "Close categories" : "Open categories"}
          onClick={() => setOpen((prev) => !prev)}
          className="w-full text-left px-4 py-3 bg-primary text-white font-semibold shadow-sm"
        >
          {open ? "Close Categories" : "Browse Categories"}
        </button>
      </div>

      <div className="hidden sm:block">
        <div className="join join-vertical bg-base-100 md:border-r-1 md:flex-none md:w-72 md:text-sm border-gray-500 block md:h-[350px] max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {categoriesInner}
        </div>
      </div>

      <div className="sm:hidden px-4">
        <div
          className={`bg-base-100 w-full mt-2 rounded-b-md transition-all duration-300 ease-in-out ${
            open
              ? "max-h-[60vh] overflow-y-auto py-3 shadow-md"
              : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="join join-vertical space-y-1 px-1">
            {categoriesInner}
          </div>
        </div>
      </div>
    </>
  );
}
