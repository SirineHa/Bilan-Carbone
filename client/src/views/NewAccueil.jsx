import React from "react";
import { Link } from "react-router-dom";

export const NewAccueil = () => {
  return (
        <div className="">
          <div className="">
            <div className="absolute w-[1046px] top-[520px]">
            <Link to="/">
                <img
                  className="absolute w-[121px] h-[98px]"
                  alt="Logo"
                  src="https://c.animaapp.com/VcwknbTN/img/logo@2x.png"
                />
              </Link>
              <nav>
                <Link to="/">
                  <div className="absolute h-[22px] top-[38px] left-[992px] [font-family:'Inter',Helvetica] font-extrabold text-[#596774] text-[18px] tracking-[0] leading-[normal]">
                    AVIS
                  </div>
                </Link>
                <Link to="/">
                  <div className="absolute h-[22px] top-[38px] left-[791px] [font-family:'Inter',Helvetica] font-extrabold text-[#596774] text-[18px] tracking-[0] leading-[normal]">
                    JEUX LUDIQUES
                  </div>
                </Link>
                <Link to="/">
                  <div className="absolute h-[22px] top-[38px] left-[601px] [font-family:'Inter',Helvetica] font-extrabold text-[#596774] text-[18px] tracking-[0] leading-[normal]">
                    STATISTIQUES
                  </div>
                </Link>
                <Link to="/">              
                  <div className="absolute h-[22px] top-[38px] left-[422px] [font-family:'Inter',Helvetica] font-extrabold text-[#596774] text-[18px] tracking-[0] leading-[normal]">
                    ACTUALITES
                  </div>
                </Link>
                <Link to="/">
                <div className="absolute h-[22px] top-[38px] left-[289px] [font-family:'Inter',Helvetica] font-extrabold text-[#596774] text-[18px] tracking-[0] leading-[normal]">
                  HOME
                </div>
                </Link>
              </nav>
            </div>
          </div>
          <div className="absolute w-[306px] h-[90px] top-[1101px] left-[121px]">
            <div className="w-[90px] h-[90px] top-0 bg-[url(https://c.animaapp.com/VcwknbTN/img/ellipse-2.svg)] absolute left-0 bg-[100%_100%]">
              <img
                className="w-[58px] h-[52px] top-[19px] left-[16px] absolute object-cover"
                alt="Fast delivery"
                src="https://c.animaapp.com/VcwknbTN/img/fast-delivery-2@2x.png"
              />
            </div>
            <div className="absolute w-[70px] h-[70px] top-[10px] left-[128px]">
              <img
                className="absolute w-[70px] h-[70px] top-0 left-0"
                alt="Ellipse"
                src="https://c.animaapp.com/VcwknbTN/img/ellipse-3.svg"
              />
              <img
                className="absolute w-[41px] h-[42px] top-[14px] left-[16px] object-cover"
                alt="Time"
                src="https://c.animaapp.com/VcwknbTN/img/time-2@2x.png"
              />
            </div>
            <div className="absolute w-[70px] h-[70px] top-[10px] left-[236px]">
              <img
                className="absolute w-[70px] h-[70px] top-0 left-0"
                alt="Ellipse"
                src="https://c.animaapp.com/VcwknbTN/img/ellipse-4.svg"
              />
              <img
                className="absolute w-[45px] h-[45px] top-[13px] left-[12px] object-cover"
                alt="Hourglass"
                src="https://c.animaapp.com/VcwknbTN/img/hourglass-2@2x.png"
              />
            </div>
          </div>
          <div className="absolute w-[455px] h-[340px] top-[730px] left-[68px]">
            <p className="absolute w-[444px] top-[209px] left-[7px] [font-family:'Open_Sans',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[40px]">
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            </p>
            <div className="absolute w-[420px] top-0 left-0 [font-family:'Outfit',Helvetica] font-medium text-black text-[62px] tracking-[0] leading-[normal] whitespace-nowrap">
              Bilan Carbone Express
            </div>
          </div>
          <div className="absolute w-[402px] h-[58px] top-[1250px] left-[89px]">
            <div className="relative w-[452px] h-[110px] top-[-22px] left-[-26px] bg-[url(https://c.animaapp.com/VcwknbTN/img/rectangle-10.svg)] bg-[100%_100%]">
              <div className="absolute w-[178px] h-[40px] top-[31px] left-[137px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-medium text-white text-[30px] text-center tracking-[0] leading-[normal]">
                Lancer
              </div>
            </div>
          </div>
        </div>
  );
};
