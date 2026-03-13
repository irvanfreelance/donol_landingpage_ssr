export async function seoAgent(keyword: string) {
  const baseTitle = `Platform ${keyword} Terbaik untuk Lembaga Anda`;
  return {
    title: baseTitle,
    description: `Bangun ${keyword} yang modern, aman, dan transparan dengan ekosistem DonasiOnline yang siap dipakai lembaga Anda tanpa potongan persentase donasi.`,
    content: `Halaman ini dirancang sebagai landing SEO untuk kata kunci "${keyword}" dalam konteks penggalangan dana dan pengelolaan donasi lembaga.\n\nDengan DonasiOnline, lembaga Anda dapat:\n- Memiliki platform ${keyword} atas nama domain dan brand sendiri\n- Mengelola kampanye donasi secara transparan melalui dashboard admin\n- Memberikan pengalaman donasi semudah checkout e-commerce kepada donatur\n\nDiskusikan kebutuhan lembaga Anda, dan kami akan bantu merancang implementasi ${keyword} yang paling sesuai.`,
  };
}

