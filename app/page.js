import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  return (

    <div>
      
      {/* Hero Section */}
      <section id="home" className="text-center py-14 bg-black relative">
      <div className="absolute inset-0 flex justify-center items-center">
          <div className="green-glow"></div>
        </div>
      <h2 className="text-5xl font-bold mt-1 text-gray-500 mt-1 tracking-wider">Autonomous</h2>
         
        <h3 className="text-5xl font-bold mt-1 text-green-500 mt-1 tracking-wider">Interview Agent</h3>
         
        <p className="text-xl mt-3 text-gray-400">Automate your interview process with cafi AI</p>
        <div className="mt-8">
          <a href="/signin"><button className="px-3 py-1 bg-green-600 text-white rounded-lg mx-2 hover:bg-green-700 transition-colors">
            Get Started
          </button>
          </a>
          
        </div>

        {/* Video Container */}
        <div className="mt-10 mx-auto max-w-3xl bg-[#1a202c] rounded-lg h-[450px] flex justify-center items-center video-container">
    <video
        src="/demo-video.mp4" 
        className="rounded-lg shadow-lg w-full h-full object-cover"
    />
        </div>
      </section>

 {/* Features Section */}
<section id="features" className="py-20 bg-black">
  <h3 className="text-center text-3xl font-bold mb-10 text-white">
    Revolutionizing Recruitment with <span className="text-green-500">AI</span>
  </h3>
  <div className="flex justify-between gap-8 px-4">
    {/* Card 1: Find the Best Candidate */}
    <div className="w-1/3 bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-4 text-white">Find the Best Candidate</h4>
      <p className="text-gray-400 text-sm mb-6">
        Identify top-tier talent faster with AI that analyzes skills, culture fit, and potential.
      </p>
      <div className="space-y-4">
        {/* Candidate 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/joe-doe.png" alt="John Doe" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-white font-medium">John Doe</p>
              <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white text-sm">
            85%
          </div>
        </div>
        {/* Candidate 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lisa-harrington.png" alt="Lisa Harrington" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-white font-medium">Lisa Harrington</p>
              <p className="text-gray-400 text-sm">Data Scientist</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white text-sm">
            75%
          </div>
        </div>
        {/* Candidate 3 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/mike.png" alt="Mike Sanders" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-white font-medium">Mike Sanders</p>
              <p className="text-gray-400 text-sm">Product Manager</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white text-sm">
            90%
          </div>
        </div>
        {/* Candidate 4 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/emily.png" alt="Emily Saldana" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-white font-medium">Emily Saldana</p>
              <p className="text-gray-400 text-sm">Data Scientist</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white text-sm">
            65%
          </div>
        </div>
      </div>
    </div>

    {/* Card 2: Performance */}
    <div className="w-1/3 bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-4 text-white">Performance</h4>
      <p className="text-gray-400 text-sm mb-6">
        Our agents help in tracking performance through detailed metrics and insights.
      </p>
      <div className="space-y-4">
        {/* Performance Bars */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">60%</span>
            <div className="w-3/4 h-2 bg-gray-700 rounded-full">
              <div className="h-full bg-green-600 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">70%</span>
            <div className="w-3/4 h-2 bg-gray-700 rounded-full">
              <div className="h-full bg-green-600 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">80%</span>
            <div className="w-3/4 h-2 bg-gray-700 rounded-full">
              <div className="h-full bg-green-600 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white text-sm">90%</span>
            <div className="w-3/4 h-2 bg-gray-700 rounded-full">
              <div className="h-full bg-green-600 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
        {/* Live Simulation */}
        <div className="mt-6">
          <h4 className="text-lg font-bold text-white mb-2">Live Simulation</h4>
          <p className="text-gray-400 text-sm">
            Real-time interview simulation with voice feedback.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3: Powerful APIs */}
    <div className="w-1/3 bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-4 text-white">Powerful APIs</h4>
      <p className="text-gray-400 text-sm mb-6">
        Integrate seamlessly into your existing hiring tools and workflows.
      </p>
      
    </div>
  </div>
</section>


   {/* Why Use Section */}
<section className="py-20 bg-black">
  <h3 className="text-center text-3xl font-bold mb-10 text-white">
    Why should you use <span className="text-green-500">cafi</span>?
  </h3>
  <div className="flex justify-center gap-8">
    {/* For Students */}
    <div className="w-1/3 bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-4 text-white">For Students</h4>
      <ul className="text-white space-y-4">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          Practice interviews anytime, anywhere with AI
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          Receive personalized feedback to improve your performance
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          Experience various interview scenarios
        </li>
      </ul>
      <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full text-center">
        Start Practicing
      </button>
    </div>

    {/* For Companies */}
    <div className="w-1/3 bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold mb-4 text-white">For Companies</h4>
      <ul className="text-white space-y-4">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          Save time by automating initial interview rounds
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          Ensure consistent and unbiased evaluation of candidates
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✔</span>
          Gain valuable insights and analytics on candidate performance
        </li>
      </ul>
      <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors w-full text-center">
        Schedule a Demo
      </button>
    </div>
  </div>
</section>


   
    <section className="text-center mt-8 mb-8">
        <h3 className="text-3xl font-bold text-white-500">Best in Class Agent</h3>
      </section>

      {/* Meet Lexi Section */}
      <section className="py-20 bg-black flex justify-center container-bordered mx-auto mb-8">
        <div className="w-full flex p-4">
          <div className="w-1/2 text-left">
            <h4 className="text-2xl font-bold text-white-500 mb-4">Meet Lexi</h4>
            <p className="text-lg text-white mb-6">
              Lexi is an autonomous interview agent designed to streamline the hiring process. She conducts initial screening interviews, evaluates candidates, and provides detailed insights to help you make informed hiring decisions.
            </p>
            <button className="btn-primary">
              Learn More
            </button>
          </div>

          
          <div className="w-1/2 relative ml-4">
            <Image
              src="/lexi.jpg" 
              alt="Lexi AI"
              layout="fill"   // Make image take the full space of the container
              objectFit="cover" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
    
  );
}
