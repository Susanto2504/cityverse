<template>
  <div class="min-h-screen bg-[#F4FFFC] font-['Plus_Jakarta_Sans',sans-serif] text-[#3F4743] antialiased selection:bg-[#C3E956] selection:text-[#1F4B2C]">
    <router-view v-if="$route.path !== '/config'" />
    <template v-else> 
    
      <!-- Header -->
      <Header title="Data &amp; Konfigurasi Kota" @click="$emit('toggle-sidebar')" />

      <!-- Main Content -->
      <main class="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
        <!-- Hero Banner / Ringkasan Utama -->
        <section class="relative mb-8 overflow-hidden rounded-[2rem] bg-[#1F4B2C] p-8 text-white shadow-2xl shadow-[#1F4B2C]/20 border border-[#275836] sm:p-10">
          <!-- Background Decorative Grid & Glows -->
          <div 
            class="pointer-events-none absolute inset-0 bg-[radial-gradient(#91EAAF_1px,transparent_1px)] [background-size:24px_24px] opacity-10" 
            aria-hidden="true"
          ></div>
          <div 
            class="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C3E956]/20 blur-3xl" 
            aria-hidden="true"
          ></div>
          <div 
            class="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#91EAAF]/15 blur-3xl" 
            aria-hidden="true"
          ></div>

          <div class="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <!-- Intro Text -->
            <div class="max-w-xl">
              <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-[#91EAAF]/30 bg-[#275836]/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#91EAAF] backdrop-blur-md">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C3E956] opacity-75"></span>
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-[#C3E956]"></span>
                </span>
                Kota Makassar
              </div>
              <h2 class="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-tight">
                Semua data operasional kota, <span class="text-[#C3E956]">satu tampilan terpadu.</span>
              </h2>
            </div>

            <!-- Summary Stats Header -->
            <div class="grid grid-cols-2 gap-4 sm:flex sm:gap-6">
              <div class="flex flex-col rounded-2xl bg-[#275836]/40 p-4 border border-[#91EAAF]/10 backdrop-blur-sm sm:min-w-[130px]">
                <span class="font-sans text-2xl font-black text-[#C3E956] sm:text-3xl">—</span>
                <span class="mt-1 text-xs font-medium text-[#91EAAF]">Ruas Jalan</span>
              </div>

              <div class="flex flex-col rounded-2xl bg-[#275836]/40 p-4 border border-[#91EAAF]/10 backdrop-blur-sm sm:min-w-[130px]">
                <span class="font-sans text-2xl font-black text-white sm:text-3xl">{{ temperature }}</span>
                <span class="mt-1 text-xs font-medium text-[#91EAAF] truncate">{{ condition }}</span>
              </div>

              <div class="flex flex-col rounded-2xl bg-[#275836]/40 p-4 border border-[#91EAAF]/10 backdrop-blur-sm sm:min-w-[130px]">
                <span class="font-sans text-2xl font-black text-[#C3E956] sm:text-3xl">—</span>
                <span class="mt-1 text-xs font-medium text-[#91EAAF]">Lingkungan</span>
              </div>

              <div class="flex flex-col rounded-2xl bg-[#275836]/40 p-4 border border-[#91EAAF]/10 backdrop-blur-sm sm:min-w-[130px]">
                <span class="font-sans text-2xl font-black text-[#C3E956] sm:text-3xl">—</span>
                <span class="mt-1 text-xs font-medium text-[#91EAAF]">Infrastruktur</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Bento Grid Section -->
        <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          <!-- Card 1: Ruas Jalan -->
          <article class="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1F4B2C]/5 border border-[#D5F5DD] md:col-span-2">
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAFFE9] text-[#1F4B2C] transition-transform duration-300 group-hover:scale-110">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19L9 3h6l5 16"/>
                  <line x1="12" y1="6" x2="12" y2="8"/>
                  <line x1="12" y1="12" x2="12" y2="14"/>
                </svg>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-[#EAFFE9] px-3 py-1 text-xs font-bold text-[#1F4B2C]">
                <span class="h-2 w-2 rounded-full bg-[#4D7111]"></span>
                Data aktif
              </span>
            </div>

            <div class="my-6">
              <h3 class="font-sans text-xl font-bold tracking-tight text-[#1F4B2C]">Ruas Jalan</h3>
              <p class="mt-2 text-sm leading-relaxed text-[#3F4743]/80">
                Kapasitas jalan, volume kendaraan, dan tingkat kepadatan tiap ruas lalu lintas secara terintegrasi.
              </p>
            </div>

            <div class="flex items-end justify-between gap-4">
              <div>
                <span class="block font-sans text-3xl font-black leading-none text-[#1F4B2C]">—</span>
                <span class="mt-1.5 block text-xs font-semibold text-[#3F4743]/60">ruas jalan terpantau</span>
              </div>

              <router-link :to="{name: 'data-jalan'}" class="inline-flex items-center gap-2 rounded-xl bg-[#3F4743] px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#1F4B2C] hover:shadow-md active:scale-95"> 
                <span>Lihat data</span>
                <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Card 2: Cuaca Kota -->
          <article class="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1F4B2C]/5 border border-[#D5F5DD] md:col-span-1">
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAFFE9] text-[#4D7111] transition-transform duration-300 group-hover:scale-110">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  <path d="M22 10a3 3 0 0 0-3-3h-2.25"/>
                </svg>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-[#EAFFE9] px-3 py-1 text-xs font-bold text-[#1F4B2C]">
                <span class="h-2 w-2 rounded-full bg-[#4D7111]"></span>
                Data aktif
              </span>
            </div>

            <div class="my-6">
              <h3 class="font-sans text-xl font-bold tracking-tight text-[#1F4B2C]">Cuaca Kota</h3>
              <p class="mt-2 text-sm leading-relaxed text-[#3F4743]/80">
                Suhu, curah hujan, dan indikator mikro cuaca terkini.
              </p>
            </div>

            <div class="flex items-end justify-between gap-4">
              <div>
                <span class="block font-sans text-3xl font-black leading-none text-[#1F4B2C]">{{ temperature }}</span>
                <span class="mt-1.5 block text-xs font-semibold text-[#3F4743]/60 truncate max-w-[100px]">{{ condition }}</span>
              </div>
              <router-link :to="{name: 'data-cuaca'}" class="inline-flex items-center gap-2 rounded-xl bg-[#3F4743] px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#1F4B2C] hover:shadow-md active:scale-95">
                <span>Lihat data</span>
                <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Card 3: Lingkungan -->
          <article class="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1F4B2C]/5 border border-[#D5F5DD] md:col-span-1">
            <div class="flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4FFFC] text-[#3F4743] transition-transform duration-300 group-hover:scale-110">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M22 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-[#3F4743]">
                <span class="h-2 w-2 rounded-full bg-slate-400"></span>
                Menunggu
              </span>
            </div>

            <div class="my-6">
              <h3 class="font-sans text-xl font-bold tracking-tight text-[#1F4B2C]">Lingkungan</h3>
              <p class="mt-2 text-sm leading-relaxed text-[#3F4743]/80">
                Indeks kualitas udara, genangan air, dan peringatan dini.
              </p>
            </div>

            <div class="flex items-end justify-between gap-4">
              <div>
                <span class="block font-sans text-3xl font-black leading-none text-[#1F4B2C]">—</span>
                <span class="mt-1.5 block text-xs font-semibold text-[#3F4743]/60">titik pantau</span>
              </div>
              <router-link :to="{name: 'data-lingkungan'}" class="inline-flex items-center gap-2 rounded-xl bg-[#3F4743] px-4 py-2.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#1F4B2C] hover:shadow-md active:scale-95">
                <span>Lihat data</span>
                <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Card 4: Infrastruktur Kota (Highlight Wide Card) -->
          <article class="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#275836] p-7 text-white shadow-xl shadow-[#275836]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl md:col-span-2 lg:col-span-4 lg:flex-row lg:items-center lg:gap-8 border border-[#91EAAF]/20">
            <!-- Subtle Inner Glow -->
            <div class="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#C3E956]/10 blur-2xl" aria-hidden="true"></div>

            <div class="flex items-center justify-between lg:flex-col lg:items-start lg:gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F4B2C] text-[#C3E956] transition-transform duration-300 group-hover:scale-110 border border-[#91EAAF]/20">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="6" width="20" height="8" rx="1"/>
                  <path d="M17 14v7"/>
                  <path d="M7 14v7"/>
                  <path d="M12 14v7"/>
                </svg>
              </div>
              <span class="inline-flex items-center gap-1.5 rounded-full bg-[#1F4B2C] px-3 py-1 text-xs font-bold text-[#91EAAF] border border-[#91EAAF]/20">
                <span class="h-2 w-2 rounded-full bg-[#C3E956]"></span>
                Data aktif
              </span>
            </div>

            <div class="my-6 lg:my-0 lg:flex-1">
              <h3 class="font-sans text-xl font-bold tracking-tight text-white">Infrastruktur Kota</h3>
              <p class="mt-2 text-sm leading-relaxed text-[#91EAAF]/90 max-w-2xl">
                Klasifikasi jenis, asesmen kondisi teknis fisik, serta manajemen jadwal perawatan berkala untuk aset fasilitas publik kota.
              </p>
            </div>

            <div class="flex items-end justify-between gap-6 lg:items-center">
              <div>
                <span class="block font-sans text-3xl font-black leading-none text-[#C3E956]">—</span>
                <span class="mt-1.5 block text-xs font-medium text-[#91EAAF]">aset terdaftar</span>
              </div>
              <router-link :to="{name: 'data-infrastruktur'}" class="inline-flex items-center gap-2 rounded-xl bg-[#C3E956] px-5 py-3 text-xs font-black text-[#1F4B2C] transition-all duration-200 hover:bg-[#91EAAF] hover:shadow-lg hover:shadow-[#C3E956]/20 active:scale-95">
                <span>Lihat data</span>
                <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </article>

        </section>

        <!-- Footer Informasi -->
        <footer class="mt-12 border-t border-[#D5F5DD] pt-6 text-xs text-[#3F4743]/70">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Sumber data cuaca disediakan oleh 
              <a :href="dataSource.url" target="_blank" rel="noopener noreferrer" class="font-semibold text-[#1F4B2C] underline decoration-[#C3E956] underline-offset-4 transition-colors hover:text-[#4D7111]">
                {{ dataSource.name }} ({{ dataSource.fullName }})
              </a>
            </p>
            <span class="font-medium">© {{ new Date().getFullYear() }} {{ dataSource.name }}</span>
          </div>
        </footer>
      </main>
    </template>
  </div>
</template>

<script setup>
import Header from '../components/layout/Header2.vue'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const route = useRouter();

const isConfigActive = computed(() => {
  return route.path.startsWith('/config') 
})

const temperature = ref('—')
const condition = ref('Memuat cuaca...')
const loading = ref(true)

// Kode ADM4 Kelurahan Pattunuang, Kec. Ujung Pandang, Kota Makassar
const ADM4_MAKASSAR = '73.71.04.1001' 

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