import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, fade, text_reaveal, text_reaveal_fade } from "../utils/Animation";
import { Frame } from "../components"

const About = () => {
  const texts = [{ content: "Build universe one" }, { content: "pixel at a time" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.h1 className="font-cairo font-semibold" variants={text_reaveal}>{text.content}</motion.h1>
    </div>
  ));

  return (
    <>
      <Head>
        <title>Hi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p variants={text_reaveal_fade}>
            Supporter of "simplicity", I focus on user needs to build intuitive
            digital interfaces, offering a memorable user experience. I work at
            Bhent.inc as a professional Javascript front-end developer for several types of projects and
            my area of expertise is <a className="text-third">ReactJs</a>,{" "}
            <a className="text-third">GraphQl</a>,{" "}
            <a className="text-third">Advance Javascript</a>,{" "}
            <a className="text-third">Scss/Css</a>,{" "}
            <a className="text-third">Redux</a>,{" "}
            <a className="text-third">TypeScript</a>,{" "}
            <a className="text-third">Algorithms and data structure</a>,{" "}
            <a className="text-third">RestFull Api</a> and{" "}
            <a className="text-third">NodeJs</a> . Longly inspired by Indian
            philosophy and culture, all my life and work is design by it.
          </motion.p>
        </motion.div>
          <div  className=" opacity-20 md:opacity-100 md:static fixed md:block w-1/2">
            <Frame radius="rounded-md"/>
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
