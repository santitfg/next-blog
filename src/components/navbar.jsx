import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// en caso de tener scrollbar, la barra se achica, deberia hacer algun cambio para que esto no pase, pero no es prioritario en este momento
//agregar un index z para que el menu hamburguesa en mobile se superponga al conenido y no lo desplace al hacerse visible
const Navbar = () => {
  // variable algo tosca para que el menu hamburguesa comience cerrado si la pantalla es sm sino estaria abierto y seria el menu comun
  //por ahi tendria que desacoplar el nabvar largo y el menu en sm
  var estadoInicial = true;
  // if(window.innerWidth<=640)estadoInicial=true;

  const [estadoMenuHamburguesa, setMenuHamburguesa] = useState(estadoInicial);

  const toggleHamburguesa = () => {
    setMenuHamburguesa(!estadoMenuHamburguesa);
  };

/*   sizes="(max-width: 768px) 100vw,
  (max-width: 1200px) 50vw,
  33vw" */
  return (
    <>
      {/* justify-around  items-center justify-between flex*/}
      <nav className=" sm:flex flex-wrap pt-3 mx-12 md:mx-3 md:pb-4 md:pt-8  md:px-8 lg:px-10 justify-between">
        <div className="block sm:flex ">
          <div className="flex justify-between  ">
            <Link href="/" className="p-4  font-bold w-14 h-14 relative">
              <div>
                <Image src="/imgs/icon.png" alt="icono" fill/>
              </div>
            </Link>
            <button
              onClick={toggleHamburguesa}
              className="sm:hidden inline-block p-4"
            >
              {estadoMenuHamburguesa ? "MENU" : "X"}
            </button>
          </div>
          {/* la logica en vez de que el boton sea sm:hiden seria sm:flex en caso de poder setear el menu en true segun el estado */}
          <ul
            className={
              "p-4 text-center text-2xl font-bold sm:ml-10 " +
              (estadoMenuHamburguesa ? " hidden" : "block sm:hidden")
            }
          >
            {/* MOBILE */}
            <li>
              <Link href="/haceres" className="link-block">
                Haceres
              </Link>
            </li>
            {/* <li>
              <Link href="/about" className="link-block">
                Sobre mi
              </Link>
            </li> */}
            {/* <li>
              <Link href="/cv" className="link-block">
                CV
              </Link>
            </li> */}
          </ul>
          {/* por comodidad hardcodeo este navbar duplicando codigo en otra ocasion agregare un windows en el client side o tomare otra estrategia */}
          <ul
            className={
              " text-center text-2xl font-bold  ml-8 md:ml-16 hidden  sm:flex  items-center"
            }
          >
            {/* escritorio */}
            <li>
              <Link href="/haceres" className="link-inline">
                Haceres
              </Link>
            </li>
            {/* <li>
              <Link href="/about" className="link-inline">
                Sobre mi
              </Link>
            </li> */}
            {/* <li>
              <Link href="/cv" className="link-inline">
                CV
              </Link>
            </li> */}
          </ul>
        </div>
        {/* por comodidad hardcodeo este navbar duplicando codigo en otra ocasion agregare un windows en el client side o tomare otra estrategia */}

        <ul
          className={
            "p-4 text-center text-2xl font-bold " +
            (estadoMenuHamburguesa
              ? " hidden"
              : "flex justify-center sm:hidden")
          }
        >
          <a
            href="https://www.instagram.com/elsonidodelascosas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block sm:mt-0 text-teal   mr-4 w-10 h-10 relative"
          >
            <Image
              src="/imgs/Instagram_Glyph_Gradient.png"
              alt="Instagram"
              fill
            />
          </a>
          <a
            href="https://gitlab.com/stfg.prof"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block sm:mt-0 text-teal   mr-4 w-10 h-10 relative"
          >
            <Image src="/imgs/gitlab-logo-500.png" alt="Gitlab" fill />
          </a>
          <a
            href="https://github.com/santitfg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block sm:mt-0 text-teal   mr-4 w-10 h-10 relative"
          >
            <Image src="/imgs/github-mark.svg" alt="Github" fill />
          </a>
        </ul>
        {/* hardcodeo duplicando seccion (usar una func ??*/}
        <ul className={" hidden sm:flex  items-center "}>
          <a
            href="https://www.instagram.com/elsonidodelascosas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 w-10 h-10 relative"
          >
            <Image
              src="/imgs/Instagram_Glyph_Gradient.png"
              alt="Instagram"
              fill
            />
          </a>
          <a
            href="https://gitlab.com/stfg.prof"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block  mr-4 w-10 h-10 relative"
          >
            <Image src="/imgs/gitlab-logo-500.png" alt="Gitlab" fill />
          </a>
          <a
            href="https://github.com/santitfg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 w-10 h-10 relative"
          >
            <Image src="/imgs/github-mark.svg" alt="Github" fill />
          </a>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
