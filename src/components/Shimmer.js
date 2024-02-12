const Shimmer = () => (
  <div className="flex flex-row flex-wrap">
    {Array(10)
      .fill()
      .map((_, index) => (
        <div key={index} className="m-8 p-4 w-72 h-64 bg-gray-300 border-4 border-slate-300 rounded box-border shadow-lg">
        </div>
      ))}
  </div>
);

export default Shimmer;
