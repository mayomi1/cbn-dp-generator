const staticAssets = [
    './',
    './stylesheets/style.css',
    './stylesheets/style.css',
    './javascripts/app.js',
    './init.js',
    './materialize.js',

]
const cacheName = 'v1:static';

self.addEventListener('install', event => {
    console.log('installed service worker')

    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(staticAssets).then(function () {
                self.skipWaiting();
            });
        })
    );

    // event.waitUntil(Promise.all(
    //     caches.open(cacheName).then(function (cache) {
    //         return cache.addAll(staticAssets).then(function () {
    //             self.skipWaiting();
    //         });
    //     })
    // ));

});



self.addEventListener('fetch', event => {
    console.log('fetch');
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if(response) {
                return response;
            }

            // fetch as normal
            return fetch(event.request)
        })
    )
});