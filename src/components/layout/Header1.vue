<template>
    <!-- Top Action Bar -->
        <div class="sticky top-0 z-40 bg-mint-50/90 h-20 px-7 md:px-9 flex items-center justify-between border-b border-emerald-900/5 shrink-0">
            <!-- Title and City Scope Subtitle -->
            <div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-none" id="header-main-title">{{ title }}</h2>
                <p class="text-xs md:text-sm font-bold text-emerald-800/70 tracking-wide mt-1 uppercase" id="header-sub-title">Kota MAKASSAR</p>
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

                <!-- Edit Data Kota Action Button -->
                <button class="px-5 py-2.5 bg-brand-darkbtn hover:bg-slate-800 text-white text-xs md:text-sm font-bold rounded-xl shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2.5" >
                    <i class="fa-solid fa-pen-to-square text-xs text-brand-bright"></i>
                    <span>Edit Data Kota</span>
                </button>
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
  }
})
</script>