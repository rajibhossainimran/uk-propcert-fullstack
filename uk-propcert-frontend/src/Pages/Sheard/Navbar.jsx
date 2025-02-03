
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainElementTop, setMainElementTop] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    // Check if the page has scrolled past the <main> tag
    if (window.scrollY >= mainElementTop) {
      setIsNavbarVisible(true); // Navbar should be visible when past <main>
    } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Scroll down - Hide navbar
      setIsNavbarVisible(false);
    } else if (window.scrollY < lastScrollY) {
      // Scroll up - Show navbar
      setIsNavbarVisible(true);
    }

    // Update last scroll position
    setLastScrollY(window.scrollY);
  };

  // Hook to attach scroll event listener when component mounts
  useEffect(() => {
    // Find the position of the <main> tag
    const mainElement = document.querySelector('main');
    if (mainElement) {
      setMainElementTop(mainElement.offsetTop);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Toggle the visibility of the search input
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
    
    const items = [
        {
          key: '1',
          label: (
            <NavLink className={'text-base font-medium text-[#ff4848]'} to={'/about'}>About Us</NavLink>
          ),
        },
        {
          key: '2',
          label: (
            <NavLink className={'text-base font-medium'} to={'/service'}>Our Service</NavLink>
          ),
        },
        {
          key: '3',
          label: (
            <NavLink className={'text-base font-medium'} to={'/newproperty'}>Submit New Property</NavLink>
          ),
        },
        {
          key: '4',
          label: (
            <NavLink className={'text-base font-medium'} to={'/gallery'}>Gallery</NavLink>
          ),
        },
      ];
      const navLinks = <>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/">Home</NavLink></li>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/properties">Properties</NavLink></li>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/agents">Agents</NavLink></li>
        <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg relative group"><NavLink to="/pages">
                        <Dropdown className='px-4 py-2' menu={{ items, className:"w-[200px]"}} placement="bottom" arrow>
                            Pages
                        </Dropdown>
        </NavLink>
                
            </li>
        <li className='px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-[#000] rounded-lg'><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className='sticky top-0 z-20 bg-white bg-opacity-75 backdrop-blur-sm'>
            <div className=' max-w-full '>
                <div className='flex justify-between h-[70px] shadow-xl w-full items-center px-12'>
                    <div className='w-[130px] ml-5 mt-1'>
                        <img src="/src/assets/logo3.png" alt="" />
                    </div>

                    <div className='ml-40'>
                        <ul className='menu-horizontal list-none flex gap-3'>
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex gap-5 list-none ml-32 items-center'>
                      <div className='flex gap-3 items-center text-lg text-[#000]'><a href="#"><FontAwesomeIcon icon={faPhone} className='text-[#f1913d] text-lg' /> 1-333-345-6868</a></div>
                          
                      <div className="dropdown z-40 dropdown-end">
                            <div tabIndex={0} role="button" className="avatar">
                              <div className="">
                                <FontAwesomeIcon className='text-4xl text-[#f1913d]' icon={faCircleUser} />
                              </div>
                            </div>
                            <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 px-7 pt-3 p-2 shadow">
                              <button className='px-10 font-medium py-2 rounded-lg bg-[#2c2e33] hover:bg-[#f1913d] text-white text-lg transition duration-700'>Login</button>
                              <p className='text-center mt-3 font-medium'>Don't You Have an account?</p>
                              <a href="#" className='text-center mt-3 mb-2 text-[#f1913d] underline text-base'>Registration</a>
                            </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;