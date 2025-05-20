import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  return (
    <div className=" bg-black text-white">
      <nav className="flex items-center justify-between mx-5 lg:mx-0  lg:justify-around h-20">
        <img src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg" />
        <ul className="gap-x-5 hidden lg:flex">
          <li className=" hover:text-blue-300">Book</li>
          <li className=" hover:text-blue-300">My trips</li>
          <li className=" hover:text-blue-300">Travel info</li>
          <li className=" hover:text-blue-300">NilegePage</li>
          <li className=" hover:text-blue-300">Deals</li>
          <li className=" hover:text-blue-300">Help</li>
        </ul>
        <div>
          <button className="h-10 w-25 rounded-2xl hover:bg-blue-300 hover:text-black hidden lg:block">English-US$</button>
          <CiMenuBurger className='text-white text-4xl lg:hidden' />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
