import brandLogo from "../data/PopularBrand";

const PopularBrands = () => {
  // console.log(brandLogo);

  return (
    <div className="bg-slate-200 p-5 rounded-[10px]">
        <h2 className="text-3xl font-semibold text-center mb-4 md:mb-8 md:text-4xl lg:mb-10">Our Popular Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center">
        {brandLogo?.map((obj) => {
          return (
            <div key={obj.id} className="brand_image_container">
              <img src={obj.image} alt="image" className="object-contain"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularBrands;
