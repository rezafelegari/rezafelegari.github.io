'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/iran_yekan_mob_light_fa_num.ttf": "abb72bff27e98f5b815a74816a63544b",
"/assets/fonts/iran_yekan_mob_reg_fa_num.ttf": "d507fb9ef76a6aa4d0b42cf37dd64476",
"/assets/AssetManifest.json": "08423463951db30e326c7911cd5e6727",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/LICENSE": "208421f621a24b0c576912860e8579ab",
"/assets/FontManifest.json": "0fa4596848cf1ae456bcb6adc62e2243",
"/assets/images/logo.png": "19d11a0e42c1a4f624437a88b4d77ac5",
"/index.html": "89785851368d424be3d0f8b214d40ab5",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/main.dart.js": "8dead17b6f4a319aa56cb650febc21c2",
"/manifest.json": "da6bc2cf224a2da53970b0eff3b9dfdf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
