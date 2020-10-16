import React from "react";
import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import SEO from "../components/seo";

const socialList = [
  {
    url: "mailto:nick.carchedi@gmail.com",
    icon: <FaRegEnvelope />,
  },
  {
    url: "https://www.linkedin.com/in/nickcarchedi/",
    icon: <FaLinkedinIn />,
  },
  {
    url: "https://github.com/ncarchedi",
    icon: <FaGithub />,
  },
  {
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

function SocialLink({ url, icon }) {
  return (
    <a
      className="mr-6 sm:mr-8 md:mr-10 lg:mr-12 xl:mr-16"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
}

function Highlight({ color, children }) {
  return (
    <span className={`text-${color}-700 bg-${color}-200 px-1`}>{children}</span>
  );
}

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div className="px-10 py-6 md:px-20 md:py-12 lg:py-16 xl:px-24">
        <h1 className="font-serif font-bold mb-6 text-5xl sm:text-6xl md:text-7xl md:mb-10 xl:text-8xl">
          <span className="-ml-2 inline-block animate-wave origin-nearly-bottom-right">
            <Emoji symbol="👋" label="wave" />
          </span>{" "}
          I'm Nick
        </h1>
        <div className="flex mb-8 text-2xl sm:text-3xl md:text-4xl xl:text-5xl xl:mb-12">
          {socialList.map((social) => (
            <SocialLink key={social.url} url={social.url} icon={social.icon} />
          ))}
        </div>
        <div className="text-2xl max-w-screen-lg sm:text-3xl md:text-4xl md:leading-snug md:font-light lg:text-5xl xl:font-normal">
          <p className="mb-5">
            I'm a self-taught <Highlight color="red">developer</Highlight> with
            experience as a{" "}
            <Highlight color="indigo">technical product manager</Highlight>,{" "}
            <Highlight color="green">startup executive</Highlight> and{" "}
            <Highlight color="orange">data scientist</Highlight>.
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
            <div className="cta px-4 py-2 text-3xl bg-red-500 text-white cursor-pointer rounded sm:text-4xl md:px-6 md:py-3 lg:px-8">
              Hire Me
            </div>
          </a>
          <span className="animate-point ml-4 text-6xl md:text-7xl">
            <Emoji symbol="👈" label="point left" />
          </span>
        </div>
      </div>
    </>
  );
}
