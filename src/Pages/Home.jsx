import React, { useState, useEffect, useCallback, memo } from "react"
import { Helmet } from "react-helmet-async"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Youtube, Facebook, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Custom SVG Icons (not available in lucide-react)
const TikTokIcon = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 45 45"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Tiktok</title>
    <g
      id="Icon/Social/tiktok-color"
      stroke="none"
      strokeWidth="8"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Group-7" transform="translate(8.000000, 6.000000)">
        <path
          d="M29.5248245,9.44576327 C28.0821306,9.0460898 26.7616408,8.29376327 25.6826204,7.25637551 C25.5109469,7.09719184 25.3493143,6.92821224 25.1928245,6.75433469 C23.9066204,5.27833469 23.209151,3.38037551 23.2336408,1.42290612 L17.3560898,1.42290612 L17.3560898,23.7086204 C17.3560898,27.7935184 15.1520082,29.9535184 12.416498,29.9535184 C11.694049,29.9611102 10.9789469,29.8107429 10.3213959,29.5124571 C9.6636,29.2144163 9.07951837,28.7758041 8.60955918,28.2272327 C8.1398449,27.6789061 7.79551837,27.0340898 7.60180408,26.3385796 C7.4078449,25.6430694 7.36890612,24.9132735 7.48743673,24.2008653 C7.60596735,23.4884571 7.87902857,22.8105796 8.28751837,22.2154776 C8.69625306,21.6198857 9.23037551,21.1212735 9.85241633,20.7546612 C10.474702,20.3878041 11.1694776,20.1617633 11.8882531,20.0924571 C12.6070286,20.023151 13.3324163,20.1122939 14.0129878,20.3535184 L14.0129878,14.3584163 C13.4889061,14.2430694 12.9530694,14.1862531 12.416498,14.1894367 L12.3917633,14.1894367 C10.2542939,14.1943347 8.16604898,14.8325388 6.39127347,16.0234776 C4.61649796,17.2149061 3.23429388,18.9051918 2.41976327,20.8812735 C1.60523265,22.8578449 1.39486531,25.0310694 1.8151102,27.1269061 C2.2351102,29.2227429 3.2671102,31.1469061 4.78033469,32.6564571 C6.29380408,34.1660082 8.22066122,35.1933551 10.3174776,35.6082122 C12.4142939,36.0230694 14.5870286,35.8073143 16.561151,34.9878857 C18.5355184,34.1682122 20.2226204,32.7820898 21.409151,31.0041306 C22.5959265,29.2264163 23.2289878,27.136702 23.228498,24.9992327 L23.228498,12.8155592 C25.5036,14.392702 28.2244163,15.134498 31.1289061,15.1886204 L31.1289061,9.68551837 C30.5869469,9.66568163 30.049151,9.5851102 29.5248245,9.44576327"
          id="Fill-1"
          fill="#FE2C55"
        ></path>
        <path
          d="M25.195102,6.75428571 C24.7946939,6.47510204 24.4148571,6.1675102 24.0587755,5.83346939 C22.8210612,4.66016327 22.0062857,3.11020408 21.7420408,1.42530612 C21.6622041,0.954367347 21.6220408,0.47755102 21.6220408,0 L15.7444898,0 L15.7444898,22.6408163 C15.7444898,27.5069388 13.5404082,28.5183673 10.804898,28.5183673 C10.0829388,28.5262041 9.36783673,28.3758367 8.71028571,28.0773061 C8.0524898,27.7792653 7.46791837,27.3406531 6.99820408,26.7920816 C6.5282449,26.2437551 6.18440816,25.5989388 5.99044898,24.9034286 C5.7964898,24.2079184 5.75755102,23.4781224 5.87583673,22.7657143 C5.99461224,22.053551 6.26767347,21.3756735 6.67640816,20.7800816 C7.08489796,20.1847347 7.61902041,19.6861224 8.24106122,19.3195102 C8.86334694,18.952898 9.55787755,18.7266122 10.276898,18.6573061 C10.9959184,18.588 11.7208163,18.6773878 12.4016327,18.9183673 L12.4016327,12.9328163 C5.40489796,11.8236735 0,17.4783673 0,23.5760816 C0.00465306122,26.4426122 1.14514286,29.1898776 3.17191837,31.216898 C5.19869388,33.2434286 7.94595918,34.3839184 10.8124898,34.3885714 C16.7730612,34.3885714 21.6220408,30.7444898 21.6220408,23.5760816 L21.6220408,11.3924082 C23.8995918,12.9795918 26.6204082,13.7142857 29.524898,13.7632653 L29.524898,8.26040816 C27.9658776,8.18914286 26.4617143,7.66604082 25.195102,6.75428571"
          id="Fill-3"
          fill="#25F4EE"
        ></path>
        <path
          d="M21.6220653,23.5764245 L21.6220653,11.392751 C23.8996163,12.9794449 26.6204327,13.7141388 29.5251673,13.7633633 L29.5251673,9.44581224 C28.0822286,9.04613878 26.7617388,8.29381224 25.6824735,7.25617959 C25.5110449,7.09724082 25.3494122,6.92826122 25.1926776,6.75438367 C24.7922694,6.4752 24.4126776,6.16736327 24.056351,5.83356735 C22.8186367,4.66026122 22.0041061,3.11030204 21.7396163,1.42540408 L17.3730857,1.42540408 L17.3730857,23.7111184 C17.3730857,27.7957714 15.1690041,29.9560163 12.4334939,29.9560163 C11.6569224,29.9538122 10.8918612,29.7681796 10.2005143,29.414302 C9.50941224,29.0601796 8.91186122,28.5476082 8.45635102,27.9182204 C7.49071837,27.3946286 6.72712653,26.5636898 6.2865551,25.5571592 C5.84573878,24.5508735 5.75341224,23.4260571 6.02377959,22.3609959 C6.29390204,21.2959347 6.91177959,20.3516082 7.77896327,19.6771592 C8.64639184,19.0027102 9.71365714,18.6365878 10.8122694,18.6365878 C11.3564327,18.6412408 11.8961878,18.7362612 12.4090041,18.9182204 L12.4090041,14.1894857 C10.304351,14.1921796 8.24647347,14.8093224 6.48786122,15.9657306 C4.72924898,17.1221388 3.3470449,18.7666286 2.51047347,20.6978939 C1.67390204,22.6291592 1.41969796,24.7627102 1.77896327,26.8362612 C2.13822857,28.9098122 3.09553469,30.8334857 4.53308571,32.3704653 C6.36271837,33.6848327 8.55945306,34.3906286 10.8122694,34.3884296 C16.7730857,34.3884296 21.6220653,30.7445878 21.6220653,23.5764245"
          id="Fill-5"
          fill="#000000"
        ></path>
      </g>
    </g>
  </svg>
);

const XIcon = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
          <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
          Ready to Innovate
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Network
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Engineer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link, label }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <button className="group relative p-3"
      aria-label={label}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Network & Telecom Student", "Tech Enthusiast"];
const TECH_STACK = ["MikroTik", "Cisco", "Windows Server", "VirtualBox"];
const SOCIAL_LINKS = [
  { icon: Youtube, link: "https://youtube.com/@Xeltschmerz", label: "YouTube Profile" },
  { icon: TikTokIcon, link: "https://www.tiktok.com/@Xeltschmerz", label: "TikTok Profile" },
  { icon: Instagram, link: "https://www.instagram.com/@Xeltschmerz", label: "Instagram Profile" },
  { icon: Facebook, link: "https://www.facebook.com/share/1CzH6x59Aa/", label: "Facebook Profile" },
  { icon: XIcon, link: "https://x.com/Xeltschmerz", label: "X Profile" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/fatih-fauzan-achyadi-463743426/", label: "LinkedIn Profile" },
  { icon: Github, link: "https://github.com/Xeltschmerz", label: "GitHub Profile" }
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <>
      <Helmet>
        <title>Fatih Faudzan Achyadi — Network Engineer</title>
        <meta name="description" content="Website resmi Fatih Faudzan Achyadi, Network Engineer. Merancang, mengelola, dan mengoptimalkan jaringan komputer serta infrastruktur IT yang aman, stabil, dan efisien." />
     <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://djabenk.net" />
        <meta property="og:title" content="Fatih Faudzan Achyadi — Network Engineer" />
     <meta property="og:description" content="Website resmi dan portofolio Fatih Faudzan Achyadi, Network Engineer." />
        <meta property="og:url" content="https://djabenk.net" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Fatih Faudzan Achyadi",
            "jobTitle": "Network Engineer",
            "url": "https://djabenk.net",
            "sameAs": [
              "https://youtube.com/@Xeltschmerz",
              "https://www.tiktok.com/@Xeltschmerz",
              "https://www.instagram.com/@Xeltschmerz",
              "https://www.facebook.com/share/1CzH6x59Aa/",
              "https://x.com/Xeltschmerz",
              "https://www.linkedin.com/in/fatih-fauzan-achyadi-463743426/",
              "https://github.com/Xeltschmerz"
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-[#030014] overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]" id="Home">
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="container mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
              {/* Left Column */}
              <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0"
                data-aos="fade-right"
                data-aos-delay="200">
                <div className="space-y-4 sm:space-y-6">
                  <StatusBadge />
                  <MainTitle />

                  {/* Typing Effect */}
                  <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                    <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                      {text}
                    </span>
                    <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                    data-aos="fade-up"
                    data-aos-delay="1000">
                    Merancang, mengelola, dan mengoptimalkan jaringan komputer serta infrastruktur IT yang aman, stabil, dan efisien.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                    {TECH_STACK.map((tech, index) => (
                      <TechStack key={index} tech={tech} />
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                  </div>

                  {/* Social Links */}
                  <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                    {SOCIAL_LINKS.map((social, index) => (
                      <SocialLink key={index} {...social} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - WebM Video */}
              <div className="w-full py-0 md:py-[10%] sm:py-0 lg:w-1/2 h-[260px] sm:h-[400px] lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2  mt-5 sm:mt-0"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                data-aos="fade-left"
                data-aos-delay="600">
                <div className="relative w-full opacity-90">
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                    isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                  }`}>
                  </div>

                  <div className={`relative lg:left-12 z-10 w-full opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                  }`}>
                    <img
                      src="Animation1.gif"
                      alt="Developer Animation"
                      className={`w-full h-full object-contain transition-all duration-500 ${
                        isHovering 
                          ? "scale-[95%] sm:scale-[90%] md:scale-[90%] lg:scale-[90%] rotate-2" 
                          : "scale-[90%] sm:scale-[80%] md:scale-[80%] lg:scale-[80%]"
                      }`}
                    />
                  </div>

                  <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                    isHovering ? "opacity-50" : "opacity-20"
                  }`}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Home);