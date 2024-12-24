export default function AdminDashboardPage() {
  return <div className="p-4">
    <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Statistik Pengguna</h2>
        <div className="h-64 bg-gray-100">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full">
                      <div className="h-8 bg-blue-500 w-3/4 mb-2" title="Pengguna Aktif"></div>
                      <div className="h-8 bg-green-500 w-1/2 mb-2" title="Pengguna Baru"></div>
                      <div className="h-8 bg-yellow-500 w-1/3 mb-2" title="Pengguna Premium"></div>
                      <div className="h-8 bg-red-500 w-1/4" title="Pengguna Tidak Aktif"></div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>0</span>
                        <span>500</span>
                        <span>1000</span>
                      </div>
                    </div>
                  </div>        </div>
        <p className="mt-2 text-sm text-gray-600">Total pengguna aktif: 1,234</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Pendapatan Bulanan</h2>
        <div className="h-64 bg-gray-100">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-full px-4">
                      <div className="h-8 bg-green-500 w-full mb-2" title="Januari - Rp 8.5M"></div>
                      <div className="h-8 bg-green-500 w-5/6 mb-2" title="Februari - Rp 7.2M"></div>
                      <div className="h-8 bg-green-500 w-4/5 mb-2" title="Maret - Rp 6.8M"></div>
                      <div className="h-8 bg-green-500 w-11/12 mb-2" title="April - Rp 7.9M"></div>
                      <div className="h-8 bg-green-500 w-3/4 mb-2" title="Mei - Rp 6.5M"></div>
                      <div className="h-8 bg-green-500 w-4/6" title="Juni - Rp 5.8M"></div>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>0</span>
                        <span>5M</span>
                        <span>10M</span>
                      </div>
                    </div>
                  </div>        </div>
        <p className="mt-2 text-sm text-gray-600">Total pendapatan: Rp 45,678,000</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Aktivitas Terkini</h2>
        <div className="h-64 bg-gray-100">
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
                      <div className="absolute inset-0 bg-yellow-500 rounded-full" style={{ clipPath: 'polygon(50% 50%, 100% 100%, 50% 100%)' }}></div>
                      <div className="absolute -right-32 top-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500"></div>
                          <span className="text-sm">Login (45%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500"></div>
                          <span className="text-sm">Transaksi (35%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500"></div>
                          <span className="text-sm">Registrasi (20%)</span>
                        </div>
                      </div>
                    </div>
                  </div>        </div>
        <p className="mt-2 text-sm text-gray-600">Transaksi hari ini: 156</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Performa Produk</h2>
        <div className="h-64 bg-gray-100">
          {/* Grafik produk akan ditampilkan disini */}
        </div>
        <p className="mt-2 text-sm text-gray-600">Produk terlaris: Laptop XYZ</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Kepuasan Pelanggan</h2>
        <div className="h-64 bg-gray-100">
          {/* Grafik kepuasan pelanggan akan ditampilkan disini */}
        </div>
        <p className="mt-2 text-sm text-gray-600">Rating rata-rata: 4.5/5</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Ringkasan Stok</h2>
        <div className="h-64 bg-gray-100">
          {/* Grafik stok akan ditampilkan disini */}
        </div>
        <p className="mt-2 text-sm text-gray-600">Total SKU: 789</p>
      </div>
    </div>
  </div>
}