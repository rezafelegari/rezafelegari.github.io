'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/apple-icon-120x120.png": "d1e0a56e5be5558c3fe840042a1d0d20",
"/apple-icon-144x144.png": "43ae17b81f352d80969827a45ef6a715",
"/apple-icon-76x76.png": "4a1424f78a79f8cceadff252ca8afa15",
"/ms-icon-310x310.png": "eb888d05269e1420cc629c831adc912f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/iran_yekan_mob_light_fa_num.ttf": "abb72bff27e98f5b815a74816a63544b",
"/assets/fonts/iran_yekan_mob_reg_fa_num.ttf": "d507fb9ef76a6aa4d0b42cf37dd64476",
"/assets/AssetManifest.json": "30564e4ef307df9c1237593331737c6b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"/assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"/assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"/assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"/assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"/assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"/assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"/assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"/assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"/assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"/assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"/assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"/assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"/assets/LICENSE": "7ea78aae5debc8d82b0e66ec12e6ed57",
"/assets/FontManifest.json": "4387537ac9a1e824f4040e6fcdb0086d",
"/assets/images/password.png": "efed17e79bbaeed27a189494afd6f8e5",
"/assets/images/forgot.png": "2f5590fef770ec63ca11a8a9e73e5009",
"/assets/images/logo.png": "19d11a0e42c1a4f624437a88b4d77ac5",
"/assets/images/fever.png": "d756481d002ad2110e7ab215dae30045",
"/apple-icon-180x180.png": "51784976b68c457eafd59358802395ec",
"/ms-icon-150x150.png": "c338a6a68dc873878f36005fceb84771",
"/index.html": "4ffe9060b0e5562d9b0dd2b6a38e3d61",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/favicon-16x16.png": "6d8f0d55c77512c6fab5ec72bd9636af",
"/android-icon-96x96.png": "769c2a84c533e96af81093ef871554ae",
"/main.dart.js": "5291ea5b807fe04f179c96c8728feba7",
"/android-icon-48x48.png": "66e439faed0ec3c552837932874915f7",
"/apple-icon.png": "9b65d9b4b54c138ed49ec958454d9772",
"/favicon-96x96.png": "769c2a84c533e96af81093ef871554ae",
"/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/android-icon-72x72.png": "9948de80f23b93f1ba1f37271cf76e45",
"/apple-icon-precomposed.png": "9b65d9b4b54c138ed49ec958454d9772",
"/favicon.ico": "f7f912438d0a1442e1f23d7dc6e47fc8",
"/apple-icon-72x72.png": "9948de80f23b93f1ba1f37271cf76e45",
"/ms-icon-144x144.png": "43ae17b81f352d80969827a45ef6a715",
"/android-icon-36x36.png": "fe623aae46f70d3b0eb160c423804494",
"/apple-icon-114x114.png": "6f779468365dbe0e9d7f86eef232155b",
"/apple-icon-152x152.png": "3d70c47a877f2ae239979bc34902c241",
"/android-icon-144x144.png": "43ae17b81f352d80969827a45ef6a715",
"/apple-icon-57x57.png": "0985c9ebdb534b4afdf624fa22646d15",
"/android-icon-192x192.png": "e07a02ece0a0c1d831567ddeeeb2eac8",
"/favicon-32x32.png": "c8f4deaaeddb6e16810fc9f3d8b94481",
"/manifest.json": "43345121a25a9a86c4a9b9883941a1af",
"/images/icons/icon-144x144.png": "60435284839552958c17e6f33b44b0e3",
"/images/icons/icon-128x128.png": "769d3c2549932f456e5d8f6987b5086d",
"/images/icons/icon-72x72.png": "04add063a1dce9e3d26af8a6bdc1c7c6",
"/images/icons/icon-384x384.png": "f2a6b5d788dfb74e3bd8be02b2f276ed",
"/images/icons/icon-192x192.png": "699d02738f08aca91ba231ab84229deb",
"/images/icons/icon-96x96.png": "e1fbc76d9aa44fbc04641489093862bb",
"/images/icons/icon-512x512.png": "f2a6b5d788dfb74e3bd8be02b2f276ed",
"/images/icons/icon-152x152.png": "2bac5fcab00dcdfd1c2e729a517f9b5b",
"/apple-icon-60x60.png": "7265315e77c8db324c89a786d0e7a172",
"/ms-icon-70x70.png": "581903b48b37ff6cb146aa4ef36fa3a6"
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
