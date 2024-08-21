import React from "react";

const companies = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d56b19a8187981a4d9f326b5bd1d975a56e69df2205849aed2d6dc8f9c16eb90?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    alt: "Company 1 logo",
    className: "object-contain max-w-full aspect-[3.44] w-[165px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b1acf0b000ee6c74bf5c35de0a5d0b0e7eda5bad164eddd3972c976c82bd0f2c?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    alt: "Company 2 logo",
    className: "object-contain max-w-full aspect-[3.52] w-[169px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aa7e3d55b50d5bafb3820ab01a74eb761ef95f482ee043751b63f011ad9dd34?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    alt: "Company 3 logo",
    className: "object-contain max-w-full aspect-[2.35] w-[113px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea80df8a623293554423a17d10fa57552512cee1a11fcbf4620ee3563261e71e?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    alt: "Company 4 logo",
    className: "object-contain max-w-full aspect-[3.18] w-[153px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fa3fcc30a985a40452bde7cb4c7ed15224ff51f49cfc851d12eac5c00d45ed0?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    alt: "Company 5 logo",
    className: "object-contain w-28 max-w-full aspect-[2.33]",
  },
];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-base text-center text-black uppercase tracking-[2.16px]">
        trusted by these companies
      </h2>
      <div className="flex flex-wrap gap-4 items-center self-center mt-24 max-w-full w-[1249px] max-md:mt-10">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col flex-1 shrink items-center self-stretch my-auto basis-0">
            <img
              loading="lazy"
              src={company.src}
              alt={company.alt}
              className={company.className}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
