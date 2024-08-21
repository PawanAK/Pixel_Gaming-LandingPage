import React from "react";

interface GameCardProps {
  imageSrc: string;
  title: string;
  iconSrc: string;
}

const GameCard: React.FC<GameCardProps> = ({ imageSrc, title, iconSrc }) => (
  <div className="flex flex-col flex-1 shrink p-6 basis-0 bg-neutral-100 min-w-[240px] rounded-[32px] max-md:px-5">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="object-contain w-full aspect-[1.05] rounded-[33px]"
    />
    <div className="flex gap-10 justify-between items-center mt-10 w-full">
      <h3 className="self-stretch my-auto text-2xl text-center text-black">
        {title}
      </h3>
      <div className="flex gap-2.5 items-start self-stretch p-1.5 my-auto border border-black border-solid rounded-[124px]">
        <img
          loading="lazy"
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain aspect-square w-[30px]"
        />
      </div>
    </div>
  </div>
);

const ExploreGaming: React.FC = () => {
  const games = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dd15ec2fd5d0e07b2678aac23b509087730f200de8a6dccfbf2b688e9878d0c7?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
      title: "Session Based Games",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/695bca6ffe4f204540c81b4bc79cd37551eceff4b2a63e2590865ebfc36cce8d?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/56a8c8f3e6773c19dd5b035826c6ab91add36e54d373bb6a9d67dba4f69f90f2?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
      title: "Betting Games",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b5125c6e89dfffd9399e8b57ad0341e34ffaaddb84809f5f8697b7d0d8419ec2?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8fbfd4dd06da59d0475a9ddb8896c844e88e621fa74aa30c5ac086a6f0926bf0?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
      title: "Play2Earn Games",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8511b58f5754d56dbbdceb9d138511958ec13722e9764f381314daf12bb43a17?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
    },
  ];

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-20 mt-24 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1244px] max-md:max-w-full">
        <h2 className="text-4xl font-semibold text-black">
          Explore top gaming
        </h2>
        <button className="flex gap-2 justify-center items-center px-6 py-3.5 text-base font-medium text-center text-white bg-black border border-solid border-black border-opacity-50 rounded-[99px] max-md:px-5">
          <span className="self-stretch my-auto">Explore games</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d02f36bb00def9075f30278c144468da73d09c1f71451f327de792a8683d03cc?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square rounded-[99px]"
          />
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-16 w-full max-w-[1249px] max-md:mt-10 max-md:max-w-full">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6768b99bb7edae93df7ccddabc95fba3d573d5cef476f08ed762ffc33a07c05?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
        alt="Gaming illustration"
        className="object-contain mt-36 w-full rounded-none max-w-[1250px] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
};

export default ExploreGaming;
