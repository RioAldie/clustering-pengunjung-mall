import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="w-50 p-5 d-flex flex-column align-items-cneter"
      style={{ zIndex: 1000 }}>
      <p
        style={{
          fontSize: '60px',
          fontWeight: '700',
          color: '#fff',
          textAlign: 'center',
        }}>
        Clustering Pengunjung MALL dengan K-Means
      </p>
      <p
        style={{
          fontSize: '30px',
          fontWeight: '500',
          color: '#fff',
          textAlign: 'center',
        }}>
        Sistem Clustering pengunjung mall dengan menggunakan metode
        K-Means
      </p>
      <Link to={'/app'} style={{ width: '100%' }}>
        <button
          className="btn btn-primary btn-lg"
          style={{ backgroundColor: '#1D267D', width: '100%' }}>
          {' '}
          Generate Cluster
          <img src="/images/arrow-right.svg" alt="" />
        </button>
      </Link>
      <Link to={'/data'} style={{ width: '100%' }}>
        <button
          className="btn btn-secondary btn-lg mt-5"
          style={{ width: '100%' }}>
          {' '}
          View Data
          <img src="/images/arrow-right.svg" alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
