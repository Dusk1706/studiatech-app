import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function Everything() {
  const everythingData = [
    {
      title: "Nos adaptamos a tu presupuesto",
      subtitle:
        "Encuentra una asesoria que se ajuste a tu presupuesto, facil y rapido",
    },
    {
      title: "Obten resultados rapidos",
      subtitle:
        "Tenemos asesores listos para ayudarte en cualquier momento, en cualquier lugar.",
    },
    {
      title: "Paga solo cuando estes satisfecho",
      subtitle:
        "Paga solo cuando estes satisfecho el servicio, asi de facil.",
    },
    {
      title: "Soporte 24/7",
      subtitle:
        "Contamos con soporte 24/7 para ayudarte por cualquier inconveniente.",
    },
  ];
  return (
    <div className="bg-[#f1fdf7] flex py-20 justify-between px-24">
      <div>
        <h2 className="text-4xl mb-5 text-[#404145] font-bold">
          La mejor parte? Todo.
        </h2>
        <ul className="flex flex-col gap-10">
          {everythingData.map(({ title, subtitle }) => {
            return (
              <li key={title}>
                <div className="flex gap-2 items-center text-xl">
                  <BsCheckCircle className="text-[#62646a]" />
                  <h4>{title}</h4>
                </div>
                <p className="text-[#62646a]">{subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative h-96 w-2/4">
        <Image src="/everything.webp" fill alt="everything" />
      </div>
    </div>
  );
}

export default Everything;