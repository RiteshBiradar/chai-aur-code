import React from 'react';

const FeatureCard = ({ icon, title, description, code }) => {
  return (
    <div className="w-[485px] h-[203] bg-[#111827]/30 border border-[#1F2937] rounded-xl backdrop-blur-[12px] flex flex-col gap-4 p-6">
      {/* Code snippet */}
      <div className="w-full">
        <div className="bg-transparent rounded-md">
          <pre className="text-[#FB922C] text-base p-3">
            {code}
          </pre>
        </div>
      </div>

      {/* Content container */}
      <div className="flex gap-4">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#1F2937] border border-[#374151] rounded-lg flex items-center justify-center flex-shrink-0">
          <img src={icon} alt={title} className="w-[62px] h-[62px] object-cover rounded-lg" />
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-[#D1D5DB] text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "/taught-by-professionals.png",
      title: "Taught by Professionals",
      description: "Our cohorts are being taught by top industry experts and educators",
      code: "class Teacher extends Professional { /* ... */ }"
    },
    {
      icon: "/bounties.png",
      title: "Bounties",
      description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
      code: "const reward = solveChallenge(difficulty)"
    },
    {
      icon: "/coding-hostels.png",
      title: "Coding hostels",
      description: "There is nothing like late night discussion with fellow learners and solving bugs",
      code: "while(night) { solveProblems(together) }"
    },
    {
      icon: "/peer-code-reviews.png",
      title: "Peer Code Reviews",
      description: "With Our internal tools like Masterji, every code assignment gets feedback to improve your code",
      code: "// TODO: Refactor this for better performance"
    },
    {
      icon: "/leet-lab.png",
      title: "Leet Lab",
      description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
      code: "function optimizeSolution(algorithm) { /* ... */ }"
    },
    {
      icon: "/revision-classes.png",
      title: "Revision classes",
      description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
      code: "for(let i = 0; i < concepts.length; i++) { revise() }"
    }
  ];

  return (
    <div className="w-full bg-[#0F0F0F] py-16">
      <div className="max-w-[1536px] mx-auto">
        {/* Heading */}
        <div className="mb-24 px-4">
          <h2 className="text-4xl font-semibold text-white mb-12">
            Learning to code, made warm like a cup of chai.
          </h2>
          <p className="text-[#D1D5DB] text-xl max-w-[1535px]">
            Content is everywhere, but we provide a learning experience that is unmatched — bounties, peer learning, code reviews, virtual hostel, alumni network, doubt sessions, and group projects.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-3 gap-6 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              code={feature.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;