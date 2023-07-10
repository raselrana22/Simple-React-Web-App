const NewsLetter = () => {
  return (
    <div className='bg-emerald-300'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[60px]'>
        <div className='m-2'>
          <h1 className='text-white text-xl md:text-3xl font-bold'>
            Want to learn latest I.T skill
          </h1>
          <span className='text-white text-m py-2'>
            Sign up to our newsletter and stay up to date
          </span>
        </div>
        <div className='m-2'>
          <input
            type='email'
            className='p-3 rounded mt-4 mr-2'
            placeholder='Email'
          />
          <button
            type='button'
            className='w-[150px] text-white bg-black p-3 rounded mt-4'
          >
            Get Start
          </button>
          <br />
          <p className='text-white text-m'>
            We care about the protection of your data. Read out <br />
            <a href='#' className='text-black'>
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
