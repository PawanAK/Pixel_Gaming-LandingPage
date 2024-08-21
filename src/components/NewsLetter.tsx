import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="overflow-hidden px-20 py-20 w-full bg-lime-400 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 className="mt-9 text-5xl font-bold text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Join pixel gamming
          </h2>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
            <h3 className="text-2xl font-semibold text-black">
              Subscribe to the newsletter
            </h3>
            <form className="flex overflow-hidden flex-wrap gap-10 justify-between items-center py-2 pr-2 pl-4 mt-7 w-full text-base font-medium text-center bg-white rounded-[99px] max-md:max-w-full">
              <label htmlFor="email" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="self-stretch my-auto text-black text-opacity-50"
                aria-label="Enter your email"
              />
              <button
                type="submit"
                className="flex gap-2 justify-center items-center self-stretch px-6 py-2 my-auto text-white whitespace-nowrap bg-black border border-solid border-black border-opacity-50 rounded-[99px] max-md:px-5">
                <span className="self-stretch my-auto">Subscribe</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d02f36bb00def9075f30278c144468da73d09c1f71451f327de792a8683d03cc?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[99px]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
