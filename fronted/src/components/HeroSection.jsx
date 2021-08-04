// import { Link } from 'react-router-dom';
import main from '../images/main.png';

const Nav = () => {
  return (
    <div className="relative bg-white overflow-hidden">
    <div className="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg
        className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width={640}
        height={784}
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x={118}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
        <rect x={118} width={404} height={784} fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
      </svg>
    </div>

    <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">

      <main className="mt-16 mx-auto max-w-7xl sm:mt-24 lg:mt-32">
        <div className="lg:grid lg:grid-cols-8 lg:gap-8">
          <div className="text-center  md:max-w-2xl px-6 lg:col-span-5 lg:text-left flex flex-col items-center justify-center lg:items-start">
            <h1>
              <span className="block text-sm uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              Together we can save EARTH!
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Community for</span>
                <span className="block text-green-600">Climate Change</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Share climate change initiatives with your community members. Whether you want to clean your local beach, or help out after wildfires you don't have to do it alone. <br/><br/>Post an event in our platform let other people and share the efforts. 
            </p>
            <svg class="animate-bounce w-8 h-8 text-green-600 mt-12 text-center" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-3 lg:flex lg:items-center">
            <svg
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
              width={640}
              height={784}
              fill="none"
              viewBox="0 0 640 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x={118}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
              <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
            </svg>
            <div className="relative mx-auto w-full">
            
         
                <img
                  className=""
                  src={main}
                  alt=""
                />
               
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
};
export default Nav;
