const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-indigo-500">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>

      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-indigo-500">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>

      <button className="w-full rounded-lg border-2 border-gray-400 px-4 py-2 font-semibold transition-colors hover:bg-gray-800 hover:text-indigo-300">
        Contact sales
      </button>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="w-[550px] gap-10 bg-white p-6 shadow-xl">
      <div className="flex justify-evenly">
        <div className="p-2">
          <h3 className="font-semibold text-indigo-500">About us</h3>
          <a href="#" className="block text-sm hover:underline py-1">
            Who we are
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Mission and values
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Investor relations
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Events
          </a>
        </div>

        <div className="p-2">
          <h3 className="font-semibold text-indigo-500">Our programs</h3>
          <a href="#" className="block text-sm hover:underline py-1">
            Bias Reduction and Inclusive Hiring Initiatives
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Diverse Leadership Development Program
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Employee Resource Groups
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Supplier Diversity Program
          </a>
          <a href="#" className="block text-sm hover:underline py-1">
            Community Engagement and Volunteering
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <img
          src="https://dxc.scene7.com/is/image/dxc/corporate-responsibility-dandelion-n?qlt=90&wid=768&ts=1658432097483&$landscape_desktop$&dpr=off"
          alt="DEI-program"
          width={"300"}
        />
        <p>Sunflower program</p>
      </div>
    </div>
  );
};

export { PricingContent, AboutContent };
