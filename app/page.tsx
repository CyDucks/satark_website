import Image from 'next/image'
import Link from 'next/link'
import { Shield, MapPin, Bell, Zap, Users, Lock, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section with Dynamic Layout */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-800 leading-tight">
                Stay Safe, Stay Informed
              </h1>
              <p className="text-xl mb-8 text-orange-700">
                Your personal safety companion providing real-time protection and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="#features" 
                  className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 group"
                >
                  Explore Features
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex justify-center space-x-4">
            <a 
              href="/app-debug.apk" 
              download="app-debug.apk"
              className="
                inline-flex items-center 
                bg-orange-500 hover:bg-orange-600 
                text-white font-bold 
                py-3 px-6 rounded-full 
                text-lg shadow-lg hover:shadow-xl 
                transition duration-300 group
              "
            >
              <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 mr-2">
                <path d="M17.523 15.3414C17.523 16.0194 16.9784 16.5638 16.3005 16.5638H8.52661C7.84863 16.5638 7.30408 16.0194 7.30408 15.3414V9.90166C7.30408 9.22369 7.84863 8.67914 8.52661 8.67914H16.3005C16.9784 8.67914 17.523 9.22369 17.523 9.90166V15.3414Z"/>
                <path d="M6.69813 17.5034L9.23218 15.3414L6.69813 13.1794V17.5034Z"/>
                <path d="M18.1522 17.5034L15.6181 15.3414L18.1522 13.1794V17.5034Z"/>
                <path d="M12.4134 6.40015L9.87936 8.56212H14.9474L12.4134 6.40015Z"/>
              </svg>
              Download App
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-200/30 rounded-full blur-xl"></div>
                <Image 
                  src="/photu.JPG" 
                  width={300} 
                  height={600} 
                  alt="Satark App Screenshot" 
                  className="relative z-10 mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Creative Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-orange-600">
            Empowering Safety Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Real-time Safety Score", 
                description: "Instant safety ratings for your location and surroundings.",
                color: "text-orange-500 bg-orange-100"
              },
              { 
                icon: MapPin, 
                title: "Crime Heatmap", 
                description: "Visualize high-risk areas and plan safer routes.",
                color: "text-orange-500 bg-orange-100"
              },
              { 
                icon: Bell, 
                title: "Smart Notifications", 
                description: "Timely alerts about potential dangers nearby.",
                color: "text-orange-500 bg-orange-100"
              },
              { 
                icon: Users, 
                title: "Community Watch", 
                description: "Connect with local community for collective safety.",
                color: "text-orange-500 bg-orange-100"
              },
              { 
                icon: Lock, 
                title: "Secure Check-ins", 
                description: "Let trusted contacts know you're safe instantly.",
                color: "text-orange-500 bg-orange-100"
              },
              { 
                icon: Shield, 
                title: "Conflict Zone Alerts", 
                description: "Stay informed about ongoing local disturbances.",
                color: "text-orange-500 bg-orange-100"
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`
                  ${feature.color} 
                  p-6 rounded-2xl shadow-lg 
                  hover:shadow-xl 
                  transform hover:-translate-y-2 
                  transition-all duration-300 
                  group
                `}
              >
                <feature.icon className="h-12 w-12 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80 group-hover:opacity-100 transition-opacity">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-orange-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Download", description: "Get app from store" },
              { step: 2, title: "Setup", description: "Create your profile" },
              { step: 3, title: "Enable", description: "Turn on safety features" },
              { step: 4, title: "Protect", description: "Stay informed & safe" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="
                  bg-white
                  rounded-2xl p-6 text-center 
                  transform hover:scale-105 
                  transition-transform duration-300 
                  shadow-md hover:shadow-xl
                "
              >
                <div className="
                  w-16 h-16 mx-auto mb-4 
                  bg-orange-500 text-white 
                  rounded-full flex items-center 
                  justify-center text-2xl font-bold
                ">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-700">
                  {item.title}
                </h3>
                <p className="text-orange-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-600">
            Download Now
          </h2>
          <p className="text-xl mb-8 text-orange-700 max-w-2xl mx-auto">
            Take the first step towards a safer tomorrow. Experience peace of mind with our comprehensive safety app.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/app-debug.apk" 
              download="app-debug.apk"
              className="
                inline-flex items-center 
                bg-orange-500 hover:bg-orange-600 
                text-white font-bold 
                py-3 px-6 rounded-full 
                text-lg shadow-lg hover:shadow-xl 
                transition duration-300 group
              "
            >
              <svg viewBox="0 0 24 24" className="fill-current w-6 h-6 mr-2">
                <path d="M17.523 15.3414C17.523 16.0194 16.9784 16.5638 16.3005 16.5638H8.52661C7.84863 16.5638 7.30408 16.0194 7.30408 15.3414V9.90166C7.30408 9.22369 7.84863 8.67914 8.52661 8.67914H16.3005C16.9784 8.67914 17.523 9.22369 17.523 9.90166V15.3414Z"/>
                <path d="M6.69813 17.5034L9.23218 15.3414L6.69813 13.1794V17.5034Z"/>
                <path d="M18.1522 17.5034L15.6181 15.3414L18.1522 13.1794V17.5034Z"/>
                <path d="M12.4134 6.40015L9.87936 8.56212H14.9474L12.4134 6.40015Z"/>
              </svg>
              Download App
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}