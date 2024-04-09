import React, { useState } from "react";
import Navbar from "./Navbar";
import stat1 from "../img/stat_1.svg";
import stat2 from "../img/stat_2.svg";
import CustomChart from "./Statistique/Doughnuts";
import CustomLineChart from "./Statistique/Mensuel";
import CustomLineYearChart from "./Statistique/Annuel";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import NavbarAdmin from "./NavbarAdmin";
import { useAuth } from "../context/AuthContext";
Chart.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Biens', 'Transport', 'Alimentation', 'Logement', 'Autres'],
  datasets: [{
    label: 'Consommation personnelle',
    data: [22, 50, 10, 20, 8],
    backgroundColor: [
      'rgb(10, 200, 76)',
      'rgb(10, 134, 200)',
      'rgb(229, 88, 88)',
      'rgb(205,198,198)',
      'rgb(249,163,6)'
    ],
    hoverOffset: 5
  }]
};

function StatisticCard({ title, value, percentage, imageSrc }) {
  return (
    <div className="flex flex-col grow px-11 pt-8 pb-16 w-full font-medium bg-white rounded-xl">
      <img loading="lazy" src={imageSrc} alt="" className="aspect-square w-[26px]" />
      <div className="mt-3 text-3xl font-semibold text-black">{value}</div>
      <div className="mt-1.5 text-base text-zinc-500">{title}</div>
      <div className="mt-1.5 text-xs text-red-400">{percentage}</div>
    </div>
  );
}

function FormSelect({ name, options , onChange}) {
  return (
    <select
      name={name} 
      className="box-border flex relative flex-col shrink-0 self-start mt-5"
      onChange={onChange} >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
function Statistiques() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("default");
  const [selectedType, setSelectedType] = useState("default_stat");
  const { isAuthenticated } = useAuth();

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const renderChart = () => {
    switch (selectedType) {
      case "option 1" :
        return <CustomLineYearChart specialite={selectedSpecialty} />;
      case "option 2":
        return <CustomLineChart specialite={selectedSpecialty} />;
      default:
        return <CustomLineChart specialite={selectedSpecialty}/>;
    }
  };
  
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      {isAuthenticated ? <NavbarAdmin /> : <Navbar />}
    <main className="flex flex-col pt-3 bg-slate-100 rounded-[30px]">
      <header className="self-center mt-12 mb-3 w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[65%]">
            <section className="flex flex-col w-full flex-row h-full"> 
              <div className="flex gap-5 justify-between px-px w-full">
                <div className="flex flex-col flex-1 px-5 my-auto">
                  <h1 className="text-3xl font-medium text-center text-black whitespace-nowrap">
                    Statistique Générale
                  </h1>
                  <p className="mt-3 text-base leading-loose text-zinc-500">1 - 30 Janvier 2024</p>
                </div>
                <div className="flex overflow-hidden relative z-10 flex-col gap-5 justify-between self-center px-10 py-4 mt-16 w-full font-semibold text-white aspect-[4.71] max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={stat1}
                    alt="Stat1"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <p className="relative flex-1 text-lg leading-6"style={{ marginBottom: 0 }}>Nombre de participants:</p>
                  <p className="relative flex-1 my-auto text-3xl text-center leading-[56px]"style={{ marginBottom: 10 }}>120</p>
                </div>
              </div>
              <div className="mt-11">
                <div className="flex gap-5">
                  <StatisticCard
                    title="Totale Des Emissions"
                    value="1001 tCo2e"
                    percentage="+10%"
                    imageSrc={stat2}
                  />
                  <StatisticCard
                    title="Emissions par personne"
                    value="1.1 tCo2e"
                    percentage="+10%"
                    imageSrc={stat2}
                  />
                </div>
              </div>
              <div className="flex overflow-hidden relative flex-col items-end px-16 pb-20 mt-6 w-full text-xs font-semibold leading-5 whitespace-nowrap max-w-[789px] min-h-[399px] text-slate-500">
                <div className="relative">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-full">
                      <div className="flex relative gap-5 justify-between mr-20 mb-48">
                        <h2 className="mt-3 text-3xl font-semibold text-black">tCo2e</h2>
                        <div className="flex gap-1 p-2 rounded-lg border border-solid border-slate-100">
                          <FormSelect
                            name="Spécialités"
                            options={[
                              { value: "default_stat", name: "ING" },
                              { value: "ING INFO", name: "ING INFO" },
                              { value: "ING ENER", name: "ING ENER" },
                              { value: "ING INSTRU", name: "ING INSTRU" },
                              { value: "ING MACS", name: "ING MACS" },
                              { value: "ING TELECOM", name: "ING TELECOM" },
                            ]}
                            onChange={handleSpecialtyChange}
                          />

                        <div className="flex gap-1 p-2 mr-0 rounded-lg border border-solid border-slate-100">
                          <FormSelect
                            name="Type Data"
                            options={[
                              { value: "default", name: "Default View" },
                              { value: "option 2", name: "Mensuelle" },
                              { value: "option 1", name: "Annuelle" },
                            ]}
                            onChange={handleTypeChange} /> 
                          </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12">
                      <div className="flex gap-1 p-2 -mr-px rounded-lg border border-solid border-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
                {renderChart()}
            </section>
          </div>
          <aside className="flex flex-col ml-5 w-[35%]">
            <div className="flex flex-col grow items-center px-7 py-11 mx-auto mt-1.5 w-full whitespace-nowrap bg-white rounded-3xl shadow-sm">
              <h2 className="self-stretch text-3xl leading-4 text-black">Synthése</h2>
              <hr className="shrink-0 self-stretch mt-5 h-px border border-solid bg-slate-200 border-slate-200" />
              <div className="flex gap-0 mt-12 max-w-full w-[283px]">
              <CustomChart data={data} />
              </div>
            </div>
          </aside>
        </div>
      </header>
     
      </main>
    </div>
  );
};
export default Statistiques;