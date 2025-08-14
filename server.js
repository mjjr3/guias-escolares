import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Cambia esta URL por tu endpoint de Google Apps Script
const ENDPOINT = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiTmWO2ezJC2U7553R3CWTgRa0YM7-vODvgAu0zo-W-gWUkJQ_3vrbthT6fIfS-qwbxWboLjYlWVAvohfI3OqHrTFBd2uevQQ5hkrzHi7VVJ_HgmPTzmzqwehJAlBoxvjHSkFkr7PSV0ZX87-BVqE_AJJmL6seAZyZUJBJ_blCxGBBx5OemKgkaE3hFb6spo3n1Kwrp0UCX_87bfnH0joV_J42cm3yAP5Z7n2I5cfQXTrPxe7XeXZ6ABUZ2pmdGKPBp_hAt6hJc7JCQ3Vs2V2Ggjl8d97VhFEA1XHA_&lib=Ma-XJgRDsqNZMJAxVeufnT9B6x0nl8KJ5";

app.use(express.static("public"));

app.get("/api/guias", async (req, res) => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error obteniendo datos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
