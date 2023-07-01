import CardResult from './CardResult';

const res = [
  { index: 1, value: 0.85, bg: 'red' },
  { index: 2, value: 55.7, bg: 'green' },
  { index: 3, value: 80, bg: 'blue' },
  { index: 4, value: 16, bg: 'orange' },
  { index: 5, value: 22, bg: 'purple' },
];
const Result = () => {
  return (
    <div className="d-flex flex-row w-75 h-50 justify-content-center align-items-center gap-5">
      {res.map((cluster) => {
        return (
          <CardResult
            index={cluster.index}
            value={cluster.value}
            bg={cluster.bg}
          />
        );
      })}
    </div>
  );
};

export default Result;
