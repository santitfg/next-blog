import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  // variable algo tosca para que el menu hamburguesa comience cerrado si la pantalla es sm sino estaria abierto y seria el menu comun
  //por ahi tendria que desacoplar el nabvar largo y el menu en sm
  var estadoInicial = false;
  // if(window.innerWidth<=640)estadoInicial=true;

  const [estadoMenuHamburguesa, setMenuHamburguesa] = useState(estadoInicial);

  const toggleHamburguesa = () => {
    setMenuHamburguesa(!estadoMenuHamburguesa);
  };

  return (
    <>
      {/* justify-around  items-center justify-between flex*/}
      <nav className=" sm:flex flex-wrap  px-4  md:px-8 lg:px-10 justify-between">
        <div className="block sm:flex ">
          <div className="flex justify-between  ">
            <Link href="/" className="p-4  font-bold ">
              <span className=" text-2xl">ICO</span>
            </Link>
            <button
              onClick={toggleHamburguesa}
              className="sm:hidden inline-block p-4"
            >
              {estadoMenuHamburguesa ? "MENU" : "X"}
            </button>
          </div>

          <ul
            className={
              "p-4 text-center text-2xl font-bold sm:ml-10 " +
              (estadoMenuHamburguesa ? " hidden" : "block sm:flex")
            }
          >
            <li>
              <Link
                href="/tags/arte/"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4 "
              >
                arte
              </Link>
            </li>
            <li>
              <Link
                href="/tags/programacion"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
              >
                programacion
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/tags"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
              >
                tags
              </Link>
            </li>
          </ul>
        </div>
        <ul
          className={
            "p-4 text-center text-2xl font-bold " +
            (estadoMenuHamburguesa ? " hidden" : "flex justify-center")
          }
        >
          <a
            href="https://gitlab.com/stfg.prof"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4 relative w-10 h-10"
          >
            <Image src="/imgs/gitlab.png" alt="gitlab logo" fill />
          </a>
          <a
            href="https://github.com/santitfg"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4 relative w-10 h-10"
          >
            <Image src="/imgs/gitlab.png" alt="gitlab logo" fill />
          </a>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
