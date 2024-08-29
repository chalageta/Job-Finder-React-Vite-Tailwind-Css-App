import { useState } from 'react'
import { MdClose } from 'react-icons/md';
import { HiMenuAlt3 } from 'react-icons/hi';
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const showDropdown = () => {
        setDropdown(dropdown)
    };
  return (
      <nav>
          <div className='flex bg-gray-700'>
              <div>
                  <div>
                      <div>
                          <span>
                              <button>Job</button>
                              <p>Hope</p>
                          </span>
                      </div>
                  </div>
                  <ul>
                      <a href="#">Find Jobs</a>
                      <a href="#">Peoples</a>
                      <a href="#">Hiring Sites</a>
                      <a href="#">Resume</a>
                  </ul>
                  <div>
                      <button>Sign Up</button>
                      <button>Login</button>
                  </div>
                  {dropdown ? (
                      <div> <MdClose /> </div>
                  ) : (
                          <div> <HiMenuAlt3 /></div>
                  )}
              </div>
              {dropdown ? 
                  <div></div>: null
              }
          </div>
    </nav>
  )
}

export default Navbar