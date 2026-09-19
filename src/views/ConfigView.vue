<template>
    <div>
        <!-- Bagian Header -->
        <Header title="Data &amp; Konfigurasi Kota"/>

        <!-- Bagian Main -->
        <main class="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
            <!-- Ringkasan Kota (Hero Banner) -->
            <section class="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white shadow-xl shadow-slate-900/20 border border-slate-700/50 sm:p-10">
                <!-- Background Grid & Glow Effects -->
                <div 
                    class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
                    aria-hidden="true"
                ></div>
                <div 
                    class="pointer-events-none absolute -top-1/2 -right-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" 
                    aria-hidden="true"
                ></div>

                <div class="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                    <!-- Intro Text -->
                    <div class="max-w-xl">
                        <div class="mb-3.5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-emerald-400 backdrop-blur-md">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                            Kota Makassar
                        </div>
                        <h2 class="font-sans text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl sm:leading-snug">
                            Semua data operasional kota, satu tampilan terpadu.
                        </h2>
                    </div>

                    <!-- Summary Stats -->
                    <div class="flex flex-wrap gap-8 sm:gap-10">
                        <!-- Ruas Jalan -->
                        <div class="flex flex-col">
                            <span class="font-sans text-3xl font-extrabold text-white sm:text-4xl">—</span>
                            <span class="mt-1 text-xs font-medium text-slate-400 sm:text-sm">Ruas jalan terpantau</span>
                        </div>

                        <!-- Titik Cuaca (Vue Component) -->
                        <div class="flex flex-col">
                            <span class="font-sans text-3xl font-extrabold text-white sm:text-4xl">
                                {{ temperature }}
                            </span>
                            <span class="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                                {{ condition }}
                            </span>
                        </div>

                        <!-- Titik Lingkungan -->
                        <div class="flex flex-col">
                            <span class="font-sans text-3xl font-extrabold text-white sm:text-4xl">—</span>
                            <span class="mt-1 text-xs font-medium text-slate-400 sm:text-sm">Titik lingkungan</span>
                        </div>

                        <!-- Aset Infrastruktur -->
                        <div class="flex flex-col">
                            <span class="font-sans text-3xl font-extrabold text-white sm:text-4xl">—</span>
                            <span class="mt-1 text-xs font-medium text-slate-400 sm:text-sm">Aset infrastruktur</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Data Grid (Bento Grid) -->
            <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                
                <!-- Card 1: Ruas Jalan -->
                <article class="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl md:col-span-2 min-h-[220px] bg-white border border-slate-200/80 text-slate-900 hover:border-slate-300 hover:shadow-slate-200/50">
                    <div class="flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 bg-[#10B9811F] text-[#10B981]">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 19L9 3h6l5 16"/>
                                <line x1="12" y1="6" x2="12" y2="8"/>
                                <line x1="12" y1="12" x2="12" y2="14"/>
                            </svg>
                        </div>
                        <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                            Data aktif
                        </span>
                    </div>

                    <div class="my-4">
                        <h3 class="font-sans text-lg font-bold tracking-tight text-slate-900">
                            Ruas Jalan
                        </h3>
                        <p class="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                            Kapasitas jalan, volume kendaraan, dan tingkat kepadatan tiap ruas.
                        </p>
                    </div>

                    <div class="flex items-end justify-between gap-4 mt-4">
                        <div>
                            <span class="block font-sans text-2xl font-extrabold sm:text-3xl leading-none text-slate-900">
                                —
                            </span>
                            <span class="mt-1 block text-xs font-medium text-slate-400">
                                ruas jalan
                            </span>
                        </div>
                        <button class="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white">
                            <span>Lihat data</span>
                            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </article>

                <!-- Card 2: Cuaca Kota -->
                <article class="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl md:col-span-1 min-h-[220px] bg-white border border-slate-200/80 text-slate-900 hover:border-slate-300 hover:shadow-slate-200/50">
                    <div class="flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 bg-[#0EA5E91F] text-[#0EA5E9]">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                                <path d="M22 10a3 3 0 0 0-3-3h-2.25"/>
                            </svg>
                        </div>
                        <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-50 text-emerald-700">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                            Data aktif
                        </span>
                    </div>

                    <div class="my-4">
                        <h3 class="font-sans text-lg font-bold tracking-tight text-slate-900">
                            Cuaca Kota
                        </h3>
                        <p class="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                            Suhu, curah hujan, dan kondisi cuaca tiap wilayah.
                        </p>
                    </div>

                    <div class="flex items-end justify-between gap-4 mt-4">
                        <div>
                            <span class="block font-sans text-2xl font-extrabold sm:text-3xl leading-none text-slate-900">
                                {{ temperature }}
                            </span>
                            <span class="mt-1 block text-xs font-medium text-slate-400">
                                {{ condition }}
                            </span>
                        </div>
                        <button class="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white">
                            <span>Lihat data</span>
                            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </article>

                <!-- Card 3: Lingkungan -->
                <article class="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl md:col-span-1 min-h-[220px] bg-white border border-slate-200/80 text-slate-900 hover:border-slate-300 hover:shadow-slate-200/50">
                    <div class="flex items-center justify-between">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 bg-[#F59E0B1F] text-[#F59E0B]">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                                <path d="M22 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                            </svg>
                        </div>
                        <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-600">
                            <span class="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                            Menunggu data
                        </span>
                    </div>

                    <div class="my-4">
                        <h3 class="font-sans text-lg font-bold tracking-tight text-slate-900">
                            Lingkungan
                        </h3>
                        <p class="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-500">
                            Tingkat polusi, genangan air, dan status banjir tiap wilayah.
                        </p>
                    </div>

                    <div class="flex items-end justify-between gap-4 mt-4">
                        <div>
                            <span class="block font-sans text-2xl font-extrabold sm:text-3xl leading-none text-slate-900">
                                —
                            </span>
                            <span class="mt-1 block text-xs font-medium text-slate-400">
                                titik pantau
                            </span>
                        </div>
                        <button class="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white">
                            <span>Lihat data</span>
                            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </article>

                <!-- Card 4: Infrastruktur Kota -->
                <article class="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-4 lg:flex-row lg:items-center lg:gap-8 bg-slate-900 border border-slate-800 text-white hover:border-slate-700 hover:shadow-slate-950/50">
                    <div class="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3.5">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105 bg-[#6366F11F] text-[#6366F1]">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="6" width="20" height="8" rx="1"/>
                                <path d="M17 14v7"/>
                                <path d="M7 14v7"/>
                                <path d="M12 14v7"/>
                            </svg>
                        </div>
                        <span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></span>
                            Data aktif
                        </span>
                    </div>

                    <div class="lg:flex-1 lg:my-0 my-4">
                        <h3 class="font-sans text-lg font-bold tracking-tight text-white">
                            Infrastruktur Kota
                        </h3>
                        <p class="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-400">
                            Jenis, kondisi teknis, serta jadwal perawatan berkala tiap aset infrastruktur fisik kota.
                        </p>
                    </div>

                    <div class="flex items-end justify-between gap-4 mt-4 lg:mt-0 lg:items-center">
                        <div>
                            <span class="block font-sans text-2xl font-extrabold sm:text-3xl leading-none text-white">
                                —
                            </span>
                            <span class="mt-1 block text-xs font-medium text-slate-400">
                                aset infrastruktur
                            </span>
                        </div>
                        <button class="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 bg-slate-800 text-slate-100 hover:bg-blue-600 hover:text-white">
                            <span>Lihat data</span>
                            <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </article>

            </section>

            <!-- Footer Informasi Sumber Data (Selalu di Paling Bawah) -->
            <footer class="mt-10 border-t border-slate-200/60 pt-6 text-xs text-slate-500">
                <div class="flex items-center justify-between">
                <p>
                    Sumber data cuaca disediakan oleh 
                    <a :href="dataSource.url" target="_blank" rel="noopener noreferrer" class="font-medium text-slate-700 underline">
                    {{ dataSource.name }} ({{ dataSource.fullName }})
                    </a>
                </p>
                <span>© {{ new Date().getFullYear() }} {{ dataSource.name }}</span>
                </div>
            </footer>
        </main>
    </div>
</template>

<script setup>
import Header from '../components/layout/Header2.vue'
import { ref, onMounted } from 'vue'

const temperature = ref('—')
const condition = ref('Memuat cuaca...')
const loading = ref(true)

// Kode ADM4 Kelurahan Pattunuang, Kec. Ujung Pandang, Kota Makassar
const ADM4_MAKASSAR = '73.71.01.1001' 

const fetchWeatherBMKG = async () => {
  try {
    const response = await fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${ADM4_MAKASSAR}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()

    // Navigasi struktur JSON BMKG:
    // result.data[0].cuaca[0] -> array prakiraan jam-jaman hari ini
    const todayForecast = result.data?.[0]?.cuaca?.[0]
    
    if (todayForecast && todayForecast.length > 0) {
      // Ambil data jam terdekat/paling pertama
      const currentWeather = todayForecast[0] 
      
      temperature.value = `${currentWeather.t}°C`
      condition.value = currentWeather.weather_desc
    } else {
      condition.value = 'Data tidak ditemukan'
    }

  } catch (error) {
    console.error('Gagal mengambil data cuaca BMKG:', error)
    condition.value = 'Gagal memuat cuaca'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchWeatherBMKG()
})

const dataSource = ref({
  name: 'BMKG',
  fullName: 'Badan Meteorologi, Klimatologi, dan Geofisika',
  url: 'https://data.bmkg.go.id/prakiraan-cuaca/'
})
</script>