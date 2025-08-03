// navConfig.js
const navItems = {
  admin: [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Sekolah', path: '/admin/sekolah' },
    { label: 'Guru', path: '/admin/guru' },

    { label: 'Manajemen User', path: '/admin/users' },
    { label: 'Pengaturan', path: '/admin/settings' },
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
