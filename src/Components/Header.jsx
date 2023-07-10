import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-emerald-300 p-4'>
      <div className='max-w-[1240px] item-center py-4 flex justify-between mx-auto'>
        <div className='text-3xl font-bold'>My Website</div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className='text-2xl text-white md:hidden block'
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className='text-2xl text-white md:hidden block'
          />
        )}

        <ul className='hidden md:flex text-xl font-bold text-white gap-5'>
          <li>Home</li>
          <li>Company</li>
          <li>Resource</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responsive design */}
        <ul
          className={` duration-300 md:hidden w-[80%] h-screen text-xl font-bold text-white bg-black
         fixed top-[100px] ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className='p-5'>Home</li>
          <li className='p-5'>Company</li>
          <li className='p-5'>Resource</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
