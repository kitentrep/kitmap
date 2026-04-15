/* Minimal Service Worker for PWA compliance */
const CACHE_NAME = 'kit-map-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // PWA criteria require a fetch listener
  event.respondWith(
    fetch(event.request).catch(() => {
      // Basic offline support could be added here later
    })
  );
});
