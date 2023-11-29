import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularServices() {
  const router = useRouter();
  const popularServicesData = [
    { name: "Arte con IA", label: "Aprende IA facil", image: "/service1.png" },
    {
        name: "Diseño Grafico",
        label: "Crea tus propios diseños",
        image: "/service2.jpeg" },
    {
      name: "Programacion",
      label: "Se el mejor de tu clase",
      image: "/service3.jpeg",
    },
    {
      name: "Musica y Audio",
      label: "Conviertete en DJ",
      image: "/service4.jpeg",
    },
    {
      name: "Redes Sociales",
      label: "Aumenta tus seguidores",
      image: "/service5.jpeg",
    },
    { name: "CEO", label: "Maneja tus negocios", image: "/service6.jpeg" },
    {
      name: "Ciencia de Datos",
      label: "Analiza por ti mismo",
      image: "/service7.jpeg",
    },
    { name: "Idiomas", label: "Ingles o pobre", image: "/service8.jpeg" },
  ];
  return (
    <div className="mx-20 my-16">
      <h2 className="text-4xl mb-5 text-[#404145] font-bold">
        Servicios Populares
      </h2>
      <ul className="flex flex-wrap gap-16">
        {popularServicesData.map(({ name, label, image }) => {
          return (
            <li
              key={name}
              className="relative cursor-pointer"
              onClick={() => router.push(`/search?q=${name.toLowerCase()}`)}
            >
              <div className="absolute z-10 text-white left-5 top-4">
                <span>{label}</span>
                <h6 className="font-extrabold text-2xl">{name}</h6>
              </div>
              <div className="h-80 w-72 ">
                <Image src={image} fill alt="service" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopularServices;