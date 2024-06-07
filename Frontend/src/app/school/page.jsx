import React from "react";

const ImageSection = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-64 object-cover rounded-lg"
    loading="lazy"
  />
);

const Section = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
    {children}
  </section>
);

const SchoolPage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-64"
          style={{ backgroundImage: "url('/images/cover.jpg')" }}
        ></div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            House of Curiosity
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
            Innovative Learning Lab
          </h2>
          <h3 className="text-xl font-medium text-center mb-6 text-gray-600">
            Unleash Curiosity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ImageSection
              src="/images/IMG_4370.jpg"
              alt="Children engaged in activities"
            />
            <ImageSection
              src="/images/IMG_4373.jpg"
              alt="Creative projects by children"
            />
          </div>
          <p className="text-lg text-gray-700 text-center mb-8">
            A space where children create, innovate and solve real world
            problems. Children are change makers, we just need to give them
            their space to make a difference.
          </p>

          <Section title="Our Story">
            <p className="text-lg text-gray-700 mb-6">
              We want to build student agency! Why? Currently there is an
              over-emphasis on teachers leading the curriculum and syllabus
              which removes the chances of children on a day-to-day basis to
              think independently. The ones who follow orders in this school
              system are rewarded. But once these children graduate, the only
              way to excel is to be able to think independently and creatively.
              With current world events and AI coming into the picture, we know
              that we now no longer need a workforce that simply knows how to
              take orders but instead we need people that are comfortable
              innovating, dealing with roadblocks and challenges; in other words
              a group of individuals who know how to push the boundaries of what
              already exists in our world.
            </p>
            <ImageSection
              src="/images/IMG_4393.jpg"
              alt="Students working on projects"
            />
          </Section>

          <Section title="What?">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  In-school programme
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  This space is created within schools as we want teachers as
                  well as students to build a maker-mindset. It is important
                  that children feel empowered within an already existing space
                  that they spend most of their time in. This allows them to see
                  learning and creating as a whole and as a part of life.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  No instructions
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  Once they understand the problem, they can use the materials
                  from the space to come up with their solutions. An integral
                  part of this is to build a mindset in children that they can
                  create and solve problems. Thus it is crucial that the teacher
                  in this space is just a facilitator, helping when needed but
                  not giving any formal instructions to the students. It needs
                  to be student-driven and student-led.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Monthly problem statement
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  Children are presented with problem statements every month.
                  These problems arise from discussions and brainstorming
                  sessions so that it can be contextual. Here is an example of a
                  problem: Most space is designed in a way that is not
                  accessible for people with a disability, how can we design
                  space more consciously?
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Integrated with the curriculum
                </h3>
                <p className="text-lg text-gray-700 mt-2">
                  We make sure to include strands from the syllabus that
                  children are already following so that they can see this space
                  as an extension of their learning. And as an effect, this
                  space makes their learning more rich and multi-dimensional.
                  For example, while working with waste material, children built
                  a puppet show to make their lesson on Onake Obavva more
                  interesting!
                </p>
              </div>
            </div>
          </Section>

          <Section title="Objectives">
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Collaboration</li>
              <li>Student agency</li>
              <li>Communication</li>
              <li>Critical Thinking</li>
              <li>Creative Thinking</li>
              <li>Independent Thinking</li>
            </ul>
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

          <Section title="Artefacts">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg">
                Artifact 1
              </div>
              <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg">
                Artifact 2
              </div>
              <div className="bg-gray-200 h-32 flex items-center justify-center rounded-lg">
                Artifact 3
              </div>
            </div>
          </Section>

          <Section title="Want to build this for your children? Drop us a message!">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  className="border border-gray-300 p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  className="border border-gray-300 p-2 rounded-lg"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="border border-gray-300 p-2 w-full rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                className="border border-gray-300 p-2 w-full rounded-lg"
              />
              <textarea
                placeholder="Type your message here..."
                aria-label="Message"
                className="border border-gray-300 p-2 w-full rounded-lg h-32"
              ></textarea>
              <button
                type="submit"
                className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default SchoolPage;
