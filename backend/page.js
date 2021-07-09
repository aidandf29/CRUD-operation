const dbQueries = require("./Queries.js");
// const { errorMessusername, successMessusername, status } = require('../helpers/status');

const getP = async (req, res) => {
  const getAllRows = `select * from Gudang`;
  try {
    const { rows } = await dbQueries(getAllRows);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send("Sukses");
    }
    res.send(dbResponse);
  } catch (error) {
    if (error) {
      res.send("error " + error.code);
      return;
    }
  }
};

const postP = async (req, res) => {
  const buku = req.body.buku;
  const author = req.body.author;
  const jenis = req.body.jenis;
  const stok = req.body.stok;
  const harga_jual = req.body.harga_jual;
  const rak = req.body.rak;
  const getAllRows = `INSERT INTO Gudang (buku, author, jenis, stok, harga_jual, rak) VALUES ($1, $2, $3, $4, $5, $6)`;
  try {
    const { rows } = await dbQueries(getAllRows, [
      buku,
      author,
      jenis,
      stok,
      harga_jual,
      rak,
    ]);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send("Sukses");
    }
    res.send(dbResponse);
  } catch (error) {
    if (error) {
      res.send("error " + error.code);
      return;
    }
  }
};

const updateP = async (req, res) => {
  const author = req.body.author;
  const jenis = req.body.jenis;
  const stok = req.body.stok;
  const harga_jual = req.body.harga_jual;
  const rak = req.body.rak;
  const buku = req.params.buku;
  const getAllRows = `Update Gudang set author= $1, jenis=$2, stok=$3, harga_jual=$4, rak=$5 where buku=$6 `;
  try {
    const { rows } = await dbQueries(getAllRows, [
      author,
      jenis,
      stok,
      harga_jual,
      rak,
      buku,
    ]);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send("Sukses");
    }
    res.send(dbResponse);
  } catch (error) {
    if (error) {
      res.send("error " + error.code);
      return;
    }
  }
};

const deleteP = async (req, res) => {
  const buku = req.params.buku;
  const getAllRows = `delete from Gudang  where buku=$1 `;
  try {
    const { rows } = await dbQueries(getAllRows, [buku]);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send("Sukses");
    }
    res.send(dbResponse);
  } catch (error) {
    if (error) {
      res.send("error " + error.code);
      return;
    }
  }
};

module.exports = {
  getP,
  postP,
  deleteP,
  updateP,
};

//ini buat coba
