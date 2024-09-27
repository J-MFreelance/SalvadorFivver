const Navbar = () => {
    return (
      <nav className='flex justify-between items-center  w-full text-white'>
        <div>
          <p className='font-bold md:text-2xl sm:text-sm'>Salvatore Coppola-Finegan</p>
        </div>
        <div className='flex space-x-8 md:text-base sm:text-xs'>
          <p className='hover:transition-colors hover:opacity-35 cursor-pointer'>HOME</p>
          <p className='hover:transition-colors hover:opacity-35 cursor-pointer'>ABOUT</p>
          <p className='hover:transition-colors hover:opacity-35 cursor-pointer'>ECOCITIZEN</p>
          <p className='hover:transition-colors hover:opacity-35 cursor-pointer'>CONTACT</p>
        </div>
      </nav>
    );
  };
  
  export default Navbar;