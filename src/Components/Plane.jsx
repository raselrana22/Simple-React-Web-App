import single from "../assets/image/single.png";
import double from "../assets/image/double.png";

const Plane = () => {
  return (
    <div>
      <div className='max-w-[1240px] mx-4 md:mx-auto bg-white md:grid grid-cols-3 my-[70px] gap-12'>
        <div
          className='shadow-2xl hover:scale-105 transition-[500ms] 
              text-center flex flex-col items-center my-6'
        >
          <img src={single} alt='' className='w-[140px]' />
          <p className='text-2xl font-bold mt-3'>Web Development</p>
          <span className='text-2xl font-bold mt-3'>$149</span>
          <p className='text-m font-normal m-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            assumenda ducimus porro totam ipsum nihil voluptate ex molestias
            accusamus quasi.
          </p>
          <button
            type='button'
            className='w-[150px] text-white font-normal bg-black p-3 rounded my-4'
          >
            Start Trial
          </button>
        </div>

        <div
          className='shadow-2xl hover:scale-105 transition-[500ms] 
              text-center flex flex-col items-center my-6'
        >
          <img src={double} alt='' className='w-[140px]' />
          <p className='text-2xl font-bold mt-3'>Digital Marketing</p>
          <span className='text-2xl font-bold mt-3'>$109</span>
          <p className='text-m font-normal m-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            assumenda ducimus porro totam ipsum nihil voluptate ex molestias
            accusamus quasi.
          </p>
          <button
            type='button'
            className='w-[150px] text-white font-normal bg-black p-3 rounded my-4'
          >
            Start Trial
          </button>
        </div>

        <div
          className='shadow-2xl hover:scale-105 transition-[500ms] 
              text-center flex flex-col items-center my-6'
        >
          <img src={single} alt='' className='w-[140px]' />
          <p className='text-2xl font-bold mt-3'>App Development</p>
          <span className='text-2xl font-bold mt-3'>$135</span>
          <p className='text-m font-normal m-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            assumenda ducimus porro totam ipsum nihil voluptate ex molestias
            accusamus quasi.
          </p>
          <button
            type='button'
            className='w-[150px] text-white font-normal bg-black p-3 rounded my-4'
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plane;
