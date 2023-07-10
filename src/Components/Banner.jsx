import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className='bg-emerald-300 w-full py-[100px]'>
      <div className='max-w-[1240px] mx-auto text-center font-bold my-[60px]'>
        <div className='text-2xl md:text-4xl text-black mt-4'>
          Learn with us
        </div>
        <div className='text-white text-[40px] md:text-[60px] mt-4'>
          Grow with us
        </div>
        <div className='text-black text-2xl md:text-4xl mt-4 mr-2'>
          Learn
          <TypeAnimation
            className='ml-2'
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Web Development",
              500,
              "Digital Marketing",
              500, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            speed={5}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <button
          type='button'
          className='w-[150px] text-white font-normal bg-black p-3 rounded mt-4'
        >
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Banner;
