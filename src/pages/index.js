import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import SEO from "../components/seo";

const socialList = [
  {
    title: "Email",
    url: "mailto:nick.carchedi@gmail.com",
    icon: <FaRegEnvelope />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nickcarchedi/",
    icon: <FaLinkedinIn />,
  },
  {
    title: "GitHub",
    url: "https://github.com/ncarchedi",
    icon: <FaGithub />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/NickCarchedi",
    icon: <FaTwitter />,
  },
];

function Emoji({ symbol, label, ...otherProps }) {
  return (
    <span role="img" aria-label={label} {...otherProps}>
      {symbol}
    </span>
  );
}

function SocialLink({ title, url, icon }) {
  return (
    <a
      className="mr-6 hover:text-red-700 sm:mr-8 md:mr-10 lg:mr-12 xl:mr-16"
      href={url}
      target="_blank"
      rel="noreferrer"
      title={title}
      aria-label={title}
    >
      {icon}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div className="px-10 py-6 md:px-20 md:py-12 lg:py-16 xl:px-24">
        <h1 className="mb-6 font-serif text-5xl font-bold sm:text-6xl md:text-7xl md:mb-10 xl:text-8xl">
          <span className="inline-block -ml-2 animate-wave origin-nearly-bottom-right">
            <Emoji symbol="👋" label="wave" />
          </span>{" "}
          I'm Nick
        </h1>
        <div className="flex mb-8 text-2xl sm:text-3xl md:text-4xl xl:text-5xl xl:mb-12">
          {socialList.map((social) => (
            <SocialLink
              key={social.url}
              title={social.title}
              url={social.url}
              icon={social.icon}
            />
          ))}
        </div>
        <div className="max-w-screen-lg text-2xl sm:text-3xl md:text-4xl md:leading-snug md:font-light lg:text-5xl">
          <p className="mb-5">
            I'm a self-taught{" "}
            <span className="px-1 text-red-700 bg-red-200">developer</span> with
            experience as a{" "}
            <span className="px-1 text-indigo-700 bg-indigo-200">
              technical product manager
            </span>
            ,{" "}
            <span className="px-1 text-green-700 bg-green-200">
              startup executive
            </span>{" "}
            and{" "}
            <span className="px-1 text-orange-700 bg-orange-200">
              data scientist
            </span>.
          </p>
          <p>
            Let's solve some problems together{" "}
            <Emoji symbol="🛠️" label="tools" /> and make things go{" "}
            <Emoji symbol="📈" label="chart increasing" />.
          </p>
        </div>
        <div className="flex items-center mt-4 sm:mt-6 md:mt-8 xl:mt-10">
          <a
            href="mailto:nick.carchedi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="px-4 py-2 text-3xl text-white bg-red-700 rounded cursor-pointer cta sm:text-4xl md:px-6 md:py-3 lg:px-8">
              Hire Me
            </div>
          </a>
          <span className="ml-4 text-6xl animate-point md:text-7xl">
            <Emoji symbol="👈" label="point left" />
          </span>
        </div>
      </div>
    </>
  );
}
