import arrow from "../assets/arrow.svg"

const Carousel = ({loanOption}:any) => {
  // Duplicate list for infinite scroll effect
  const duplicatedList = [...loanOption, ...loanOption, ...loanOption, ...loanOption, ...loanOption];

  return (
    <div className="overflow-hidden w-full my-3">
      <div className="relative carousel-track group">
        {duplicatedList.map((item, index) => (
          <div>
            <img
            key={index}
            src={item.Image}
            alt=""
            className="w-96  object-cover mx-2 shrink-0 rounded-2xl"
          />
          <div className="absolute w-96 ml-2 flex flex-col house items-center justify-evenly rounded-2xl top-1 md:top-0 text-white h-full text-center">
          <div className="font-extrabold text-3xl" >{item.title}</div>
          <div className="md:text-sm">{item.description}</div>
          <img src={arrow} className="border-2 w-7 rounded-full border-white" alt="" />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
