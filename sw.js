self.addEventListener("install", e =>{
   e.waitUntil(
    caches.open("static").then(cache =>{
        return cache.addAll(["index.html", "style.css", "Rectangle 12.png"]);
    })
   );
});

