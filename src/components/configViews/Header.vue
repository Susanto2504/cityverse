<template>
    <!-- Bagian Header -->
        <div class="sticky top-0 z-40 bg-mint-50/90 h-20 px-7 md:px-9 flex items-center justify-between border-b border-emerald-900/5 shrink-0">
            <!-- Title and City Scope Subtitle -->
            
            <div class="flex items-center gap-3.5">
                <!-- Tombol Back Bergaya Icon Button -->
                <RouterLink 
                    to="/config" 
                    class="w-10 h-10 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-700 hover:text-emerald-800 transition-all active:scale-95 shrink-0"
                    title="Kembali ke Konfigurasi">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-left-dash preview-icon"><path d="M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/><path d="M20 9v6"/></svg>
                </RouterLink>

                <!-- Judul & Subjudul -->
                <div>    
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-none" id="header-main-title">{{ title }}</h2>
                    <p class="text-xs md:text-sm font-bold text-emerald-800/70 tracking-wide mt-1 uppercase" id="header-sub-title">{{ data }}</p>
                </div>
            </div>

            <!-- Global Header Controls -->
            <div class="flex items-center gap-4">
                <!-- Notification Bell with Active Indicator Count (3) -->
                <div class="relative">
                    <button class="w-11 h-11 rounded-full bg-white hover:bg-emerald-50 border border-slate-200/80 shadow-sm flex items-center justify-center text-slate-700 transition">
                        <i class="fa-regular fa-bell text-lg"></i>
                    </button>

                    <span class="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white font-bold text-[11px] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                        3
                    </span>

                    <!-- Notifications Flyout -->
                    <div class="hidden absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50" id="notification-flyout">
                        <div class="flex justify-between items-center mb-3">
                            <span class="font-bold text-xs uppercase text-slate-500">Notifikasi Masuk</span>
                            <span class="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full">3 Baru</span>
                        </div>
                        <ul class="text-xs space-y-2.5">
                            <li class="p-2 rounded-lg bg-emerald-50 text-slate-700">
                                <span class="font-bold text-emerald-900 block">Sensor Genangan Air Aktif</span>
                                Pintu air Panakkukang naik 12cm.
                            </li>
                            <li class="p-2 rounded-lg bg-amber-50 text-slate-700">
                                <span class="font-bold text-amber-900 block">Pemberitahuan Arus Lalin</span>
                                Jalan Urip Sumoharjo terpantau padat merayap.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
</template>

<script setup>
// Definisi props yang menerima judul dari parent/views
defineProps({
  title: {
    type: String,
    required: true,
    default: 'Dashboard'
  },

  data: {
    type: String,
    required: true,
    default: 'Kota Makassar'
  }
})
</script>