import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

/**
 * Demonstrates a dynamic truncation approach by using
 * Tailwind CSS line-clamp. This approach does not rely
 * on a fixed word count or a fixed max-height.
 *
 * 1. We apply a line clamp to limit the text visually.
 * 2. We track if the text is expanded or not in state.
 * 3. We show a See More / See Less button if the content
 *    overflows the clamp.
 *
 * This requires the @tailwindcss/line-clamp plugin.
 * If you don't have that set up, install it:
 *    npm install -D @tailwindcss/line-clamp
 * and add it to tailwind.config.js under plugins.
 *
 * For a truly dynamic height-based truncation without line clamp,
 * you'd need to measure container size via a ref, but line clamp
 * is usually simpler.
 */

const TestimonialsSection = ({ darkMode }) => {
  const swiperRef = useRef(null);
  const testimonials = [
    {
      name: "Callan Schebella",
      designation: "EVP Product Management at Five9",
      photo: "https://media.licdn.com/dms/image/v2/C4E03AQEVMfcouuQIKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629308719901?e=1743638400&v=beta&t=BQdVcvTJJkjc0Q9rRkyjBRwR64k5h1PxFRiz6U2ZP1U",
      content: "I have worked with Kumar over many years, at multiple companies, in multiple countries! Both in his role as a senior developer and as a senior product manager. Kumar is excellent at bringing product concepts to reality, whether that be by managing a team of developers or by building the functionality himself! Calm, persistent, and with a wonderful work ethic, I have no doubt he will quickly become a critical team member of any company that is lucky enough to work with him. I would love to work with Kumar again and I hope our paths cross soon.",
    },
    {
      name: "Frank Chavelliar",
      designation: "VP Product Management at Five9",
      photo: "https://media.licdn.com/dms/image/v2/C4E03AQHX5t-grs9SAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516220211969?e=1743638400&v=beta&t=TwFd74KRmWjhcFE3yXgSA4hsv6YD7arbRSi9AndvDCU",
      content: "I had the pleasure of managing Kumar at Five9. Kumar was an invaluable member of my AI Product Management team for several years, and I wholeheartedly recommend him. \n As a PM leading our AI Agent solutions, including our voicebot and chatbot software platform, Kumar consistently impressed me and others with his dedication and remarkable ability to bridge the gap between complex technology and user needs. \n His deep expertise in AI, Machine Learning, NLP, and LLM, combined with his software background, allowed him to design and deliver truly innovative solutions. Beyond his customer centricity and technical skills, Kumar's positive attitude and collaborative spirit made him a joy to work with. \n Any Product Management organization would be lucky to have him..",
    },
    {
      name: "Vasu Ramanujaiaha",
      designation: "Senior Director of Product Management at Five9",
      photo: "https://media.licdn.com/dms/image/v2/C5603AQExuMBJ0BmD_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524195257045?e=1743638400&v=beta&t=ZSAlGl-KIjXmiTGgkuD3EyhlFfVe7Y4uuwnB8_kDaqA",
      content: "It has been an absolute privilege to work with Kumar Murthy, an exceptional product manager whose dedication, vision, and strategic thinking consistently drive outstanding results. Kumar's ability to navigate complex challenges while maintaining a sharp focus on customer needs and business objectives is genuinely remarkable. One of Kumar's standout qualities is his deep understanding of the CCaaS industry and his talent for transforming ideas into practical solutions. His work on Five9 IVA and AI Agents exemplifies his ability to deliver innovative products that exceed customer expectations. I wholeheartedly recommend Kumar to anyone searching for a world-class product manager who consistently surpasses expectations. His work ethic, creativity, and passion for excellence make him a true asset to any team.",
    },
    {
        name: "Nurit Rechnitz",
        designation: "Senior Efficiency Engineer at Five9",
        photo: "https://media.licdn.com/dms/image/v2/C4E03AQEnC-dnFzEG0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516316505895?e=1743638400&v=beta&t=htYf4NuxJTFn2PorZSejItq1zD7PjLtXZDQsVbOpRr0",
        content: "I worked with Kumar in my capacity as a Sr. Technical Instructor responsible for creating and delivering instructor-led content. Kumar had just stepped up to be the Product Manager (PM) for the relevant Product and was my liaison to engineering; he functioned as a crucial subject matter expert at a time there were very few. PM is (arguably) the most challenging role at a technology company, in that, to be good at it, requires a plethora of skills and, usually, you have to use them all at once. Kumar, with zero PM experience, managed to knock it out of the park. Crucially, he had been a software engineer on the same team he became responsible for steering. He was able to leverage his solid relationships and credibility to move the Product forward. The role required him to interface regularly with - well, everyone: Customers, PM colleagues, other engineering teams, Sales, Marketing, Professional Services, Customer Support and, the Five9 Executive team. His equanimity under pressure is unmatched. He just keeps moving forward overcoming whatever hurdles arise, and while doing so, remains consistently diplomatic, focused, persistent, and organized. Kumar demonstrates humility in all interactions - he doesn't have to be the smartest one in the room - he listens and makes sure he understands sufficiently to inform his prioritization and decision making. Finally, he managed to be responsive - even when pulled in 10 different directions at once - you knew he would get back to you. So, ultimately, he was respectful of everybody, regardless of position. I look forward to keeping tabs on the trajectory of Kumar's career. He will continue to learn, grow, contribute - and succeed.",
    },
    {
        name: "Richard Dumas",
        designation: "Marketing Executive. Former CMO @ Inferece Solutions",
        photo: "https://media.licdn.com/dms/image/v2/C5603AQGQky9QcwWQxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1525051892147?e=1744848000&v=beta&t=raGnRJ0BTtriT3m-kfq_0-PItn_WrmAC7rZS-iQPU5E",
        content: "It is with great enthusiasm that I write this recommendation for Kumar Murthy, an exceptional Product Manager I have had the privilege of working with for the past six years at both Five9 and earlier at Inference. Throughout our time collaborating, Kumar has consistently demonstrated a unique blend of technical expertise, strategic product management skills, and an unwavering commitment to excellence. \n Kumar’s technical acumen is second to none. His deep understanding of Intelligent Virtual Agents (IVA) and the broader Five9 ecosystem has been instrumental in driving innovative product enhancements and delivering cutting-edge solutions to customers. Kumar’s ability to translate complex technical requirements into actionable product strategies has consistently set him apart as a thought leader in this space. \n In addition to his technical skills, Kumar’s approach to product management is both methodical and visionary. He has an innate ability to identify market trends and customer needs, ensuring that every product decision aligns with the company’s strategic goals. Kumar is a master at balancing competing priorities, and his meticulous attention to detail ensures that projects are delivered on time and exceed expectations. \n One of Kumar’s most admirable qualities is his exceptional work ethic. He approaches every challenge with determination and a solutions-oriented mindset, often going above and beyond to ensure the success of his team and the satisfaction of stakeholders. Kumar’s ability to remain calm and focused under pressure has earned him the trust and respect of colleagues and clients alike. \n Collaboration is another area where Kumar truly excels. He has an innate talent for bringing people together, fostering open communication, and creating an environment where team members feel valued and motivated. His collaborative approach not only strengthens team dynamics but also drives innovation and ensures the delivery of high-quality products. \n Finally, Kumar’s problem-solving abilities are simply outstanding. Whether faced with a technical roadblock, a resource constraint, or a challenging customer request, Kumar’s analytical mindset and creative thinking always lead to effective solutions. His ability to navigate complex challenges with ease is a testament to his experience and skill. \n In summary, Kumar Murthy is an extraordinary Product Manager whose technical expertise, strategic vision, work ethic, collaborative spirit, and problem-solving skills make him an invaluable asset to any organization. I am grateful for the opportunity to have worked alongside him and have no doubt that he will continue to achieve great success in his career. I wholeheartedly recommend Kumar to anyone seeking a top-tier professional who consistently delivers excellence."
    }
  ];

  return (
    <div
      className={`py-24 px-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
      id="testimonials"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000, disableOnInteraction: true }}
          loop={true}
          spaceBetween={40}
          // By default: 1 slide per view
          slidesPerView={1}
          // For larger screens, we show 2 slides per view
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} darkMode={darkMode} swiperInstance={swiperRef.current}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, darkMode, swiperInstance }) => {
  const [expanded, setExpanded] = useState(false);
  const [canClamp, setCanClamp] = useState(false);

  const textRef = useRef(null);

  // We'll measure once on mount, removing line clamp, to see if it's >4 lines.
  useEffect(() => {
    if (textRef.current) {
      // Temporarily remove line clamp
      const originalClasses = textRef.current.className;
      textRef.current.className = textRef.current.className.replace('line-clamp-4', '');

      // read computed style
      const style = window.getComputedStyle(textRef.current);
      const lineHeight = parseFloat(style.lineHeight);
      const clampHeight = lineHeight * 4; // for 4 lines
      const contentHeight = textRef.current.scrollHeight;

      // If the content's height is more than 4 lines, we can clamp
      if (contentHeight > clampHeight) {
        setCanClamp(true);
      }

      // restore original classes
      textRef.current.className = originalClasses;
    }
  }, []);

  const handleToggleExpand = () => {
    if (swiperInstance && swiperInstance.autoplay) {
      if (!expanded) {
        swiperInstance.autoplay.stop();
      } else {
        swiperInstance.autoplay.start();
      }
    }
    setExpanded(!expanded);
  };
  
  return (
    <div
      className={`flex flex-col items-center p-10 rounded-lg shadow-md transition-colors duration-300
      ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}
    `}
    >
      <img
        src={testimonial.photo}
        alt={`${testimonial.name}`}
        className="w-24 h-24 rounded-full border-2 border-gray-300 mb-6 object-cover"
      />
      {/* Only clamp if not expanded */}
      <div
        ref={textRef}
        className={`text-lg italic mb-4 transition-all duration-300 ${
          expanded ? '' : 'overflow-hidden line-clamp-4'
        }`}
      >
        “{testimonial.content}”
      </div>

      {/* Show the toggle if we can clamp */}
      {canClamp && (
        <button onClick={handleToggleExpand} className="text-blue-500 mb-2">
          {expanded ? 'See Less' : 'See More'}
        </button>
      )}

      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
      <p className="text-md text-gray-600 dark:text-gray-400">{testimonial.designation}</p>
    </div>
  );
};

export default TestimonialsSection;