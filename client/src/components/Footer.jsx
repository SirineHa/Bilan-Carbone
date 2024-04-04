import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-1 pb-3">  
      <div className="container mx-auto px-3">
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}Bilan-Carbon by{" "}
              <a
                href="https://github.com/SirineHa/Bilan-Carbone"
                className="text-gray-600 hover:text-gray-900"
              >
                ING2 INFO TEAM
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}