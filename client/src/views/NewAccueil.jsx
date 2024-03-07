import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const NewAccueil = () => {
  return (
        <>
          <Navbar />
          <main>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
            
              <div className="w-full lg:w-5/12 px-4 ml-auto mr-auto ">
                <div className="pr-12">
                  <h1 className="[font-family:'Outfit',Helvetica] font-medium text-black tracking-[0] leading-[normal] whitespace-nowrap text-5xl">
                  Bilan Carbone Express
                  </h1>
                  <p className="mt-4 text-lg [font-family:'Open_Sans',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[40px]">
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
                  </p>
                </div>
                  <div className="pr-3">
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
              </div>
              <div className="w-full lg:w-4/12  px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-6 mb-2">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl [font-family:'Open_Sans',Helvetica] font-bold text-black">
                      Actualités
                    </h4>
                    <p className="text-md [font-family:'Open_Sans',Helvetica] font-light mt-2 text-black">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer.
                    </p>
                  </blockquote>
                </div>
              </div>
              </div>
          </div>
          
          </div>
          
          
          <div className="relative w-[402px] h-[58px] top-[1250px] left-[89px]">
            <div className="relative w-[452px] h-[110px] top-[-22px] left-[-26px] bg-[url(https://c.animaapp.com/VcwknbTN/img/rectangle-10.svg)] bg-[100%_100%]">
              <div className="relative w-[178px] h-[40px] top-[31px] left-[137px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-medium text-white text-[30px] text-center tracking-[0] leading-[normal]">
                Lancer
              </div>
            </div>
          </div>
          </main>
        </>
  );
};
