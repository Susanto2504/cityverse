<template>
    <div>
        <Header title="Dashboard" />

        <!-- BEGIN: DynamicTabScreensContainer -->
        <div class="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            <div class="tab-panel space-y-6">
                <!-- Row 1: Key Summary Stats (Resiko Perkotaan, Populasi Kota, Layanan) -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <!-- Stat 1: Resiko Perkotaan 62% -->
                    <div class="bg-white rounded-2xl p-5 border border-emerald-900/5 shadow-sm flex items-center justify-between hover:shadow-md transition" data-purpose="stat-card">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 mb-1">Resiko Perkotaan</p>
                            <div class="flex items-baseline gap-2">
                                <h3 class="text-4xl font-extrabold text-slate-900">62%</h3>
                                <span class="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">Waspada</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-2 font-medium">Berdasarkan kalkulasi 4 sektor kota</p>
                        </div>
                        <div class="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800 text-3xl">
                            <!-- Illustrated Skyscraper Green Icon matching screenshot -->
                            <i class="fa-solid fa-city text-emerald-800"></i>
                        </div>
                    </div>

                    <!-- Stat 2: Populasi Kota 1.9 Jt -->
                    <div class="bg-white rounded-2xl p-5 border border-emerald-900/5 shadow-sm flex items-center justify-between hover:shadow-md transition" data-purpose="stat-card">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 mb-1">Populasi Kota</p>
                            <div class="flex items-baseline gap-2">
                                <h3 class="text-4xl font-extrabold text-slate-900">19Jt</h3>
                                <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">+1.4% yoy</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-2 font-medium">Data Dukcapil Makassar 2026</p>
                        </div>
                        <div class="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 text-3xl">
                            <!-- User/Citizen Circular Icon matching screenshot -->
                            <i class="fa-solid fa-circle-user text-sky-500"></i>
                        </div>
                    </div>

                    <!-- Stat 3: Indeks Infrastruktur Terkoneksi -->
                    <div class="bg-white rounded-2xl p-5 border border-emerald-900/5 shadow-sm flex items-center justify-between hover:shadow-md transition md:col-span-2 lg:col-span-1" data-purpose="stat-card">
                        <div>
                            <p class="text-xs font-semibold text-slate-500 mb-1">Status Sensor IoT Kota</p>
                            <div class="flex items-baseline gap-2">
                                <h3 class="text-4xl font-extrabold text-slate-900">98.4%</h3>
                                <span class="text-xs font-bold text-brand-deep bg-brand-accent/20 px-2 py-0.5 rounded-md">Online</span>
                            </div>
                            <p class="text-[11px] text-slate-400 mt-2 font-medium">842/856 node aktif terpantau</p>
                        </div>
                        <div class="w-16 h-16 rounded-2xl bg-emerald-100/60 flex items-center justify-center text-brand-sidebar text-3xl">
                            <i class="fa-solid fa-tower-broadcast text-brand-deep"></i>
                        </div>
                    </div>
                </div>

                <!-- Row 2: Peta Kota (Simulated High-Definition Interactive GIS Viewer) -->
                <div class="bg-white rounded-2xl border border-emerald-900/10 p-4 md:p-6 shadow-sm w-full" data-purpose="map-card">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-2.5">
                        <i class="fa-solid fa-map-location-dot text-emerald-700"></i>
                        <h3 class="text-sm md:text-base font-bold text-slate-800">Peta Kota - Zona Makassar Metro Live Grid</h3>
                        </div>

                        <div class="flex items-center gap-2">
                        <span class="text-[11px] bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-semibold hidden sm:inline-block">
                            Lat: -5.1477 | Lng: 119.4327
                        </span>
                        <button 
                            @click="resetMapView"
                            class="px-2.5 py-1 text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-md transition"
                        >
                            <i class="fa-solid fa-arrows-rotate mr-1"></i> Reset View
                        </button>
                        </div>
                    </div>

                    <!-- Container Peta Leaflet -->
                    <div class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-slate-200 z-0">
                        <div ref="mapContainer" class="w-full h-full"></div>
                        
                        <!-- Custom Attribution Tag -->
                        <div class="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-slate-600 font-medium z-[1000] border border-slate-200 pointer-events-none">
                        Makassar GIS Live Engine © 2026 CityVerse
                        </div>
                    </div>
                </div>

                <!-- Row 3: Risk Overview (Left) & Notifikasi (Right) matching exact screenshot -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <!-- Left Side: Risk Overview Indicators (8 Cols) -->
                    <div class="lg:col-span-7 xl:col-span-7" data-purpose="risk-overview-section">
                        <h3 class="text-base md:text-lg font-bold text-slate-800 mb-3 tracking-tight">Risk Overview</h3>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Risk Card 1: Banjir 52% (Blue) -->
                            <div class="bg-white rounded-2xl p-4 border border-emerald-900/5 shadow-sm flex items-center justify-between">
                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                                        <span class="text-xs font-bold text-slate-600">Banjir</span>
                                    </div>

                                    <div class="text-3xl font-extrabold text-slate-900 mt-1">52%</div>
                                    
                                    <div class="w-28 bg-slate-100 rounded-full h-1.5 mt-2">
                                        <div class="bg-blue-600 h-1.5 rounded-full" style="width: 52%"></div>
                                    </div>
                                </div>

                                <!-- Flood / Wave & House icon style -->
                                <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-house-flood-water"></i>
                                </div>
                            </div>

                            <!-- Risk Card 2: Infrastruktur 40% (Orange/Gold) -->
                            <div class="bg-white rounded-2xl p-4 border border-emerald-900/5 shadow-sm flex items-center justify-between">
                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                                        <span class="text-xs font-bold text-slate-600">Infrastruktur</span>
                                    </div>

                                    <div class="text-3xl font-extrabold text-slate-900 mt-1">40%</div>
                                    
                                    <div class="w-28 bg-slate-100 rounded-full h-1.5 mt-2">
                                        <div class="bg-amber-500 h-1.5 rounded-full" style="width: 40%"></div>
                                    </div>
                                </div>

                                <!-- Building / Crane Icon -->
                                <div class="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-building-circle-check"></i>
                                </div>
                            </div>

                            <!-- Risk Card 3: Lingkungan 32% (Green) -->
                            <div class="bg-white rounded-2xl p-4 border border-emerald-900/5 shadow-sm flex items-center justify-between">
                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                                        <span class="text-xs font-bold text-slate-600">Lingkungan</span>
                                    </div>

                                    <div class="text-3xl font-extrabold text-slate-900 mt-1">32%</div>
                                    <div class="w-28 bg-slate-100 rounded-full h-1.5 mt-2">
                                        <div class="bg-emerald-600 h-1.5 rounded-full" style="width: 32%"></div>
                                    </div>
                                </div>
                                
                                <!-- Eco Tree Icon -->
                                <div class="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-tree"></i>
                                </div>
                            </div>

                            <!-- Risk Card 4: Macet 62% (Red/Teal accent) -->
                            <div class="bg-white rounded-2xl p-4 border border-emerald-900/5 shadow-sm flex items-center justify-between">
                                <div>
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                                        <span class="text-xs font-bold text-slate-600">Macet</span>
                                    </div>
                                    
                                    <div class="text-3xl font-extrabold text-slate-900 mt-1">62%</div>
                                    <div class="w-28 bg-slate-100 rounded-full h-1.5 mt-2">
                                        <div class="bg-rose-500 h-1.5 rounded-full" style="width: 62%"></div>
                                    </div>
                                </div>

                                <!-- Multiple Traffic Cars Icon -->
                                <div class="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl">
                                    <i class="fa-solid fa-car-side"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side: Notifikasi Panel (5 Cols) -->
                    <div class="lg:col-span-5 xl:col-span-5 flex flex-col" data-purpose="notification-panel">
                        <!-- Container Card -->
                        <div class="bg-white rounded-2xl p-5 border border-emerald-900/5 shadow-sm h-full flex flex-col justify-between">
                            <!-- Notification Header -->
                            <div>
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-base font-bold text-slate-800 tracking-tight">Notifikasi</h3>
                                    <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">2 Baru</span>
                                </div>

                                <!-- Alert Items Feed -->
                                <div class="space-y-4">
                                    <!-- Alert Item 1 -->
                                    <div class="flex items-start gap-3.5 p-2 rounded-xl hover:bg-slate-50 transition">
                                        <!-- Circular Solid Green Icon from Screenshot -->
                                        <div class="w-10 h-10 rounded-full bg-brand-sidebar shrink-0 flex items-center justify-center text-white text-sm shadow-sm">
                                            <i class="fa-solid fa-triangle-exclamation"></i>
                                        </div>

                                        <div class="flex-1 min-w-0">
                                            <h4 class="text-xs font-bold text-slate-900">Resiko Peringantan</h4>
                                            <p class="text-xs text-slate-600 leading-snug mt-0.5">Waspada bencana banjir di area panakkukang</p>
                                            <span class="text-[10px] text-slate-400 font-semibold block mt-1">2 jam yang lalu</span>
                                        </div>
                                    </div>

                                    <!-- Alert Item 2 -->
                                    <div class="flex items-start gap-3.5 p-2 rounded-xl hover:bg-slate-50 transition">
                                        <!-- Circular Solid Green Icon from Screenshot -->
                                        <div class="w-10 h-10 rounded-full bg-brand-sidebar shrink-0 flex items-center justify-center text-white text-sm shadow-sm">
                                            <i class="fa-solid fa-traffic-light"></i>
                                        </div>

                                        <div class="flex-1 min-w-0">
                                            <h4 class="text-xs font-bold text-slate-900">Kemacetan!</h4>
                                            <p class="text-xs text-slate-600 leading-snug mt-0.5">Kemacetan akan terjadi di area panakkukang!</p>
                                            <span class="text-[10px] text-slate-400 font-semibold block mt-1">Hari ini</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer Action to view logs -->
                            <div class="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                                <span class="text-[11px] text-slate-400 font-medium">Auto-sync live via BMKG</span>
                                <button class="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline">
                                    Lihat Semua Log Kejadian →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: DynamicTabScreensContainer -->

        <!-- BEGIN: ModalEditDataKota -->
      <!-- Dialog to edit Makassar parameters -->
      <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="modal-edit-data">
          <div class="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-100">
              <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h3 class="text-base font-bold text-slate-900">Perbarui Parameter Kota Makassar</h3>
                  <button class="text-slate-400 hover:text-slate-600" onclick="closeModalEditData()">
                  <i class="fa-solid fa-xmark text-lg"></i>
                  </button>
              </div>

              <div class="space-y-3.5 my-4 text-xs">
                  <div>
                      <label class="font-bold text-slate-700 block mb-1">Populasi Saat Ini</label>
                      <input class="w-full text-xs rounded-xl border-slate-200 p-2.5" id="input-populasi" type="text" value="1.9 Jt"/>
                  </div>

                  <div>
                      <label class="font-bold text-slate-700 block mb-1">Tingkat Resiko Perkotaan (%)</label>
                      <input class="w-full text-xs rounded-xl border-slate-200 p-2.5" id="input-resiko" type="number" value="62"/>
                  </div>

                  <div>
                      <label class="font-bold text-slate-700 block mb-1">Catatan Operasional Wilayah</label>
                      <textarea class="w-full text-xs rounded-xl border-slate-200 p-2.5" rows="2">Status darurat genangan air wilayah Panakkukang dan Toddopuli dalam penanganan.</textarea>
                  </div>
              </div>

              <div class="flex items-center justify-end gap-2 pt-2">
                  <button class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl" onclick="closeModalEditData()">
                      Batal
                  </button>

                  <button class="px-5 py-2 bg-brand-deep text-white text-xs font-bold rounded-xl hover:bg-emerald-900" onclick="saveDataKota()">
                      Simpan Pembaruan
                  </button>
              </div>
          </div>
      </div>
      <!-- END: ModalEditDataKota -->
    </div>  
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from "@/components/layout/Header1.vue"
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default Leaflet marker icon asset paths
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
})

const mapContainer = ref(null)
let mapInstance = null

// Koordinat Pusat (Pusat Kota Makassar) & Zoom Level yang Sesuai
const INITIAL_COORDS = [-5.1477, 119.4327]
const INITIAL_ZOOM = 16 // Diubah dari 20 ke 13 (20 terlalu dekat/layar putih)

// Batas wilayah (Bounds) khusus Kota Makassar dan sekitarnya
const MAKASSAR_BOUNDS = L.latLngBounds(
  L.latLng(-5.3000, 119.3000), // Barat Daya
  L.latLng(-5.0000, 119.5500)  // Timur Laut
)

// Fungsi Helper untuk Membuat Grid Line
const addGridToMap = (map) => {
  const gridGroup = L.layerGroup().addTo(map)
  const step = 0.02 // Jarak antar garis grid (~2.2 km)

  const south = MAKASSAR_BOUNDS.getSouth()
  const north = MAKASSAR_BOUNDS.getNorth()
  const west = MAKASSAR_BOUNDS.getWest()
  const east = MAKASSAR_BOUNDS.getEast()

  const gridStyle = {
    color: '#64748b',   // Warna garis (Slate gray)
    weight: 0.8,        // Ketebalan garis
    opacity: 0.5,       // Transparansi
    dashArray: '4, 4'   // Putus-putus (opsional)
  }

  // 1. Garis Horisontal (Garis Lintang / Latitude)
  for (let lat = south; lat <= north; lat += step) {
    L.polyline([[lat, west], [lat, east]], gridStyle).addTo(gridGroup)
  }

  // 2. Garis Vertikal (Garis Bujur / Longitude)
  for (let lng = west; lng <= east; lng += step) {
    L.polyline([[south, lng], [north, lng]], gridStyle).addTo(gridGroup)
  }
}

onMounted(() => {
  if (mapContainer.value) {
    // 1. Inisialisasi Peta
    mapInstance = L.map(mapContainer.value, {
      maxBounds: MAKASSAR_BOUNDS,
      maxBoundsViscosity: 1.0,
      minZoom: 15,
      maxZoom: 20
    }).setView(INITIAL_COORDS, INITIAL_ZOOM)

    // 2. Tile Layer OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance)

    // 3. Tambahkan Grid ke Peta
    addGridToMap(mapInstance)

    // 4. Marker Lokasi (Makassar)
    const locations = [
      { name: 'Pantai Losari', coords: [-5.1443, 119.4072], desc: 'Area Resiko Pasang Surut / Waterfront' },
      { name: 'Panakkukang', coords: [-5.1558, 119.4435], desc: 'Waspada Genangan Air & Macet' },
      { name: 'Tamalanrea', coords: [-5.1328, 119.4883], desc: 'Node Sensor IoT Aktif' }
    ]

    locations.forEach(loc => {
      L.marker(loc.coords)
        .addTo(mapInstance)
        .bindPopup(`
          <div style="font-family: sans-serif;">
            <b style="color: #065f46;">${loc.name}</b><br>
            <span style="font-size: 11px; color: #475569;">${loc.desc}</span>
          </div>
        `)
    })
  }
})

const resetMapView = () => {
  if (mapInstance) {
    mapInstance.setView(INITIAL_COORDS, INITIAL_ZOOM)
  }
}

onUnmounted(() => {
  if (mapInstance) {
    mapInstance.remove()
  }
})
</script>