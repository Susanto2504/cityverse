<template>
  <div>
    <!-- Header & Top Action Bar -->
    <Header title="Data Jalan" />
    <main class="min-h-screen w-full space-y-6 bg-[var(--color-mint-50)] p-4 font-[var(--font-sans)] text-[var(--color-brand-deep)] sm:p-6 lg:p-8">
      <header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <!-- Input Pencarian -->
          <div class="flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2 shadow-sm ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari ruas jalan..."
              class="w-36 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:w-48"
            />
          </div>

          <!-- Tombol Sync Data OSM -->
          <button
            @click="fetchDataJalan"
            :disabled="loading"
            class="flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'animate-spin': loading }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {{ loading ? 'Mengambil Data...' : 'Muat Data OSM' }}
          </button>
        </div>
      </header>

      <!-- Ringkasan Statistik -->
      <section class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div class="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-md">
          <p class="text-xs font-medium text-slate-300">Total Ruas Jalan</p>
          <p class="mt-2 text-3xl font-bold">{{ stats.totalRuas }}</p>
          <p class="mt-1 text-xs text-slate-400">Total Panjang: {{ stats.totalPanjangKm }} km</p>
        </div>

        <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div class="flex items-center justify-between">
            <p class="text-xs font-medium text-slate-500">Lancar</p>
            <span class="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <p class="mt-2 text-3xl font-bold text-slate-900">{{ stats.lancar }}</p>
          <p class="mt-1 text-xs text-slate-400">V/C Ratio &lt; 0.6</p>
        </div>

        <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div class="flex items-center justify-between">
            <p class="text-xs font-medium text-slate-500">Sedang / Padat</p>
            <span class="h-2.5 w-2.5 rounded-full bg-amber-500" />
          </div>
          <p class="mt-2 text-3xl font-bold text-slate-900">{{ stats.sedang }}</p>
          <p class="mt-1 text-xs text-slate-400">V/C Ratio 0.6 - 0.8</p>
        </div>

        <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div class="flex items-center justify-between">
            <p class="text-xs font-medium text-slate-500">Macet Total</p>
            <span class="h-2.5 w-2.5 rounded-full bg-rose-500" />
          </div>
          <p class="mt-2 text-3xl font-bold text-slate-900">{{ stats.macet }}</p>
          <p class="mt-1 text-xs text-slate-400">V/C Ratio &gt; 0.8</p>
        </div>
      </section>

      <!-- Visualisasi Peta Leaflet -->
      <section class="overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <div class="mb-3 flex items-center justify-between px-2">
          <h2 class="text-sm font-semibold text-slate-800">Peta Spasial Geometri Jalan (Leaflet GIS)</h2>
          <span class="text-xs text-slate-400">Garis hijau: Lancar | Kuning: Sedang | Merah: Macet</span>
        </div>
        <div id="map" class="h-80 w-full rounded-2xl border border-slate-100 z-0"></div>
      </section>

      <!-- Tabel Data Sesuai Skema Database JALAN -->
      <section class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[950px] text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500">
                <th class="px-6 py-3.5 font-semibold">Ruas Jalan (ID / Kota)</th>
                <th class="px-6 py-3.5 font-semibold">Tipe & Fisik Jalan</th>
                <th class="px-6 py-3.5 font-semibold">Kapasitas</th>
                <th class="px-6 py-3.5 font-semibold">Volume Kendaraan</th>
                <th class="px-6 py-3.5 font-semibold">Tingkat Kepadatan</th>
                <th class="px-6 py-3.5 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-if="loading">
                <td colspan="6" class="px-6 py-8 text-center text-slate-400">Sedang menarik data spasial dari OpenStreetMap...</td>
              </tr>
              <tr v-else-if="filteredList.length === 0">
                <td colspan="6" class="px-6 py-8 text-center text-slate-400">Tidak ada data ruas jalan yang ditemukan.</td>
              </tr>
              <tr 
                v-else 
                v-for="jalan in filteredList" 
                :key="jalan.id_jalan" 
                class="transition hover:bg-slate-50/80"
              >
                <!-- ID & Nama Ruas Jalan -->
                <td class="px-6 py-4">
                  <p class="font-semibold text-slate-900">{{ jalan.nama_ruas_jalan }}</p>
                  <div class="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                    <span>ID: #{{ jalan.id_jalan }}</span>
                    <span>•</span>
                    <span>ID Kota: {{ jalan.id_kota }}</span>
                  </div>
                </td>

                <!-- Tipe, Panjang & Lebar -->
                <td class="px-6 py-4 text-slate-600">
                  <p class="font-medium text-slate-800">{{ jalan.panjang_m }} m <span class="text-xs text-slate-400">({{ jalan.lebar_m }})</span></p>
                  <p class="text-xs text-emerald-600 font-medium">{{ jalan.tipe_jalan_detail }}</p>
                </td>

                <!-- Kapasitas Jalan -->
                <td class="px-6 py-4 text-slate-600">
                  <span class="font-semibold text-slate-800">{{ jalan.kapasitas_jalan.toLocaleString() }}</span>
                  <span class="text-xs text-slate-400"> smp/jam</span>
                </td>

                <!-- Volume Kendaraan -->
                <td class="px-6 py-4 text-slate-600">
                  <span class="font-semibold text-slate-800">{{ jalan.volume_kendaraan.toLocaleString() }}</span>
                  <span class="text-xs text-slate-400"> kend/jam</span>
                </td>

                <!-- Tingkat Kepadatan Badge -->
                <td class="px-6 py-4">
                  <span
                    :class="[
                      'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
                      jalan.tingkat_kepadatan === 'Lancar' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : '',
                      jalan.tingkat_kepadatan === 'Sedang' ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200' : '',
                      jalan.tingkat_kepadatan === 'Macet' ? 'bg-rose-50 text-rose-700 ring-1 ring-rose-200' : ''
                    ]"
                  >
                    <span
                      :class="[
                        'h-1.5 w-1.5 rounded-full',
                        jalan.tingkat_kepadatan === 'Lancar' ? 'bg-emerald-500' : '',
                        jalan.tingkat_kepadatan === 'Sedang' ? 'bg-amber-500' : '',
                        jalan.tingkat_kepadatan === 'Macet' ? 'bg-rose-500' : ''
                      ]"
                    />
                    {{ jalan.tingkat_kepadatan }}
                  </span>
                </td>

                <!-- Aksi Fokus Peta -->
                <td class="px-6 py-4 text-right">
                  <button
                    @click="focusToMap(jalan.koordinat_geometri)"
                    class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    Fokus Peta
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Header from '../configViews/Header.vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Icon Leaflet Default Path
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

// State Data
const searchQuery = ref('')
const loading = ref(false)

// Dummy Initial Data yang Mengikuti Skema Database "JALAN"
const listJalan = ref([
  {
    id_jalan: 101,
    id_kota: 7371, // Kode Kota Makassar
    nama_ruas_jalan: 'Jl. Ujung Pandang',
    koordinat_geometri: [
      [-5.1345, 119.4068],
      [-5.1389, 119.4072]
    ],
    panjang_m: 520,
    lebar_m: '8 m',
    tipe_jalan_detail: 'Jalan Utama (Primary)',
    kapasitas_jalan: 2400,
    volume_kendaraan: 1100,
    tingkat_kepadatan: 'Lancar'
  },
  {
    id_jalan: 102,
    id_kota: 7371,
    nama_ruas_jalan: '[Rute N2] Jl. Perintis Kemerdekaan',
    koordinat_geometri: [
      [-5.1235, 119.4588],
      [-5.1299, 119.4672]
    ],
    panjang_m: 3200,
    lebar_m: '14 m (4 lajur)',
    tipe_jalan_detail: 'Jalan Protokol / Arteri',
    kapasitas_jalan: 4800,
    volume_kendaraan: 4200,
    tingkat_kepadatan: 'Macet'
  }
])

// Format Nama Jalan agar Terinci
const formatNamaJalanTerinci = (tags, id) => {
  const namaUtama = tags?.name || tags?.['name:id'] || tags?.alt_name
  const refRute = tags?.ref ? `[Rute ${tags.ref}] ` : ''

  if (namaUtama) {
    const altInfo = tags?.alt_name && tags.alt_name !== namaUtama ? ` (${tags.alt_name})` : ''
    return `${refRute}${namaUtama}${altInfo}`
  }

  const tipeMap = {
    primary: 'Jalan Utama',
    secondary: 'Jalan Sekunder',
    tertiary: 'Jalan Tersier'
  }
  const tipe = tipeMap[tags?.highway] || 'Jalan Umum'

  if (tags?.destination) {
    return `${tipe} arah ${tags.destination}`
  }

  return `${tipe} (Segmen #${id.toString().slice(-4)})`
}

// Hitung Statistik Dashboard
const stats = computed(() => {
  const totalRuas = listJalan.value.length
  const totalPanjangM = listJalan.value.reduce((acc, curr) => acc + curr.panjang_m, 0)
  const lancar = listJalan.value.filter(j => j.tingkat_kepadatan === 'Lancar').length
  const sedang = listJalan.value.filter(j => j.tingkat_kepadatan === 'Sedang').length
  const macet = listJalan.value.filter(j => j.tingkat_kepadatan === 'Macet').length

  return {
    totalRuas,
    totalPanjangKm: (totalPanjangM / 1000).toFixed(2),
    lancar,
    sedang,
    macet
  }
})

// Filter Pencarian
const filteredList = computed(() => {
  return listJalan.value.filter(j => 
    j.nama_ruas_jalan.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    j.id_jalan.toString().includes(searchQuery.value)
  )
})

// Leaflet Map Reference
let map = null
let polylineGroup = null

const initMap = () => {
  map = L.map('map').setView([-5.147665, 119.432731], 13) // Center Makassar
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map)

  polylineGroup = L.featureGroup().addTo(map)
  renderGeometriesOnMap()
}

// Render Garis Geometri di Peta Leaflet
const renderGeometriesOnMap = () => {
  if (!polylineGroup) return
  polylineGroup.clearLayers()

  listJalan.value.forEach(jalan => {
    if (jalan.koordinat_geometri && jalan.koordinat_geometri.length > 0) {
      const color = jalan.tingkat_kepadatan === 'Lancar' ? '#10b981' : jalan.tingkat_kepadatan === 'Sedang' ? '#f59e0b' : '#ef4444'
      
      const polyline = L.polyline(jalan.koordinat_geometri, { color, weight: 5, opacity: 0.8 })
        .bindPopup(`<b>${jalan.nama_ruas_jalan}</b><br/>Kepadatan: <b>${jalan.tingkat_kepadatan}</b><br/>Volume: ${jalan.volume_kendaraan} kend/jam`)
      
      polylineGroup.addLayer(polyline)
    }
  })
}

// Fungsi Pindah Fokus Peta
const focusToMap = (coords) => {
  if (map && coords && coords.length > 0) {
    map.flyToBounds(coords, { maxZoom: 16, duration: 1.5 })
  }
}

// Rumus Haversine Kalkulasi Jarak Koordinat (Meter)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371000
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  return Math.round(R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))))
}

// Fetch Data dari Overpass API dengan Filter Nama Terinci
const fetchDataJalan = async () => {
  loading.value = true
  
  // Fetch jalan utama (primary, secondary, tertiary) yang memiliki tag name
  const overpassQuery = `
    [out:json][timeout:30];
    area["name"="Makassar"]->.searchArea;
    (
      way["highway"~"primary|secondary|tertiary"]["name"](area.searchArea);
    );
    out body geom;
  `

  try {
    const res = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: overpassQuery
    })
    const data = await res.json()

    // Map Response API ke Skema Database 'JALAN'
    listJalan.value = data.elements.map((item, idx) => {
      const coords = item.geometry ? item.geometry.map(pt => [pt.lat, pt.lon]) : []

      // Hitung Panjang Ruas Jalan
      let totalDist = 0
      for (let i = 0; i < coords.length - 1; i++) {
        totalDist += calculateDistance(coords[i][0], coords[i][1], coords[i + 1][0], coords[i + 1][1])
      }

      // Simulasi Kapasitas & Volume Kendaraan
      const kapasitas = Math.floor(Math.random() * 3000) + 1500
      const volume = Math.floor(Math.random() * 3500) + 800
      const ratio = volume / kapasitas

      let kepadatan = 'Lancar'
      if (ratio >= 0.8) kepadatan = 'Macet'
      else if (ratio >= 0.6) kepadatan = 'Sedang'

      const tipeReadable = {
        primary: 'Jalan Utama / Protokol',
        secondary: 'Jalan Sekunder / Arteri',
        tertiary: 'Jalan Tersier / Kolektor'
      }[item.tags?.highway] || 'Jalan Umum'

      return {
        id_jalan: item.id || idx + 1, // int PK
        id_kota: 7371, // FK Kode Kota Makassar
        nama_ruas_jalan: formatNamaJalanTerinci(item.tags, item.id), // string
        koordinat_geometri: coords, // json
        panjang_m: totalDist,
        lebar_m: item.tags?.width ? `${item.tags.width} m` : (item.tags?.lanes ? `${item.tags.lanes * 3.5} m (${item.tags.lanes} lajur)` : 'Tidak terdata'),
        tipe_jalan_detail: tipeReadable,
        kapasitas_jalan: kapasitas, // int
        volume_kendaraan: volume, // int
        tingkat_kepadatan: kepadatan // string
      }
    })

    renderGeometriesOnMap()
  } catch (err) {
    console.error('Gagal mengambil data OSM:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  initMap()
})

onUnmounted(() => {
  if (map) map.remove()
})
</script>