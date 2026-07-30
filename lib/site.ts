// Central place for brand constants (NAP, contact links, site URL).
// Update these once and every page/schema stays in sync.

export const site = {
  name: "Digital Kavin",
  owner: "Kavin",
  tagline: "Digital Marketer & Paid Ads Specialist in Chennai",
  url: "https://digitalkavin.com", // TODO: replace with real production domain
  email: "kaving2245@gmail.com",
  phoneDisplay: "+91 63808 57154",
  phoneIntl: "+916380857154",
  whatsappNumber: "916380857154",
  whatsappDefaultText:
    "Hi Kavin, I found your website and I'm interested in your services.",
  address: {
    // Placeholder — replace with the real registered/office address.
    streetAddress: "No. 12, Anna Salai",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600002",
    addressCountry: "IN",
  },
  geo: {
    // Placeholder coordinates for central Chennai — replace with exact office location.
    latitude: 13.0827,
    longitude: 80.2707,
  },
  openingHours: "Mo-Sa 10:00-19:00",
  social: {
    instagram: "https://instagram.com/digitalkavin", // placeholder
    linkedin: "https://linkedin.com/in/digitalkavin", // placeholder
  },
} as const;

export function whatsappLink(customText?: string) {
  const text = encodeURIComponent(customText ?? site.whatsappDefaultText);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
