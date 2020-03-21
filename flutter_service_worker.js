'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "310773077d48f501fb40c896eb1b273b",
"/assets\assets\reza.jpg": "c6febe72809e0471deac315fc5a21418",
"/assets\FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "72556108f61238298b9454720068e168",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-brands-400.ttf": "51d23d1c30deda6f34673e0d5600fd38",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-regular-400.ttf": "d51b09f7b8345b41dd3b2201f653c62b",
"/assets\packages\font_awesome_flutter\lib\fonts\fa-solid-900.ttf": "0ea892e09437fcaa050b2b15c53173b7",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "0954dba73d75c6b55473ae258dd26d08",
"/main.dart.js": "8b3271d905a70f9546ae5e19ee3ee727",
"/manifest.json": "414ba09b3ae1acd2cfe03337e3b79336"
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
