
import React, { useState } from 'react';
import HeroSection from '../Home/HeroSection';
import Design from '../journal-overview/Design';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Editor-in-Chief', 'Associate Editors', 'Editorial Board', 'Advisory Board'];

  const editors = [
    {
      name: "Prof. David Anderson",
      role: "Editor-in-Chief",
      affiliation: "Stanford University, USA",
      expertise: "Artificial Intelligence & Machine Learning",
      image: "/api/placeholder/150/150",
      qualification: "Ph.D. in Computer Science",
      category: "Editor-in-Chief"
    },
    {
      name: "Prof. Sarah Chen",
      role: "Associate Editor",
      affiliation: "MIT, USA",
      expertise: "Cybersecurity & Network Systems",
      image: "/api/placeholder/150/150",
      qualification: "Ph.D. in Computer Engineering",
      category: "Associate Editors"
    },
    {
      name: "Dr. Michael Roberts",
      role: "Associate Editor",
      affiliation: "University of Cambridge, UK",
      expertise: "Cloud Computing & Distributed Systems",
      image: "/api/placeholder/150/150",
      qualification: "Ph.D. in Cloud Computing",
      category: "Associate Editors"
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Editorial Board Member",
      affiliation: "Technical University of Madrid, Spain",
      expertise: "Software Engineering & System Design",
      image: "/api/placeholder/150/150",
      qualification: "Ph.D. in Software Engineering",
      category: "Editorial Board"
    },
    {
      name: "Dr. James Wilson",
      role: "Editorial Board Member",
      affiliation: "University of Tokyo, Japan",
      expertise: "Data Science & Big Data Analytics",
      image: "/api/placeholder/150/150",
      qualification: "Ph.D. in Data Science",
      category: "Editorial Board"
    },
    {
      name: "Prof. Lisa Zhang",
      role: "Advisory Board Member",
      affiliation: "Tsinghua University, China",
      expertise: "Computer Vision & Pattern Recognition",
      image: "/api/placeholder/150/150",
      qualification: "Ph.D. in Computer Vision",
      category: "Advisory Board"
    }
  ];
  const filteredEditors = activeFilter === 'All'
    ? editors
    : editors.filter(editor => editor.category === activeFilter);

  return (
    <>
      <HeroSection
        backgroundImage="/images/Herosection/ground.jpg"
        text=" The Editorial Board of AJARCSE comprises leading scholars and experts dedicated to advancing research
          in computer science and engineering. We ensure rigorous peer review, uphold academic integrity, and foster
          innovation across emerging technologies.  "  />
      <section className="md:py-16 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">

            <Design topic="Editorial Board" />
            <p className="md:text-lg text-sm text-gray-600 max-w-3xl mx-auto">
              Our distinguished editorial board comprises leading experts in computer science and engineering from prestigious institutions worldwide.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`md:px-4 px-2 py-2 md:rounded-bl-3xl rounded-bl-xl cursor-pointer  text-sm font-medium  
                ${activeFilter === category
                    ? 'bg-[#1B356F] text-white'
                    : 'bg-white     '}`}  >
                {category}
              </div>
            ))}
          </div>

          {/* Editorial Board Grid */}
          <div className="text-center ">
            <p className="">Update will come soon.......</p>

          </div>

          <div className="mt-12 bg-blue-50 rounded-bl-3xl p-6 max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Join Our Editorial Board</h4>
            <p className="text-gray-600 mb-4 md:text-base text-sm">
              We welcome distinguished researchers and academics to join our editorial board. If you are interested in contributing to our journal, please contact us with your CV and areas of expertise.
            </p>
            <Link to='/contactus'>
              <button className="  items-center px-4 py-2 borde  md:text-base text-sm font-medium rounded-bl-3xl  hover:text-white bg-[#1B356F] text-white ">
                Apply to Join
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;