import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import StudiaTechLogo from "./StudiaTechLogo";
import { categories } from "../utils/categories";

function Footer() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "github.com/Dusk1706/studiatech-app" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "linkedin.com/in/dusk/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/studiatech",
    },
  ];
  const data = [
    {
      headerName: "Categorias",
      links: [
        ...categories.map(({ name }) => ({
          name,
          link: `/search?category=${name}`,
        })),
      ],
    },
    {
      headerName: "Sobre Nosotros",
      links: [
        { name: "Careers", link: "#" },
        { name: "Noticias", link: "#" },
        { name: "Partnership", link: "#" },
        { name: "Politicas de privacidad", link: "#" },
        { name: "Terminos de servicio", link: "#" },
        { name: "Reclamos", link: "#" },
        { name: "Inversores", link: "#" },
      ],
    },
    {
      headerName: "Soporte",
      links: [
        { name: "Ayuda y Soporte", link: "#" },
        { name: "Confianza y Seguridad", link: "#" },
        { name: "Vender en StudiaTech", link: "#" },
        { name: "Comprar on StudiaTech", link: "#" },
      ],
    },
    {
      headerName: "Comunidad",
      links: [
        { name: "Historias de exito", link: "#" },
        { name: "Foros", link: "#" },
        { name: "Eventos", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Influencers", link: "#" },
        { name: "Afiliados", link: "#" },
        { name: "Invitar un amigo", link: "#" },
        { name: "Conviertete en vendedor", link: "#" },
        { name: "Estandares de la comunidad", link: "#" },
      ],
    },
  ];
  return (
    <footer className="w-full  mx-auto px-32 py-16 h-max border-t border-gray-200 bg-gray-100">
      <ul className="flex justify-between">
        {data.map(({ headerName, links }) => {
          return (
            <li key={headerName} className="flex flex-col gap-2">
              <span className="font-bold">{headerName}</span>
              <ul className="flex flex-col gap-2">
                {links.map(({ name, link }) => (
                  <li key={name} className="text-[#404145]">
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="mt-12 flex items-center justify-between">
        <StudiaTechLogo fillColor={"#404145"} />
        <ul className="flex gap-5">
          {socialLinks.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-xl text-[#404145] hover:text-[#1DBF73] transition-all"
            >
              <Link href={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;