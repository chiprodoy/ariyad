// navConfig.js
const navItems = {
  admin: [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Sekolah', path: '/admin/sekolah' },
    { label: 'Guru', path: '/admin/guru' },
    { label: 'Siswa', path: '/admin/siswa' },

    { label: 'Kelas', path: '/admin/kelas' },
    { label: 'Tahun Ajaran', path: '/admin/tahun_ajaran' },
    { label: 'Jenis Mata Pelajaran', path: '/admin/jenis_mata_pelajaran' },
    { label: 'Kelompok Mata Pelajaran', path: '/admin/kelompok_mata_pelajaran' },
    { label: 'Mata Pelajaran', path: '/admin/mata_pelajaran' },
    { label: 'Kompetensi', path: '/admin/kompetensi' },
    { label: 'Jadwal', path: '/admin/jadwal' },
    { label: 'Peserta Kelas', path: '/admin/peserta_kelas' },
    { label: 'Nilai', path: '/admin/nilai' },
    { label: 'Manajemen User', path: '/admin/users' },
  ],
  guru: [
    { label: 'Dashboard', path: '/guru/dashboard' },
    { label: 'Daftar Kelas', path: '/guru/classes' },
  ],
  siswa: [
    { label: 'Beranda', path: '/siswa/home' },
    { label: 'Materi', path: '/siswa/materi' },
    { label: 'Nilai', path: '/siswa/nilai' },
  ],
};

export default navItems;
