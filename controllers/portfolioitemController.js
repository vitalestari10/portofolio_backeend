const PortfolioItem = require("../models/PortfolioItem");

// 🔍 Ambil semua item portofolio
exports.getAllPortfolioItems = async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data portofolio" });
  }
};

// 🔎 Ambil satu item berdasarkan ID
exports.getPortfolioItemById = async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data" });
  }
};

// ➕ Tambah item baru
exports.createPortfolioItem = async (req, res) => {
  try {
    const newItem = new PortfolioItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: "Gagal membuat item portofolio" });
  }
};

// ✏️ Update item
exports.updatePortfolioItem = async (req, res) => {
  try {
    const item = await PortfolioItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!item) return res.status(404).json({ message: "Item tidak ditemukan" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: "Gagal mengupdate item" });
  }
};

// ❌ Hapus item
exports.deletePortfolioItem = async (req, res) => {
  try {
    await PortfolioItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item berhasil dihapus" });
  } catch (err) {
    res.status(400).json({ error: "Gagal menghapus item" });
  }
};
