import React from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">
        <h1
          className="text-3xl font-extrabold text-blue-700 tracking-tight select-none cursor-default"
          aria-label="AlumniConnect Home"
        >
          AlumniConnect
        </h1>
        <div className="space-x-6 text-gray-700 font-semibold">
          <Link
            to="/login"
            className="hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Go to Login page"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            aria-label="Go to Signup page"
          >
            Signup
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <section className="md:w-1/2 max-w-lg space-y-8" aria-label="Hero introduction">
          <h2 className="text-5xl font-extrabold text-blue-900 leading-tight">
            College of Technology Alumni Management System
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
          Lifelong connection between alumni and their alma mater, emphasizing shared legacy and mutual support for the future.          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
              aria-label="Sign up for AlumniConnect"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Login to AlumniConnect"
            >
              Login
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="md:w-1/2 max-w-xl" aria-label="Hero image showing alumni networking">
          <img
            src="/src/photos/Screenshot 2025-05-18 161707.png"
            alt="Alumni networking and collaboration"
            className="rounded-2xl shadow-lg"
            loading="lazy"
          />
        </section>
      </main>

      {/* Features Section */}
      <section
        className="bg-white py-20"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h3
            id="features-heading"
            className="text-4xl font-extrabold mb-14 text-blue-900"
          >
            Why Choose AlumniConnect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard
              icon={
                <svg
                  xmlns=""
                  className="h-14 w-14 mx-auto text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a4 4 0 00-5-3.87M9 10h6M9 10a4 4 0 110-8 4 4 0 010 8zM9 10v10M6 20h6"
                  />
                </svg>
              }
              title="Strong Network"
              description="Build meaningful connections with your peers and expand your professional circle."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 mx-auto text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2a4 4 0 00-3-3.87M15 17v-2a4 4 0 013-3.87M12 8v8m-6 4h12"
                  />
                </svg>
              }
              title="Career Growth"
              description="Access jobs, mentorship, and resources to take your career to the next level."
            />
            <FeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 mx-auto text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-6 8h6M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Events & Updates"
              description="Stay informed with the latest alumni events, reunions, and news."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="bg-blue-50 py-20"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h3
            id="testimonials-heading"
            className="text-4xl font-extrabold mb-14 text-blue-900"
          >
            College Alumni
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <Testimonial
              name="Vineet Nayar"
              role="founder of Sampark Foundation"
              feedback="GB Pant University of Agriculture & Technology
                Bachelor of Technology (B.Tech.)  Mechanical Engineering
                1979 - 1983"
              avatar="/src/photos/vineet.jpg"
            />
            <Testimonial
              name="Shantanu Gupta"
              role="founder of Yuva Foundation"
              feedback="He did his Bachelors degree in Technology (B.Tech) from Govind Bhallabh Pant University. He passed his engineering in 2000"
              avatar="/src/photos/santanu.jpg"
            />
            <Testimonial
              name="IAS Anuradha Pal"
              role="Indian Administrative Service"
              feedback="She completed her B.Tech in Electronics and Communication in 2008 from GB Pant University."
              avatar="/src/photos/ias.jpg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 text-center select-none">
        <p>© 2025 AlumniConnect</p>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description }) => (
  <article
    className="p-8 border rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
    role="region"
    aria-label={title}
  >
    <div>{icon}</div>
    <h4 className="mt-6 font-semibold text-xl text-blue-800">{title}</h4>
    <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
  </article>
);

interface TestimonialProps {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

const Testimonial: FC<TestimonialProps> = ({ name, role, feedback, avatar }) => (
  <article
    className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition duration-300 text-left flex flex-col items-center"
    role="region"
    aria-label={`Testimonial from ${name}`}
  >
    <img
      src={avatar}
      alt={`${name} avatar`}
      className="w-20 h-20 rounded-full object-cover mb-4 shadow"
      loading="lazy"
    />
    <blockquote className="text-gray-800 italic mb-4">"{feedback}"</blockquote>
    <p className="font-semibold text-blue-900">{name}</p>
    <p className="text-sm text-gray-600">{role}</p>

</article> );
export default HomePage;
