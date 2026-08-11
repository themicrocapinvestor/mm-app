/* Microcap Minute app hub: network passthrough. Present so the page meets the
   installability criteria; nothing is cached, the live page always wins. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
