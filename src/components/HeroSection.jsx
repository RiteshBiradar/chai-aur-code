import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[688px] overflow-x-hidden">

      <img
        src="/chai-assets/background-image.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-[211px]"
      />


      <div className="w-full min-h-[688px] flex flex-col lg:flex-row items-center justify-between bg-[#0F0F0F] overflow-x-hidden px-4 sm:px-6 lg:px-20 py-16 lg:py-2 ">

        <div className="flex flex-col gap-6  w-full lg:max-w-[847px] px-4 sm:px-6 lg:px-10">

          <div className="flex flex-col">
            <h1 className="font-spline text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.2] tracking-tight">
              Consistency,  <br />
              <span className="text-[#FB923C]">& </span>
              <span className="font-spline text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.2] tracking-tight">Community<span className='text-[#FB923C]'>.</span></span>
            </h1>


            <div className="max-w-[672px]">
              <h2 className="mtext-[#FB923C] font-poppins text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#FB922C] via-[#F59E0B] to-[#EAB308] bg-clip-text text-transparent leading-normal">
                An Unmatched Learning Experience <br></br> For Coding Courses.
              </h2>
            </div>
          </div>


          <div className="flex items-center bg-black/50 border border-[#F97316] rounded-md p-5 backdrop-blur-sm w-fit">
            <p
              className="text-white text-base lg:text-lg font-cascadia-mono"
              style={{ 
                letterSpacing: '-0.223px',
               }}
            >
              Trusted by 1.5 Million+ Learners
            </p>
            <div className="ml-6 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FB922C]"></div>
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
            </div>
          </div>



          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <button
              className="flex items-center justify-center gap-4 bg-[#F97316] text-white px-8 sm:px-10 py-5 rounded-3xl w-full sm:w-auto hover:bg-[#F97316]/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code h-4 w-4"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span className="text-base lg:text-lg font-medium">Explore Cohorts</span>
            </button>

            <button
              className="flex items-center justify-center  bg-[#F97316]/20 border border-[#FB922C] text-white px-8 sm:px-20 py-5 rounded-3xl w-full sm:w-auto hover:bg-[#F97316]/30 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M13.7498 13.375C15.0427 13.375 16.2827 12.8614 17.1969 11.9471C18.1112 11.0329 18.6248 9.79293 18.6248 8.5C18.6248 7.20707 18.1112 5.96709 17.1969 5.05285C16.2827 4.13861 15.0427 3.625 13.7498 3.625C12.4569 3.625 11.2169 4.13861 10.3026 5.05285C9.38841 5.96709 8.87479 7.20707 8.87479 8.5C8.87479 9.79293 9.38841 11.0329 10.3026 11.9471C11.2169 12.8614 12.4569 13.375 13.7498 13.375ZM21.4442 23.125C22.4484 23.125 23.2203 22.2134 22.8612 21.2741C22.1567 19.4282 20.9082 17.8398 19.2811 16.7192C17.6539 15.5985 15.7247 14.9985 13.749 14.9985C11.7732 14.9985 9.84408 15.5985 8.21691 16.7192C6.58973 17.8398 5.34126 19.4282 4.63679 21.2741C4.27929 22.2134 5.04954 23.125 6.05379 23.125H21.4442Z"
                  fill="white"
                />
              </svg>
              <span className="text-base lg:text-lg font-medium">Login</span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-[599px] h-[500px] lg:h-[688px] lg:mt-0 lg:py-15 ">
          {/* Coffee Cup Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:static lg:top-auto lg:left-auto lg:transform-none lg:translate-x-0 lg:translate-y-0 lg:top-[97px] lg:left-[89px]">
            <img src="/chai-assets/chai-white.png" alt="Chai" className="w-[420px] sm:w-[500px] lg:w-[580px]" />
          </div>

          {/* Badges */}
          <div className="hidden md:flex absolute top-[114px] left-[9px] bg-[#F97316]/20 border border-[#FB922C] backdrop-blur-[78.5px] rounded-full py-2 lg:py-3 px-3 lg:px-8 items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H6C4.93913 15.5 3.92172 15.9214 3.17157 16.6716C2.42143 17.4217 2 18.4391 2 19.5V21.5" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 21.4999V19.4999C21.9993 18.6136 21.7044 17.7527 21.1614 17.0522C20.6184 16.3517 19.8581 15.8515 19 15.6299" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 3.62988C16.8604 3.85018 17.623 4.35058 18.1676 5.05219C18.7122 5.7538 19.0078 6.61671 19.0078 7.50488C19.0078 8.39305 18.7122 9.25596 18.1676 9.95757C17.623 10.6592 16.8604 11.1596 16 11.3799" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="text-white text-base lg:text-lg whitespace-nowrap">Peer learning</span>
          </div>

          <div className="hidden md:flex absolute top-[198px] right-[14px] bg-[#F97316]/20 border border-[#FB922C] backdrop-blur-[78.5px] rounded-full py-2 lg:py-3 px-3 lg:px-8 items-center gap-3">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15.5C21 16.0304 20.7893 16.5391 20.4142 16.9142C20.0391 17.2893 19.5304 17.5 19 17.5H7L3 21.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H19C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V15.5Z" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="text-white text-base lg:text-lg whitespace-nowrap">Doubt Sessions</span>
          </div>

          <div className="hidden md:flex absolute top-[82px] right-[63px] bg-[#F97316]/20 border border-[#FB922C] backdrop-blur-[78.5px] rounded-full py-2 lg:py-3 px-3 lg:px-7 items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.93743 16C9.84815 15.6539 9.66777 15.3381 9.41504 15.0854C9.16232 14.8327 8.8465 14.6523 8.50043 14.563L2.36543 12.981C2.26076 12.9513 2.16864 12.8883 2.10304 12.8014C2.03744 12.7146 2.00195 12.6088 2.00195 12.5C2.00195 12.3912 2.03744 12.2854 2.10304 12.1986C2.16864 12.1118 2.26076 12.0487 2.36543 12.019L8.50043 10.436C8.84638 10.3468 9.16212 10.1666 9.41483 9.91404C9.66754 9.66151 9.84799 9.34589 9.93743 9L11.5194 2.86501C11.5488 2.75992 11.6118 2.66735 11.6987 2.6014C11.7857 2.53545 11.8918 2.49976 12.0009 2.49976C12.11 2.49976 12.2162 2.53545 12.3031 2.6014C12.39 2.66735 12.453 2.75992 12.4824 2.86501L14.0634 9C14.1527 9.34608 14.3331 9.6619 14.5858 9.91462C14.8385 10.1673 15.1544 10.3477 15.5004 10.437L21.6354 12.018C21.7409 12.0471 21.834 12.11 21.9003 12.1971C21.9666 12.2841 22.0025 12.3906 22.0025 12.5C22.0025 12.6094 21.9666 12.7159 21.9003 12.8029C21.834 12.89 21.7409 12.9529 21.6354 12.982L15.5004 14.563C15.1544 14.6523 14.8385 14.8327 14.5858 15.0854C14.3331 15.3381 14.1527 15.6539 14.0634 16L12.4814 22.135C12.452 22.2401 12.389 22.3327 12.3021 22.3986C12.2152 22.4646 12.109 22.5003 11.9999 22.5003C11.8908 22.5003 11.7847 22.4646 11.6977 22.3986C11.6108 22.3327 11.5478 22.2401 11.5184 22.135L9.93743 16Z" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 3.5V7.5" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22 5.5H18" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 17.5V19.5" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 18.5H3" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="text-white text-base lg:text-lg whitespace-nowrap">Bounties</span>
          </div>

          <div className="hidden md:flex absolute top-[321px] left-[10px] bg-[#F97316]/20 border border-[#FB922C] backdrop-blur-[78.5px] rounded-full py-2 lg:py-3 px-3 lg:px-8 items-center gap-3">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 21.5C19.6569 21.5 21 20.1569 21 18.5C21 16.8431 19.6569 15.5 18 15.5C16.3431 15.5 15 16.8431 15 18.5C15 20.1569 16.3431 21.5 18 21.5Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 9.5C7.65685 9.5 9 8.15685 9 6.5C9 4.84315 7.65685 3.5 6 3.5C4.34315 3.5 3 4.84315 3 6.5C3 8.15685 4.34315 9.5 6 9.5Z" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13 6.5H16C16.5304 6.5 17.0391 6.71071 17.4142 7.08579C17.7893 7.46086 18 7.96957 18 8.5V15.5" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 9.5V21.5" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="text-white text-base lg:text-lg whitespace-nowrap">Code Reviews</span>
          </div>

          <div className="hidden md:flex absolute bottom-[137px] left-[180px] bg-[#F97316]/20 border border-[#FB922C] backdrop-blur-[78.5px] rounded-full py-2 lg:py-3 px-3 lg:px-8 items-center gap-3">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 13.5L21.223 16.982C21.2983 17.0321 21.3858 17.0609 21.4761 17.0652C21.5664 17.0695 21.6563 17.0493 21.736 17.0066C21.8157 16.9639 21.8824 16.9004 21.9289 16.8228C21.9754 16.7452 22 16.6565 22 16.566V8.37002C22 8.28204 21.9768 8.19562 21.9328 8.11947C21.8887 8.04332 21.8253 7.98014 21.7491 7.93632C21.6728 7.8925 21.5863 7.86958 21.4983 7.86988C21.4103 7.87017 21.324 7.89368 21.248 7.93802L16 11" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 6.5H4C2.89543 6.5 2 7.39543 2 8.5V16.5C2 17.6046 2.89543 18.5 4 18.5H14C15.1046 18.5 16 17.6046 16 16.5V8.5C16 7.39543 15.1046 6.5 14 6.5Z" stroke="#F97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="text-white text-base lg:text-lg whitespace-nowrap">Virtual Hostel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;