import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Tab from './components/Tab/Tab';
import { fetchDataEntitas, fetchDataPungutan, fetchDataUtama } from './services/api';

function App() {
  const [dataUtama, setDataUtama] = useState(null);
  const [dataEntitas, setDataEntitas] = useState(null);
  const [dataPungutan, setDataPungutan] = useState(null);
  const [noPengajuan, setNoPengajuan] = useState("");

  const handleNoPengajuanChange = (newNoPengajuan) => {
    setNoPengajuan(newNoPengajuan);
  }

  const handleRefresh = () => {
    setDataUtama(null);
    setDataEntitas(null);
    setDataPungutan(null);
    setNoPengajuan("");
  }

  useEffect(() => {
    if (noPengajuan) {
      Promise.all([
        fetchDataUtama(noPengajuan),
        fetchDataEntitas('04eb6a72-bb63-5aed-5e92-f58a3bfd5da2'),
        fetchDataPungutan('04eb6a72-bb63-5aed-5e92-f58a3bfd5da2')
      ])
        .then(([resDataUtama, resDataEntitas, resDataPungutan]) => {
          setDataUtama(resDataUtama?.data);
          setDataEntitas(resDataEntitas?.data?.pengusaha);
          setDataPungutan(resDataPungutan?.data);
        })
        .catch((error) => {
          console.error("Error fetching data :", error);
        });
    }
  }, [noPengajuan]);

  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <div className="App-header">
          <div className="App-header-left">
            <span>
              / Beranda
            </span> / SSM OC
          </div>
          <div className="App-header-right">
            <div className="App-header-btn-one">
              <span>Beranda Permohonan</span>
            </div>
            <div className="App-header-btn-two">
              <span>Beranda Menu</span>
            </div>
          </div>
        </div>
        <div className="App-content">
          <div className="App-content-body">
            <div className="App-content-body-image" />
            <div className="App-content-header">
              <div className="App-content-header-left">
                <p>Data Pemberitahuan</p>
              </div>
              <div className="App-content-header-right">
                <span>
                  No Pengajuan : {dataUtama ? dataUtama.nomor_pengajuan : ''}
                  | KSWP : {dataUtama ? "VALID " : ''}
                  | Jenis API : {dataEntitas ? dataEntitas.jenis_api : ''}
                </span>
              </div>
            </div>
            <Tab
              data1={dataUtama}
              data2={dataEntitas}
              data3={dataPungutan}
              onNoPengajuanChange={handleNoPengajuanChange}
              onRefresh={handleRefresh}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
