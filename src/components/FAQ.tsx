import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col py-6 w-full bg-white border-b border-black max-md:max-w-full">
      <button
        className="flex flex-wrap gap-10 justify-between items-center w-full text-2xl max-md:max-w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        <span className="self-stretch my-auto">{question}</span>
        <img
          loading="lazy"
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/8569956726f93327b590a620fd46c48c507c6f4aed4e7fe1f5fb7efdfcdbb5e6?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/893c6a16b4720767b262b09b3c66c94a93c568d99038c1b4be6099575d3f9826?apiKey=ce9ac4b93df948e4a85bc28080ead2b1&"
          }
          alt={isOpen ? "Close" : "Open"}
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
      </button>
      {isOpen && (
        <div className="mt-12 text-xl leading-8 max-md:mt-10 max-md:max-w-full">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How does Pixel Gaming work?",
      answer:
        "Our platform offers a unique combination of session-based gaming, Play2Earn opportunities, and significant earning potential for Unity developers. Enjoy a secure, decentralized experience while playing, earning, and creating in a dynamic and rewarding ecosystem.",
    },
    {
      question: "How does a Game Developer Earn from Pixel Gamming?",
      answer:
        "Game developers can earn through various means such as revenue sharing from in-game purchases, creating and selling digital assets, and participating in the platform's ecosystem.",
    },
    {
      question: "How do I ensure the quality of items being swapped?",
      answer:
        "We have a robust verification system in place to ensure the quality and authenticity of items being swapped on our platform.",
    },
    {
      question: "What benefits does Pixel Gamming offer over other platforms?",
      answer:
        "Pixel Gaming offers a unique blend of gaming experiences, earning opportunities, and a strong community, setting it apart from traditional gaming platforms.",
    },
    {
      question: "How do I communicate with other users on Pixel Gaming?",
      answer:
        "We provide in-platform messaging and community forums for users to interact, collaborate, and share experiences.",
    },
    {
      question: "Is there a fee for using Pixel Gaming?",
      answer:
        "While basic access is free, some premium features or transactions may involve fees. Please check our pricing page for detailed information.",
    },
  ];

  return (
    <section className="flex flex-wrap gap-10 self-center mt-24 max-w-full text-black w-[1248px] max-md:mt-10">
      <h2 className="self-start text-5xl font-bold leading-[59px] w-[300px] max-md:text-4xl max-md:leading-[55px]">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      ))
    </section>
  );
};

export default FAQ;
