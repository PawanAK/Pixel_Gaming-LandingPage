import React from "react";

const Footer: React.FC = () => {
  const browseLinks = ["Session", "Betting", "Play2Earn", "Free"];
  const generalLinks = ["Careers", "About", "Twitter", "LinkedIn"];
  const supportLinks = ["Help Center", "Status", "Email"];
  const legalLinks = ["Terms of Service", "Privacy policy", "Code of Conduct"];

  return (
    <footer className="flex flex-wrap gap-10 items-start self-center mt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col min-w-[240px] w-[272px]">
        <div className="flex gap-4 items-center self-start">
          <div className="flex flex-col justify-center self-stretch p-1 my-auto">
            <div className="flex gap-1 items-start px-0.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab83c4977879cc2cd5c44da3e079cd64cb5ff877747eda23cc6b7732ecccd7d5?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
                alt="Pixel logo"
                className="object-contain aspect-[0.88] w-[37px]"
              />
            </div>
          </div>
          <h2 className="self-stretch my-auto text-3xl font-semibold text-center text-black">
            Pixel
          </h2>
        </div>
        <p className="mt-3.5 text-base leading-6 text-neutral-400">
          Copyright © 2024. <br /> All Rights reserved
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-start text-base min-w-[240px] w-[826px] max-md:max-w-full">
        <nav className="flex flex-col whitespace-nowrap w-[195px]">
          <h3 className="text-neutral-400">Browse</h3>
          <ul className="flex flex-col mt-3 w-20 font-medium text-neutral-900">
            {browseLinks.map((link, index) => (
              <li key={index} className={index > 0 ? "mt-4" : ""}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col whitespace-nowrap w-[193px]">
          <h3 className="text-neutral-400">General</h3>
          <ul className="flex flex-col items-end mt-3 w-20 font-medium text-neutral-900">
            {generalLinks.map((link, index) => (
              <li key={index} className={index > 0 ? "mt-4" : ""}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col w-[193px]">
          <h3 className="text-neutral-400">Support</h3>
          <ul className="flex flex-col mt-3 font-medium text-neutral-900 w-[92px]">
            {supportLinks.map((link, index) => (
              <li key={index} className={index > 0 ? "mt-4" : ""}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col flex-1 shrink basis-0">
          <h3 className="text-neutral-400">Legal</h3>
          <ul className="flex flex-col self-start mt-3 font-medium text-neutral-900">
            {legalLinks.map((link, index) => (
              <li key={index} className={index > 0 ? "mt-4" : ""}>
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
