import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = "Leela Rani Eagappan | Division T Director Candidate | Toastmasters District 80",
  description = "Official portfolio of Leela Rani Eagappan, Division T Director candidate for Toastmasters District 80. Discover vision, leadership experience, and achievements.",
  keywords = "Leela Rani Eagappan, Toastmasters, Division T Director, Leadership, District 80, Portfolio",
  image = "https://maksha.github.io/leelarani/screen.png", // absolute or og image
  url = "https://maksha.github.io/leelarani/",
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
