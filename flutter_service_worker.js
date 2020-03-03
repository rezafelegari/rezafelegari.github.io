'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/apple-icon-120x120.png": "408dc51433ac0d82255139f8278b40aa",
"/apple-icon-144x144.png": "0b17151615c4c185b0bb875e5868df3c",
"/apple-icon-76x76.png": "2f43c7f6bed7c233e988a6efef932d4e",
"/ms-icon-310x310.png": "be11f0e0c96b1e2d1f48ab15b802c07e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/iran_yekan_mob_light_fa_num.ttf": "abb72bff27e98f5b815a74816a63544b",
"/assets/fonts/iran_yekan_mob_reg_fa_num.ttf": "d507fb9ef76a6aa4d0b42cf37dd64476",
"/assets/AssetManifest.json": "08423463951db30e326c7911cd5e6727",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/LICENSE": "208421f621a24b0c576912860e8579ab",
"/assets/FontManifest.json": "0fa4596848cf1ae456bcb6adc62e2243",
"/assets/images/logo.png": "19d11a0e42c1a4f624437a88b4d77ac5",
"/apple-icon-180x180.png": "c3bb789701236edf59d6a55b85e374f3",
"/ms-icon-150x150.png": "3a95559dbf3ddb1c69b5b67e177d2530",
"/index.html": "89785851368d424be3d0f8b214d40ab5",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/favicon-16x16.png": "d093adf7c0371a99e329b68d7c066a94",
"/android-icon-96x96.png": "bc1fd1f2194c8a8a4446c7d56acd6a64",
"/main.dart.js": "e98e528b48115ad1ad73f268d252e818",
"/android-icon-48x48.png": "64d5c6efda3353bb92bceeb2f938eb42",
"/apple-icon.png": "78a0480a9efe82e5268ce77dbbbde0bb",
"/favicon-96x96.png": "bc1fd1f2194c8a8a4446c7d56acd6a64",
"/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/android-icon-72x72.png": "d963634f5940fa40357eaa432abef214",
"/apple-icon-precomposed.png": "78a0480a9efe82e5268ce77dbbbde0bb",
"/favicon.ico": "fbfbfc2a4fd6b6cca704bf73c992ebe4",
"/apple-icon-72x72.png": "d963634f5940fa40357eaa432abef214",
"/ms-icon-144x144.png": "0b17151615c4c185b0bb875e5868df3c",
"/android-icon-36x36.png": "03df11a852a6982b8e798df0343cc355",
"/apple-icon-114x114.png": "38641e65f6dabee59811d4879e4139a3",
"/apple-icon-152x152.png": "918343aded5cdeeffcaad0a1bc75c5bb",
"/android-icon-144x144.png": "0b17151615c4c185b0bb875e5868df3c",
"/apple-icon-57x57.png": "cc66fa007756f511013dae235287a823",
"/android-icon-192x192.png": "13cf24cdecd867b833e4006048851a4e",
"/favicon-32x32.png": "19629a056a1ff6fcf435c42777a1f2ab",
"/manifest.json": "9e0b16ddee77a5ae82f277556e685602",
"/images/icons/icon-144x144.png": "49ddfaa4920aece6aea789bcad3f1330",
"/images/icons/icon-128x128.png": "faffab87e8c35ce19377b24a2104326d",
"/images/icons/icon-72x72.png": "683d4b3ba171b30ddb07738aec22e346",
"/images/icons/icon-384x384.png": "2bc3bc49f8cac82f31c9cd705c936062",
"/images/icons/icon-192x192.png": "861e048ccf4f8cb7f57886e63300ee9a",
"/images/icons/icon-96x96.png": "cae27c7c821f4a0d751958197ba0c707",
"/images/icons/icon-512x512.png": "bdf129440d44735fdf2d4852d1bfe7e8",
"/images/icons/icon-152x152.png": "c3de14a6fc370f745b49b9c222d3689d",
"/apple-icon-60x60.png": "d5d0a8bd6544848935d45587674c311b",
"/ms-icon-70x70.png": "afb6ff1efefbcb93be69093bd56a2b07"
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
