"use client";
import React, { useEffect, useState } from "react";
import Swiper from "../../components/swiper";
import { Hearts } from "react-loader-spinner";
import Lottie from "lottie-react";
import absharlogo from "../../public/images/AbhsarLogo.png";
import heart from "../../public/images/Animation - 1704131701382.json";
import school from "../../public/images/school.jpg";
import classroom from "../../public/images/classroom.jpg";
import codingAni from "../../public/images/Animation - 1716886475727.json";
import helpi from "../../public/images/Animation - 1712726171517.json";
import Image from "next/image";
import donateImage from "../../public/images/helpinghands1.png";
import EducationIcon from "../../public/icons/education.png";
import school_icon from "../../public/images/School1.png";
import school_drawing from "../../public/images/school/d32b4d0d-e381-4fd8-a9e9-dcf47a6bc854.JPG";

import HealthcareIcon from "../../public/icons/healthcare.png";
import CommunityIcon from "../../public/icons/partners.png";
import CollaborationIcon from "../../public/icons/collaboration.png";
import AgencyIcon from "../../public/icons/enterprise.png";
import CommunicationIcon from "../../public/icons/conversation.png";
import CriticalThinkingIcon from "../../public/icons/thinking.png";
import CreativeThinkingIcon from "../../public/icons/brain.png";
import IndependentThinkingIcon from "../../public/icons/motivate.png";
import { toast } from "react-toastify";
import baseUrl from "../../config/util";
import GetInvolvedModal from "../../components/GetInvolvedModal";

const Section = ({
  title,
  children,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => (
  <section className={`${bgColor} py-12`}>
    <div className="container mx-auto px-4">
      <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const PastEvents = ({ pastEvents, loading, error }) => (
  <Section title="Past Events" bgColor="bg-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {loading ? (
        <div className="flex justify-center items-center">
          <Hearts
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        pastEvents.map((event) => (
          <div
            key={event._id}
            className="rounded-lg overflow-hidden bg-white shadow-md"
          >
            <Image
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-40 object-cover"
              height={100}
              width={100}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">
                {event.title}
              </h3>
              <p className="mb-4 text-gray-600">{event.description}</p>
              <a
                href={`events/${event._id}`}
                className="block text-blue-600 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))
      )}
    </div>
    <div className="flex justify-center mt-8">
      <a
        href="/events"
        className="primary_color hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
      >
        View All Events
      </a>
    </div>
  </Section>
);

const HomePage = () => {
  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const response = await fetch(`${baseUrl}/events`);
        if (!response.ok) {
          throw new Error("Failed to fetch past events");
        }
        const data = await response.json();
        setPastEvents(data.slice(0, 2)); // Display only the first two events
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch past events");
        setLoading(false);
      }
    };

    fetchPastEvents();
  }, []);

  return (
    <div className="body_color">
      <div>
        <Swiper />
      </div>
      <div className="body_color">
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to House of Curiosity
              </h1>
              <p className="text-lg mb-6">
                A space where children create, innovate, and solve real-world
                problems.
              </p>
              <p className="text-lg mb-6">
                As an educator, I've come to realize that the traditional
                methods of teaching and learning often fall short when it comes
                to preparing children for the complexities of the modern world.
                In an era where adaptability, creativity, and problem-solving
                skills reign supreme, it's clear that we need a new approach—one
                that empowers children to become active participants in their
                learning journey. There was a time when children could follow a
                set path: work hard at school, go to college, and climb the
                corporate ladder.
              </p>
              <button
                className="primary_color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                onClick={handleOpenModal}
              >
                Get Involved
              </button>
              <GetInvolvedModal
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
              />
            </div>
            <div className="basis-2/5">
              <Lottie
                animationData={codingAni}
                loop={true}
                className="h-[50vh] sm:h-[70vh]"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-white py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border p-6 rounded-md relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="absolute inset-0 rounded-t-md bg-gradient-to-b from-transparent to-body_color_dark opacity-90"></div>
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <p className="mb-4">
                  We want to build student agency! Why? Currently, there is an
                  over-emphasis on teachers leading the curriculum and syllabus,
                  which removes the chances of children on a day-to-day basis to
                  think independently.
                </p>
                <div className="basis-2/5">
                  <Lottie
                    animationData={helpi}
                    loop={true}
                    className="h-[22vh] sm:h-[20vh]"
                  />
                </div>
              </div>
              <div className="border p-6 rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
                <h3 className="text-xl font-semibold mb-4">How You Can Help</h3>
                <p className="mb-4">
                  Your contributions and support enable us to continue our
                  mission. Explore various ways to get involved, donate, or
                  volunteer.
                </p>
                <div className="basis-2/5">
                  <Lottie
                    animationData={heart}
                    loop={true}
                    className="h-[22vh] sm:h-[20vh]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section title="What?" bgColor="bg-gray-100">
          <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border p-6 rounded-md shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                In-school programme
              </h3>
              <p className="text-lg text-gray-700">
                This space is created within schools as we want teachers as well
                as students to build a maker-mindset. It is important that
                children feel empowered within an already existing space that
                they spend most of their time in. This allows them to see
                learning and creating as a whole and as a part of life.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No instructions
              </h3>
              <p className="text-lg text-gray-700">
                Once they understand the problem, they can use the materials
                from the space to solve the problem. They have access to basic
                tools like cardboard, sticks, screwdrivers, glue gun, etc. This
                process is child-directed and student-led.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Monthly problem statement
              </h3>
              <p className="text-lg text-gray-700">
                Children are presented with problem statements every month.
                These problems arise from discussions and brainstorming sessions
                so that it can be contextual. Here is an example of a problem:
                Most space is designed in a way that is not accessible for
                people with a disability, how can we design space more
                consciously?
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Integrated with the curriculum
              </h3>
              <p className="text-lg text-gray-700">
                We make sure to include strands from the syllabus that children
                are already following so that they can see this space as an
                extension of their learning. And as an effect, this space makes
                their learning more rich and multi-dimensional. For example,
                while working with waste material, children built a puppet show
                to make their lesson on Onake Obavva more interesting!
              </p>
            </div>
          </div>
        </Section>

        <Section title="Objectives">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
              <Image
                src={CollaborationIcon}
                alt="Collaboration Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-base">
                Encourage working together to solve problems and build a sense
                of community.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
              <Image
                src={AgencyIcon}
                alt="Student Agency Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Student Agency</h3>
              <p className="text-base">
                Empower students to take charge of their own learning and
                decision-making.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
              <Image
                src={CommunicationIcon}
                alt="Communication Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Communication</h3>
              <p className="text-base">
                Develop effective communication skills for clear and impactful
                expression.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
              <Image
                src={CriticalThinkingIcon}
                alt="Critical Thinking Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Critical Thinking</h3>
              <p className="text-base">
                Enhance analytical skills to evaluate information and solve
                complex problems.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
              <Image
                src={CreativeThinkingIcon}
                alt="Creative Thinking Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">Creative Thinking</h3>
              <p className="text-base">
                Foster creativity and innovation in problem-solving and project
                development.
              </p>
            </div>
            <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
              <Image
                src={IndependentThinkingIcon}
                alt="Independent Thinking Icon"
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-4">
                Independent Thinking
              </h3>
              <p className="text-base">
                Promote self-reliance and the ability to think and act
                independently.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Framework For Children">
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
            <li>Understand the problem</li>
            <li>Draw your ideas</li>
            <li>Inspiration from what has been done</li>
            <li>Do: bring your ideas to life</li>
            <li>Share your work with others</li>
          </ol>
        </Section>

        <section className="bg-gray-100 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg mb-10">
              We're proud of the positive changes we've brought about in
              people's lives through our educational programs and initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
                <Image
                  src={EducationIcon}
                  alt="Education Icon"
                  className="w-20 h-20 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Education Initiatives
                </h3>
                <p className="text-base">
                  Our educational programs have impacted
                  <span className="text-green-500 font-bold">
                    {" "}
                    500+ students
                  </span>
                  , providing them with access to quality education and
                  transforming their lives.
                </p>
              </div>
              <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
                <Image
                  src={HealthcareIcon}
                  alt="Healthcare Icon"
                  className="w-20 h-20 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Innovative Solutions
                </h3>
                <p className="text-base">
                  Through our problem-solving sessions, we've enabled
                  <span className="text-green-500 font-bold">
                    {" "}
                    300+ projects
                  </span>{" "}
                  created by students, fostering creativity and critical
                  thinking.
                </p>
              </div>
              <div className="border p-6 rounded-md shadow-md bg-white flex flex-col items-center">
                <Image
                  src={CommunityIcon}
                  alt="Community Icon"
                  className="w-20 h-20 mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">
                  Community Development
                </h3>
                <p className="text-base">
                  Our community engagement programs have led to
                  <span className="text-green-500 font-bold">
                    {" "}
                    200+ community events
                  </span>
                  , creating a positive impact on local communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section title="Artefacts">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-200 h-52 flex items-center justify-center rounded-lg relative overflow-hidden">
              <Image
                src={school_drawing}
                alt="Curriculum Icon"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="bg-gray-200 h-52 flex items-center justify-center rounded-lg relative overflow-hidden">
              <Image
                src={school_icon}
                alt="Curriculum Icon"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            <div className="bg-gray-200 h-52 flex items-center justify-center rounded-lg relative overflow-hidden">
              <Image
                src={school_icon}
                alt="Curriculum Icon"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default HomePage;
