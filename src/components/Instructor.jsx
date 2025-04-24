import React from 'react';

const SocialLink = ({ icon }) => (
  <a href="#" className="w-5 h-5">
    {icon}
  </a>
);

const Instructor = () => {
  return (
    <div className="w-full bg-[#0F0F0F] py-16 overflow-x-hidden">
      <div className="max-w-[1536px] mx-auto">
        <div className="bg-black rounded-3xl shadow-[0_4px_54px_0_rgba(249,115,22,0.30)] flex">
          {/* Left side - Image */}
          <div className="w-[630px] h-[420px]">
            <img 
              src="/hitesh-profile.png" 
              alt="Hitesh Choudary" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="flex-1 p-9">
            <div className="flex flex-col gap-12 max-w-[810px]">
              {/* Header section */}
              <div className="flex flex-col gap-4">
                <span className="text-[#FB922C] text-sm">taught by</span>
                <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-3">
                    <h2 className="text-white text-2xl font-semibold">Hitesh Choudary</h2>
                    <div className="flex gap-4">
                      <SocialLink 
                        icon={
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF]">
                            <path d="M4 17H14M4 17L7 14M4 17L7 20M19 17H21M16 14V20M19 7L18 14M12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z" stroke="currentColor" strokeWidth="1.67"/>
                          </svg>
                        }
                      />
                      <SocialLink 
                        icon={
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF]">
                            <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.67"/>
                            <circle cx="10" cy="10" r="3.33" stroke="currentColor" strokeWidth="1.67"/>
                            <circle cx="14.5" cy="5.5" r="0.5" fill="currentColor"/>
                          </svg>
                        }
                      />
                      <SocialLink 
                        icon={
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF]">
                            <path d="M3.33 15V3.33h13.34v11.67L13.33 12H3.33z" stroke="currentColor" strokeWidth="1.67"/>
                            <path d="M5 10h2M5 13.33h5.83M16.67 5v1.67" stroke="currentColor" strokeWidth="1.67"/>
                          </svg>
                        }
                      />
                      <SocialLink 
                        icon={
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF]">
                            <path d="M8.33 6.67h10M2 7.5V17.5M6 9v12" stroke="currentColor" strokeWidth="1.67"/>
                            <rect x="15" y="15" width="3.33" height="3.33" stroke="currentColor" strokeWidth="1.67"/>
                            <rect x="3" y="3" width="3.33" height="3.33" stroke="currentColor" strokeWidth="1.67"/>
                          </svg>
                        }
                      />
                      <SocialLink 
                        icon={
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#9CA3AF]">
                            <path d="M2.5 2.5h15v15h-15v-15z" stroke="currentColor" strokeWidth="1.67"/>
                          </svg>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#9CA3AF] text-lg leading-9">
                retired from corporate and a full time YouTuber. ex-founder of LCO (acquired) ex-CTO, Sr. Director at PhysicsWallah. 2 YouTube channels with a combined 1.4 Million+ Subscribers stepped into 43 countries.
              </p>

              {/* Approach */}
              <p className="text-[#9CA3AF] text-sm">
                Approach: Project-based, Peer Learning, Bounties, Extra Activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;