// QuickRide Service Worker
const CACHE_NAME = 'quickride-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/assets/images/mockup.webp',
  '/assets/images/appstore.webp',
  '/assets/images/playstore.webp',
  '/assets/favicon/favicon.ico',
  '/assets/favicon/apple-touch-icon.png',
  '/assets/favicon/favicon.svg',
  '/assets/favicon/favicon-96x96.png',
  '/assets/favicon/web-app-manifest-192x192.png',
  '/assets/favicon/web-app-manifest-512x512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 