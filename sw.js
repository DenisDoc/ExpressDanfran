"use strict";
//install
self.addEventListener("install", (evt) => {
  console.log("service workers have been installed");
});
//activate
self.addEventListener("activate", (evt) => {
  console.log("service worker has been activated");
});
//fetch
self.addEventListener("fetch", (evt) => {
  //   console.log("fetch event", evt);
});
