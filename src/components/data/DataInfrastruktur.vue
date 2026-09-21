<template>
    <div>
        <Header title="Data Infrastruktur"/>
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
                        placeholder="Cari nama aset..."
                        class="w-40 bg-transparent text-sm outline-none placeholder:text-[var(--color-brand-deep)]/40 sm:w-56"
                    />
                    </div>
                    <button class="flex items-center gap-2 rounded-2xl bg-[var(--color-brand-darkbtn)] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14" /><path d="M12 5v14" />
                    </svg>
                    Tambah Aset
                    </button>
                </div>
            </header>

            <!-- Category cards -->
            <section class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div class="rounded-3xl bg-gradient-to-br from-[var(--color-brand-deep)] to-[var(--color-brand-sidebar)] p-5 text-white shadow-lg">
                <div class="flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-brand-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
                </svg>
                <span class="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-mint-200)]">Bangunan</span>
                </div>
                <p class="mt-3 text-3xl font-bold">86</p>
                <p class="mt-1 text-xs text-[var(--color-mint-200)]/80">Gedung & fasilitas publik</p>
            </div>

            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-brand-active)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 3v18" /><path d="M18 3v18" /><path d="M6 12h12" /><path d="M6 6h12" /><path d="M6 18h12" />
                </svg>
                <span class="rounded-full bg-[var(--color-mint-100)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-brand-active)]">Jembatan</span>
                </div>
                <p class="mt-3 text-3xl font-bold text-[var(--color-brand-deep)]">34</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">4 perlu perbaikan segera</p>
            </div>

            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-brand-active)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M12 12h.01" /><path d="M9 8h.01" /><path d="M15 8h.01" /><path d="M9 16h.01" /><path d="M15 16h.01" />
                </svg>
                <span class="rounded-full bg-[var(--color-mint-100)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-brand-active)]">Listrik</span>
                </div>
                <p class="mt-3 text-3xl font-bold text-[var(--color-brand-deep)]">97.2%</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">Cakupan jaringan listrik</p>
            </div>

            <div class="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[var(--color-brand-active)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2.69s-5 6.5-5 10.31a5 5 0 0 0 10 0c0-3.81-5-10.31-5-10.31Z" />
                </svg>
                <span class="rounded-full bg-[var(--color-mint-100)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-brand-active)]">Air Bersih</span>
                </div>
                <p class="mt-3 text-3xl font-bold text-[var(--color-brand-deep)]">89.5%</p>
                <p class="mt-1 text-xs text-[var(--color-brand-deep)]/50">Akses air bersih layak</p>
            </div>
            </section>

            <!-- Condition breakdown -->
            <section class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-brand-active)]/15">
                <span class="h-3 w-3 rounded-full bg-[var(--color-brand-active)]" />
                </div>
                <div>
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Kondisi Baik</p>
                <p class="text-xl font-bold text-[var(--color-brand-deep)]">142 aset</p>
                </div>
            </div>
            <div class="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/15">
                <span class="h-3 w-3 rounded-full bg-yellow-500" />
                </div>
                <div>
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Perlu Pemeliharaan</p>
                <p class="text-xl font-bold text-[var(--color-brand-deep)]">31 aset</p>
                </div>
            </div>
            <div class="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-[var(--color-mint-200)]">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/15">
                <span class="h-3 w-3 rounded-full bg-red-500" />
                </div>
                <div>
                <p class="text-xs font-medium text-[var(--color-brand-deep)]/60">Rusak / Tidak Layak</p>
                <p class="text-xl font-bold text-[var(--color-brand-deep)]">9 aset</p>
                </div>
            </div>
            </section>

            <!-- Filter chips -->
            <section class="flex flex-wrap items-center gap-2">
            <button class="rounded-full bg-[var(--color-brand-active)] px-4 py-1.5 text-xs font-semibold text-white">
                Semua Aset
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Bangunan
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Jembatan
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Listrik
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Air Bersih
            </button>
            <button class="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-[var(--color-brand-deep)]/70 ring-1 ring-[var(--color-mint-200)] hover:bg-[var(--color-mint-100)]">
                Drainase
            </button>
            </section>

            <!-- Data table -->
            <section class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[var(--color-mint-200)]">
            <div class="overflow-x-auto">
                <table class="w-full min-w-[900px] text-left text-sm">
                <thead>
                    <tr class="border-b border-[var(--color-mint-200)] bg-[var(--color-mint-50)] text-xs uppercase tracking-wide text-[var(--color-brand-deep)]/60">
                    <th class="px-6 py-3 font-semibold">Nama Aset</th>
                    <th class="px-6 py-3 font-semibold">Jenis</th>
                    <th class="px-6 py-3 font-semibold">Lokasi</th>
                    <th class="px-6 py-3 font-semibold">Tahun Dibangun</th>
                    <th class="px-6 py-3 font-semibold">Kondisi</th>
                    <th class="px-6 py-3 font-semibold text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[var(--color-mint-100)]">
                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Jembatan Cikampek Barat</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: IN-014</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Jembatan</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Cikampek Barat</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">2011</td>
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
                        <p class="font-semibold text-[var(--color-brand-deep)]">Balai Desa Sukamaju</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: IN-022</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Bangunan Publik</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Purwasari</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">2005</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-semibold text-yellow-700">
                        <span class="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                        Perlu Pemeliharaan
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>

                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Gardu Listrik Bungursari</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: IN-031</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Jaringan Listrik</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Bungursari</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">2018</td>
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
                        <p class="font-semibold text-[var(--color-brand-deep)]">Saluran Drainase Pasar Lama</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: IN-045</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Drainase</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Cikampek Selatan</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">1998</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-600">
                        <span class="h-1.5 w-1.5 rounded-full bg-red-500" />
                        Rusak
                        </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <button class="text-xs font-medium text-[var(--color-brand-active)] hover:underline">Detail</button>
                    </td>
                    </tr>

                    <tr class="transition hover:bg-[var(--color-mint-50)]">
                    <td class="px-6 py-4">
                        <p class="font-semibold text-[var(--color-brand-deep)]">Instalasi Air Bersih Ciampel</p>
                        <p class="text-xs text-[var(--color-brand-deep)]/50">Kode: IN-053</p>
                    </td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Air Bersih</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">Ciampel</td>
                    <td class="px-6 py-4 text-[var(--color-brand-deep)]/70">2015</td>
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
                </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div class="flex flex-col items-center justify-between gap-3 border-t border-[var(--color-mint-200)] px-6 py-4 sm:flex-row">
                <p class="text-xs text-[var(--color-brand-deep)]/50">Menampilkan 1–5 dari 182 aset infrastruktur</p>
                <div class="flex items-center gap-1">
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-brand-deep)]/40 hover:bg-[var(--color-mint-100)]" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-brand-active)] text-xs font-semibold text-white">1</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">2</button>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">3</button>
                <span class="px-1 text-[var(--color-brand-deep)]/40">...</span>
                <button class="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-[var(--color-brand-deep)]/70 hover:bg-[var(--color-mint-100)]">37</button>
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