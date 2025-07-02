const express = require("express");
const router = express.Router();
const {
  getAllPortfolioItems,
  getPortfolioItemById,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem
} = require("../controllers/portfolioitemController");

// Route GET semua item
router.get("/", getAllPortfolioItems);

// Route GET satu item
router.get("/:id", getPortfolioItemById);

// Route POST tambah item baru
router.post("/", createPortfolioItem);

// Route PUT edit item
router.put("/:id", updatePortfolioItem);

// Route DELETE hapus item
router.delete("/:id", deletePortfolioItem);

module.exports = router;
