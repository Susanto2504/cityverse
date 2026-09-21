<template>
    <div>
        <Header title="Data Lingkungan" />
        <main class="min-h-screen w-full space-y-6 bg-[var(--color-mint-50)] p-4 font-[var(--font-sans)] text-[var(--color-brand-deep)] sm:p-6 lg:p-8">
            <!-- Top bar -->
            <header class="flex w-full flex-col justify-end gap-4 sm:flex-row">
                <div class="flex items-center gap-3">
                    <div class="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[var(--color-brand-deep)]/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Cari titik pemantauan..."
                        class="w-40 bg-transparent text-sm outline-none placeholder:text-[var(--color-brand-deep)]/40 sm:w-56"
                    />
                    </div>
                    <button class="flex items-center gap-2 rounded-2xl bg-[var(--color-brand-darkbtn)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14" /><path d="M12 5v14" />
                    </svg>
                    Tambah Titik Pantau
                    </button>
                </div>
            </header>

            <!-- Hero: air quality index -->
            <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-brand-deep)] via-[var(--color-brand-sidebar)] to-[var(--color-brand-active)] p-8 text-white shadow-lg">
            <div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--color-brand-bright)]/20 blur-3xl" />
            <div class="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-[var(--color-brand-accent)]/20 blur-3xl" />

            <div class="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                <div class="flex items-center gap-2 text-sm text-[var(--color-mint-200)]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                    </svg>
                    Rata-rata seluruh wilayah
                </div>
                <p class="mt-1 text-xs text-[var(--color-mint-200)]/80">Diperbarui 21 September 2026, 08.00</p>

                <div class="mt-4 flex items-end gap-3">
                    <span class="text-6xl font-bold leading-none">68</span>
                    <span class="mb-2 text-sm text-[var(--color-mint-200)]">Indeks Kualitas Udara (Sedang)</span>
                </div>
                <p class="mt-2 max-w-sm text-sm text-[var(--color-mint-200)]/80">
                    Kualitas udara masih dapat diterima, namun kelompok sensitif disarankan mengurangi aktivitas luar ruangan yang lama.
                </p>
                </div>

                <div class="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-[var(--color-brand-bright)] drop-shadow-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9.59 4.59A2 2 0 1 1 11 8H2" /><path d="M12.59 11.59A2 2 0 1 1 14 15H2" /><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2" />
                </svg>
                <div class="flex gap-4 rounded-2xl bg-white/10 px-5 py-3 text-xs backdrop-blur-sm">
                    <div class="flex flex-col items-center gap-1">
                    <span class="text-[var(--color-brand-accent)]">PM2.5</span>
                    <span class="font-semibold">34 µg/m³</span>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                    <span class="text-[var(--color-brand-accent)]">CO</span>
                    <span class="font-semibold">0.6 ppm</span>
                    </div>
                    <div class="flex flex-col items-center gap-1">
                    <span class="text-[var(--color-brand-accent)]">O3</span>
                    <span class="font-semibold">48 ppb</span>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <!-- Summary stats -->
            <section class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Ruang Terbuka Hijau</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-brand-active)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 10v12" /><path d="M12 10a6 6 0 0 0-6-6H4a6 6 0 0 0 6 6Z" /><path d="M12 10a6 6 0 0 1 6-6h2a6 6 0 0 1-6 6Z" />
                </svg>
                </div>
                <p class="mt-2 text-3xl font-bold text-[var(--color-brand-deep)]">23.4%</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">dari total luas wilayah</p>
            </div>

            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Kualitas Air Sungai</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-brand-active)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2.69s-5 6.5-5 10.31a5 5 0 0 0 10 0c0-3.81-5-10.31-5-10.31Z" />
                </svg>
                </div>
                <p class="mt-2 text-3xl font-bold text-[var(--color-brand-deep)]">Baik</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">14 dari 18 titik pantau</p>
            </div>

            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Volume Sampah Harian</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--color-brand-active)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                </div>
                <p class="mt-2 text-3xl font-bold text-[var(--color-brand-deep)]">142 ton</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">78% terangkut ke TPA</p>
            </div>

            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Titik Rawan Banjir</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                </div>
                <p class="mt-2 text-3xl font-bold text-[var(--color-brand-deep)]">7</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">tersebar di 4 kecamatan</p>
            </div>
            </section>

            <!-- Filter chips -->
            <section class="flex flex-wrap items-center gap-2">
            <button class="rounded-full bg-[var(--color-brand-active)] px-4 py-1.5 text-xs font-semibold text-white">
                Semua Parameter
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Kualitas Udara
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Kualitas Air
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Persampahan
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Ruang Hijau
            </button>
            </section>

            <!-- Data table: monitoring points -->
            <section class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[var(--color-mint-200)]">
            <div class="overflow-x-auto">
                <table class="w-full min-w-[900px] text-left text-sm">
                <thead>
                    <tr class="border-b border-[var(--color-mint-200)] bg-[var(--color-mint-50)] text-xs uppercase tracking-wide text-[var(--color-brand-deep)]/60">
                    <th class="px-6 py-3 font-semibold">Titik Pemantauan</th>
                    <th class="px-6 py-3 font-semibold">Parameter</th>
                    <th class="px-6 py-3 font-semibold">Nilai Terukur</th>
                    <th class="px-6 py-3 font-semibold">Ambang Batas</th>
                    <th class="px-6 py-3 font-semibold">Status</th>
                    <th class="px-6 py-3 font-semibold text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[var(--color-mint-100)]">
                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Stasiun Udara Alun-alun</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: LU-001</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">PM2.5</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">32 µg/m³</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">≤ 35 µg/m³</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-active)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-brand-active)]">
                        <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-active)]" />
                        Baik
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>

                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Sungai Citarik Hulu</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: LA-004</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">pH Air</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">6.8</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">6.5 – 8.5</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-active)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-brand-active)]">
                        <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-active)]" />
                        Baik
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>

                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">TPS Pasar Baru</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: LS-009</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Kapasitas Sampah</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">92%</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">≤ 80%</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-600">
                        <span class="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Kritis
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>

                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Taman Kota Selatan</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: LH-012</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Tutupan Vegetasi</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">76%</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">≥ 60%</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-brand-active)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-brand-active)]">
                        <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-active)]" />
                        Baik
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>

                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Stasiun Udara Kawasan Industri</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: LU-007</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">SO2</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">58 ppb</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">≤ 50 ppb</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-700">
                        <span class="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        Sedang
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="flex flex-col items-center justify-between gap-3 border-t border-[var(--color-mint-200)] px-6 py-4 sm:flex-row">
                <p class="text-xs text-[var(--color-brand-deep)]/50">Menampilkan 1–5 dari 42 titik pemantauan</p>
                <div class="flex items-center gap-1">
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-brand-deep)]/40 hover:bg-[var(--color-mint-100)]" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-active)] text-xs font-semibold text-white">1</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">2</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">3</button>
                <span class="px-1 text-[var(--color-brand-deep)]/40">...</span>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">9</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
                </div>
            </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import Header from '../configViews/Header.vue'
</script>

<style scoped>
</style>