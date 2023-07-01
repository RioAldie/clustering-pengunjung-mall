import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light "
      style={{ backgroundColor: '#1D267D' }}>
      <div className="container-fluid d-flex flex-row gap-5 justify-content-center">
        <Link className="navbar-brand text-light" to={'/'}>
          Home
        </Link>
        <Link className="navbar-brand text-light" to={'/data'}>
          Data
        </Link>
        <Link className="navbar-brand text-light" to={'/app'}>
          Cluster
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
