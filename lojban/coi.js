/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const CACHE_NAME = 'sutysisku'

function getOrFetch(response) {
	if (!response) return

	if (response.status === 0) return response;

	const extension = response.url.split('.').pop()
	const newHeaders = new Headers(response.headers);
	newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
	newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

	if (extension === 'wasm') newHeaders.set('content-type', 'application/wasm');

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders,
	});
}

if (typeof window === 'undefined') {
	self.addEventListener("install", () => self.skipWaiting());
	// self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

	self.addEventListener('activate', function (event) {
		event.waitUntil(self.clients.claim());
		// delete any caches that aren't in expectedCaches
		// which will get rid of static-v1
		event.waitUntil(
			caches
				.keys()
				.then((keys) =>
					Promise.all(
						keys.map((key) => {
							if (CACHE_NAME !== key) {
								return caches.delete(key)
							}
						})
					)
				)
				.then(() => {
					self.clients.matchAll().then(function (clients) {
						// if (clients && clients.length) {
						//   clients.map(function (client) {
						//     client.postMessage({ teminde: 'ei ningau le sorcu' })
						//   })
						// }
					})
				})
		)
	})

	self.addEventListener("message", (ev) => {
		if (ev.data && ev.data.type === "deregister") {
			self.registration
				.unregister()
				.then(() => {
					return self.clients.matchAll();
				})
				.then(clients => {
					clients.forEach((client) => client.navigate(client.url));
				});
		}
	});

	self.addEventListener("fetch", function (event) {
		// console.log(event.request);

		if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
			return;
		}
		// evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
		// 	return fromCache(evt.request);
		//   }));

		event.respondWith(
			caches.open(CACHE_NAME).then(async function (cache) {
				let response
				try {
					response = getOrFetch(await cache.match(event.request));
				} catch (error) { }
				if (response) return response
				try {
					response = getOrFetch(await fetch(event.request))
				} catch (error) { }
				if (response) return response
				return unableToResolve()
			})
		);
	});

} else {
	(() => {
		// You can customize the behavior of this script through a global `coi` variable.
		const coi = {
			shouldRegister: () => true,
			shouldDeregister: () => false,
			doReload: () => true,//window.location.reload(),
			quiet: false,
			...window.coi
		}

		const n = navigator;
		if (coi.shouldDeregister() && n.serviceWorker && n.serviceWorker.controller) {
			n.serviceWorker.controller.postMessage({ type: "deregister" });
		}

		// If we're already coi: do nothing. Perhaps it's due to this script doing its job, or COOP/COEP are
		// already set from the origin server. Also if the browser has no notion of crossOriginIsolated, just give up here.
		if (window.crossOriginIsolated !== false || !coi.shouldRegister()) return;

		if (!window.isSecureContext) {
			!coi.quiet && console.log("COOP/COEP Service Worker not registered, a secure context is required.");
			return;
		}

		// In some environments (e.g. Chrome incognito mode) this won't be available
		if (n.serviceWorker) {
			n.serviceWorker.register(window.document.currentScript.src).then(
				(registration) => {
					!coi.quiet & console.log("COOP/COEP Service Worker registered", registration.scope);

					registration.addEventListener("updatefound", () => {
						!coi.quiet && console.log("Reloading page to make use of updated COOP/COEP Service Worker.");
						coi.doReload()
					});

					// If the registration is active, but it's not controlling the page
					if (registration.active && !n.serviceWorker.controller) {
						!coi.quiet && console.log("Reloading page to make use of COOP/COEP Service Worker.");
						coi.doReload()
					}
				},
				(err) => {
					!coi.quiet && console.error("COOP/COEP Service Worker failed to register:", err);
				}
			);
		}
	})();
}

// function fromNetwork(request, timeout) {
// 	return new Promise(function (fulfill, reject) {
// 		var timeoutId = setTimeout(reject, timeout);
// 		fetch(request).then(function (response) {
// 			clearTimeout(timeoutId);
// 			fulfill(response);
// 		}, reject);
// 	});
// }

// function fromCache(request) {
// 	return caches.open(CACHE_NAME).then(function (cache) {
// 		return cache.match(request).then(function (matching) {
// 			return matching || Promise.reject('no-match');
// 		});
// 	});
// }

function unableToResolve() {
	return new Response('<h1>Service Unavailable</h1>', {
		status: 503,
		statusText: 'Service Unavailable',
		headers: new Headers({
			'Content-Type': 'text/html'
		})
	});
}

/******/ })()
;