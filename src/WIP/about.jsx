import Layout from "components/layout";
import Link from "next/link";
import Carousel from "@/components/carousel";
import HeaderBlog from "@/components/headerblog";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center ">
          <div className="mt-4 w-11/12 md:w-3/4 text-center text-5xl ">
            <div className="flex justify-center w-full">
              <div className="w-full aspect-video relative">
                <Image
                  src={"/imgs/hydra-2022-9-5-0.10.3.png"}
                  alt="foto perfil"
                  fill
                />
              </div>
            </div>

            <div className="text-5xl- my-16 "> Santiago Fernandez</div>

            <div className=" w-full">
              <p className="m-auto md:w-2/3 text-lg  text-justify ">
                Soy artista visual, programador e ilustrador, maestrando de
                Artes Electrónicas en la UNTREF. Actualmente estoy en vías de
                desarrollo de una tesis de investigación relacionada a la
                creación de herramientas y lenguajes computacionales que
                involucren el uso del cuerpo. Me he desarrollado como visualista
                (VJ) en diversos eventos como parte de varios colectivos, entre
                ellos “AudioStellar”, en Tecnópolis durante el Festival Lupear y
                como integrante de “Núcleo” en La Tangente para el VII
                aniversario de “Structured Collective”.{" "}
              </p>
              <p className="m-auto md:w-2/3 text-lg  text-justify ">
                Como ilustrador he participado en el taller de Monica Weiss,
                pudiendo ser parte de la muestra FIEYO en la Feria Internacional
                del libro de Buenos Aires 2022.{" "}
              </p>
              <p className="m-auto md:w-2/3 text-lg  text-justify ">
                Busco combinar mis saberes de programación orientados al Live
                Coding con prácticas de expresión corporal, habilitando lugares
                de encuentro y creación colectiva.
              </p>
            </div>

            <br />
            <Link href="/haceres">obras</Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
