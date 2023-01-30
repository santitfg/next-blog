import Layout from "components/layout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
"
const About = () => {
  return (
    <>
         <Head>
        <title>"Portfolio de Santiago fernandez"</title>
        <meta name="description" content={"artista visual, programador e ilustrador"} />
        <meta
          property="og:image"
          content={process.env.NEXT_PUBLIC_HOST +"/imgs/hydra-2022-9-5-0.10.3.jpg" }
        />
      </Head>
      <Layout>
        <div className="flex justify-center ">
          <div className="w-11/12 md:w-3/4 text-center text-5xl ">
            <div className="flex justify-center w-full">
                <Image className="m-a"
                  src={"/imgs/perfil.jpg"}
                  alt="foto perfil"
                  width={606}
                  height={797}                />
                              </div>

                <p className="text-base " >Retrato que me hizo mi ami (
                <a href="https://www.instagram.com/eoschandreu/" target="_blank" rel="noopener noreferrer">Chandreu</a>
                )</p>

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
            <Link href="/haceres" className="text-2xl-">Les invito a ver un poco de lo que suelo hacer</Link>
          </div>
        </div>
        <br />
      </Layout>
    </>
  );
};

export default About;
