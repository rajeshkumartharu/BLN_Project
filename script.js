// Mobile menu toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// structured-data.js

// JSON-LD data
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BLN Construction Pvt. Ltd",
  "image": "https://yourwebsite.com/logo.jpg",
  "@id": "https://yourwebsite.com",
  "url": "https://yourwebsite.com",
  "telephone": "+977-9848112745",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Banke",
    "addressLocality": "Nepalgunj",
    "addressRegion": "Lumbini",
    "postalCode": "00000",
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.05,
    "longitude": 81.62
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/BLNConstructionNepal",
    "https://www.instagram.com/BLNConstructionNepal",
    "https://www.tiktok.com/@BLNConstructionNepal"
  ]
};

// Create a script element
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLdData);

// Append to head
document.head.appendChild(script);
