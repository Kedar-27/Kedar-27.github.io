// Generated file. Do not edit.

const serviceWorkerVersion = '"3980482825" /* Flutter's service worker is deprecated and will be removed in a future Flutter release. */';

const scriptTags = document.getElementsByTagName("script");
const scriptTag = scriptTags[scriptTags.length - 1];
const parentNode = scriptTag.parentNode;

// Function to load the main.dart.js file and complete bootstrapping
function loadMainDartJs() {
  const script = document.createElement('script');
  script.src = 'main.dart.js';
  script.type = 'application/javascript';
  parentNode.appendChild(script);
}

// Wait for service worker if supported
if ('serviceWorker' in navigator) {
  // Service workers are supported. Use them.
  window.addEventListener('load', function () {
    // Always load the main app immediately - don't wait for service worker
    loadMainDartJs();
    
    // Register service worker in the background for offline capabilities
    navigator.serviceWorker.register('flutter_service_worker.js?v=' + serviceWorkerVersion)
      .then(function (registration) {
        console.log('Service worker registered.');
        
        registration.onupdatefound = function () {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = function () {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New content is available; refresh.
                console.log('New version available; refreshing...');
                window.location.reload();
              } else {
                // First-time install
                console.log('App installed offline capabilities.');
              }
            }
          };
        };
      })
      .catch(function (e) {
        console.error('Failed to register service worker:', e);
      });
  });
} else {
  // Service workers not supported. Just load the main.dart.js file
  loadMainDartJs();
}
