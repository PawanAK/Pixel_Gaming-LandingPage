import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col mt-24 w-full text-center bg-neutral-900 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f19c15ff555e7d1430c91951c744af4c1dbbc7bc3629a7a8404f360540cb5105?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
        alt=""
        className="object-contain w-full aspect-[12.05] max-md:max-w-full"
      />
      <div className="flex flex-col items-center self-center mt-28 max-w-full w-[869px] max-md:mt-10">
        <h2 className="text-6xl font-semibold text-white max-md:max-w-full max-md:text-4xl">
          Start Swapping for a Greener World
        </h2>
        <button className="gap-2 self-stretch px-6 py-4 mt-12 max-w-full text-base font-medium leading-none text-black bg-yellow-400 rounded-[99px] w-[150px] max-md:px-5 max-md:mt-10">
          Get Started
        </button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd7f8ddddec39fd6e8c3f83bb1a89035ff2aefcae79491a6edff5e69ccd03054?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
        alt=""
        className="object-contain mt-28 w-full aspect-[12.05] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};

export default CallToAction;
