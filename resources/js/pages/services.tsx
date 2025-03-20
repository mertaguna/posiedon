export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-8 text-center text-4xl font-bold text-blue-900">
          Layanan RSU GarbaMed Kerobokan
        </div>
        <p className="mb-6 text-lg text-gray-700">
          Selamat datang di <strong>RSU Garba Med Kerobokan</strong>, pusat
          layanan kesehatan terpercaya di Bali yang mengutamakan kenyamanan dan
          keselamatan pasien. Kami menyediakan berbagai layanan medis dengan
          standar kualitas terbaik untuk memenuhi kebutuhan kesehatan Anda dan
          keluarga.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              1. Layanan Rawat Inap
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>
                Kamar VIP dan Kelas I, II, III dengan fasilitas yang lengkap
              </li>
              <li>
                Perawatan intensif (ICU dan NICU) untuk pasien dengan kebutuhan
                khusus
              </li>
              <li>
                Layanan perawat 24 jam yang siap membantu setiap kebutuhan medis
                Anda
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              2. Layanan Rawat Jalan
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>Poliklinik Umum dan Spesialis</li>
              <li>Konsultasi Gizi dan Psikologi</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              3. Layanan Gawat Darurat (UGD 24 Jam)
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>Ambulans Siaga</li>
              <li>Dokter dan perawat terlatih dalam kegawatdaruratan</li>
              <li>Peralatan medis modern dan lengkap</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              4. Layanan Penunjang Medis
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>Laboratorium Klinik</li>
              <li>Radiologi (X-ray, CT Scan, USG)</li>
              <li>Fisioterapi dan Rehabilitasi Medik</li>
              <li>Farmasi 24 Jam</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              5. Layanan Khusus dan Bedah
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>Bedah Umum dan Bedah Digestif</li>
              <li>Bedah Ortopedi dan Traumatologi</li>
              <li>Bedah Gigi dan Mulut</li>
              <li>Bedah Plastik dan Estetika</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-blue-800">
              6. Layanan Kesehatan Ibu dan Anak
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>Persalinan dan Perawatan Bayi Baru Lahir</li>
              <li>Konsultasi Kehamilan dan USG 4D</li>
              <li>Imunisasi dan Klinik Tumbuh Kembang Anak</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
