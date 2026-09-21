<template>
  <!-- Wrapper luar: w-full (bukan w-screen) + h-dvh (layar penuh presisi) -->
  <div class="flex h-dvh w-full flex-col overflow-hidden bg-[var(--color-mint-50)]">
    
    <!-- Header (Tetap di atas, tidak ikut di-scroll) -->
    <Header title="Data Cuaca" data="Kota Makassar" />

    <!-- Main Content (Tambahkan min-h-0 agar flex child bisa scroll dengan benar) -->
    <main class="flex-1 min-h-0 overflow-y-auto space-y-6 px-4 py-6 font-[var(--font-sans)] text-[var(--color-brand-deep)] sm:px-6 lg:px-8">
      
      <!-- State Loading -->
      <div v-if="loading" class="flex min-h-[400px] flex-col items-center justify-center gap-3">
        <div class="h-10 w-10 animate-spin rounded-full border-4 border-[var(--color-brand-sidebar)] border-t-[var(--color-brand-bright)]"></div>
        <p class="text-sm font-medium text-[var(--color-brand-sidebar)]">Memuat seluruh data cuaca BMKG...</p>
      </div>

      <!-- State Error -->
      <div v-else-if="error" class="rounded-3xl bg-red-50 p-6 text-center text-red-700 ring-1 ring-red-200">
        <p class="font-semibold">{{ error }}</p>
        <button @click="fetchWeatherData" class="mt-4 rounded-xl bg-[var(--color-brand-deep)] px-4 py-2 text-xs font-semibold text-white hover:opacity-90">
          Coba Lagi
        </button>
      </div>

      <template v-else>
        <!-- Banner Utama -->
        <section class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-brand-deep)] via-[var(--color-brand-sidebar)] to-[var(--color-brand-active)] p-6 text-white shadow-xl sm:p-8">
          <div class="pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full bg-[var(--color-brand-bright)]/20 blur-3xl" />
          
          <div class="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <!-- Lokasi -->
              <div class="relative w-full">
                <select
                  id="kelurahan-select"
                  v-model="selectedAdm4"
                  @change="fetchWeatherData"
                  class="w-full cursor-pointer appearance-none rounded-xl bg-white px-3.5 py-2.5 pr-8 text-xs font-semibold text-[var(--color-brand-deep)] shadow-sm ring-1 ring-[var(--color-mint-200)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-bright)]"
                >
                  <option 
                    v-for="item in filteredMakassarList" 
                    :key="item.code" 
                    :value="item.code"
                  >
                    {{ item.name }} ({{ item.kecamatan }})
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[var(--color-brand-deep)]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div class="mt-3 text-xs text-[var(--color-mint-200)]/90 space-y-0.5">
                <p class="font-semibold">Tanggal: <span class="text-white">{{ formatDateOnly(currentWeather?.local_datetime) }}</span></p>
              </div>
              
              <!-- Suhu & Deskripsi -->
              <div class="mt-4 flex items-baseline gap-3">
                <span class="text-7xl font-extrabold tracking-tight leading-none">{{ currentWeather?.t ?? '--' }}°C</span>
                <div>
                  <p class="text-lg font-bold text-[var(--color-brand-accent)]">{{ currentWeather?.weather_desc ?? '-' }}</p>
                  <p class="text-xs font-medium text-[var(--color-mint-200)]/80 italic">({{ currentWeather?.weather_desc_en ?? '-' }})</p>
                </div>
              </div>

              <!-- Jam Realtime -->
              <div class="mt-3 text-lg text-[var(--color-mint-200)]/90 space-y-0.5">
                <p class="font-semibold">
                  <span class="font-mono text-white font-bold">{{ currentTime }} WITA</span>
                </p>
              </div>
            </div>

            <!-- Visual & Stats -->
            <div class="flex flex-col items-center gap-4">
              <img 
                :src="currentWeather?.image" 
                :alt="currentWeather?.weather_desc" 
                class="h-28 w-28 drop-shadow-lg transition-transform duration-500 hover:scale-105"
              />
              
              <div class="flex gap-4 rounded-2xl bg-white/10 p-3.5 text-xs font-medium backdrop-blur-md ring-1 ring-white/15">
                <div class="flex items-center gap-1.5">
                  <span class="text-[var(--color-mint-200)]">Kelembapan (hu):</span>
                  <span class="font-bold">{{ currentWeather?.hu ?? '--' }}%</span>
                </div>
                <div class="h-4 w-[1px] bg-white/20"></div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[var(--color-mint-200)]">Angin (ws):</span>
                  <span class="font-bold">{{ currentWeather?.ws ?? '--' }} km/jam</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Detail Grid -->
        <section class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div class="rounded-2xl bg-white p-4 ring-1 ring-[var(--color-mint-200)] shadow-sm">
            <p class="text-xs text-[var(--color-brand-deep)]/60 font-medium">Kecepatan Angin (ws)</p>
            <p class="mt-1 text-lg font-bold text-[var(--color-brand-deep)]">{{ currentWeather?.ws ?? '--' }} <span class="text-xs font-normal">km/jam</span></p>
          </div>

          <div class="rounded-2xl bg-white p-4 ring-1 ring-[var(--color-mint-200)] shadow-sm">
            <p class="text-xs text-[var(--color-brand-deep)]/60 font-medium">Arah Angin (wd)</p>
            <p class="mt-1 text-lg font-bold text-[var(--color-brand-deep)]">Dari {{ currentWeather?.wd ?? '-' }}</p>
          </div>

          <div class="rounded-2xl bg-white p-4 ring-1 ring-[var(--color-mint-200)] shadow-sm">
            <p class="text-xs text-[var(--color-brand-deep)]/60 font-medium">Tutupan Awan (tcc)</p>
            <p class="mt-1 text-lg font-bold text-[var(--color-brand-deep)]">{{ currentWeather?.tcc ?? currentWeather?.tp ?? '--' }}%</p>
          </div>

          <div class="rounded-2xl bg-white p-4 ring-1 ring-[var(--color-mint-200)] shadow-sm">
            <p class="text-xs text-[var(--color-brand-deep)]/60 font-medium">Jarak Pandang (vs_text)</p>
            <p class="mt-1 text-lg font-bold text-[var(--color-brand-deep)]">
              {{ getVisibilityText(currentWeather) }}
            </p>
          </div>
        </section>

        <!-- Prakiraan Per Jam -->
        <section class="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[var(--color-mint-200)]">
          <h2 class="mb-4 text-base font-bold text-[var(--color-brand-deep)]">Prakiraan Waktu Jam-jaman</h2>

          <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            <div 
              v-for="(item, idx) in hourlyForecast" 
              :key="idx"
              class="flex min-w-[130px] flex-col items-center gap-2 rounded-2xl bg-[var(--color-mint-50)] p-3 text-center transition-all hover:bg-[var(--color-mint-100)]"
            >
              <span class="text-[11px] font-bold text-[var(--color-brand-deep)]">{{ formatTime(item.local_datetime) }} WITA</span>
              <span class="text-[10px] text-gray-500 font-mono">{{ item.utc_datetime.split(' ')[1] }} UTC</span>
              <img :src="item.image" :alt="item.weather_desc" class="h-8 w-8 object-contain my-1" />
              <span class="text-sm font-extrabold text-[var(--color-brand-deep)]">{{ item.t }}°C</span>
              <span class="text-[11px] font-medium text-[var(--color-brand-sidebar)] truncate w-full">{{ item.weather_desc }}</span>
            </div>
          </div>
        </section>
      </template>

    </main>

    <!-- Footer (Tetap di bawah) -->
    <footer class="w-full shrink-0 border-t border-[var(--color-mint-200)] bg-white px-4 py-3 text-center text-xs text-[var(--color-brand-deep)]/70 sm:px-6">
      <div class="flex flex-col items-center justify-between gap-1 sm:flex-row">
        <p>&copy; {{ new Date().getFullYear() }} Data Cuaca BMKG - Kota Makassar.</p>
        <p class="text-[11px] opacity-75">Sumber Data: <a href="https://api.bmkg.go.id" target="_blank" class="font-semibold underline hover:text-[var(--color-brand-deep)]">BMKG Indonesia</a></p>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Header from '@/components/configViews/Header.vue'
import { makassarList } from './Makassar/makassar.js' 

const loading = ref(true)
const error = ref(null)

const locationName = ref('Kota Makassar')
const currentWeather = ref(null)
const hourlyForecast = ref([])

const searchQuery = ref('')
const selectedAdm4 = ref('73.71.04.1001') // Default Kel. Baru

// State & Timer untuk Jam Real-time WITA
const currentTime = ref('')
let timer = null

const updateMakassarTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Makassar',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(/\./g, ':')
}

const filteredMakassarList = computed(() => {
  if (!searchQuery.value) return makassarList
  const query = searchQuery.value.toLowerCase()
  return makassarList.filter(item => 
    item.name.toLowerCase().includes(query) ||
    item.kecamatan.toLowerCase().includes(query)
  )
})

const getVisibilityText = (item) => {
  if (!item) return '--'

  // 1. Jika vs_text berupa Object
  if (item.vs_text && typeof item.vs_text === 'object') {
    const val = item.vs_text.value ?? item.vs_text.text ?? item.vs_text.val
    const unit = item.vs_text.unit ?? 'km'
    return val !== undefined && val !== null && val !== '' ? `${val} ${unit}` : '--'
  }

  // 2. Jika vs_text berupa Primitive (String / Number)
  if (item.vs_text !== undefined && item.vs_text !== null && item.vs_text !== '') {
    const vsStr = String(item.vs_text)
    if (vsStr === '0') return '> 10 km'
    return vsStr.includes('km') ? vsStr : `${vsStr} km`
  }

  // 3. Fallback ke field 'vs' jika 'vs_text' bernilai null/undefined
  if (item.vs !== undefined && item.vs !== null && item.vs !== '') {
    if (Number(item.vs) === 0) return '> 10 km'
    return `${item.vs} km`
  }

  return '--'
}

const fetchWeatherData = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${selectedAdm4.value}`)
    if (!response.ok) throw new Error('Gagal mengambil data dari BMKG')
    
    const resData = await response.json()
    
    if (resData && resData.data && resData.data.length > 0) {
      const locationData = resData.data[0]
      const cuacaList = locationData.cuaca.flat()

      const lokasi = locationData.lokasi
      locationName.value = `Kel. ${lokasi.desa || '-'}, Kec. ${lokasi.kecamatan || '-'}`
      
      currentWeather.value = cuacaList[0]
      hourlyForecast.value = cuacaList
    } else {
      throw new Error('Data tidak ditemukan.')
    }
  } catch (err) {
    error.value = err.message || 'Terjadi kesalahan saat memuat data.'
  } finally {
    loading.value = false
  }
}

// Format Tanggal Asli dari API (misal: "2026-09-21 02:00:00" -> "21-09-2026")
const formatDateOnly = (dateStr) => {
  if (!dateStr) return '-'
  const datePart = dateStr.split(' ')[0] 
  const [year, month, day] = datePart.split('-')
  
  if (!year || !month || !day) return dateStr
  return `${day}-${month}-${year}`
}

// Format Jam untuk Card Prakiraan Waktu Jam-jaman (misal: "02:00")
const formatTime = (dateStr) => {
  if (!dateStr) return '-'
  return dateStr.split(' ')[1]?.substring(0, 5) || dateStr
}

onMounted(() => {
  fetchWeatherData()
  updateMakassarTime()
  timer = setInterval(updateMakassarTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
</style>