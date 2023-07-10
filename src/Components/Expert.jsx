import laptop from "../assets/image/laptop.jpg";

const Expert = () => {
  return (
    <div className='max-w-[1240px] mx-auto h-auto my-10 p-2 md:grid grid-cols-2'>
      <div className='col-span-1'>
        <img src={laptop} alt='' />
      </div>
      <div className=' flex flex-col justify-center col-span-1'>
        <h1 className='text-3xl font-bold py-2'>Lear from Experts</h1>
        <p className='py-2 text-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem hic fuga modi, id asperiores quidem nisi? Officia corporis quasi
          vel tempore laudantium eaque dolorem suscipit libero numquam dicta,
          sunt possimus modi fugit omnis odio repellat veniam distinctio harum
          unde obcaecati error temporibus nostrum! Optio nihil ratione a labore
          iste aspernatur aliquid et. Rerum beatae fugiat provident est facilis
          exercitationem!
        </p>
        <button
          type='button'
          className='w-[150px] text-white bg-black p-3 mt-3 rounded'
        >
          Get Start
        </button>
      </div>
    </div>
  );
};

export default Expert;
