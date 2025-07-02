const Contact = require("../models/Contact");

// 📩 Simpan pesan (sudah ada)
exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Semua field wajib diisi" });
  }

  try {
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Pesan berhasil dikirim." });
  } catch (err) {
    res.status(500).json({ success: false, message: "Terjadi kesalahan server." });
  }
};

// 📬 Ambil semua pesan kontak
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // terbaru dulu
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data pesan" });
  }
};
