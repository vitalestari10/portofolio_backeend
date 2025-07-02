// Simulasi database in-memory
let projects = [
  { id: 1, title: "Proyek A", description: "Deskripsi Proyek A" },
  { id: 2, title: "Proyek B", description: "Deskripsi Proyek B" }
];

// 🔍 Ambil semua proyek
exports.getAllProjects = (req, res) => {
  res.json(projects);
};

// 🔎 Ambil satu proyek berdasarkan ID
exports.getProjectById = (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ message: "Proyek tidak ditemukan" });
  res.json(project);
};

// ➕ Tambah proyek baru
exports.createProject = (req, res) => {
  const { title, description } = req.body;
  const newProject = {
    id: projects.length + 1,
    title,
    description
  };
  projects.push(newProject);
  res.status(201).json(newProject);
};

// ✏️ Edit proyek
exports.updateProject = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const project = projects.find(p => p.id === parseInt(id));
  if (!project) return res.status(404).json({ message: "Proyek tidak ditemukan" });

  project.title = title ?? project.title;
  project.description = description ?? project.description;
  res.json(project);
};

// ❌ Hapus proyek
exports.deleteProject = (req, res) => {
  const { id } = req.params;
  projects = projects.filter(p => p.id !== parseInt(id));
  res.json({ message: "Proyek berhasil dihapus" });
};
