const CardResult = (props) => {
  const { value, index, bg } = props;
  return (
    <div
      className="d-flex flex-column align-items-center  justify-content-center"
      style={{
        width: ' 200px',
        height: '200px',
        borderRadius: '50%',
        backgroundColor: `#fff`,
        border: ` solid 10px ${bg}`,
      }}>
      <span
        style={{
          fontSize: '36px',
          fontWeight: '600',
          color: `${bg}`,
        }}>
        {value}
      </span>
      <p
        style={{
          color: `${bg}`,
          fontSize: '20px',
          fontWeight: '400',
        }}>
        {' '}
        Cluster {index}
      </p>
    </div>
  );
};

export default CardResult;
