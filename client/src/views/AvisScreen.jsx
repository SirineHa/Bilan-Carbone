import React, { useState, useEffect  } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import axios from 'axios';


export const AvisScreen = () => {

  // pour le menu toggle 
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };


  // pour recuperer les avis
  const [avis, setAvis] = useState([]);


    const fetchAvis = async () => {
      try {
        const response = await axios.get('http://localhost:5000/avis/GetAvis');
        setAvis(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      fetchAvis();
    }, []);




  /*const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/avis/DeleteAvis/${id}`);
      // Recharger les avis après la suppression
      fetchAvis();
    } catch (err) {
      console.error(err);
    }
  };*/


  const handleDelete = async (id) => {
    const avisToDelete = avis.find(a => a._id === id);
    const confirmation = window.confirm(`Voulez-vous vraiment supprimer l'avis suivant ?\nNom d'utilisateur: ${avisToDelete.name}\nMode: ${avisToDelete.type}\nMessage: ${avisToDelete.comment}\nDate: ${avisToDelete.date}`);
    
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:5000/avis/DeleteAvis/${id}`);
        fetchAvis();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>

    <div className="flex flex-col min-h-screen overflow-auto overflow-x-hidden">
      <NavbarAdmin/>
      <main className="flex-grow">
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
                <a href="/data-avis" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Gestion Avis</a>
              </li>
              <li>
                <a href="/data-stats" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Gestion Stat</a>
              </li>
              <li>
                <a href="/statistique" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Statistique</a>
              </li>
              <li>
              <a href="/dashboard-admin" className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold bg-red-500 text-white rounded mt-10">Dashboard Admin</a>
              </li>
            </ul>
          </aside>
        </nav>

        <main className="flex-grow flex flex-col sm:flex-col ml-auto mt-10">

        {/* ------------tabeau avis-------------------- */}

        <div className="flex items-start w-full ml-5">
          <div className="w-full [font-family:'Outfit',Helvetica] font-bold text-graygray-700 text-2xl tracking-[0] leading-[25.2px] whitespace-nowrap">
            GESTION DES AVIS
          </div>
        </div>

        <div className="flex justify-center flex-wrap border border-gray-300 shadow-md mb-5">
        
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="bg-cool-gray050 bg-gray-100 flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                NOM DE L’UTITLISATEUR
              </div>
            </div>
            
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            {avis.map((avis, index) => (
              <div className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
                <div className="relative flex-1 h-[22px] mt-[-1.00px] font-bold font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)]">
                  {avis.name}
                </div>
              </div>
            ))}        
          </div>
          

          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] bg-gray-100 relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
              TYPE
              </div>
            </div>
            
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />

            {avis.map((avis, index) => (
              <div key={index} className="flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050 rounded-[12px_0px_0px_12px]">
              <div className={`relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-cool-gray900 text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-semibold-font-style)] ${
                avis.type === 'Jeu' ? 'text-green-500' :
                avis.type === 'Calculateur' ? 'text-red-500' :
                avis.type === 'Autres' ? 'text-blue-500' :
                'text-black'
              }`}>
                {avis.type}
              </div>
            </div>
            ))}
            
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] bg-gray-100 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                MESSAGE
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
              {avis.map((avis, index) => (
                <div className="bg-cool-gray050 flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-[370px] h-[22px] mt-[-1.00px] mr-[-29.00px] [font-family:'Inter',Helvetica] font-light text-cool-gray900 text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                    <p>{avis.comment.substring(0, 30)}</p>
                  </div>
                </div>
              ))}
            
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
            <div className="flex items-start p-[16px] bg-gray-100 relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050">
              <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
                DATE
              </div>
            </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
            {avis.map((avis, index) => (
              <div className="bg-cool-gray050 flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                  {new Date(avis.date).toLocaleDateString()}
                </div>
              </div>
            ))}  
          </div>
          <div className="flex-grow flex-shrink flex-auto max-w-[300px]">
          <div className="flex items-start p-[16px] bg-gray-100 relative self-stretch w-full flex-[0_0_auto] bg-cool-gray050">
            <div className="relative w-fit mt-[-1.00px] font-text-xs-font-semibold font-[number:var(--text-xs-font-semibold-font-weight)] text-cool-gray500 text-[length:var(--text-xs-font-semibold-font-size)] tracking-[var(--text-xs-font-semibold-letter-spacing)] leading-[var(--text-xs-font-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-semibold-font-style)] border-b-2 border-gray-300">
              ACTION
            </div>
          </div>
            <div className="relative self-stretch w-full h-px bg-cool-gray200" />
              {avis.map((avis, index) => (
                <div className="bg-cool-gray050 flex items-start p-[16px] relative self-stretch w-full flex-[0_0_auto]">
                  <a href="#" className="relative flex-1 h-[22px] mt-[-1.00px] font-text-sm-font-normal text-xs uppercase font-bold text-cool-gray500 text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]"
                    onClick={() => handleDelete(avis._id)}>
                    <span className="bg-red-500 text-white rounded px-2 py-1">Supprimer</span>
                  </a>
                </div>
              ))}  
            </div>
          </div>
      </main>
    </div>
    </main>       
    <Footer/>
    </div>
  </>
  );
};