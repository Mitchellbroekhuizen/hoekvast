// Hoekvast service worker: app werkt ook zonder internet (bijv. op een parkeerterrein)
const CACHE = "hoekvast-v5";
// Herkenningsmodel (TensorFlow.js + COCO-SSD) ook offline bewaren
const CDN = ["cdn.jsdelivr.net", "storage.googleapis.com", "tfhub.dev", "www.kaggle.com"];
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Eerst netwerk (zodat updates direct binnenkomen), cache als je offline bent
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const u = new URL(e.request.url);
        if ((res.ok && u.origin === location.origin) || ((res.ok || res.type === "opaque") && CDN.includes(u.hostname))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
