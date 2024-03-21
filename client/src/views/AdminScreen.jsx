import React from "react";
import { Badge } from "../components/Badge";
import { Edit1 } from "../assets/icons/Edit1";
import { Icon } from "../assets/icons/Icon";
import { Icon1 } from "../assets/icons/Icon1";
//import { IoniconAAddOutline1 } from "../../icons/IoniconAAddOutline1";//
import { IoniconPPersonDefault1 } from "../assets/icons/IoniconPPersonDefault1";

export const AdminScreen = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-[1440px] h-[1024px]">
        <div className="relative h-[1024px]">
          <div className="absolute w-[1440px] h-[1024px] top-0 left-0 bg-variable-collection-background">
            <div className="absolute w-[1324px] h-[367px] top-[620px] left-[73px] bg-blackampwhitewhite rounded-[15px] shadow-[0px_3.5px_5.5px_#00000005]">
            <div className="flex w-[1098px] items-center relative top-[58px] left-[127px]">
                      <div className="flex flex-col w-[269px] items-start relative">
                        <div className="bg-cool-gray050 rounded-[12px_0px_0px_0px] flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
                            NOM DE L’UTITLISATEUR
                          </div>
                        </div>
                        <div className="relative self-stretch w-full h-px bg-cool-gray200" />
                        <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
                          <a href = "#" className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                            #00910
                          </a>
                        </div>
                        <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <a href = "#" className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                            #087651
                          </a>
                        </div>
                        <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
                          <a href = "#" className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                            Bonnie Green
                          </a>
                        </div>
                      </div>
                      <div className="flex-1 grow flex flex-col items-start relative">
                        <div className="bg-cool-gray050 rounded-[0px_12px_0px_0px] flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
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
                      <div className="w-[373px] flex flex-col items-start relative">
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-[90px] h-[18px] mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
                            SCORE [TRANSPORT/ALIMENTATION/ENERGIE/ETC] TONNE
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
                      <div className="w-[188px] flex flex-col items-start relative">
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
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
              
              {/*<div className="absolute w-[1161px] h-[267px] top-[79px] left-[92px]">
                <div className="absolute w-[282px] h-[267px] top-0 left-[879px] rounded-[15px] border border-solid border-[#e0e1e2]">
                  <div className="relative w-[137px] h-[50px] top-[105px] left-[73px]">
                    <div className="absolute w-[135px] top-[31px] left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-500 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                      Ajouter une actualité
                    </div>
                    <IoniconAAddOutline1 className="!absolute !w-[22px] !h-[23px] !top-0 !left-[56px]" />
                  </div>
                </div>
                <div className="absolute w-[194px] h-[96px] top-[171px] left-[591px]">
                  <div className="relative w-[198px] h-[96px]">
                    <div className="flex w-[83px] h-[26px] items-center justify-center px-[8px] py-0 absolute top-[69px] left-0 rounded-[12px] border border-solid border-tealteal-300">
                      <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                        <div className="inline-flex h-[24px] items-center relative">
                          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                            <div className="relative w-[47.5px] h-[15px] mt-[-0.50px] [font-family:'Outfit',Helvetica] font-bold text-tealteal-300 text-[10px] text-center tracking-[0] leading-[15.0px] whitespace-nowrap">
                              Consulter
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-start px-[12px] py-0 relative flex-[0_0_auto]">
                          <div className="relative w-px h-px mr-[-0.99px] bg-[#c4c4c4]" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[194px] absolute top-[27px] left-0 [font-family:'Outfit',Helvetica] font-normal text-graygray-400 text-[12px] tracking-[0] leading-[18px]">
                      Description de l’actualité 3
                    </div>
                    <div className="w-[111px] absolute top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                      Actualité 3
                    </div>
                  </div>
                </div>
                <div className="absolute w-[225px] h-[96px] top-[171px] left-[295px]">
                  <div className="relative w-[229px] h-[96px]">
                    <div className="flex w-[83px] h-[26px] items-center justify-center px-[8px] py-0 absolute top-[69px] left-0 rounded-[12px] border border-solid border-tealteal-300">
                      <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                        <div className="inline-flex h-[24px] items-center relative">
                          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                            <div className="relative w-[47.5px] h-[15px] mt-[-0.50px] [font-family:'Outfit',Helvetica] font-bold text-tealteal-300 text-[10px] text-center tracking-[0] leading-[15.0px] whitespace-nowrap">
                              Consulter
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-start px-[12px] py-0 relative flex-[0_0_auto] overflow-hidden">
                          <div className="relative w-px h-px mr-[-0.99px] bg-[#c4c4c4]" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[225px] absolute top-[27px] left-0 [font-family:'Outfit',Helvetica] font-normal text-graygray-400 text-[12px] tracking-[0] leading-[18px]">
                      Description de l’actualité 2
                    </div>
                    <div className="w-[142px] absolute top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                      Actualité 2
                    </div>
                  </div>
                </div>
                <div className="absolute w-[196px] h-[96px] top-[171px] left-0">
                  <div className="relative w-[200px] h-[96px]">
                    <div className="flex w-[83px] h-[26px] items-center justify-center px-[8px] py-0 absolute top-[69px] left-0 rounded-[12px] border border-solid border-tealteal-300">
                      <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                        <div className="inline-flex h-[24px] items-center relative">
                          <div className="inline-flex items-start gap-[4px] relative flex-[0_0_auto]">
                            <div className="relative w-[47.5px] h-[15px] mt-[-0.50px] [font-family:'Outfit',Helvetica] font-bold text-tealteal-300 text-[10px] text-center tracking-[0] leading-[15.0px] whitespace-nowrap">
                              Consulter
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-start px-[12px] py-0 relative flex-[0_0_auto] overflow-hidden">
                          <div className="relative w-px h-px mr-[-0.99px] bg-[#c4c4c4]" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[196px] absolute top-[27px] left-0 [font-family:'Outfit',Helvetica] font-normal text-graygray-400 text-[12px] tracking-[0] leading-[18px]">
                      Description de l’actualité 1
                    </div>
                    <div className="absolute w-[118px] top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                      Actualié 1
                    </div>
                  </div>
                </div>
              </div>*/}
              <div className="absolute w-[385px] h-[19px] top-[21px] left-[54px]">
                <div className="w-[383px] absolute top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                  Gestion des données
                </div>
              </div>
              <div className="absolute w-[223px] h-[26px] top-[29px] left-[1030px]">
                <div className="flex w-[112px] h-[26px] items-center justify-center px-[8px] py-0 absolute top-0 left-0 bg-white rounded-[12px] shadow-[0px_2px_5.5px_#0000000f]">
                  <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                    <div className="inline-flex h-[24px] items-center relative">
                      <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                        <a href="#" class="relative inline-block w-30 h-4 mt-[-2px] font-bold text-gray-700 text-[10px] text-center leading-[15px] whitespace-nowrap no-underline">
                          Modifier les données
                        </a>
                      </div>
                    </div>
                    <div className="inline-flex items-start px-[12px] py-0 relative flex-[0_0_auto]">
                      <div className="relative w-px h-px mr-[-0.99px] bg-[#c4c4c4]" />
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div className="absolute w-[1324px] h-[285px] top-[301px] left-[73px]">
              <div className="h-[285px]">
                <div className="relative w-[1324px] h-[285px] rounded-[15px]">
                  
                  <div className="absolute w-[1324px] h-[285px] top-0 left-0 bg-blackampwhitewhite rounded-[15px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <div className="flex w-[1098px] items-center relative top-[58px] left-[127px]">
                      <div className="flex flex-col w-[269px] items-start relative">
                        <div className="bg-cool-gray050 rounded-[12px_0px_0px_0px] flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
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
                      <div className="flex-1 grow flex flex-col items-start relative">
                        <div className="bg-cool-gray050 rounded-[0px_12px_0px_0px] flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
                            TYPE
                          </div>
                        </div>
                        <div className="relative self-stretch w-full h-px bg-cool-gray200" />
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <Badge className="!flex-[0_0_auto]" color="green-badge" text="Calculateur" />
                        </div>
                        <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <Badge className="!flex-[0_0_auto]" color="red-badge" text="Autre" />
                        </div>
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <Badge className="!flex-[0_0_auto]" color="blue-badge" text="Jeux" />
                        </div>
                      </div>
                      <div className="w-[373px] flex flex-col items-start relative">
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-[90px] h-[18px] mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
                            MESSAGE
                          </div>
                        </div>
                        <div className="relative self-stretch w-full h-px bg-cool-gray200" />
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                            Description commentaire 1
                          </div>
                        </div>
                        <div className="flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                            Description commentaire 2
                          </div>
                        </div>
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                            Description commentaire 3
                          </div>
                        </div>
                      </div>
                      <div className="w-[188px] flex flex-col items-start relative">
                        <div className="bg-cool-gray050 flex items-center p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)]">
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
                  </div>
                  <div className="absolute w-[385px] h-[19px] top-[21px] left-[54px]">
                    <div className="w-[383px] absolute top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                      Gestion des Avis
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-[1324px] h-[264px] top-[19px] left-[73px]">
              <div className="absolute w-[1324px] h-[227px] top-0 left-0 bg-[url(background.png)] bg-[100%_100%]">
                <div className="absolute w-[122px] h-[12px] top-[30px] left-[1165px]">
                  <div className="flex w-[122px] h-[12px] items-center gap-[4px] relative overflow-hidden">
                    <IoniconPPersonDefault1 className="!relative !w-[12px] !h-[12px]" />
                    <a href="#" class="relative inline-block w-14 h-4 mt-[-2px]  font-bold text-[10px] text-center leading-[15px] whitespace-nowrap no-underline">
                      Se déconnecter
                    </a>
                  </div>
                </div>
                <div className="absolute w-[200px] h-[14px] top-[36px] left-[19px]">
                  <div className="absolute w-[198px] top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-blackampwhitewhite text-[20px] tracking-[0] leading-[28.0px] whitespace-nowrap">
                    Administration
                  </div>
                </div>
              </div>
              <div className="absolute w-[1286px] h-[85px] top-[178px] left-[19px]">
                <div className="relative h-[85px]">
                  <div className="absolute w-[1286px] h-[85px] top-0 left-0">
                    <div className="relative w-[1289px] h-[88px] top-[-2px] left-[-2px] rounded-[15px] border-[1.5px] border-solid border-white shadow-[0px_2px_5.5px_#00000005] backdrop-blur-[21px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(21px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.8)_100%)]" />
                  </div>
                  <div className="absolute w-[223px] h-[26px] top-[29px] left-[1030px]">
                    <div className="flex w-[112px] h-[26px] items-center justify-center px-[8px] py-0 absolute top-0 left-[112px] rounded-[12px]">
                      <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                        <div className="inline-flex h-[24px] items-center relative">
                          <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                            <Icon className="!relative !w-[11px] !h-[11px]" />
                            <a href="#" class="relative inline-block w-14 h-4 mt-[-2px] font-bold text-gray-700 text-[10px] text-center leading-[15px] whitespace-nowrap no-underline">
                              Statistique
                            </a>
                          </div>
                        </div>
                        <div className="inline-flex items-start px-[12px] py-0 relative flex-[0_0_auto] overflow-hidden">
                          <div className="relative w-px h-px mr-[-0.99px] bg-[#c4c4c4]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[112px] h-[26px] items-center justify-center px-[8px] py-0 absolute top-0 left-0 bg-white rounded-[12px] shadow-[0px_2px_5.5px_#0000000f]">
                      <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto] overflow-hidden">
                        <div className="inline-flex h-[24px] items-center relative">
                          <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                            <Icon1 className="!relative !w-[11px] !h-[11px]" />
                            <a href="#" class="relative inline-block w-14 h-4 mt-[-2px] font-bold text-gray-700 text-[10px] text-center leading-[15px] whitespace-nowrap no-underline">
                              Gestion
                            </a>
                          </div>
                        </div>
                        <div className="inline-flex items-start px-[12px] py-0 relative flex-[0_0_auto]">
                          <div className="relative w-px h-px mr-[-0.99px] bg-[#c4c4c4]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[280px] h-[64px] top-[12px] left-[14px]">
                    <div className="absolute w-[200px] h-[34px] top-[13px] left-[84px]">
                      <div className="absolute w-[196px] top-[20px] left-0 [font-family:'Outfit',Helvetica] font-normal text-graygray-500 text-[14px] tracking-[0] leading-[19.6px] whitespace-nowrap">
                        GaliCarbo@gmail.com
                      </div>
                      <div className="absolute w-[119px] top-0 left-0 [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-[18px] tracking-[0] leading-[25.2px] whitespace-nowrap">
                        Admin
                      </div>
                    </div>
                    <div className="absolute w-[71px] h-[64px] top-0 left-0">
                      <img className="absolute w-[66px] h-[61px] top-0 left-0" alt="Image" src="/assets/img/image.png" />
                      <div className="absolute w-[22px] h-[20px] top-[45px] left-[49px] bg-white rounded-[8px] shadow-[0px_2px_5.5px_#0000000f]">
                        <Edit1 className="!absolute !w-[10px] !h-[9px] !top-[5px] !left-[6px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="top-[698px] left-[158px] absolute w-[278px] h-[145px]">
            <div className="relative h-[145px]">
              <img
                className="absolute w-[278px] h-[144px] top-px left-0 object-cover"
                alt="Image"
                src="/img/image-6.png"
              />
              <div className="absolute w-[277px] h-[145px] top-0 left-px rounded-[12px] [background:linear-gradient(180deg,rgba(49,56,96,0.16)_0%,rgba(21,25,40,0.88)_100%)]" />
            </div>
          </div>
          <div className="top-[698px] left-[457px] absolute w-[278px] h-[145px]">
            <div className="relative h-[145px]">
              <img
                className="absolute w-[278px] h-[144px] top-px left-0 object-cover"
                alt="Image"
                src="/img/image-6-2.png"
              />
              <div className="absolute w-[277px] h-[145px] top-0 left-px rounded-[12px] [background:linear-gradient(180deg,rgba(49,56,96,0.16)_0%,rgba(21,25,40,0.88)_100%)]" />
            </div>
          </div>
          <div className="top-[700px] left-[749px] absolute w-[278px] h-[145px]">
            <div className="relative h-[145px]">
              <img
                className="absolute w-[278px] h-[144px] top-px left-0 object-cover"
                alt="Image"
                src="/img/image-6-2.png"
              />
              <div className="absolute w-[277px] h-[145px] top-0 left-px rounded-[12px] [background:linear-gradient(180deg,rgba(49,56,96,0.16)_0%,rgba(21,25,40,0.88)_100%)]" />
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};
