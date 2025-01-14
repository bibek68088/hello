import React, { useState, useEffect } from "react";
import aak from "./assets/aak.jpg";
import {
  Heart,
  Stars,
  Coffee,
  Sparkles,
  Music2,
  Plane,
  MapPin,
  Calendar,
  MessageCircleHeart,
  Home,
  Phone,
  Cake,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [showHeartbreak, setShowHeartbreak] = useState(true);
  const [showApology, setShowApology] = useState(false);
  const [hearts, setHearts] = useState<
    { x: number; y: number; size: number }[]
  >([]);
  const [showSparkles, setShowSparkles] = useState(false);
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);
  const [currentPopup, setCurrentPopup] = useState<number | null>(null);
  const [showFinalLocation, setShowFinalLocation] = useState(false);

  const [showHearts, setShowHearts] = useState(false);

  const handleClick = () => {
    setShowHearts(true);
  };

  console.log(handleClick);

  const Sticker = ({ className = "" }) => (
    <img
      src={aak}
      alt="Decorative sticker"
      className={`h-32 w-auto object-contain transition-transform duration-300 hover:scale-110 ${className}`}
    />
  );

  const popupMessages = [
    {
      title: "Are you sure? 🥺",
      message: "I know I messed up, but I promise to make it up to you...",
      options: ["Yes, tell me more", "I need time"],
    },
    {
      title: "My Promises to You ❤️",
      message:
        "I promise to:\n• Always communicate openly and honestly\n• Put you first in my decisions\n• Show you love every single day\n• Never take you for granted again",
      options: ["I believe you", "Show me more"],
    },
    {
      title: "From My Heart 💝",
      message:
        "You mean everything to me. Your smile lights up my world, and I can't imagine my life without you. Will you give us another chance?",
      options: ["Yes ❤️", "I need to think"],
    },
    {
      title: "One Last Thing... 🌟",
      message:
        "Can we meet to talk in person? I have something special planned...",
      options: ["Show me where", "Not yet"],
    },
  ];

  const handlePopupResponse = (response: string) => {
    if (response.includes("need")) {
      toast.error("Take your time... I'll be here when you're ready 💔");
      setCurrentPopup(null);
      return;
    }

    if (
      currentPopup === popupMessages.length - 1 &&
      response === "Show me where"
    ) {
      setShowFinalLocation(true);
      setCurrentPopup(null);
      return;
    }

    if (
      response.includes("Yes") ||
      response.includes("believe") ||
      response.includes("Show")
    ) {
      setCurrentPopup((prev) => (prev !== null ? prev + 1 : null));
      toast.success("Thank you for giving me a chance ❤️");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeartbreak(false);
      setShowApology(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate through memories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemoryIndex((prev) => (prev + 1) % memories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (Math.random() > 0.8) {
      setHearts((prev) => [
        ...prev.slice(-20),
        {
          x,
          y,
          size: Math.random() * 20 + 10,
        },
      ]);
    }
  };

  const memories = [
    {
      image:
        "data:image/jpeg;base64,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",
      title: "Our Date",
      description:
        "When we ordered the chilly buff momo, and pizza; Tara cafe feri purai veg",
      icon: Coffee,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvJVvJ_vJtllYYej8Zyk7z9-k2FIgmGY3wQ&s",
      title: "Walks with you",
      description:
        "Your footsteps along with mine...boudha dekhi cafe samma...All the walking with you...",
      icon: Plane,
    },
    {
      image:
        "data:image/jpeg;base64,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",
      title: "Holding Hands",
      description:
        "Your rosy cheeks in the cold, warming my heart. Taking my hands to warm them up",
      icon: Stars,
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQkT5bNMsB-LXJYU_DnI3SgaWcHNw-cJAs1jVFIN9Y-WRr0O9E7K1rAra2uwvtNFPBBD9a1v6X45scRkyML9nLlky82b6E8_a3z7qpTvA",
      title: "Our First Meetup",
      description:
        "When you were looking so gorgeous, I kept reminding you... if you were cold to make you feel comfortable.",
      icon: Music2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507915135761-41a0a222c709?w=800&auto=format&fit=crop&q=60",
      title: "Coffee",
      description: "Everything was so mesmerizing with you around. I know, how lucky I am to have you in my life, so I am never gonna leave you...",
      icon: Cake,
    },
  ];

  const specialMoments = [
    {
      icon: Calendar,
      title: "Day We Met: At Christmas",
      description:
        "The day that changed my life forever...I could never take my eyes off from you after that.",
      color: "pink",
    },
    {
      icon: MessageCircleHeart,
      title: "First 'I Love You'",
      description: "Under the stars, my heart spoke truth",
      color: "purple",
    },
    {
      icon: Home,
      title: "Our First Place: Boudha",
      description: "The first time I saw you , I knew you were the one",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Late Night Calls",
      description: "All the talkings where we shared our thoughts and dreams",
      color: "pink",
    },
  ];

  const handleForgive = () => {
    setCurrentPopup(0);
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 3000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-red-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Toaster position="top-center" />

      {/* Particle hearts */}
      {hearts.map((heart, i) => (
        <Heart
          key={i}
          className="absolute text-pink-400 opacity-50 animate-float-away pointer-events-none"
          style={{
            left: heart.x,
            top: heart.y,
            width: heart.size,
            height: heart.size,
          }}
        />
      ))}

      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute animate-float text-pink-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      {showHeartbreak && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-pink-100 to-red-100 animate-fadeOut">
          <Heart className="w-32 h-32 text-red-500 animate-heartbeat" />
        </div>
      )}

      {showApology && (
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 text-center">
            <div className="flex items-center justify-center">
              <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-8 animate-slideDown">
                I'm Really, Really Sorry! Aakriti
              </h1>
              <h1 className="text-lg">😔</h1>
            </div>
            {/* Featured Memory */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-12 group">
              <img
                src={memories[activeMemoryIndex].image}
                alt={memories[activeMemoryIndex].title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                {/* <memories[activeMemoryIndex].icon className="w-12 h-12 mb-4 animate-bounce-slow" /> */}
                <h2 className="text-3xl font-bold mb-2 animate-slideIn">
                  {memories[activeMemoryIndex].title}
                </h2>
                <p className="text-xl opacity-90 animate-slideIn delay-100">
                  {memories[activeMemoryIndex].description}
                </p>
              </div>
            </div>

            {/* Special Moments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-12">
              {specialMoments.map((moment, index) => (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 group animate-slideIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <moment.icon
                    className={`w-12 h-12 mx-auto text-${moment.color}-500 mb-4 group-hover:animate-bounce-slow`}
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {moment.title}
                  </h3>
                  <p className="text-gray-600">{moment.description}</p>
                </div>
              ))}
            </div>

            {/* Memory Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {memories.map((memory, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                    <memory.icon className="w-8 h-8 mb-3 animate-bounce-slow" />
                    <h3 className="text-xl font-bold mb-2">{memory.title}</h3>
                    <p className="text-sm">{memory.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex flex-col items-center justify-center min-h-[600px] p-16 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg shadow-lg overflow-hidden">
              {/* Top stickers */}
              <div className="absolute top-4 left-8 transform -rotate-12">
                <Sticker />
              </div>
              <div className="absolute top-8 right-12 transform rotate-12">
                <Sticker />
              </div>

              {/* Left side stickers */}
              <div className="absolute left-4 top-1/3 transform -rotate-6">
                <Sticker />
              </div>
              <div className="absolute left-20 bottom-1/4 transform rotate-12">
                <Sticker className="scale-x-[-1]" />
              </div>

              {/* Right side stickers */}
              <div className="absolute right-4 top-1/3 transform rotate-6">
                <Sticker className="scale-x-[-1]" />
              </div>
              <div className="absolute right-20 bottom-1/4 transform -rotate-12">
                <Sticker />
              </div>

              {/* Bottom stickers */}
              <div className="absolute bottom-8 left-1/4 transform -rotate-12">
                <Sticker />
              </div>
              <div className="absolute bottom-12 right-1/4 transform rotate-12">
                <Sticker className="scale-x-[-1]" />
              </div>

              <div className="relative mb-8 z-10">
                {showHearts && (
                  <div className="absolute -top-16 left-0 right-0 flex justify-center">
                    {[...Array(3)].map((_, i) => (
                      <Heart
                        key={i}
                        className="text-pink-500 animate-bounce mx-2"
                        style={{ animationDelay: `${i * 200}ms` }}
                        size={24}
                      />
                    ))}
                  </div>
                )}
                <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                  I have much more to share with you...
                </h1>
              </div>

              <div className="space-y-4 z-10">
                <p className="text-xl text-gray-700 text-center italic">
                  But first, will you...
                </p>
                <div className="mt-40">
                  <button
                    onClick={handleForgive}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition hover:scale-105 animate-bounce"
                  >
                    Forgive Me? 🥺
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPopup !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 animate-slideIn">
            <h2 className="text-2xl font-bold mb-4">
              {popupMessages[currentPopup].title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line mb-6">
              {popupMessages[currentPopup].message}
            </p>
            <div className="flex gap-4 justify-center">
              {popupMessages[currentPopup].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handlePopupResponse(option)}
                  className={`px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 ${
                    index === 0
                      ? "bg-pink-500 hover:bg-pink-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final Location Popup */}
      {showFinalLocation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 animate-slideIn">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Meet Me Here ❤️</h2>
              <p className="text-gray-700 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3675242310246!2d85.33104667405306!3d27.705936625556237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196bc2f3dabb%3A0xf95bdb536e8560d8!2sCoffee%20Cloud%20Cafe!5e0!3m2!1sen!2snp!4v1736845321238!5m2!1sen!2snp"
                  width="400"
                  height="450"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <br />
                Today at sunset (6:30 PM)
                <br />
                I'll be waiting with for you... 🌹
              </p>
              <button
                onClick={() => setShowFinalLocation(false)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition transform hover:scale-105"
              >
                I'll Be There ❤️
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Celebration Sparkles */}
      {showSparkles && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-yellow-400 animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
