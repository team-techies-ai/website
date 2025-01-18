const Specialization = () => {
  return (
    <div className="backdrop-blur-lg border border-gray-300/50 p-9 rounded-3xl shadow-lg mx-4 sm:mx-10 md:mx-32 text-white mt-20 bg-black/40">
      <h1 className="text-3xl sm:text-4xl font-medium font-mono text-center mb-6">Core Specializations</h1>

      <div className="mb-6 p-7 rounded-2xl border-2 border-[#2D0C57]">
        <h1 className="text-xl sm:text-2xl font-semibold">AI Product Development</h1>
        <p className="mt-2 text-sm sm:text-base">
          We develop AI solutions for real-world problems across industries, with guidance from industry experts.
        </p>
      </div>

      <div className="mb-6 p-7 rounded-2xl border-2 border-[#2D0C57]">
        <h1 className="text-xl sm:text-2xl font-semibold">Student Collaboration and Mentorship</h1>
        <p className="mt-2 text-sm sm:text-base">
          Students collaborate, share ideas, and learn from mentors to build impactful projects.
        </p>
      </div>
    </div>
  );
}

export default Specialization;
