<template>
  <div class="min-h-screen bg-[var(--color-mint-50)] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[var(--color-brand-bright)] selection:text-[var(--color-brand-deep)] pb-12">
    <!-- Header -->
    <Header title="Pengaturan" @click="$emit('toggle-sidebar')" />

    <!-- Main Wrapper -->
    <main class="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      <div class="flex flex-col md:flex-row gap-8 items-start">
        <!-- Sidebar Navigation -->
        <nav class="w-full md:w-64 shrink-0 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-[var(--color-mint-200)]/60 shadow-sm space-y-1">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            @click="activeTab = tab.key"
            class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group"
            :class="activeTab === tab.key
              ? 'bg-[var(--color-brand-deep)] text-white shadow-md shadow-[var(--color-brand-deep)]/10'
              : 'text-[#3F4743] hover:bg-[var(--color-mint-100)] hover:text-[var(--color-brand-deep)]'"
          >
            <span class="text-base transition-transform duration-200 group-hover:scale-110" :class="activeTab === tab.key ? 'opacity-100' : 'opacity-70'">
              {{ tab.icon }}
            </span>
            <span>{{ tab.label }}</span>
          </button>
        </nav>

        <!-- Main Content Area -->
        <div class="flex-1 w-full space-y-6">
          
          <!-- 1. Profil Pengguna -->
          <section v-if="activeTab === 'profil'" class="bg-white rounded-2xl border border-[var(--color-mint-200)]/60 p-6 md:p-8 shadow-sm transition-all">
            <div class="border-b border-slate-100 pb-5 mb-6">
              <h3 class="text-lg font-bold text-[var(--color-brand-deep)]">Profil Pengguna</h3>
              <p class="text-xs md:text-sm text-slate-500 mt-0.5">Kelola informasi identitas publik dan alamat email Anda.</p>
            </div>

            <!-- Avatar & Info -->
            <div class="flex items-center gap-5 p-4 rounded-xl bg-[var(--color-mint-50)] border border-[var(--color-mint-200)]/50 mb-6">
              <div class="relative">
                <div class="w-16 h-16 rounded-2xl bg-[var(--color-brand-accent)] text-[var(--color-brand-deep)] flex items-center justify-center font-bold text-xl shadow-inner">
                  {{ initials }}
                </div>
                <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--color-brand-bright)] border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 class="font-bold text-slate-800 text-base">{{ profil.nama }}</h4>
                <span class="inline-block mt-1 px-2.5 py-0.5 text-xs font-semibold rounded-md bg-white border border-[var(--color-mint-200)] text-[var(--color-brand-sidebar)]">
                  {{ profil.role }}
                </span>
              </div>
            </div>

            <!-- Form Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-[var(--color-brand-darkbtn)]">Nama Lengkap</label>
                <input 
                  v-model="profil.nama" 
                  type="text" 
                  class="w-full border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all"
                >
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-[var(--color-brand-darkbtn)]">Alamat Email</label>
                <div class="relative flex items-center">
                  <input 
                    v-model="profil.email" 
                    type="email" 
                    class="w-full border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl pl-4 pr-28 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all"
                  >
                  <div class="absolute right-2">
                    <span v-if="profil.terverifikasi" class="text-[10px] px-2.5 py-1 rounded-lg bg-[var(--color-brand-accent)]/40 text-[var(--color-brand-deep)] font-bold tracking-wide border border-[var(--color-brand-accent)]">
                      ✓ Terverifikasi
                    </span>
                    <button v-else class="text-[10px] px-2.5 py-1 rounded-lg bg-[var(--color-brand-bright)] text-[var(--color-brand-deep)] font-bold hover:brightness-95 transition-all shadow-sm">
                      Verifikasi
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="text-sm font-semibold px-6 py-2.5 rounded-xl bg-[var(--color-brand-deep)] text-white hover:bg-[var(--color-brand-sidebar)] active:scale-95 transition-all shadow-sm">
                Simpan Perubahan
              </button>
            </div>

            <!-- Password Section -->
            <div class="mt-10 pt-8 border-t border-slate-100">
              <h4 class="text-sm font-bold text-slate-800 mb-1">Keamanan & Password</h4>
              <p class="text-xs text-slate-500 mb-4">Pastikan kata sandi Anda menggunakan minimal 8 karakter dengan kombinasi angka.</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="password" 
                  placeholder="Password baru" 
                  class="border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all"
                >
                <input 
                  type="password" 
                  placeholder="Konfirmasi password" 
                  class="border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all"
                >
              </div>
              <button class="text-sm font-semibold px-5 py-2.5 rounded-xl border-2 border-[var(--color-brand-deep)] text-[var(--color-brand-deep)] hover:bg-[var(--color-mint-100)] active:scale-95 transition-all">
                Perbarui Password
              </button>
            </div>
          </section>

          <!-- 2. Konfigurasi Kota -->
          <section v-if="activeTab === 'kota'" class="bg-white rounded-2xl border border-[var(--color-mint-200)]/60 p-6 md:p-8 shadow-sm">
            <div class="border-b border-slate-100 pb-5 mb-6">
              <h3 class="text-lg font-bold text-[var(--color-brand-deep)]">Konfigurasi Kota</h3>
              <p class="text-xs md:text-sm text-slate-500 mt-0.5">Kelola parameter operasional dan ambang batas resiko daerah.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-[var(--color-brand-darkbtn)]">Nama Kota</label>
                <input v-model="kota.nama" type="text" class="w-full border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all">
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-[var(--color-brand-darkbtn)]">Jumlah Penduduk (Jiwa)</label>
                <input v-model.number="kota.jumlahPenduduk" type="number" class="w-full border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all">
              </div>
            </div>

            <!-- Threshold Cards -->
            <div class="bg-[var(--color-mint-50)]/60 rounded-2xl p-5 border border-[var(--color-mint-200)]/40 mb-6">
              <h4 class="text-xs font-bold text-[var(--color-brand-deep)] uppercase tracking-wider mb-3">Ambang Batas Tingkat Resiko</h4>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-white p-3.5 rounded-xl border border-[var(--color-mint-200)] shadow-sm">
                  <span class="text-xs font-semibold text-emerald-700 block mb-1">Aman (&lt;)</span>
                  <input v-model.number="kota.threshold.aman" type="number" class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 focus:outline-none focus:border-emerald-500">
                </div>
                <div class="bg-white p-3.5 rounded-xl border border-[var(--color-mint-200)] shadow-sm">
                  <span class="text-xs font-semibold text-amber-600 block mb-1">Waspada (&lt;)</span>
                  <input v-model.number="kota.threshold.waspada" type="number" class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 focus:outline-none focus:border-amber-500">
                </div>
                <div class="bg-white p-3.5 rounded-xl border border-[var(--color-mint-200)] shadow-sm">
                  <span class="text-xs font-semibold text-rose-600 block mb-1">Siaga (&ge;)</span>
                  <input v-model.number="kota.threshold.siaga" type="number" class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-semibold text-slate-700 focus:outline-none focus:border-rose-500">
                </div>
              </div>
            </div>

            <button class="text-sm font-semibold px-6 py-2.5 rounded-xl bg-[var(--color-brand-deep)] text-white hover:bg-[var(--color-brand-sidebar)] active:scale-95 transition-all shadow-sm">
              Simpan Konfigurasi
            </button>
          </section>

          <!-- 3. Notifikasi -->
          <section v-if="activeTab === 'notifikasi'" class="bg-white rounded-2xl border border-[var(--color-mint-200)]/60 p-6 md:p-8 shadow-sm">
            <div class="border-b border-slate-100 pb-5 mb-6">
              <h3 class="text-lg font-bold text-[var(--color-brand-deep)]">Preferensi Notifikasi</h3>
              <p class="text-xs md:text-sm text-slate-500 mt-0.5">Atur lansiran dan saluran komunikasi yang Anda terima.</p>
            </div>

            <!-- Toggles List -->
            <div class="divide-y divide-slate-100 mb-8">
              <div v-for="n in notifikasi" :key="n.key" class="flex items-center justify-between py-4">
                <div class="pr-4">
                  <p class="text-sm font-semibold text-slate-800">{{ n.label }}</p>
                  <p class="text-xs text-slate-400 mt-0.5">{{ n.desc }}</p>
                </div>
                <!-- Custom Modern Toggle Switch -->
                <button
                  @click="n.enabled = !n.enabled"
                  class="w-12 h-6 rounded-full relative transition-colors duration-200 ease-in-out shrink-0 focus:outline-none"
                  :class="n.enabled ? 'bg-[var(--color-brand-active)]' : 'bg-slate-200'"
                >
                  <span 
                    class="block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out absolute top-0.5" 
                    :class="n.enabled ? 'translate-x-6' : 'translate-x-0.5'"
                  ></span>
                </button>
              </div>
            </div>

            <!-- Channel Selection -->
            <div class="bg-[var(--color-mint-50)]/50 p-5 rounded-xl border border-[var(--color-mint-200)]/50">
              <h4 class="text-xs font-bold text-[var(--color-brand-deep)] uppercase tracking-wider mb-3">Kirim Notifikasi Melalui</h4>
              <div class="flex flex-wrap gap-6">
                <label class="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-slate-700">
                  <input v-model="channel.inApp" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-[var(--color-brand-active)] focus:ring-[var(--color-brand-active)] accent-[var(--color-brand-active)]"> 
                  In-App Notification
                </label>
                <label class="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-slate-700">
                  <input v-model="channel.email" type="checkbox" class="w-4 h-4 rounded border-slate-300 text-[var(--color-brand-active)] focus:ring-[var(--color-brand-active)] accent-[var(--color-brand-active)]"> 
                  Email Blast
                </label>
              </div>
            </div>
          </section>

          <!-- 4. Manajemen Pengguna -->
          <section v-if="activeTab === 'pengguna'" class="bg-white rounded-2xl border border-[var(--color-mint-200)]/60 p-6 md:p-8 shadow-sm">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
              <div>
                <h3 class="text-lg font-bold text-[var(--color-brand-deep)]">Manajemen Pengguna</h3>
                <p class="text-xs md:text-sm text-slate-500 mt-0.5">Daftar tim dan hak akses pengelola kota.</p>
              </div>
              <button class="inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-[var(--color-brand-deep)] text-white hover:bg-[var(--color-brand-sidebar)] active:scale-95 transition-all shadow-sm">
                <span>+</span> Undang Pengguna
              </button>
            </div>

            <!-- User List Card Style -->
            <div class="space-y-3">
              <div v-for="u in anggotaTim" :key="u.email" class="flex items-center justify-between p-3.5 rounded-xl border border-[var(--color-mint-200)]/50 hover:border-[var(--color-mint-200)] hover:bg-[var(--color-mint-50)]/30 transition-all">
                <div class="flex items-center gap-3.5">
                  <div class="w-10 h-10 rounded-xl bg-[var(--color-mint-100)] text-[var(--color-brand-deep)] border border-[var(--color-mint-200)] flex items-center justify-center text-xs font-bold shadow-sm">
                    {{ u.nama.split(' ').map(w => w[0]).slice(0,2).join('') }}
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-800">{{ u.nama }}</p>
                    <p class="text-xs text-slate-400">{{ u.email }}</p>
                  </div>
                </div>
                <span class="text-xs px-3 py-1 rounded-lg bg-[var(--color-mint-100)] text-[var(--color-brand-sidebar)] font-semibold border border-[var(--color-mint-200)]">
                  {{ u.role }}
                </span>
              </div>
            </div>
          </section>

          <!-- 5. Preferensi Tampilan -->
          <section v-if="activeTab === 'tampilan'" class="bg-white rounded-2xl border border-[var(--color-mint-200)]/60 p-6 md:p-8 shadow-sm">
            <div class="border-b border-slate-100 pb-5 mb-6">
              <h3 class="text-lg font-bold text-[var(--color-brand-deep)]">Preferensi Tampilan</h3>
              <p class="text-xs md:text-sm text-slate-500 mt-0.5">Sesuaikan pengalaman visual dan bahasa aplikasi Anda.</p>
            </div>

            <div class="space-y-6">
              <div>
                <label class="text-xs font-semibold text-[var(--color-brand-darkbtn)] block mb-3">Tema Visual</label>
                <div class="flex gap-3">
                  <button class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[var(--color-brand-deep)] text-white shadow-sm ring-2 ring-[var(--color-brand-deep)] ring-offset-2">
                    Terang
                  </button>
                  <button class="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed opacity-70" disabled>
                    Gelap · <span class="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-600">Segera Hadir</span>
                  </button>
                </div>
              </div>

              <div class="max-w-xs">
                <label class="text-xs font-semibold text-[var(--color-brand-darkbtn)] block mb-1.5">Bahasa Antarmuka</label>
                <select class="w-full border border-[var(--color-mint-200)] bg-[var(--color-mint-50)]/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-active)] focus:bg-white transition-all">
                  <option>Bahasa Indonesia</option>
                  <option disabled>English · Segera Hadir</option>
                </select>
              </div>
            </div>
          </section>

          <!-- 6. Zona Berbahaya -->
          <section v-if="activeTab === 'zona-berbahaya'" class="bg-white rounded-2xl border border-rose-200 p-6 md:p-8 shadow-sm">
            <div class="border-b border-rose-100 pb-5 mb-6">
              <h3 class="text-lg font-bold text-rose-600">Zona Berbahaya</h3>
              <p class="text-xs md:text-sm text-slate-500 mt-0.5">Tindakan berikut bersifat permanen dan berdampak pada seluruh akun Anda.</p>
            </div>

            <div class="space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                <div>
                  <p class="text-sm font-bold text-slate-800">Keluar Sesi Perangkat</p>
                  <p class="text-xs text-slate-500 mt-0.5">Putuskan akses akun dari seluruh perangkat yang aktif.</p>
                </div>
                <button class="text-sm font-semibold px-4 py-2 rounded-xl border border-rose-300 text-rose-600 hover:bg-rose-100 active:scale-95 transition-all whitespace-nowrap">
                  Keluar Semua Sesi
                </button>
              </div>

              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                <div>
                  <p class="text-sm font-bold text-rose-700">Hapus Akun Permanen</p>
                  <p class="text-xs text-slate-500 mt-0.5">Semua data profil, histori, dan riwayat akan dihapus dan tidak bisa dipulihkan.</p>
                </div>
                <button class="text-sm font-semibold px-4 py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700 active:scale-95 transition-all whitespace-nowrap shadow-sm">
                  Hapus Akun
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Header from '../components/layout/Header2.vue'

const tabs = [
    { key: 'profil', label: 'Profil', icon: '👤' },
    { key: 'kota', label: 'Konfigurasi Kota', icon: '🏙️' },
    { key: 'notifikasi', label: 'Notifikasi', icon: '🔔' },
    { key: 'pengguna', label: 'Manajemen Pengguna', icon: '👥' },
    { key: 'tampilan', label: 'Tampilan', icon: '🎨' },
    { key: 'zona-berbahaya', label: 'Zona Berbahaya', icon: '⚠️' },
]

const activeTab = ref('profil')

const profil = reactive({
    nama: 'Admin Bappeda',
    email: 'admin.bappeda@makassar.go.id',
    role: 'Koordinator Makassar',
    terverifikasi: true,
})

const initials = computed(() =>
    profil.nama.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
)

const kota = reactive({
    nama: 'Makassar',
    jumlahPenduduk: 1526677,
    threshold: { aman: 30, waspada: 60, siaga: 60 },
})

const notifikasi = ref([
    { key: 'banjir', label: 'Perubahan status banjir', desc: 'Saat status banjir di suatu wilayah berubah.', enabled: true },
    { key: 'kebijakan', label: 'Kebijakan baru', desc: 'Saat kebijakan diajukan atau disetujui.', enabled: true },
    { key: 'infrastruktur', label: 'Infrastruktur butuh perbaikan', desc: 'Saat kondisi aset infrastruktur menurun.', enabled: false },
])

const channel = reactive({ inApp: true, email: false })

const anggotaTim = ref([
    { nama: 'Admin Bappeda', email: 'admin.bappeda@makassar.go.id', role: 'Koordinator' },
    { nama: 'Nadia Putri', email: 'nadia.putri@makassar.go.id', role: 'Analis Data' },
    { nama: 'Rizky Ramadhan', email: 'rizky.ramadhan@makassar.go.id', role: 'Analis Data' },
])
</script>