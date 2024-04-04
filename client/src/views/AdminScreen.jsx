import React, { useState } from "react";
import { Badge } from "../components/Badge";
import { Edit1 } from "../assets/icons/Edit1";
import { Icon } from "../assets/icons/Icon";
import { Icon1 } from "../assets/icons/Icon1";
import { IoniconPPersonDefault1 } from "../assets/icons/IoniconPPersonDefault1";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";



export const AdminScreen = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>

      <NavbarAdmin />
      <div className="flex flex-col md:flex-row">
        <nav className="flex inset-y-0 left-0 bg-gray-100 p-4 w-full md:w-64 flex flex-col">
        <button 
          onClick={handleMenuOpen} 
          className="md:hidden flex flex-col w-8 h-8 justify-around items-center bg-green-700 rounded p-1 cursor-pointer"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

          <aside className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 space-y-2 bg-white p-4 rounded shadow-lg overflow-auto`}>
            <ul>
              <li>
                <a href="/gestion-avis" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Gestion Avis</a>
              </li>
              <li>
                <a href="/gestion-stat" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Gestion Stat</a>
              </li>
              <li>
                <a href="/statistique" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Statistique</a>
              </li>
            </ul>
          </aside>
        </nav>

        <main className="flex-grow flex flex-col sm:flex-col ml-auto mt-10">
          <div className="flex items-start w-full ml-10 mb-10 border-b-2 border-gray-300">
            <div className="flex flex-col items-start">
              <div className="w-[71px] h-[64px] ml-5">
                <img className="flex" alt="Image" src="https://c.animaapp.com/VcwknbTN/img/logo@2x.png" />
              </div>
              <div className="font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap ml-7">
                Admin
              </div>
              <div className="[font-family:'Outfit',Helvetica] font-normal text-graygray-500 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                GaliCarbo@gmail.com
              </div>             
            </div>   
          </div>

        
        {/* ------------tabeau test-------------------- */}
        <div className="flex items-start w-full ml-5">
          <div className="w-full [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-2xl tracking-[0] leading-[25.2px] whitespace-nowrap">
            GESTION DES DONNÉES
          </div>
        </div>
        <div className="flex justify-center flex-wrap border border-gray-300 shadow-md mb-5">
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="bg-cool-gray050 rounded-[12px_0px_0px_0px] flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                NOM DE L’UTITLISATEUR
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                #00910
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                #087651
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                Bonnie Green
              </div>
            </div>
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                MODE DE CALCULATEUR
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!flex-[0_0_auto]" color="green-badge" text="Express" />
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!flex-[0_0_auto]" color="red-badge" text="Normal" />
            </div>
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!flex-[0_0_auto]" color="blue-badge" text="Complet" />
            </div>
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                SCORE [TONNE]
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                [100/100/100/100]
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
              [100/100/100/100]
              </div>
            </div>
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
              [100/100/100/100]
              </div>
            </div>
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                DATE
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                Apr 23, 2021
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                Apr 18, 2021
              </div>
            </div>
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                Apr 15, 2021
              </div>
            </div>
          </div>
        </div>
        
        {/* ------------tabeau avis-------------------- */}

        <div className="flex items-start w-full ml-5">
          <div className="w-full [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-2xl tracking-[0] leading-[25.2px] whitespace-nowrap">
            GESTION DES AVIS
          </div>
        </div>

        <div className="flex justify-center flex-wrap border border-gray-300 shadow-md mb-5">
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="bg-cool-gray050 rounded-[12px_0px_0px_0px] flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                NOM DE L’UTITLISATEUR
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                #00910
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                #087651
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                Bonnie Green
              </div>
            </div>
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
              TYPE
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!flex-[0_0_auto]" color="green-badge" text="Jeu" />
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!flex-[0_0_auto]" color="red-badge" text="Calculateur" />
            </div>
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="!flex-[0_0_auto]" color="blue-badge" text="Autres" />
            </div>
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                MESSAGE
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                Comment 1 
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                Comment 2 
              </div>
            </div>
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                Comment 3 
              </div>
            </div>
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                DATE
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                Apr 23, 2021
              </div>
            </div>
            <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                Apr 18, 2021
              </div>
            </div>
            <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                Apr 15, 2021
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>

    <Footer/>
  </>
  );
};