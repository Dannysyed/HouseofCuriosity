import React from "react";

const workshops = [
  {
    title: "Classroom Management Techniques",
    date: "March 2024",
    description:
      "A comprehensive workshop on effective classroom management strategies for educators.",
    image: "/images/workshop1.jpg",
  },
  {
    title: "Interactive Teaching Methods",
    date: "February 2024",
    description:
      "Explore various interactive teaching methods to engage students and enhance learning.",
    image: "/images/workshop2.jpg",
  },
  {
    title: "Student Mental Health Awareness",
    date: "January 2024",
    description:
      "Learn about mental health awareness and support strategies for students.",
    image: "/images/workshop3.jpg",
  },
  {
    title: "Holiday Classroom Activities",
    date: "December 2023",
    description:
      "Get creative with holiday-themed activities and crafts for the classroom.",
    image: "/images/workshop4.jpg",
  },
];

const WorkshopCard = ({ workshop }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
    <img
      src={workshop.image}
      alt={workshop.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800">{workshop.title}</h3>
      <p className="text-gray-600">{workshop.date}</p>
      <p className="mt-2 text-gray-700">{workshop.description}</p>
    </div>
  </div>
);

const EducatorsPage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56"
          style={{ backgroundImage: "url('/images/educators.jpg')" }}
        ></div>
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Educators
          </h1>
          <p className="mb-8 text-lg text-gray-700 text-center">
            Welcome to the Educators page! Here you'll find resources and
            information about our activities and workshops designed specifically
            for educators.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
              Previous Activities + Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => (
                <WorkshopCard key={index} workshop={workshop} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://chat.whatsapp.com/your-whatsapp-group-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-4 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              Join our WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducatorsPage;
