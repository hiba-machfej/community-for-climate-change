import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto flex flex-col  md:flex-row justify-between px-12 lg:px-0 mt-10 md:mt-6">
      <Link to="/">
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" className="h-24" />
          <p className="text-green-800 font-bold">Community for<br/>Climate Change</p>
        </div>
      </Link>
      <div className="mt-6 lg:mt-0 md:flex items-center justify-end md:flex-1 lg:w-0">
        <Link to="sign-in" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 hover:text-gray-900">
          Sign in
        </Link>
        <Link to="sign-up" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700">
          Sign up
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
