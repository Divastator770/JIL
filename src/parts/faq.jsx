import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import TextType from "@/components/TextType";
import React from "react";

const Faq = () => {
  return (
    <div id="faq" className="w-full min-h-screen bg-[] text-gray-400 px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:px-24 scroll-mt-20 flex flex-col items-center">
      {/* Typed Text Title */}
      <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center w-full">
        <TextType 
          text={["Frequently Asked Questions", "Your Questions Answered", "Learn About JIL"]}
          typingSpeed={75}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter=".."
        />
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        {/* Question 1 */}
        <div className="border-b border-gray-700 pb-6 sm:pb-8">
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-center">
            <GradientText
              colors={["#8B4513", "#654321", "#3E2723", "#654321", "#8B4513"]}
              animationSpeed={3}
              showBorder={false}
            >
              What is JIL?
            </GradientText>
          </h2>
          <div className="text-center">
            <BlurText
              text="JIL is an innovative online debate platform where legal minds meet to challenge ideas, sharpen arguments, and engage in structured legal discussions. Whether you're a law student, practicing attorney, or legal enthusiast, JIL provides the arena to test your knowledge and advocacy skills against peers in real-time debates."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4A3E31]"
            />
          </div>
        </div>

        {/* Question 2 */}
        <div className="border-b border-gray-700 pb-6 sm:pb-8">
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-center">
            <GradientText
              colors={["#8B4513", "#654321", "#3E2723", "#654321", "#8B4513"]}
              animationSpeed={3}
              showBorder={false}
            >
              What is the aim of JIL?
            </GradientText>
          </h2>
          <div className="text-center">
            <BlurText
              text="Our aim is to revolutionize legal education and discourse in Uzbekistan by creating a dynamic space where participants can develop critical thinking, enhance their legal reasoning, and master the art of argumentation. Through structured debates on legal topics, JIL helps users deepen their understanding of law while building the persuasive skills essential for courtroom success and legal practice."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4A3E31]"
            />
          </div>
        </div>

        {/* Question 3 */}
        <div className="pb-6 sm:pb-8">
          <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-center">
            <GradientText
              colors={["#8B4513", "#654321", "#3E2723", "#654321", "#8B4513"]}
              animationSpeed={3}
              showBorder={false}
            >
              What makes us unique?
            </GradientText>
          </h2>
          <div className="text-center">
            <BlurText
              text="JIL is pioneering a referral reward system in Uzbekistan's debate community. When you invite friends to join the platform, both you and your friends receive discounts on premium features and debate tournaments. This creates a growing community of legal debaters while making quality legal education more accessible. We believe in rewarding those who help build our community—making JIL not just a platform, but a movement."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4A3E31]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;