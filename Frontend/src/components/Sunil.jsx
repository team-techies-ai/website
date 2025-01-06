import mainprofile from "../assets/Rectangle.jpg";

const Sunil = () => {
  return (
    <div className="ml-12 mr-44 mt-10 text-white font-thin text-xl" style={{ wordSpacing: '0.5rem' }}>
      <hr className="my-4 border-gray-300/30 backdrop-blur-sm ml-44 mr-44" />

      <div className="flex justify-between items-center">
        <div className="">
          <p className="m-4 p-2">
            Hi, I&apos;m <span className="font-bold text-l">Sunil Yadav</span>, but you can call me <span className="font-bold text-l">Mr. Techy!</span>
          </p>
          <p className="m-4 p-2">
            Did you know that <span className="underline decoration-slate-50 decoration-opacity-50">more than 60% of graduates</span> struggle to find a job even after finishing their degree? Many of them have the knowledge but not enough real-world experience to solve the industry problems. And that&apos;s where we come in! Team Techies, for passionate students like you.
          </p>
          <p className="m-4 p-2">
            Here, you&apos;ll get the chance to work on real-world problems that companies need. It&apos;s all about hands-on experience, building AI solutions that impact society. Whether you&apos;re into AI, Web and App development, design, or just want to create something new, there is a place for you at Team Techies.
          </p>
          <p className="m-4 p-2 font-bebas">
            Team Techies is not just a team - it&apos;s a movement. We&apos;re building the future of AI.
          </p>
          <p className="m-4 p-2">
            If you are interested, send a mail to{' '}
            <a href="mailto:jointeamtechies@gmail.com" className="underline">
              jointeamtechies@gmail.com
            </a>{' '}
            and become part of the next generation of AI innovators!
          </p>
        </div>
        <div className="border-white w-[300px] h-[300px] flex-shrink-0 ml-20" >
          <img
            src={mainprofile}
            alt="Profile"
            className="w-full h-full object-cover  shadow-lg rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Sunil;
