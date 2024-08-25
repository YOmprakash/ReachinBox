import { FaGoogle } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const LoginPage = () => {
  return (
    <div className='flex flex-col h-screen justify-between bg-black'>
      {/* Header with Logo */}
      <div className='w-full h-[64px] bg-[#121212] flex items-center justify-center'>
        <img
          src={Logo} 
          alt="Logo"
          className="object-contain w-[150px] h-6"
        />
      </div>

      {/* Login Form */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-[#111214] p-8 flex flex-col justify-center rounded-lg border border-solid border-[#343A40] shadow-lg w-full max-w-md">
          <h2 className="text-white font-semibold text-[20px] text-center mb-4">Create a new account</h2>
          <button className="flex items-center justify-center w-full py-2 mb-4 bg-transparent border border-[#707172] text-[#CCCCCC] rounded-lg shadow focus:outline-none">
            <FaGoogle className="mr-2" />
            Sign Up with Google
          </button>
          <button className="w-full max-w-[195px] h-12 mx-auto py-2 bg-custom-gradient text-white rounded-md mt-8 shadow focus:outline-none">
            Create an Account
          </button>
          <div className="text-center text-[#909296]  mt-4">
            <p>
              Already have an account?{' '}
              <a href="/" className="text-[#C1C2C5] hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#121212] w-full p-4 text-center text-gray-500 text-sm">
        &copy; 2024 Reachinbox. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
