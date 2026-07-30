import { site, absoluteUrl } from "./site";
import type { Service, Faq } from "./services";
import type { BlogPost } from "./blog";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: site.name,
    image: absoluteUrl("/opengraph-image"),
    url: site.url,
    telephone: site.phoneIntl,
    email: site.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHours: site.openingHours,
    sameAs: [site.social.instagram, site.social.linkedin],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.owner,
    jobTitle: "Digital Marketer & Paid Ads Specialist",
    worksFor: {
      "@type": "Organization",
      name: site.name,
    },
    url: absoluteUrl("/about"),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      addressCountry: site.address.addressCountry,
    },
    sameAs: [site.social.instagram, site.social.linkedin],
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phoneIntl,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.address.addressLocality,
        addressRegion: site.address.addressRegion,
        addressCountry: site.address.addressCountry,
      },
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl("/opengraph-image"),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: site.owner,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
