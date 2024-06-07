import React from "react";

const workshops = [
  {
    title: "Parenting 101 Workshop",
    date: "March 2024",
    description:
      "A comprehensive workshop on the basics of parenting, covering essential topics for new and experienced parents alike.",
    image: "/images/workshop1.jpg",
  },
  {
    title: "Family Fun Day",
    date: "February 2024",
    description:
      "A fun-filled day with activities for the whole family, including games, crafts, and more.",
    image: "/images/workshop2.jpg",
  },
  {
    title: "Nutrition and Wellness for Kids",
    date: "January 2024",
    description:
      "Learn about healthy eating habits and wellness practices for children in this informative workshop.",
    image: "/images/workshop3.jpg",
  },
  {
    title: "Holiday Crafting Workshop",
    date: "December 2023",
    description:
      "Get into the holiday spirit with our crafting workshop, perfect for making festive decorations and gifts.",
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

const ParentPage = () => {
  return (
    <div className="font-sans bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56"
          style={{ backgroundImage: "url('/images/parents.jpg')" }}
        ></div>
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Parents
          </h1>
          <p className="mb-8 text-lg text-gray-700 text-center">
            Welcome to the Parents page! Here you'll find resources and
            information about our activities and workshops designed specifically
            for parents.
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

export default ParentPage;
