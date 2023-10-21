import Head from "next/head";
import Script from "next/script";
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Friends IT Solution" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-781TZL953Q`}
        />
      </>
      <>
        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
             gtag('config', 'G-781TZL953Q');`,
          }}
        />
      </>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Friends IT Solution | Toufiqul Islam",
  keywords:
    "WordPress Website, WordPress Themes, WooCommerce Website, Online shop, eCommerce Website Developer, Frontend Web Development, Mern stack Development, Google Analytics and conversion API, Digital Marketing, Social Media Marketing, Lead Generation, Email Marketing ",
  description:
    "Friends IT Solution  is specializing in completely custom  website development for web development agencies, designers, small businesses,  &amp; more.",
};

export default Meta;
