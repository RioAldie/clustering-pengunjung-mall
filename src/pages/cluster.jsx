import { useState } from 'react';
import { PengunjungMall } from '../services/data';
import { clusters } from '../services/kmean';
import Result from '../components/Result';
import DBI from '../components/DBI';

const Cluster = () => {
  //   const [array, setArray] = useState([]);
  //   const dataMatrix = () => {
  //     PengunjungMall.map((data) => {
  //       setArray((prev) => [
  //         ...prev,
  //         [
  //           data.Usia,
  //           data.Pendapatan_Tahunan_Ribuan_USD,
  //           data.Pengeluaran_USD,
  //         ],
  //       ]);
  //     });
  //   };

  console.log(clusters);
  return (
    <div
      className="d-flex flex-column align-items-center gap-5 p-5"
      style={{ backgroundColor: '#242424', height: '100vh' }}>
      <div>
        <p
          style={{
            fontSize: '30px',
            fontWeight: '500',
            color: '#fff',
            textAlign: 'center',
          }}>
          Dari data Pengunjung Mall yang diolah dengan metode K-means,
          mennghasilkan Cluster:
        </p>
      </div>
      <Result />
      <p
        style={{
          fontSize: '30px',
          fontWeight: '500',
          color: '#fff',
          textAlign: 'center',
        }}>
        Evaluasi dengan menghitung nilai Davies Bouldin Index.
      </p>
      <DBI />
    </div>
  );
};

export default Cluster;
