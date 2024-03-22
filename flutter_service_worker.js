'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "de0d75c7060885fb1c1bec22432b5026",
"/": "de0d75c7060885fb1c1bec22432b5026",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/fonts/MaterialIcons-Regular.otf": "b1654b0dbb0ad1d5e3569acb985ef4aa",
"assets/AssetManifest.bin.json": "648164ae4b63a67c7579c40d7ee2a14c",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/dev_meditate.png": "3d90db1b37a0008e76c92e9d4abb0410",
"assets/assets/images/app_store.png": "9e8a4fe8122340297c20b934fc986a08",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/projects/picostone/picostone_image.jpeg": "5f14fe353c91c623c1828a9fbec994cc",
"assets/assets/images/projects/picostone/picostone3.jpg": "d77b97590925607ce5428cb2f119d922",
"assets/assets/images/projects/picostone/picostone2.jpg": "78c5bba53f9a776eb4029876f7a22358",
"assets/assets/images/projects/picostone/picostone_cover.png": "4d589cc5944a9706c8a924c628b1caa9",
"assets/assets/images/projects/picostone/picostone1.jpg": "c708b985e46397142c6729f149eb2c10",
"assets/assets/images/projects/marketwolf/marketWolf_cover.jpg": "306bac87ba0681fb37f019021450d6eb",
"assets/assets/images/projects/marketwolf/marketWolf1.png": "12054d888d33467222ebc51cb0d2f958",
"assets/assets/images/projects/marketwolf/marketWolf2.png": "4a3915638f7b16f52295afd72a845c89",
"assets/assets/images/projects/vams/vams1.png": "e68107f19c865a81726643bf0a5daeb9",
"assets/assets/images/projects/vams/vams_cover.png": "85fb3935eaec5e426db6a429be134399",
"assets/assets/images/projects/paytm/ppbl_cover.png": "dbb952f8b68b4326be167a981bd0e5a4",
"assets/assets/images/projects/paytm/paytm_banner.png": "12c4032e434f19ab6690ca214ff41292",
"assets/assets/images/projects/paytm/paytm_design.webp": "3d2363c6b487db8f720aaf4030cbf7aa",
"assets/assets/images/projects/paytm/paytm_logo.webp": "90e5f1829bd452e793062b10bb53dab1",
"assets/assets/images/projects/paytm/ppbl_logo.png": "934a87ccdd3c92c602b12802668e5d7d",
"assets/assets/images/projects/paytm/paytm_cover.jpeg": "b3918ef8e8d3989e7f0cd0824fd49bb1",
"assets/assets/images/projects/koo/koo1.png": "9f515b3f0240fceb9aa68f5cb629c389",
"assets/assets/images/projects/koo/koo_cover.jpeg": "7c11753c433d7d049a148f2c5588d88b",
"assets/assets/images/projects/unsyned/unsyned_cover.png": "b2faa6b02dd4141d75ba8cf74dd43e19",
"assets/assets/images/projects/unsyned/unsyned1.png": "212f4a1c262b30fb7e6a181f02cf95eb",
"assets/assets/images/ked27.png": "15d57628428d95ab37ebac8e1541dfbe",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/dev_praying.png": "803d307314af25b9d71bcdd9c9dcd5a7",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/json/noteworthy_projects.json": "0ac507ece055259624b56d57b9875ae3",
"assets/assets/json/social_data.json": "8de880062a220506ef87d22069fb5c15",
"assets/assets/json/projects.json": "2a026c1734f40a31613bfff303822a8d",
"assets/assets/json/certifcations.json": "d9e25e7e5680292f03c5d4b9e5749314",
"assets/assets/json/experience.json": "2295bb7880a3e449593b3e98ddb03327",
"assets/assets/json/colors.json": "e19c542906dd77fb84a358c028104fb8",
"assets/AssetManifest.bin": "57e03a3886a3afd1c8f018cd3e78785d",
"assets/NOTICES": "3ec235325d148d49378787fd3617bc8c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "781b07dae47f4e6c89811824a2263f47",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3285d1df88aaaab23b00d9a2ee14905f",
"assets/AssetManifest.json": "2ed3c02c6f643800f307fe26624afa32",
"version.json": "8fe11124ea74a622a44a5e557961d86e",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"manifest.json": "1b26be4ce25de228782ac6f74f29e2fd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "3d8e1f5392d02f1063a752d87c8f3f5a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
