import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import StudiaTechLogo from "../StudiaTechLogo";

function StudiaTechBusiness() {
  return (
    <div className="bg-[#0d084d] px-20 py-16 flex gap-10">
      <div className="text-white flex flex-col gap-6 justify-center items-start">
        <div className="flex gap-2">
          <StudiaTechLogo fillColor={"#ffffff"} />
          <span className="text-white text-3xl font-bold">Empresas</span>
        </div>
        <h2 className="text-3xl font-bold">Una solucion para empresas</h2>
        <h4 className="text-xl">
          Mejora a una experiencia seleccionada para acceder a talento verificado y herramientas exclusivas.
        </h4>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Busca talentos</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Manejo de cuentas</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Herramientas para colaboracion</span>
          </li>
          <li className="flex gap-2 items-center">
            <BsCheckCircle className="text-[#62646a] text-2xl" />
            <span>Soluciones de pago para empresas</span>
          </li>
        </ul>
        <button
          className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
          type="button"
        >
          Explora StudiaTech Empresas
        </button>
      </div>
      <div className="relative h-[512px] w-2/3">
        <Image src="/business.webp" alt="bsiness" fill />
      </div>
    </div>
  );
}

export default StudiaTechBusiness;