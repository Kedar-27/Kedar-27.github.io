// Generated file. Do not edit.

const serviceWorkerVersion = '"3906643668"';

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
    // Register service worker
    navigator.serviceWorker.register('flutter_service_worker.js?v=' + serviceWorkerVersion)
      .then(function (registration) {
        // Only show message on success or if registration exists
        // We handle the onUpdateFound separately
        if (!registration.active) {
          console.log('Service worker registered.');
        }
        
        registration.onupdatefound = function () {
          const installingWorker = registration.installing;
          installingWorker.onstatechange = function () {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New content is available; refresh.
                console.log('New version available; refreshing...');
                window.location.reload();
              } else {
                // First-time install, nothing to do
                console.log('App installed offline capabilities.');
              }
            }
          };
        };
        
        // Complete bootstrapping if service worker is already active
        if (registration.active) {
          loadMainDartJs();
        }
      })
      .catch(function (e) {
        console.error('Failed to register service worker:', e);
        // Load main.dart.js as fallback
        loadMainDartJs();
      });
  });
} else {
  // Service workers not supported. Just load the main.dart.js file
  loadMainDartJs();
}
