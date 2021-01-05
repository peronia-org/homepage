import React from 'react';
import { Helmet, HelmetProps } from 'react-helmet';

export type SEOProps = HelmetProps & {
  children?: React.ReactChild;
  description?: string;
  image?: string;
  largeImage?: boolean;
};

export default function SEO({
  children,
  description,
  image,
  largeImage,
  title,
  ...props,
}: SEOProps) {
  return (
    <Helmet title={title} {...props}>
      {children}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image} />}
      {image && !largeImage && <meta name="twitter:card" content="summary" />}
      {image &&
        largeImage && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
      <meta name="twitter:card" content="@PeroniaOrg" />
      <meta name="twitter:creator" content="@PeroniaOrg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111827" />
      <meta name="msapplication-TileColor" content="#111827" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}
