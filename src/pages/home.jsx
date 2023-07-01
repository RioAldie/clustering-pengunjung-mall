import Hero from '../components/Hero';

const Home = () => {
  return (
    <div
      className="w-100 d-flex flex-row justify-content-center gap-5 align-items-center"
      style={{ backgroundColor: '#242424', height: '100vh' }}>
      <Hero />
      <div className="thum">
        <img
          src="/images/mall.jpg"
          alt=""
          width={1270}
          height={660}
          style={{
            position: 'absolute',
            top: 100,
            left: 200,
            zIndex: 100,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
