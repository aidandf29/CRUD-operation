import "./App.css";
import React, { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Select from "react-select";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const mstyle = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  template: {
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #F54748",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // color: '#F54748'
  },
}));

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: 430,
    left: 37,
    color: "black",
  }),
};

const customStyles2 = {
  container: (provided) => ({
    ...provided,
    width: 166,
    height: 10,
    color: "black",
  }),
};

const NoRak = [
  { value: "1a", label: "1a" },
  { value: "2a", label: "2a" },
  { value: "3a", label: "3a" },
  { value: "1b", label: "1b" },
  { value: "2b", label: "2b" },
  { value: "3b", label: "3b" },
];

function App() {
  const classes = mstyle();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [buku, setBuku] = useState();
  const [author, setAuthor] = useState();
  const [jenis, setJenis] = useState();
  const [stok, setStok] = useState();
  const [harga_jual, setHarga_jual] = useState();
  const [rak, setRak] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getAllData = async () => {
      const response = await axios.get("http://localhost:6900/page");
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    };
    getAllData();
  }, []);

  const postRequest = async () => {
    await axios
      .post("http://localhost:6900/page", {
        buku: buku,
        author: author,
        jenis: jenis,
        stok: stok,
        harga_jual: harga_jual,
        rak: rak,
      })
      .then(
        // console.log(res)
        alert("go !")
      )
      .then((window.location = "http://localhost:3000/"));
  };

  const updateRequest = async (buku) => {
    await axios
      .put(`http://localhost:6900/page/${buku}`, {
        author: author,
        jenis: jenis,
        stok: stok,
        harga_jual: harga_jual,
        rak: rak,
      })
      .then(alert("Data berhasil diupdate"))
      .then((window.location = "http://localhost:3000/"));
  };
  const deleteRequest = async (buku) => {
    await axios
      .delete(`http://localhost:6900/page/${buku}`)
      .then(alert("Data berhasil dihapus"))
      .then((window.location = "http://localhost:3000/"));
  };

  if (loading === true) return null;
  return (
    <>
      <h1 class="judul">Database Toko Buku Danai</h1>

      <div class="row">
        <div class="column">
          <div className="input_style2">
            <label className="labeltxt2">Nama Buku:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setBuku(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="input_style2">
            <label className="labeltxt2">Author:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setAuthor(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="input_style2">
            <label className="labeltxt2">Jenis Buku:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setJenis(e.target.value)}
            />
            <br />
            <br />
          </div>
        </div>
        <div class="column">
          <div className="input_style">
            <label className="labeltxt">Stok:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setStok(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div className="input_style">
            <label className="labeltxt">Harga Jual:</label>
            <br />
            <input
              type="text"
              required
              onChange={(e) => setHarga_jual(e.target.value)}
            />
            <br />
            <br />
          </div>
          <label className="labeltxt">Rak Penyimpanan:</label>
          <br />
          <Select
            options={NoRak}
            styles={customStyles}
            isSearchable={true}
            onChange={(event) => setRak(event.value)}
          />
        </div>
      </div>

      <button
        type="button"
        className="buttontest"
        onClick={() => postRequest()}
      >
        <label className="labeladd">Record</label>
      </button>

      <table>
        <thead>
          <tr>
            <th scope="col">Nama Buku</th>
            <th scope="col">Author</th>
            <th scope="col">Jenis Buku</th>
            <th scope="col">Stok</th>
            <th scope="col">Harga Jual</th>
            <th scope="col">Rak Penyimpanan</th>
            <th scope="col">update</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            return (
              <>
                <tr>
                  <td>{data.buku}</td>
                  <td>{data.author}</td>
                  <td>{data.jenis}</td>
                  <td>{data.stok}</td>
                  <td>{data.harga_jual}</td>
                  <td>{data.rak}</td>
                  <td>
                    <FiEdit2 onClick={handleOpen} />

                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <div className={classes.template}>
                          <form className="form-inline">
                            <div className="input_style3">
                              <label for="title">
                                Author:
                                <br />
                                <input
                                  type="text"
                                  required
                                  onChange={(e) => setAuthor(e.target.value)}
                                  placeholder="Author"
                                  name="Author"
                                />
                              </label>
                              <br />
                              <label for="singer">
                                Jenis Buku:
                                <br />
                                <input
                                  type="text"
                                  required
                                  onChange={(e) => setJenis(e.target.value)}
                                  placeholder="Jenis Buku"
                                  name="Jenis Buku"
                                />
                              </label>
                              <br />
                              <label for="email">
                                Stok:
                                <br />
                                <input
                                  type="text"
                                  required
                                  onChange={(e) => setStok(e.target.value)}
                                  placeholder="Stok"
                                  name="Stok"
                                />
                              </label>
                              <br />
                              <label for="email">
                                Harga Jual:
                                <br />
                                <input
                                  type="text"
                                  required
                                  onChange={(e) =>
                                    setHarga_jual(e.target.value)
                                  }
                                  placeholder="Harga Jual"
                                  name="Harga Jual"
                                />
                              </label>
                              <br />
                            </div>

                            <label className="text">Rak Penyimpanan:</label>
                            <br />
                            <Select
                              options={NoRak}
                              styles={customStyles2}
                              isSearchable={true}
                              onChange={(event) => setRak(event.value)}
                            />
                            <br />
                            <br />
                          </form>
                          <button
                            classname="buttonupdate"
                            type="button"
                            data-bs-dismiss="modal"
                            onClick={() => handleClose()}
                          >
                            Cancel
                          </button>
                          <button
                            classname="buttonupdate"
                            type="button"
                            onClick={() => updateRequest(data.buku)}
                          >
                            Update{" "}
                          </button>
                        </div>
                      </Fade>
                    </Modal>
                  </td>
                  <td>
                    <MdDelete onClick={() => deleteRequest(data.buku)} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
