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
  <div className="card-container">
   {/* Card 1 */}
<div className="card">
  <h4 className="card-title font-bold">Find the Best Candidate</h4>
 
  <div className="candidate-block">
    {/* Candidate 1 */}
    <div className="candidate">
      <div className="candidate-info">
        <img src="joe-doe.png" alt="John Doe" className="candidate-img" />
        <div>
          <p className="candidate-name">John Doe</p>
          <p className="candidate-detail">Software Engineer</p>
        </div>
      </div>
      <div className="progress-circle" style={{ '--percentage': 85 }} data-percentage="85"></div>
    </div>

    {/* Candidate 2 */}
    <div className="candidate">
      <div className="candidate-info">
        <img src="lisa-harrington.png" alt="Lisa Harrington" className="candidate-img" />
        <div>
          <p className="candidate-name">Lisa Harrington</p>
          <p className="candidate-detail">Data Scientist</p>
        </div>
      </div>
      <div className="progress-circle" style={{ '--percentage': 75 }} data-percentage="75"></div>
    </div>

    {/* Candidate 3 */}
    <div className="candidate">
      <div className="candidate-info">
        <img src="mike.png" alt="Mike Sanders" className="candidate-img" />
        <div>
          <p className="candidate-name">Mike Sanders</p>
          <p className="candidate-detail">Product Manager</p>
        </div>
      </div>
      <div className="progress-circle" style={{ '--percentage': 90 }} data-percentage="90"></div>
    </div>

    {/* Candidate 4 */}
    <div className="candidate">
      <div className="candidate-info">
        <img src="emily.png" alt="Emily Saldana" className="candidate-img" />
        <div>
          <p className="candidate-name">Emily Saldana</p>
          <p className="candidate-detail">Data Scientist</p>
        </div>
      </div>
      <div className="progress-circle" style={{ '--percentage': 65 }} data-percentage="65"></div>
    </div>

  </div>
</div>

    {/* Card 2 */}
<div className="card">
  <div className="card-header">
    <h4 className="card-title font-bold">Performance</h4>
    
  </div>
  <p className="text-gray-400 text-xs mt-2 mb-4">Our agents help in tracking performance through detailed metrics and insights.</p>

  
  <div className="performance-container">
    {/* Performance Graph with Percentages */}
    <div className="performance-graph">
      <div className="performance-bar-row">
        <div className="performance-bar" style={{ width: '60%' }}></div>
        <span className="performance-percentage">60%</span>
      </div>
      <div className="performance-bar-row">
        <div className="performance-bar" style={{ width: '70%' }}></div>
        <span className="performance-percentage">70%</span>
      </div>
      <div className="performance-bar-row">
        <div className="performance-bar" style={{ width: '80%' }}></div>
        <span className="performance-percentage">80%</span>
      </div>
      <div className="performance-bar-row">
        <div className="performance-bar" style={{ width: '90%' }}></div>
        <span className="performance-percentage">90%</span>
      </div>
    </div>

    {/* Live Simulation Section */}
    <div className="voice-simulation-section ">
      <h4 className=" font-bold text-white mb-2">Live Simulation</h4>
      <p className="text-gray-400 text-xs">Real-time interview simulation with voice feedback.</p>
  {/* Microphone Icon in the center */}


    </div>
  </div>
</div>




    {/* Card 3 */}
    <div className="card">
      <h4 className="card-title font-bold">Powerful APIs</h4>
      <p>Integrate seamlessly into your existing hiring tools and workflows.</p>
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
