<template>
   <div class="bg-brand-deep text-slate-800 font-sans h-screen w-screen flex antialiased select-none overflow-hidden">
      <!-- BEGIN: MasterApplicationContainer -->
      <!-- Outer wrapper replicating the soft curved tablet/desktop portal frame from design -->
      <div class="w-full h-full flex flex-col md:flex-row border border-emerald-900/30 overflow-hidden relative">
        <div v-if="isSidebarOpen" @click="isSidebarOpen = false" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"></div>
          <!-- BEGIN: LeftSidebar -->
          <aside :class="['h-full overflow-hidden bg-brand-sidebar text-white flex flex-col justify-between shrink-0 transition-all duration-300 z-50', 'fixed inset-y-0 left-0 w-72 transform md:transform-none md:static md:w-72 lg:w-80',
          isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:translate-x-0']"> 
            <Aside @close="isSidebarOpen = false"  />
          </aside>
          <!-- END: LeftSidebar -->

          <main class="flex-1 h-full overflow-y-auto bg-mint-50/90 relative">
            <!-- BEGIN: MainContentWrapper -->
            <RouterView @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
            <!-- END: MainContentWrapper -->
          </main>
      </div>
      <!-- END: MasterApplicationContainer -->
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'
    import Aside from './components/layout/Aside.vue'
    import { useRoute, RouterView } from 'vue-router'

    const isSidebarOpen = ref(false)
    const route = useRoute()

    // Setiap kali halaman/rute berubah, tutup sidebar secara otomatis
    watch(
    () => route.path,
    () => {
        isSidebarOpen.value = false
    }
    )
</script>

<style scoped>

</style>

<!-- BEGIN: ModalEditDataKota -->
      <!-- Dialog to edit Makassar parameters -->
      <!-- <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="modal-edit-data">
          <div class="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-100">
              <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                  <h3 class="text-base font-bold text-slate-900">Perbarui Parameter Kota Makassar</h3>
                  <button class="text-slate-400 hover:text-slate-600" onclick="closeModalEditData()">
                  <i class="fa-solid fa-xmark text-lg"></i>
                  </button>
              </div>

              <div class="space-y-3.5 my-4 text-xs">
                  <div>
                      <label class="font-bold text-slate-700 block mb-1">Populasi Saat Ini</label>
                      <input class="w-full text-xs rounded-xl border-slate-200 p-2.5" id="input-populasi" type="text" value="1.9 Jt"/>
                  </div>

                  <div>
                      <label class="font-bold text-slate-700 block mb-1">Tingkat Resiko Perkotaan (%)</label>
                      <input class="w-full text-xs rounded-xl border-slate-200 p-2.5" id="input-resiko" type="number" value="62"/>
                  </div>

                  <div>
                      <label class="font-bold text-slate-700 block mb-1">Catatan Operasional Wilayah</label>
                      <textarea class="w-full text-xs rounded-xl border-slate-200 p-2.5" rows="2">Status darurat genangan air wilayah Panakkukang dan Toddopuli dalam penanganan.</textarea>
                  </div>
              </div>

              <div class="flex items-center justify-end gap-2 pt-2">
                  <button class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl" onclick="closeModalEditData()">
                      Batal
                  </button>

                  <button class="px-5 py-2 bg-brand-deep text-white text-xs font-bold rounded-xl hover:bg-emerald-900" onclick="saveDataKota()">
                      Simpan Pembaruan
                  </button>
              </div>
          </div>
      </div> -->
      <!-- END: ModalEditDataKota -->