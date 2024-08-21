import React from "react";

interface StepProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ imageSrc, title, description }) => (
  <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
    <img
      loading="lazy"
      src={imageSrc}
      alt={title}
      className="object-contain self-center max-w-full aspect-square w-[120px]"
    />
    <div className="flex flex-col items-center mt-6 w-full">
      <h3 className="text-3xl font-semibold text-black">{title}</h3>
      <p className="mt-4 text-xl leading-9 text-center text-neutral-600 w-[294px]">
        {description}
      </p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/79055779c4b937116cf99342a347de18e4090a0cb1cce613ad0784391dd20724?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
      title: "Create Your Profile",
      description:
        "Create your profile in Pixel Gaming to start earning or playing a paid game.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/764ab716244138288327132fcb693a71b770ca4b9a23dcb57ef5ec1f437fd1cc?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
      title: "Find your tribe",
      description:
        "Play, Earn , Thrive: Sustainable Treasures Await on Pixel Gaming",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a53bbb67146e6083984f223fe0609a6933d107c434fa8a9ccdcf6b84d7f53979?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&",
      title: "Get Rewarded",
      description: "If you are a developer or a gamer you can earn tokens.",
    },
  ];

  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-sm text-center uppercase text-zinc-900 tracking-[4.2px]">
        How it works
      </h2>
      <h3 className="mt-24 text-5xl font-semibold text-center text-zinc-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Embark on Your Gaming Journey
      </h3>
      <div className="flex flex-wrap gap-4 items-start self-center mt-24 max-w-full w-[1252px] max-md:mt-10">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
