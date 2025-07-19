import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-10 px-6">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <p className="font-bold">Certifications & Partners:</p>
            <img 
              alt="ISO Logo" 
              className="h-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF-yu8rzx4kgWY1IJbfu6codCovuyY_1MELYEHxRVmLOyCr9Se6rVcfEOzvbL9zKg8WWCiJPS5_G9iTlTLt8O4VAIn_oUiT5MNEtEZxAxHtPzm-NbTWYAARVo10BDapwo0610Pu0onH0UM94BzBjSH-NH-hiyNeyVzlipxYAu5xuNpya5r9WyEWgCUS5JwFl38NY8FCSK6eqWvTPopS7qxvC5jmTJ3-1udoponpeosCWIC2D8koUYIDPr8ooDX_8cHWpQ9r7uW9LM"
            />
            <img 
              alt="Partner Logo" 
              className="h-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNwQkr04MgeeZeLPXlYsH7vhcIkmGMosgd0mOqXFarpF64bH25Yif333KNgnR6bMEp1ULuZA6hP2s0BBMWKjTpmpzxpcvgBgBERk7rJH6yFCNfKUkJjVHMP8czSc_YjDKs3pxCT3cFT0-xLHRhkLemuUszYur98CheWOHTfa32wPahh5BnDN0VCFU9457hjRgDByaY_uBWcqp38gPnCzxWlVw-Kfxc3UoZUmoAk4zbczRS9-gq4VyE6p7ONEDIUPdCVfvQpaFK8jc"
            />
          </div>
          <p className="text-sm text-slate-400">© 2024 Shree Ganesh Refrigeration System. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a className="text-slate-400 hover:text-white" href="#">
              <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;