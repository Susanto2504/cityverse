import { createRouter, createWebHistory } from "vue-router";

// Import File Halaman yang ada di folder views
import DashboardView from "../views/DashboardView.vue";
import ConfigView from "../views/ConfigView.vue";
import SimulationView from "../views/SimulationView.vue";
import LaporanView from "../views/LaporanView.vue";
import SettingsView from "../views/SettingsView.vue";

import DataJalan from "../components/data/DataJalan.vue";
import DataCuaca from "../components/data/DataCuaca.vue";
import DataLingkungan from "../components/data/DataLingkungan.vue";
import DataInfrastruktur from "../components/data/DataInfrastruktur.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard", // Mengarahkan Halaman Utama langsung ke /dashboard
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/config",
    name: "config",
    component: ConfigView,
    children: [
      {
        path: "jalan",
        name: "data-jalan",
        component: DataJalan,
      },
      {
        path: "cuaca",
        name: "data-cuaca",
        component: DataCuaca,
      },
      {
        path: "lingkungan",
        name: "data-lingkungan",
        component: DataLingkungan,
      },
      {
        path: "infrastruktur",
        name: "data-infrastruktur",
        component: DataInfrastruktur,
      },
    ],
  },

  {
    path: "/simulation",
    name: "simulation",
    component: SimulationView,
  },
  {
    path: "/laporan",
    name: "laporan",
    component: LaporanView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;