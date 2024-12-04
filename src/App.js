import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Tab from './components/Tab/Tab';
import axios from 'axios';

function App() {
  const [dataUtama, setDataUtama] = useState(null);
  const [dataEntitas, setDataEntitas] = useState(null);
  const [dataPungutan, setDataPungutan] = useState(null);

  useEffect(() => {
    Promise.all([
      axios.get('https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=20120B388FAE20240402000001'),
      axios.get('https://api-hub.ilcs.co.id/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2'),
      axios.get('https://api-hub.ilcs.co.id/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2')
    ])
      .then(([dataUtamaResponse, dataEntitasResponse, dataPungutanResponse]) => {
        if (dataUtamaResponse.data.status) {
          setDataUtama(dataUtamaResponse.data.data);
          // console.log(dataUtamaResponse.data.data);
          
        }
        if (dataEntitasResponse.data.status) {
          setDataEntitas(dataEntitasResponse.data.data.pengusaha);
          // console.log(dataEntitasResponse.data.data.pengusaha);
          
        }
        if (dataPungutanResponse.data.status) {
          setDataPungutan(dataPungutanResponse.data.data);
          // console.log(dataPungutanResponse.data.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

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
            <div className="App-content-body-image"/>
            <div className="App-content-header">
              <div className="App-content-header-left">
                <p>Data Pemberitahuan</p>
              </div>
              <div className="App-content-header-right">
              <span>
                  No Pengajuan : {dataUtama ? dataUtama.nomor_pengajuan : 'Loading...'} 
                  | KSWP : VALID 
                  | Jenis API : {dataEntitas ? dataEntitas.jenis_api : 'Loading...'}
                </span>
              </div>
            </div>
            <Tab data1={dataUtama} data2={dataEntitas} data3={dataPungutan} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
