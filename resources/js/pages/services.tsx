import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
          {[...Array(6)].map((_, index) => {
            const sectionRef = useRef(null);
            const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

            return (
              <motion.section
                key={index}
                ref={sectionRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-4 text-2xl font-semibold text-blue-800">
                  {index + 1}. Layanan {['Rawat Inap', 'Rawat Jalan', 'Gawat Darurat (UGD 24 Jam)', 'Penunjang Medis', 'Khusus dan Bedah', 'Kesehatan Ibu dan Anak'][index]}
                </h2>
                <ul className="list-inside list-disc text-gray-700">
                  {[
                    ['Kamar VIP dan Kelas I, II, III dengan fasilitas yang lengkap', 'Perawatan intensif (ICU dan NICU) untuk pasien dengan kebutuhan khusus', 'Layanan perawat 24 jam'],
                    ['Poliklinik Umum dan Spesialis', 'Konsultasi Gizi dan Psikologi'],
                    ['Ambulans Siaga', 'Dokter dan perawat terlatih dalam kegawatdaruratan', 'Peralatan medis modern'],
                    ['Laboratorium Klinik', 'Radiologi (X-ray, CT Scan, USG)', 'Fisioterapi dan Rehabilitasi Medik', 'Farmasi 24 Jam'],
                    ['Bedah Umum dan Bedah Digestif', 'Bedah Ortopedi dan Traumatologi', 'Bedah Gigi dan Mulut', 'Bedah Plastik dan Estetika'],
                    ['Persalinan dan Perawatan Bayi Baru Lahir', 'Konsultasi Kehamilan dan USG 4D', 'Imunisasi dan Klinik Tumbuh Kembang Anak']
                  ][index].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
