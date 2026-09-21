<template>
    <div class="min-h-screen bg-[#F4FFFC] font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[#C3E956] selection:text-[#1F4B2C]">
        <!-- Bagian Header -->
        <Header title="Simulasi &amp; Analisis" @click="$emit('toggle-sidebar')" />

        <!-- Bagian Main -->
        <main class="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8 space-y-8">
            
            <!-- Hero Section -->
            <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F4B2C] via-[#275836] to-[#1F4B2C] p-8 md:p-12 text-white shadow-xl shadow-[#1F4B2C]/10">
                <!-- Grid Pattern Overlay -->
                <div class="absolute inset-0 bg-[radial-gradient(#C3E956_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" aria-hidden="true"></div>
                
                <div class="relative z-10 max-w-2xl space-y-3">
                    <div class="inline-flex items-center gap-2 rounded-full bg-[#C3E956]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C3E956] border border-[#C3E956]/30 backdrop-blur-md">
                        <span class="h-2 w-2 rounded-full bg-[#C3E956] animate-pulse"></span>
                        Kota Makassar
                    </div>
                    <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-white leading-tight">
                        Ceritakan kebijakannya, <br class="hidden sm:inline" />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#C3E956] to-[#91EAAF]">biar AI yang menilai dampaknya.</span>
                    </h2>
                </div>
            </section>

            <!-- Workspace Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- Panel Input Kebijakan -->
                <section class="lg:col-span-7 rounded-2xl border border-[#D5F5DD] bg-white p-6 md:p-8 shadow-sm transition-all space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h3 class="text-xl font-bold text-[#1F4B2C] flex items-center gap-2">
                            <svg class="w-5 h-5 text-[#4D7111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                            Definisi Kebijakan
                        </h3>
                    </div>

                    <div class="space-y-5">
                        <!-- Judul Kebijakan -->
                        <label class="block space-y-1.5">
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Judul Kebijakan</span>
                            <input 
                                v-model="judulKebijakan" 
                                type="text" 
                                class="w-full rounded-xl border border-slate-200 bg-[#EAFFE9]/20 px-4 py-3 text-sm transition focus:border-[#4D7111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4D7111]/20 placeholder:text-slate-400" 
                                placeholder="Contoh: Normalisasi Drainase Jl. Urip Sumoharjo"
                            >
                        </label>

                        <!-- Penjelasan Singkat -->
                        <label class="block space-y-1.5">
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Penjelasan Singkat</span>
                            <textarea
                                v-model="deskripsiKebijakan"
                                rows="4"
                                class="w-full rounded-xl border border-slate-200 bg-[#EAFFE9]/20 px-4 py-3 text-sm transition focus:border-[#4D7111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4D7111]/20 placeholder:text-slate-400"
                                placeholder="Jelaskan kebijakan ini secara singkat: apa yang dilakukan, di mana, dan tujuannya apa."
                            ></textarea>
                        </label>

                        <!-- Jenis Kebijakan -->
                        <label class="block space-y-1.5">
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Jenis Kebijakan</span>
                            <select v-model="jenisKebijakan" class="w-full rounded-xl border border-slate-200 bg-[#EAFFE9]/20 px-4 py-3 text-sm transition focus:border-[#4D7111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4D7111]/20">
                                <option value="pelebaran_jalan">Pelebaran jalan</option>
                                <option value="rekayasa_lalu_lintas">Rekayasa lalu lintas</option>
                                <option value="normalisasi_drainase">Normalisasi drainase</option>
                                <option value="pembangunan_infrastruktur">Pembangunan infrastruktur baru</option>
                            </select>
                        </label>

                        <div class="border-t border-slate-100 pt-6">
                            <h3 class="text-xl font-bold text-[#1F4B2C] mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-[#4D7111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                                Target &amp; Parameter
                            </h3>
                        </div>

                        <!-- Ruas Jalan Terdampak -->
                        <label class="block space-y-1.5">
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Ruas Jalan Terdampak</span>
                            <select v-model="selectedRuasId" class="w-full rounded-xl border border-slate-200 bg-[#EAFFE9]/20 px-4 py-3 text-sm transition focus:border-[#4D7111] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4D7111]/20">
                                <option v-for="r in ruasJalanList" :key="r.id" :value="r.id">
                                    {{ r.nama }}
                                </option>
                            </select>
                        </label>

                        <!-- Slider Capacity -->
                        <label class="block space-y-2">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Perubahan Kapasitas Jalan</span>
                                <span class="rounded-md bg-[#EAFFE9] px-2 py-0.5 font-mono text-xs font-bold text-[#1F4B2C]">
                                    {{ capacityChange > 0 ? '+' : '' }}{{ capacityChange }}%
                                </span>
                            </div>
                            <input v-model.number="capacityChange" type="range" min="-30" max="60" step="5" class="w-full accent-[#4D7111] cursor-pointer">
                        </label>

                        <!-- Slider Curah Hujan -->
                        <label class="block space-y-2">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-xs font-bold uppercase tracking-wider text-slate-600">Curah Hujan Simulasi</span>
                                <span class="rounded-md bg-[#EAFFE9] px-2 py-0.5 font-mono text-xs font-bold text-[#1F4B2C]">
                                    {{ curahHujan }} mm
                                </span>
                            </div>
                            <input v-model.number="curahHujan" type="range" min="0" max="200" step="10" class="w-full accent-[#4D7111] cursor-pointer">
                        </label>

                        <!-- Infrastruktur Terkait -->
                        <div class="space-y-2">
                            <span class="block text-xs font-bold uppercase tracking-wider text-slate-600">Infrastruktur Terkait</span>
                            <div class="flex flex-wrap gap-2">
                                <button
                                    v-for="opt in infrastrukturOptions"
                                    :key="opt.key"
                                    type="button"
                                    class="rounded-xl px-3.5 py-2 text-xs font-semibold transition border"
                                    :class="selectedInfrastruktur.includes(opt.key) 
                                        ? 'bg-[#1F4B2C] border-[#1F4B2C] text-[#C3E956] shadow-sm' 
                                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'"
                                    @click="toggleInfrastruktur(opt.key)"
                                >
                                    {{ opt.label }}
                                </button>
                            </div>
                        </div>

                        <!-- Hambatan yang Disasar -->
                        <div class="space-y-2">
                            <span class="block text-xs font-bold uppercase tracking-wider text-slate-600">Hambatan yang Disasar</span>
                            <div class="flex flex-wrap gap-2">
                                <button
                                    v-for="opt in hambatanOptions"
                                    :key="opt.key"
                                    type="button"
                                    class="rounded-xl px-3.5 py-2 text-xs font-semibold transition border"
                                    :class="selectedHambatan.includes(opt.key) 
                                        ? 'bg-[#1F4B2C] border-[#1F4B2C] text-[#C3E956] shadow-sm' 
                                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'"
                                    @click="toggleHambatan(opt.key)"
                                >
                                    {{ opt.label }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <button 
                        class="w-full rounded-xl bg-[#1F4B2C] py-4 text-sm font-bold text-white transition hover:bg-[#275836] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#1F4B2C]/20 flex items-center justify-center gap-2" 
                        :disabled="isAnalyzing" 
                        @click="analyzeWithAI"
                    >
                        <svg v-if="isAnalyzing" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        <span>{{ isAnalyzing ? 'Menganalisis…' : 'Analisis dengan AI' }}</span>
                    </button>
                </section>

                <!-- Panel Hasil -->
                <section class="lg:col-span-5 rounded-2xl border border-[#D5F5DD] bg-white p-6 md:p-8 shadow-sm transition-all space-y-6">
                    <template v-if="!result">
                        <div class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 p-12 text-center my-auto min-h-[400px]">
                            <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAFFE9] text-3xl mb-4 shadow-sm">
                                🤖
                            </div>
                            <h4 class="text-base font-bold text-[#1F4B2C]">Siap Menganalisis</h4>
                            <p class="mt-1 text-xs text-slate-500 max-w-xs leading-relaxed">Isi definisi kebijakan di samping, lalu jalankan analisis untuk melihat penilaian AI per domain.</p>
                        </div>
                    </template>

                    <template v-else>
                        <div class="border-b border-slate-100 pb-4">
                            <h3 class="text-xl font-bold text-[#1F4B2C]">Penilaian AI</h3>
                            <p class="text-xs font-semibold text-slate-500 mt-0.5">
                                {{ judulKebijakan || 'Kebijakan tanpa judul' }} · <span class="text-[#4D7111]">{{ selectedRuas.nama }}</span>
                            </p>
                        </div>

                        <!-- Card Domains -->
                        <div class="space-y-3">
                            <div v-for="d in result.domains" :key="d.key" class="rounded-xl border border-slate-100 bg-[#F4FFFC]/50 p-4 transition hover:border-[#D5F5DD]">
                                <div class="flex items-start justify-between gap-3 mb-2">
                                    <div class="flex items-center gap-2.5">
                                        <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAFFE9] text-base shadow-sm">{{ d.icon }}</span>
                                        <span class="text-sm font-bold text-slate-800">{{ d.title }}</span>
                                    </div>
                                    <span class="rounded-full px-2.5 py-0.5 text-xs font-extrabold font-mono" :class="scoreClass(d.score)">
                                        {{ d.score }}/100
                                    </span>
                                </div>
                                <p class="text-xs text-slate-600 leading-relaxed pl-10">{{ d.narrative }}</p>
                            </div>
                        </div>

                        <!-- Score Overall Card -->
                        <div class="rounded-xl bg-gradient-to-br from-[#1F4B2C] to-[#275836] p-5 text-white flex items-center gap-5 shadow-md">
                            <div class="relative flex items-center justify-center h-16 w-16 shrink-0 rounded-full bg-white/10 border-2 border-[#C3E956]">
                                <span class="font-mono text-xl font-black text-[#C3E956]">{{ result.overallScore }}</span>
                            </div>
                            <div class="space-y-1">
                                <span class="text-xs font-semibold uppercase tracking-wider text-[#91EAAF]">Indeks Perbaikan Kota</span>
                                <p class="text-xs text-slate-200 leading-relaxed">{{ result.verdict }}</p>
                            </div>
                        </div>

                        <button class="w-full rounded-xl bg-[#3F4743] py-3.5 text-xs font-bold text-white transition hover:bg-slate-800 active:scale-[0.99] shadow-sm" @click="saveToHistory">
                            Simpan Sebagai Draf Kebijakan
                        </button>
                    </template>
                </section>

            </div>

            <!-- Riwayat Simulasi -->
            <section class="rounded-2xl border border-[#D5F5DD] bg-white p-6 md:p-8 shadow-sm space-y-6">
                <div class="border-b border-slate-100 pb-4">
                    <h3 class="text-xl font-bold text-[#1F4B2C] flex items-center gap-2">
                        <svg class="w-5 h-5 text-[#4D7111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Riwayat Simulasi
                    </h3>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="border-b border-slate-200 text-slate-600 uppercase font-bold tracking-wider">
                                <th class="pb-3 px-3">Judul</th>
                                <th class="pb-3 px-3">Jenis Kebijakan</th>
                                <th class="pb-3 px-3">Ruas Jalan</th>
                                <th class="pb-3 px-3">Indeks</th>
                                <th class="pb-3 px-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 font-medium">
                            <tr v-for="item in history" :key="item.id" class="hover:bg-[#F4FFFC]/80 transition">
                                <td class="py-3.5 px-3 font-bold text-slate-800">{{ item.judul }}</td>
                                <td class="py-3.5 px-3 text-slate-600">{{ labelForJenis(item.jenisKebijakan) }}</td>
                                <td class="py-3.5 px-3 text-slate-600">{{ item.ruas }}</td>
                                <td class="py-3.5 px-3 font-mono font-bold text-[#1F4B2C]">{{ item.skor }}</td>
                                <td class="py-3.5 px-3 text-right">
                                    <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" :class="`status-badge--${item.status}`">
                                        {{ statusLabel(item.status) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="!history.length" class="py-12 text-center text-xs text-slate-400 font-normal">
                        Belum ada simulasi yang disimpan.
                    </div>
                </div>
            </section>

        </main>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Header from '../components/layout/Header2.vue'

// --- Data dasar ruas jalan (mengikuti tabel JALAN pada ERD) ---
const ruasJalanList = ref([
    { id: 1, nama: 'Jl. Perintis Kemerdekaan', kapasitas: 3200, volume: 3900, kepadatanBase: 78, banjirBase: 42, kondisiInfraBase: 55 },
    { id: 2, nama: 'Jl. Sultan Alauddin', kapasitas: 2600, volume: 2400, kepadatanBase: 60, banjirBase: 25, kondisiInfraBase: 48 },
    { id: 3, nama: 'Jl. Urip Sumoharjo', kapasitas: 3000, volume: 3450, kepadatanBase: 71, banjirBase: 55, kondisiInfraBase: 60 },
])

const infrastrukturOptions = [
    { key: 'drainase', label: 'Saluran drainase' },
    { key: 'trotoar', label: 'Trotoar & jalur pejalan' },
    { key: 'lampu_lalin', label: 'Lampu lalu lintas pintar' },
]

const hambatanOptions = [
    { key: 'genangan', label: 'Genangan kronis' },
    { key: 'parkir_liar', label: 'Parkir liar' },
    { key: 'pkl', label: 'PKL di bahu jalan' },
]

const jenisKebijakanLabels = {
    pelebaran_jalan: 'Pelebaran jalan',
    rekayasa_lalu_lintas: 'Rekayasa lalu lintas',
    normalisasi_drainase: 'Normalisasi drainase',
    pembangunan_infrastruktur: 'Pembangunan infrastruktur baru',
}

// --- State input user ---
const judulKebijakan = ref('')
const deskripsiKebijakan = ref('')
const jenisKebijakan = ref('normalisasi_drainase')
const selectedRuasId = ref(ruasJalanList.value[0].id)
const capacityChange = ref(20)
const curahHujan = ref(80)
const selectedInfrastruktur = reactive([])
const selectedHambatan = reactive([])

const isAnalyzing = ref(false)
const result = ref(null)
const history = ref([])

const selectedRuas = computed(() =>
    ruasJalanList.value.find(r => r.id === selectedRuasId.value) ?? ruasJalanList.value[0]
)

function clampPct(v) {
    return Math.max(0, Math.min(100, Math.round(v)))
}

function scoreClass(score) {
    if (score >= 65) return 'is-good'
    if (score >= 45) return 'is-neutral'
    return 'is-bad'
}

/**
 * Placeholder pemanggilan AI. Ganti isi fungsi ini dengan request ke backend/endpoint
 * analisis kebijakan kamu — kirim judul, deskripsi, jenis kebijakan, ruas jalan, dan
 * parameter (capacityChange, curahHujan, infrastruktur, hambatan), lalu backend
 * mengembalikan skor & narasi per domain seperti struktur `result` di bawah ini.
 */
async function analyzeWithAI() {
    isAnalyzing.value = true

    // --- Simulasi kalkulasi sementara (dummy), gantikan dengan response API ---
    const ruas = selectedRuas.value
    const kapasitasBaru = ruas.kapasitas * (1 + capacityChange.value / 100)
    const rasio = ruas.volume / kapasitasBaru
    const kepadatanAfter = clampPct(rasio * 62)
    const skorLaluLintas = clampPct(100 - kepadatanAfter)

    let banjirAfter = ruas.banjirBase + (curahHujan.value - 80) * 0.15
    if (selectedInfrastruktur.includes('drainase')) banjirAfter -= 22
    if (selectedHambatan.includes('genangan')) banjirAfter -= 10
    const skorBanjir = clampPct(100 - clampPct(banjirAfter))

    let skorInfrastruktur = ruas.kondisiInfraBase
    if (selectedInfrastruktur.length) skorInfrastruktur += selectedInfrastruktur.length * 12
    if (jenisKebijakan.value === 'pembangunan_infrastruktur') skorInfrastruktur += 10
    skorInfrastruktur = clampPct(skorInfrastruktur)

    const overallScore = clampPct((skorLaluLintas + skorBanjir + skorInfrastruktur) / 3)

    await new Promise(resolve => setTimeout(resolve, 500)) // simulasi latensi

    result.value = {
        overallScore,
        verdict: overallScore >= 65
            ? `Kebijakan "${judulKebijakan.value || 'ini'}" berpotensi memberi dampak positif menyeluruh di ${ruas.nama}.`
            : overallScore >= 45
                ? `Dampaknya cukup seimbang — beberapa domain membaik, beberapa perlu perhatian tambahan.`
                : `Skenario ini belum menunjukkan perbaikan berarti, pertimbangkan revisi target atau parameter.`,
        domains: [
            {
                key: 'lalu_lintas',
                icon: '🚦',
                title: 'Lalu Lintas',
                score: skorLaluLintas,
                narrative: `Perkiraan kepadatan di ${ruas.nama} menjadi ${kepadatanAfter}% dari kapasitas jalan setelah kebijakan ini diterapkan.`,
            },
            {
                key: 'banjir',
                icon: '🌧️',
                title: 'Banjir & Lingkungan',
                score: skorBanjir,
                narrative: selectedInfrastruktur.includes('drainase')
                    ? `Penambahan saluran drainase menurunkan risiko genangan meski curah hujan disimulasikan ${curahHujan.value} mm.`
                    : `Tanpa perbaikan drainase, risiko genangan tetap dipengaruhi curah hujan simulasi ${curahHujan.value} mm.`,
            },
            {
                key: 'infrastruktur',
                icon: '🏗️',
                title: 'Infrastruktur',
                score: skorInfrastruktur,
                narrative: selectedInfrastruktur.length
                    ? `Penambahan ${selectedInfrastruktur.length} elemen infrastruktur meningkatkan kondisi aset di ruas ini.`
                    : `Belum ada penambahan infrastruktur baru pada skenario ini.`,
            },
        ],
    }

    isAnalyzing.value = false
}

function toggleInfrastruktur(key) {
    const i = selectedInfrastruktur.indexOf(key)
    i === -1 ? selectedInfrastruktur.push(key) : selectedInfrastruktur.splice(i, 1)
}

function toggleHambatan(key) {
    const i = selectedHambatan.indexOf(key)
    i === -1 ? selectedHambatan.push(key) : selectedHambatan.splice(i, 1)
}

function labelForJenis(key) {
    return jenisKebijakanLabels[key] ?? key
}

function statusLabel(status) {
    return { draft: 'Draf', diajukan: 'Diajukan', diterapkan: 'Diterapkan' }[status] ?? status
}

function saveToHistory() {
    if (!result.value) return
    history.value.unshift({
        id: Date.now(),
        judul: judulKebijakan.value || `Simulasi ${selectedRuas.value.nama}`,
        jenisKebijakan: jenisKebijakan.value,
        ruas: selectedRuas.value.nama,
        skor: result.value.overallScore,
        status: 'draft',
    })
}
</script>

