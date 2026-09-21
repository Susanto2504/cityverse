<template>
  <div class="min-h-screen bg-[#F4FFFC] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[#C3E956] selection:text-[#1F4B2C]">
    <!-- Bagian Header Component -->
    <Header title="Laporan Data" @click="$emit('toggle-sidebar')" />

    <!-- Bagian Main -->
    <main class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      
      <!-- Filter & Export Hero Section -->
      <section class="relative overflow-hidden rounded-3xl bg-[#1F4B2C] text-white p-6 md:p-8 shadow-xl shadow-[#1F4B2C]/10">
        <!-- Grid Pattern Decoration -->
        <div class="absolute inset-0 bg-[radial-gradient(#C3E956_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" aria-hidden="true"></div>

        <div class="relative z-10 space-y-6">
          <!-- Header Top: Eyebrow, Title & Actions -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4D7111] text-[#EAFFE9]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C3E956] animate-pulse"></span>
                Kota Makassar
              </span>
              <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-white mt-2">
                Laporan data kota periode terpilih
              </h2>
            </div>

            <!-- Export Buttons -->
            <div class="flex items-center gap-3">
              <button 
                @click="exportAs('pdf')" 
                class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#3F4743] hover:bg-[#3F4743]/80 border border-white/10 transition-all duration-200 active:scale-95">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                Export PDF
              </button>
              <button 
                @click="exportAs('excel')" 
                class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-bold text-[#1F4B2C] bg-[#C3E956] hover:bg-[#91EAAF] transition-all duration-200 shadow-md shadow-[#C3E956]/20 active:scale-95">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Export Excel
              </button>
            </div>
          </div>

          <!-- Filters Form Controls -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-[#91EAAF] uppercase tracking-wider">Dari tanggal</label>
              <input 
                v-model="filters.start" 
                type="date" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-[#275836] border border-[#4D7111] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C3E956] transition-all">
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-[#91EAAF] uppercase tracking-wider">Sampai tanggal</label>
              <input 
                v-model="filters.end" 
                type="date" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-[#275836] border border-[#4D7111] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C3E956] transition-all">
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-[#91EAAF] uppercase tracking-wider">Kategori data</label>
              <select 
                v-model="filters.kategori" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-[#275836] border border-[#4D7111] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C3E956] transition-all">
                <option value="cuaca" class="bg-[#1F4B2C]">Cuaca</option>
                <option value="jalan" class="bg-[#1F4B2C]">Jalan</option>
                <option value="lingkungan" class="bg-[#1F4B2C]">Lingkungan</option>
                <option value="infrastruktur" class="bg-[#1F4B2C]">Infrastruktur</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-[#91EAAF] uppercase tracking-wider">Kota</label>
              <select 
                v-model="filters.kota" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-[#275836] border border-[#4D7111] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#C3E956] transition-all">
                <option value="makassar" class="bg-[#1F4B2C]">Makassar</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <!-- Ringkasan Statistik Cards -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="s in summaryStats" 
          :key="s.label" 
          class="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D5F5DD] shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
          <div 
            class="flex items-center justify-center w-12 h-12 rounded-xl text-xl shrink-0" 
            :style="{ backgroundColor: s.color + '1F', color: s.color }">
            {{ s.icon }}
          </div>
          <div class="min-w-0">
            <p class="text-2xl font-bold text-[#1F4B2C] tracking-tight leading-none">{{ s.value }}</p>
            <p class="text-xs font-medium text-[#275836]/70 truncate mt-1.5">{{ s.label }}</p>
          </div>
        </div>
      </section>

      <!-- Grafik Tren & Status Infrastruktur -->
      <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Line Chart Panel -->
        <div class="lg:col-span-2 p-6 rounded-2xl bg-white border border-[#D5F5DD] shadow-sm flex flex-col justify-between space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 class="text-lg font-bold text-[#1F4B2C]">Curah hujan &amp; genangan air</h3>
            <div class="flex items-center gap-4 text-xs font-medium">
              <span class="inline-flex items-center gap-2 text-[#1F4B2C]">
                <span class="w-3 h-3 rounded-full bg-[#4D7111]"></span> Curah hujan (mm)
              </span>
              <span class="inline-flex items-center gap-2 text-[#1F4B2C]">
                <span class="w-3 h-3 rounded-full bg-[#C0553D]"></span> Genangan (%)
              </span>
            </div>
          </div>

          <div class="space-y-2">
            <svg viewBox="0 0 560 200" class="w-full h-48 overflow-visible" preserveAspectRatio="none">
              <line v-for="y in 4" :key="'grid'+y" :x1="0" :x2="560" :y1="y * 40" :y2="y * 40" class="stroke-[#D5F5DD]" stroke-dasharray="4 4" stroke-width="1" />
              <polyline :points="curahHujanPoints" class="fill-none stroke-[#4D7111] stroke-[3] stroke-linecap-round stroke-linejoin-round" />
              <polyline :points="genanganPoints" class="fill-none stroke-[#C0553D] stroke-[3] stroke-linecap-round stroke-linejoin-round" />
            </svg>
            <div class="flex justify-between text-xs font-semibold text-[#275836]/70 pt-2 border-t border-[#EAFFE9]">
              <span v-for="d in trendData" :key="d.label">{{ d.label }}</span>
            </div>
          </div>
        </div>

        <!-- Donut Panel -->
        <div class="p-6 rounded-2xl bg-white border border-[#D5F5DD] shadow-sm flex flex-col items-center justify-between space-y-6">
          <h3 class="text-lg font-bold text-[#1F4B2C] w-full text-left">Status infrastruktur</h3>
          
          <div class="relative flex items-center justify-center">
            <div class="w-44 h-44 rounded-full flex items-center justify-center transition-transform hover:scale-105 duration-300" :style="donutStyle">
              <div class="w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                <span class="text-3xl font-extrabold text-[#1F4B2C] leading-none">
                  {{ infraStatus.reduce((a, s) => a + s.value, 0) }}
                </span>
                <span class="text-xs font-semibold text-[#275836]/60 mt-1 uppercase tracking-wider">aset</span>
              </div>
            </div>
          </div>

          <div class="w-full flex flex-wrap justify-center gap-2 pt-2">
            <span v-for="s in infraStatus" :key="s.label" class="inline-flex items-center gap-2 text-xs font-semibold text-[#1F4B2C] bg-[#EAFFE9] px-3 py-1.5 rounded-lg border border-[#D5F5DD]">
              <span class="w-2.5 h-2.5 rounded-full" :style="{ background: s.color }"></span> 
              {{ s.label }} <span class="text-[#275836]/70">({{ s.value }})</span>
            </span>
          </div>
        </div>
      </section>

      <!-- Kepadatan Per Ruas Jalan -->
      <section class="p-6 rounded-2xl bg-white border border-[#D5F5DD] shadow-sm space-y-6">
        <h3 class="text-lg font-bold text-[#1F4B2C]">Rata-rata kepadatan per ruas jalan</h3>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-end h-56 pt-6 pb-2">
          <div v-for="r in ruasJalanList" :key="r.nama" class="flex flex-col items-center h-full justify-end group">
            <span class="text-xs font-bold text-[#4D7111] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {{ r.kepadatan }}%
            </span>
            <div class="w-full max-w-[48px] bg-[#EAFFE9] rounded-xl h-full p-1 flex items-end border border-[#D5F5DD]">
              <div 
                class="w-full rounded-lg bg-gradient-to-t from-[#275836] to-[#4D7111] transition-all duration-500 group-hover:brightness-110" 
                :style="{ height: r.kepadatan + '%' }">
              </div>
            </div>
            <span class="text-xs font-semibold text-[#275836]/80 text-center truncate w-full mt-3 group-hover:text-[#1F4B2C] transition-colors">
              {{ r.nama }}
            </span>
          </div>
        </div>
      </section>

      <!-- Tabel Data Mentah -->
      <section class="p-6 rounded-2xl bg-white border border-[#D5F5DD] shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-[#1F4B2C]">Data {{ kategoriLabel }}</h3>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#EAFFE9] text-[#275836] border border-[#D5F5DD]">
            {{ activeTableRows.length }} baris
          </span>
        </div>

        <div class="overflow-x-auto rounded-xl border border-[#D5F5DD]">
          <table class="w-full text-left text-sm text-[#1F4B2C]">
            <thead class="bg-[#EAFFE9] text-xs uppercase font-bold text-[#275836] tracking-wider border-b border-[#D5F5DD]">
              <tr>
                <th v-for="col in activeTableColumns" :key="col" class="px-5 py-3.5">
                  {{ col }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#D5F5DD] bg-white">
              <tr v-for="(row, i) in activeTableRows" :key="i" class="hover:bg-[#F4FFFC] transition-colors">
                <td v-for="col in activeTableColumns" :key="col" class="px-5 py-3.5 whitespace-nowrap font-medium">
                  {{ row[col] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Riwayat Kebijakan -->
      <section class="p-6 rounded-2xl bg-white border border-[#D5F5DD] shadow-sm space-y-4">
        <h3 class="text-lg font-bold text-[#1F4B2C]">Riwayat kebijakan dievaluasi</h3>

        <div class="overflow-x-auto">
          <div class="min-w-[640px]">
            <!-- Table Header -->
            <div class="grid grid-cols-12 gap-4 px-4 py-3 bg-[#EAFFE9] rounded-xl text-xs font-bold text-[#275836] uppercase tracking-wider mb-2 border border-[#D5F5DD]">
              <span class="col-span-4">Judul kebijakan</span>
              <span class="col-span-2">Jenis</span>
              <span class="col-span-2">Indeks dampak</span>
              <span class="col-span-2">Status</span>
              <span class="col-span-2 text-right">Tanggal</span>
            </div>

            <!-- Table Rows -->
            <div class="space-y-2">
              <div 
                v-for="k in riwayatKebijakan" 
                :key="k.id" 
                class="grid grid-cols-12 gap-4 items-center px-4 py-3.5 rounded-xl bg-white border border-[#D5F5DD] hover:bg-[#F4FFFC] transition-colors text-sm">
                <span class="col-span-4 font-bold text-[#1F4B2C] truncate">{{ k.judul }}</span>
                <span class="col-span-2 text-[#275836]/80 font-medium">{{ k.jenis }}</span>
                <span class="col-span-2 font-mono font-bold text-[#4D7111]">{{ k.skor }}</span>
                <span class="col-span-2">
                  <span 
                    class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold"
                    :class="{
                      'bg-[#EAFFE9] text-[#1F4B2C] border border-[#91EAAF]': k.status === 'aktif' || k.status === 'disetujui',
                      'bg-amber-50 text-amber-800 border border-amber-200': k.status === 'pending' || k.status === 'evaluasi',
                      'bg-rose-50 text-rose-800 border border-rose-200': k.status === 'ditolak' || k.status === 'nonaktif',
                      'bg-slate-100 text-slate-700 border border-slate-200': !['aktif','disetujui','pending','evaluasi','ditolak','nonaktif'].includes(k.status)
                    }">
                    {{ statusLabel(k.status) }}
                  </span>
                </span>
                <span class="col-span-2 text-right text-xs font-medium text-[#275836]/70">{{ k.tanggal }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Header from '../components/layout/Header2.vue'

// --- Filter state ---
const filters = reactive({
    start: '2026-08-01',
    end: '2026-08-31',
    kategori: 'cuaca',
    kota: 'makassar',
})

// --- Ringkasan statistik (dummy) ---
const summaryStats = ref([
    { label: 'Rata-rata curah hujan', value: '86 mm', icon: '🌧️', color: 'var(--color-brand-active)' },
    { label: 'Hari status banjir aktif', value: '6 hari', icon: '🌊', color: '#C0553D' },
    { label: 'Rata-rata kepadatan jalan', value: '69%', icon: '🚦', color: 'var(--color-brand-sidebar)' },
    { label: 'Kebijakan diterapkan', value: '3', icon: '📄', color: 'var(--color-brand-darkbtn)' },
])

// --- Data tren curah hujan & genangan (dummy) ---
const trendData = ref([
    { label: 'Mgg 1', hujan: 60, genangan: 20 },
    { label: 'Mgg 2', hujan: 95, genangan: 35 },
    { label: 'Mgg 3', hujan: 140, genangan: 55 },
    { label: 'Mgg 4', hujan: 78, genangan: 30 },
])

function toPoints(values, max) {
    const stepX = 560 / (values.length - 1)
    return values.map((v, i) => `${i * stepX},${200 - (v / max) * 200}`).join(' ')
}

const curahHujanPoints = computed(() => toPoints(trendData.value.map(d => d.hujan), 160))
const genanganPoints = computed(() => toPoints(trendData.value.map(d => d.genangan), 160))

// --- Status infrastruktur (dummy, untuk donut) ---
const infraStatus = ref([
    { label: 'Baik', value: 42, color: 'var(--color-brand-active)' },
    { label: 'Rusak ringan', value: 18, color: 'var(--color-brand-bright)' },
    { label: 'Dalam perbaikan', value: 9, color: 'var(--color-brand-sidebar)' },
    { label: 'Rusak berat', value: 5, color: '#C0553D' },
])

const donutStyle = computed(() => {
    const total = infraStatus.value.reduce((a, s) => a + s.value, 0)
    let acc = 0
    const stops = infraStatus.value.map(s => {
        const from = (acc / total) * 100
        acc += s.value
        const to = (acc / total) * 100
        return `${s.color} ${from}% ${to}%`
    })
    return { background: `conic-gradient(${stops.join(', ')})` }
})

// --- Kepadatan per ruas (dummy) ---
const ruasJalanList = ref([
    { nama: 'Perintis Kemerdekaan', kepadatan: 78 },
    { nama: 'Sultan Alauddin', kepadatan: 60 },
    { nama: 'Urip Sumoharjo', kepadatan: 71 },
    { nama: 'A.P. Pettarani', kepadatan: 84 },
])

// --- Tabel data mentah per kategori (dummy) ---
const tableData = {
    cuaca: {
        columns: ['Tanggal', 'Suhu (°C)', 'Curah hujan (mm)', 'Kondisi'],
        rows: [
            { Tanggal: '2026-08-05', 'Suhu (°C)': 29, 'Curah hujan (mm)': 60, Kondisi: 'Hujan ringan' },
            { Tanggal: '2026-08-12', 'Suhu (°C)': 27, 'Curah hujan (mm)': 95, Kondisi: 'Hujan lebat' },
            { Tanggal: '2026-08-19', 'Suhu (°C)': 30, 'Curah hujan (mm)': 30, Kondisi: 'Berawan' },
        ],
    },
    jalan: {
        columns: ['Ruas jalan', 'Kapasitas', 'Volume kendaraan', 'Kepadatan'],
        rows: [
            { 'Ruas jalan': 'Perintis Kemerdekaan', Kapasitas: 3200, 'Volume kendaraan': 3900, Kepadatan: '78%' },
            { 'Ruas jalan': 'Sultan Alauddin', Kapasitas: 2600, 'Volume kendaraan': 2400, Kepadatan: '60%' },
        ],
    },
    lingkungan: {
        columns: ['Wilayah', 'Tingkat polusi', 'Genangan air', 'Status banjir'],
        rows: [
            { Wilayah: 'Panakkukang', 'Tingkat polusi': '55%', 'Genangan air': '30%', 'Status banjir': 'Siaga' },
            { Wilayah: 'Tamalate', 'Tingkat polusi': '40%', 'Genangan air': '15%', 'Status banjir': 'Aman' },
        ],
    },
    infrastruktur: {
        columns: ['Nama aset', 'Jenis', 'Kondisi', 'Status perbaikan'],
        rows: [
            { 'Nama aset': 'Drainase Jl. Urip Sumoharjo', Jenis: 'Drainase', Kondisi: 'Rusak ringan', 'Status perbaikan': 'Dijadwalkan' },
            { 'Nama aset': 'Lampu lalu lintas Pettarani', Jenis: 'Lalu lintas', Kondisi: 'Baik', 'Status perbaikan': '—' },
        ],
    },
}

const kategoriLabel = computed(() => ({
    cuaca: 'Cuaca', jalan: 'Jalan', lingkungan: 'Lingkungan', infrastruktur: 'Infrastruktur',
}[filters.kategori]))

const activeTableColumns = computed(() => tableData[filters.kategori].columns)
const activeTableRows = computed(() => tableData[filters.kategori].rows)

// --- Riwayat kebijakan (dummy) ---
const riwayatKebijakan = ref([
    { id: 1, judul: 'Normalisasi Drainase Jl. Urip Sumoharjo', jenis: 'Normalisasi drainase', skor: 72, status: 'diterapkan', tanggal: '2026-08-10' },
    { id: 2, judul: 'Rekayasa Lalu Lintas Pettarani', jenis: 'Rekayasa lalu lintas', skor: 58, status: 'diajukan', tanggal: '2026-08-18' },
    { id: 3, judul: 'Pelebaran Jl. Sultan Alauddin', jenis: 'Pelebaran jalan', skor: 65, status: 'draft', tanggal: '2026-08-22' },
])

function statusLabel(status) {
    return { draft: 'Draf', diajukan: 'Diajukan', diterapkan: 'Diterapkan' }[status] ?? status
}

function exportAs(type) {
    // TODO: sambungkan ke endpoint export backend (PDF/Excel) dengan filter aktif
    console.log('Export sebagai', type, 'dengan filter', { ...filters })
}
</script>

