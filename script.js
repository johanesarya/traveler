/* ═══════════════════════════════════════════════
         TRAVEL ENTRIES
         Add more images to 'gallery' to show them in the modal.
      ═══════════════════════════════════════════════ */
const travelEntries = [
  {
    title: "Long Island",
    location: "Jepara",
    date: "April 12, 2026",
    description:
      "A serene escape to the white sands and turquoise waters of Jepara's hidden gem.",
    image: "assets/panjang-cover.png",
    gallery: [
      "assets/panjang1.png",
      "assets/panjang4.png",
      "assets/panjang2.png",
      "assets/panjang3.png",
    ],
  },
  {
    title: "Bandengan Beach",
    location: "Jepara",
    date: "March 29, 2026",
    description:
      "Tracing the coastline where the Java Sea meets the horizon in a soft, golden glow.",
    image: "assets/bandeng-cover.jpeg",
    gallery: [
      "assets/bandeng1.png",
      "assets/bandeng2.jpeg",
      "assets/bandeng3.png",
      "assets/bandeng4.jpeg",
    ],
  },
  {
    title: "Cooking Pizza",
    location: "Semarang",
    date: "March 24, 2026",
    description:
      "An evening of classic flavors at Pizza Marzano, savoring the city's modern rhythm.",
    image: "assets/pizza-cover.JPG",
    gallery: [
      "assets/pizza1.png",
      "assets/pizza2.JPG",
      "assets/pizza3.png",
      "assets/pizza4.JPG",
    ],
  },
  {
    title: "Klu Cafe",
    location: "Semarang",
    date: "March 24, 2026",
    description:
      "Morning ritual at Klu Cafe: Where the steam from the cup meets the early light, and the city’s pulse begins to stir.",
    image: "assets/klu-cover.JPG",
    gallery: [
      "assets/klu1.JPG",
      "assets/klu2.JPG",
      "assets/klu5.JPG",
      "assets/klu3.JPG",
    ],
  },
  {
    title: "Highland Retreat",
    location: "Getasan & Salatiga",
    date: "March 23, 2026",
    description:
      "A pilgrimage from the spiritual stillness of Gua Maria Rosa Mystica to the rustic charm of Boemisora and 1915 Koffehuis.",
    image: "assets/sala-cover.jpg",
    gallery: [
      "assets/sala1.png",
      "assets/sala2.png",
      "assets/sala3.png",
      "assets/sala4.jpg",
      "assets/sala5.png",
      "assets/sala6.png",
      "assets/sala7.jpg",
      "assets/sala8.png",
      "assets/sala9.png",
    ],
  },
  {
    title: "The Sunday Circuit",
    location: "Semarang",
    date: "March 22, 2026",
    description:
      "A day of diverse memories: From the nostalgic bites of Toko Kue Gambang to coffee by Tugu Muda and late-night photobox laughter.",
    image: "assets/sun-cover.png",
    gallery: [
      "assets/sun1.png",
      "assets/sun2.png",
      "assets/sun3.png",
      "assets/sun4.png",
      "assets/sun5.png",
      "assets/sun6.png",
      "assets/sun7.png",
      "assets/sun8.jpeg",
      "assets/sun9.jpeg",
      "assets/sun10.jpeg",
    ],
  },
  {
    title: "Heritage of a Heroine",
    location: "Jepara",
    date: "February 15, 2026",
    description:
      "Stepping through time at Museum Kartini, honoring the legacy of Indonesia's pioneer for women's rights.",
    image: "assets/kar-cover.png",
    gallery: ["assets/kar1.png", "assets/kar2.png", "assets/kar3.png"],
  },
  {
    title: "First Snaps",
    location: "Semarang",
    date: "January 02, 2026",
    description:
      "Capturing the first portraits of the year at Photolookup, Queen City Mall.",
    image: "assets/poto-cover.png",
    gallery: ["assets/poto1.jpeg", "assets/poto2.jpeg", "assets/poto3.jpeg"],
  },
  {
    title: "Iron G. of Ambarawa",
    location: "Ambarawa",
    date: "January 01, 2026",
    description:
      "Walking among the steam locomotives of the colonial era to ring in the new year.",
    image: "assets/amb-cover.png",
    gallery: [
      "assets/amb1.png",
      "assets/amb2.png",
      "assets/amb3.png",
      "assets/amb4.png",
    ],
  },
];

/* ═══════════════════════════════════════════════
         RENDER CARDS — inspo overlay style
      ═══════════════════════════════════════════════ */
function renderEntries() {
  const grid = document.getElementById("entries-grid");

  // Update the grid wrapper to have 2 columns on small screens
  grid.className = "grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6";

  grid.innerHTML = travelEntries
    .map((entry, index) => {
      const isLarge = index % 3 === 0;

      // Desktop: Uses spans of 8 and 4. Mobile: Each card spans 1 col (half width)
      const colSpan = isLarge
        ? "col-span-1 md:col-span-8"
        : "col-span-1 md:col-span-4";

      // Inline height for Desktop (overridden by CSS aspect-ratio on mobile)
      const height = isLarge ? "380px" : "320px";

      return `
            <div class="${colSpan} entry-card fade-in"
                style="height:${height}; animation-delay:${0.08 * index}s"
                onclick="openModal(${index})"
                role="button" tabindex="0"
                aria-label="Open ${entry.title}">
              <img class="card-bg" src="${entry.image}" alt="${entry.title}">
              <div class="card-gradient"></div>
              <div class="card-body">
                <div class="card-pill">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${entry.location}
                </div>
                <div class="card-title md:text-[24px]">${entry.title}</div>
                <div class="card-desc">${entry.description}</div>
                <div class="card-cta hidden md:flex">View Journey &rarr;</div>
              </div>
            </div>
          `;
    })
    .join("");
  // Re-initialize keyboard accessibility
  grid.querySelectorAll(".entry-card").forEach((card, i) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openModal(i);
    });
  });
}
/* ═══════════════════════════════════════════════
         MODAL
      ═══════════════════════════════════════════════ */
let _gallery = [];
let _gIdx = 0;

function openModal(i) {
  const entry = travelEntries[i];
  _gallery =
    entry.gallery && entry.gallery.length ? entry.gallery : [entry.image];
  _gIdx = 0;

  document.getElementById("modal-title").textContent = entry.title;
  document.getElementById("modal-location").textContent = entry.location;
  document.getElementById("modal-date").textContent = entry.date;
  document.getElementById("modal-desc").textContent = entry.description;

  _setImg(0);

  const strip = document.getElementById("modal-strip");
  strip.innerHTML = _gallery
    .map(
      (src, j) =>
        `<img src="${src}" alt="Photo ${j + 1}" class="${j === 0 ? "active" : ""}" onclick="_setImg(${j})">`,
    )
    .join("");

  _updateArrows();
  document.getElementById("entry-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("entry-modal").classList.remove("open");
  document.body.style.overflow = "";
}

function _setImg(idx) {
  _gIdx = idx;
  const img = document.getElementById("modal-hero-img");
  img.style.opacity = "0";
  setTimeout(() => {
    img.src = _gallery[idx];
    img.style.opacity = "1";
  }, 160);
  document.querySelectorAll("#modal-strip img").forEach((el, i) => {
    el.classList.toggle("active", i === idx);
  });
  _updateArrows();
}

function _updateArrows() {
  document.getElementById("modal-prev").style.display =
    _gIdx === 0 ? "none" : "flex";
  document.getElementById("modal-next").style.display =
    _gIdx === _gallery.length - 1 ? "none" : "flex";
}

document.getElementById("modal-prev").addEventListener("click", () => {
  if (_gIdx > 0) _setImg(_gIdx - 1);
});
document.getElementById("modal-next").addEventListener("click", () => {
  if (_gIdx < _gallery.length - 1) _setImg(_gIdx + 1);
});
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("entry-modal").classList.contains("open"))
    return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") _setImg(Math.max(0, _gIdx - 1));
  if (e.key === "ArrowRight") _setImg(Math.min(_gallery.length - 1, _gIdx + 1));
});

/* ═══════════════════════════════════════════════
         CHOROPLETH MAP
      ═══════════════════════════════════════════════ */
const CITY_TO_PROVINCE = {
  jepara: "JAWA TENGAH",
  semarang: "JAWA TENGAH",
  salatiga: "JAWA TENGAH",
  getasan: "JAWA TENGAH",
  ambarawa: "JAWA TENGAH",
  solo: "JAWA TENGAH",
  surakarta: "JAWA TENGAH",
  kudus: "JAWA TENGAH",
  purwokerto: "JAWA TENGAH",
  magelang: "JAWA TENGAH",
  pekalongan: "JAWA TENGAH",
  tegal: "JAWA TENGAH",
  ungaran: "JAWA TENGAH",
  kendal: "JAWA TENGAH",
  demak: "JAWA TENGAH",
  rembang: "JAWA TENGAH",
  cilacap: "JAWA TENGAH",
  kebumen: "JAWA TENGAH",
  klaten: "JAWA TENGAH",
  boyolali: "JAWA TENGAH",
  yogyakarta: "DAERAH ISTIMEWA YOGYAKARTA",
  jogja: "DAERAH ISTIMEWA YOGYAKARTA",
  yogya: "DAERAH ISTIMEWA YOGYAKARTA",
  bantul: "DAERAH ISTIMEWA YOGYAKARTA",
  sleman: "DAERAH ISTIMEWA YOGYAKARTA",
  wonosari: "DAERAH ISTIMEWA YOGYAKARTA",
  bandung: "JAWA BARAT",
  bogor: "JAWA BARAT",
  bekasi: "JAWA BARAT",
  depok: "JAWA BARAT",
  cirebon: "JAWA BARAT",
  sukabumi: "JAWA BARAT",
  tasikmalaya: "JAWA BARAT",
  garut: "JAWA BARAT",
  jakarta: "DKI JAKARTA",
  menteng: "DKI JAKARTA",
  kemang: "DKI JAKARTA",
  surabaya: "JAWA TIMUR",
  malang: "JAWA TIMUR",
  banyuwangi: "JAWA TIMUR",
  bromo: "JAWA TIMUR",
  ijen: "JAWA TIMUR",
  kediri: "JAWA TIMUR",
  bali: "BALI",
  denpasar: "BALI",
  ubud: "BALI",
  kuta: "BALI",
  seminyak: "BALI",
  canggu: "BALI",
  uluwatu: "BALI",
  medan: "SUMATERA UTARA",
  "danau toba": "SUMATERA UTARA",
  samosir: "SUMATERA UTARA",
  padang: "SUMATERA BARAT",
  bukittinggi: "SUMATERA BARAT",
  makassar: "SULAWESI SELATAN",
  toraja: "SULAWESI SELATAN",
  lombok: "NUSATENGGARA BARAT",
  mataram: "NUSATENGGARA BARAT",
  gili: "NUSATENGGARA BARAT",
  flores: "NUSA TENGGARA TIMUR",
  "labuan bajo": "NUSA TENGGARA TIMUR",
  komodo: "NUSA TENGGARA TIMUR",
  "raja ampat": "IRIAN JAYA BARAT",
  sorong: "IRIAN JAYA BARAT",
  balikpapan: "KALIMANTAN TIMUR",
  samarinda: "KALIMANTAN TIMUR",
};

function buildVisitedProvinces(entries) {
  const counts = {};
  entries.forEach((entry) => {
    entry.location
      .split(/[,&\/]+/)
      .map((s) => s.trim().toLowerCase())
      .forEach((part) => {
        let matched = null,
          matchLen = 0;
        for (const [city, prov] of Object.entries(CITY_TO_PROVINCE)) {
          if (part.includes(city) && city.length > matchLen) {
            matched = prov;
            matchLen = city.length;
          }
        }
        if (matched) counts[matched] = (counts[matched] || 0) + 1;
      });
  });
  if (!Object.keys(counts).length) return {};
  const maxCount = Math.max(...Object.values(counts));
  const result = {};
  for (const [prov, count] of Object.entries(counts)) {
    if (count === maxCount) result[prov] = "home";
    else if (count >= Math.ceil(maxCount * 0.6)) result[prov] = "visited-3";
    else if (count >= Math.ceil(maxCount * 0.3)) result[prov] = "visited-2";
    else result[prov] = "visited-1";
  }
  return result;
}

function initMap(visitedProvinces) {
  const container = document.getElementById("map-container");
  const tooltip = document.getElementById("map-tooltip");
  const svg = d3.select("#indonesia-map");
  const W = container.clientWidth || 900;
  const H = container.clientHeight || W * (9 / 21);
  svg
    .attr("viewBox", `0 0 ${W} ${H}`)
    .attr("preserveAspectRatio", "xMidYMid meet");
  const projection = d3.geoMercator();
  const path = d3.geoPath().projection(projection);

  d3.json(
    "https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json",
  )
    .then(function (geoData) {
      projection.fitSize([W, H * 0.95], geoData);
      const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, "");
      const visitedNorm = {};
      for (const [k, v] of Object.entries(visitedProvinces))
        visitedNorm[norm(k)] = v;

      function getClass(feature) {
        const candidates = [
          feature.properties?.Propinsi,
          feature.properties?.name,
          feature.properties?.NAME_1,
        ].filter(Boolean);
        for (const name of candidates) {
          const n = norm(name);
          if (visitedNorm[n]) return visitedNorm[n];
          for (const [k, v] of Object.entries(visitedNorm)) {
            if (n.includes(k) || k.includes(n)) return v;
          }
        }
        return "unvisited";
      }

      svg
        .selectAll(".province")
        .data(geoData.features)
        .join("path")
        .attr("class", (d) => `province ${getClass(d)}`)
        .attr("d", path)
        .on("mousemove", function (event, d) {
          const name =
            d.properties?.Propinsi || d.properties?.name || "Province";
          const cls = getClass(d);
          const label =
            cls === "home"
              ? `${name} — Home`
              : cls !== "unvisited"
                ? `${name} — Visited`
                : name;
          const rect = container.getBoundingClientRect();
          tooltip.textContent = label;
          tooltip.style.left = event.clientX - rect.left + 12 + "px";
          tooltip.style.top = event.clientY - rect.top - 10 + "px";
          tooltip.classList.add("visible");
        })
        .on("mouseleave", () => tooltip.classList.remove("visible"));

      svg.call(
        d3
          .zoom()
          .scaleExtent([1, 8])
          .on("zoom", (e) => {
            svg.selectAll(".province").attr("transform", e.transform);
          }),
      );
    })
    .catch((err) => {
      console.warn("GeoJSON load failed:", err);
      container.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:11px;color:#5c605f;letter-spacing:.15em;text-transform:uppercase;">Map could not be loaded.</div>`;
    });
}

/* ═══════════════════════════════════════════════
         INIT
      ═══════════════════════════════════════════════ */
lucide.createIcons();
renderEntries();
initMap(buildVisitedProvinces(travelEntries));

window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");

  // Try autoplay
  audio.play().catch(() => {
    // Fallback if browser blocks autoplay
    document.addEventListener(
      "click",
      () => {
        audio.play();
      },
      { once: true },
    );
  });
});
