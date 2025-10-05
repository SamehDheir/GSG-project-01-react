export default function CategoriesMenu() {
  return (
    <div className="join join-vertical bg-base-100   md:border-r-1 w-full md:w-md md:text-sm border-gray-500 hidden sm:block">
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
    </div>
  );
}
