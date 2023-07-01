import { useEffect, useState } from 'react';
import { PengunjungMall } from '../services/data';

const DataPage = () => {
  const [array, setArray] = useState([]);

  const stylerow = 'text-center text-weight-500';
  const stylecol = 'text-center text-light';
  let usia = [];
  const dataMatrix = () => {
    PengunjungMall.map((data) => {
      setArray((prev) => [
        ...prev,
        [
          data.Usia,
          data.Pendapatan_Tahunan_Ribuan_USD,
          data.Pengeluaran_USD,
        ],
      ]);
    });
  };

  useEffect(() => {
    let isChnage = true;
    if (isChnage) {
      dataMatrix();
      isChnage = false;
    }

    console.table(array);
  }, []);
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center flex-column "
      style={{ backgroundColor: '#242424' }}>
      <h4 className="text-light mt-5">Data Pengunjung Mall</h4>
      <table
        className="table w-75 border border-dark mt-5"
        style={{ backgroundColor: '#242424' }}>
        <thead className="bg-dark">
          <tr className="bg-dark ">
            <th
              scope="col"
              className={stylecol}
              style={{ width: '100px', backgroundColor: '#1D267D' }}>
              ID Pelanggan
            </th>
            <th
              scope="col"
              className={stylecol}
              style={{ backgroundColor: '#1D267D' }}>
              Gender
            </th>
            <th
              scope="col"
              className={stylecol}
              style={{ backgroundColor: '#1D267D' }}>
              Usia
            </th>
            <th
              scope="col"
              className={stylecol}
              style={{ width: '250px', backgroundColor: '#1D267D' }}>
              Pendapatan Tahunan
            </th>
            <th
              scope="col"
              className={stylecol}
              style={{ backgroundColor: '#1D267D' }}>
              Pengeluaran
            </th>
          </tr>
        </thead>
        <tbody>
          {PengunjungMall.map((data, i) => {
            usia.push(data.Usia);
            return (
              <tr key={i}>
                <th scope="row" className={stylerow}>
                  {data.ID_Pelanggan}{' '}
                </th>
                <td className={stylerow}>{data.Gender}</td>
                <td className={stylerow}>{data.Usia}</td>
                <td className={stylerow} style={{ width: '250px' }}>
                  {data.Pendapatan_Tahunan_Ribuan_USD}
                </td>
                <td className={stylerow}>{data.Pengeluaran_USD}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;
