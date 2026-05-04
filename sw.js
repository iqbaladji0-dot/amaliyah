const CACHE_NAME = 'amaliyah-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Network-first strategy - always try to fetch fresh content
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
