'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"manifest.json": "2505c9e0d3d8a391a4d18baf58cc975f",
"index.html": "9334baeb03c9ed1440525ec8c0a72966",
"/": "9334baeb03c9ed1440525ec8c0a72966",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "271fd6634aa69b114ed6c9da93bd44ea",
"assets/assets/images/dev_praying.png": "803d307314af25b9d71bcdd9c9dcd5a7",
"assets/assets/images/projects/unsyned/unsyned1.png": "212f4a1c262b30fb7e6a181f02cf95eb",
"assets/assets/images/projects/unsyned/unsyned_cover.png": "b2faa6b02dd4141d75ba8cf74dd43e19",
"assets/assets/images/projects/marketwolf/marketWolf_cover.jpg": "306bac87ba0681fb37f019021450d6eb",
"assets/assets/images/projects/marketwolf/marketWolf2.png": "4a3915638f7b16f52295afd72a845c89",
"assets/assets/images/projects/marketwolf/marketWolf1.png": "12054d888d33467222ebc51cb0d2f958",
"assets/assets/images/projects/picostone/picostone_image.jpeg": "5f14fe353c91c623c1828a9fbec994cc",
"assets/assets/images/projects/picostone/picostone3.jpg": "d77b97590925607ce5428cb2f119d922",
"assets/assets/images/projects/picostone/picostone2.jpg": "78c5bba53f9a776eb4029876f7a22358",
"assets/assets/images/projects/picostone/picostone_cover.png": "4d589cc5944a9706c8a924c628b1caa9",
"assets/assets/images/projects/picostone/picostone1.jpg": "c708b985e46397142c6729f149eb2c10",
"assets/assets/images/projects/paytm/paytm_logo.webp": "90e5f1829bd452e793062b10bb53dab1",
"assets/assets/images/projects/paytm/paytm_cover.jpeg": "b3918ef8e8d3989e7f0cd0824fd49bb1",
"assets/assets/images/projects/paytm/paytm_banner.png": "12c4032e434f19ab6690ca214ff41292",
"assets/assets/images/projects/paytm/paytm_design.webp": "3d2363c6b487db8f720aaf4030cbf7aa",
"assets/assets/images/projects/paytm/ppbl_cover.png": "dbb952f8b68b4326be167a981bd0e5a4",
"assets/assets/images/projects/paytm/ppbl_logo.png": "934a87ccdd3c92c602b12802668e5d7d",
"assets/assets/images/projects/koo/koo1.png": "9f515b3f0240fceb9aa68f5cb629c389",
"assets/assets/images/projects/koo/koo_cover.jpeg": "7c11753c433d7d049a148f2c5588d88b",
"assets/assets/images/projects/vams/vams_cover.png": "85fb3935eaec5e426db6a429be134399",
"assets/assets/images/projects/vams/vams1.png": "e68107f19c865a81726643bf0a5daeb9",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/app_store.png": "9e8a4fe8122340297c20b934fc986a08",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/ked27.png": "15d57628428d95ab37ebac8e1541dfbe",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/dev_meditate.png": "3d90db1b37a0008e76c92e9d4abb0410",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/json/experience.json": "2295bb7880a3e449593b3e98ddb03327",
"assets/assets/json/noteworthy_projects.json": "0ac507ece055259624b56d57b9875ae3",
"assets/assets/json/social_data.json": "8de880062a220506ef87d22069fb5c15",
"assets/assets/json/certifcations.json": "d9e25e7e5680292f03c5d4b9e5749314",
"assets/assets/json/projects.json": "2a026c1734f40a31613bfff303822a8d",
"assets/assets/json/colors.json": "e19c542906dd77fb84a358c028104fb8",
"assets/fonts/MaterialIcons-Regular.otf": "eb82c5e3d93be2be34b1df765cdf99e7",
"assets/NOTICES": "0d5d70a5839384b38c2353048a3e22c7",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "40469726c5ed792185741388e68dd9e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "38165ab4ad92f3a63022f09bd3024880",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "0b02a5f79a8c58caee927e4ae204aabf",
"assets/FontManifest.json": "ae729607bf6ac3fced1bb430ceed5c56",
"assets/AssetManifest.bin": "f957dd5f94f9295465a059e9d487f3ad",
"assets/AssetManifest.json": "2c62c66953b5884141285a5eadb07202",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"flutter_bootstrap.js": "1567101f27c453df300bdcd4c5cc269c",
"version.json": "8fe11124ea74a622a44a5e557961d86e",
"main.dart.js": "6d2ef6239a30342b7a12cf7b487e9318"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
