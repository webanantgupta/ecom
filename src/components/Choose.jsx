import data from "../data/Whychoose";

const Choose = () => {
  // console.log(data);

  return (
    <div className="bg-slate-200 flex flex-col justify-evenly lg:flex-row  lg:items-center p-8 rounded-[10px] choose_container">
      <h2 className="text-3xl text-center font-semibold md:text-4xl">Why choose us ?</h2>
      {data?.map((obj) => {
        const Icon = obj.symbol;

        return (
            <div className="flex mt-5 gap-10 lg:gap-2 ">
          <div key={obj.id} className=" flex justify-between  items-center px-4 bg-blue-500 rounded-xl choose_icon" >
            {Icon && <Icon className="text-2xl text-white " />}
          </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold">{obj.title}</h2>
              <p className="">{obj.content}</p>
            </div>
            </div>
        );
      })}
    </div>
  );
};

export default Choose;
