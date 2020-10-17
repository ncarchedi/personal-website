import Head from "next/head";
import config from "../../config";

export default function SEO({ title, description }) {
  const { title: siteTitle, description: siteDescription } = config;
  const expandedTitle = title ? `${title} - ${siteTitle}` : siteTitle;
  const metaDescription = description || siteDescription;

  return (
    <Head>
      <title>{expandedTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={expandedTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={expandedTitle} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
}
