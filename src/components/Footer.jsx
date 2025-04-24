import React from 'react';

const SocialIcon = ({ children }) => (
  <a href="#" className="w-5 h-5 text-[#9CA3AF] hover:text-white transition-colors">
    {children}
  </a>
);

const FooterLink = ({ children }) => (
  <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-[#1F2937] overflow-x-hidden">
      <div className="max-w-[1536px] mx-auto py-16">
        <div className="px-4 flex gap-8">
          {/* Left column - Logo and description */}
          <div className="flex-1 flex flex-col gap-4">
            <a href="/" className="w-[160px]">
              <img src="/chaicode-white.svg" alt="ChaiCode" className="w-[142.56px] h-8" />
            </a>
            <p className="text-[#9CA3AF]">Home for programmers</p>
            <div className="flex gap-4">
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17H14M4 17L7 14M4 17L7 20M19 17H21M16 14V20M19 7L18 14M12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z" stroke="currentColor" strokeWidth="1.67"/>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.67"/>
                  <circle cx="10" cy="10" r="3.33" stroke="currentColor" strokeWidth="1.67"/>
                  <circle cx="14.5" cy="5.5" r="0.5" fill="currentColor"/>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33 15V3.33h13.34v11.67L13.33 12H3.33z" stroke="currentColor" strokeWidth="1.67"/>
                  <path d="M5 10h2M5 13.33h5.83M16.67 5v1.67" stroke="currentColor" strokeWidth="1.67"/>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33 6.67h10M2 7.5V17.5M6 9v12" stroke="currentColor" strokeWidth="1.67"/>
                  <rect x="15" y="15" width="3.33" height="3.33" stroke="currentColor" strokeWidth="1.67"/>
                  <rect x="3" y="3" width="3.33" height="3.33" stroke="currentColor" strokeWidth="1.67"/>
                </svg>
              </SocialIcon>
              <SocialIcon>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 2.5h15v15h-15v-15z" stroke="currentColor" strokeWidth="1.67"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Middle column - Products */}
          <div className="w-[352px] flex flex-col gap-4">
            <h3 className="text-white text-lg font-semibold">Products</h3>
            <div className="flex flex-col gap-3">
              <FooterLink>Courses</FooterLink>
              <FooterLink>Cohort</FooterLink>
              <FooterLink>Coding Hero</FooterLink>
              <FooterLink>FreeAPI</FooterLink>
              <FooterLink>Masterji</FooterLink>
            </div>
          </div>

          {/* Right column - Resources */}
          <div className="w-[352px] flex flex-col gap-4">
            <h3 className="text-white text-lg font-semibold">Resources</h3>
            <div className="flex flex-col gap-3">
              <FooterLink>Docs</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Pricing Policy</FooterLink>
              <FooterLink>Refund Policy</FooterLink>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 px-4">
          <p className="text-[#6B7280]">© 2025 ChaiCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;