
import React from 'react';
import { SEOData } from '../types';

interface SEOProps {
  data: SEOData;
  page: string;
}

export const SEO: React.FC<SEOProps> = ({ data, page }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Arkayuga EduTech",
    "url": "https://www.arkayuga.com",
    "logo": "https://www.arkayuga.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "description": data.description
  };

  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};
