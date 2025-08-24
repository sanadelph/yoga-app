import { SelectedPage } from "@/types";
import ActionButton from "./UI/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Hero from "@/assets/hero-img.png"
import HeroText from "@/assets/hero-text.png"
import { motion } from "framer-motion";


interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

  return (
    <section 
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div 
          className="z-10 mt-48 md:basis-3/5">
          {/* headings */}
          <motion.div 
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-15 before:-right-13 before:z-[-1] md:before:content-(--herotextbefore) before:opacity-20">
                <img alt="Easy Yoga text" src={HeroText} className="w-80"/>
                {/* <h1>ایزی یوگا</h1> */}
              </div>
            </div>

            <p className="mt-8 text-sm">یوگا ورزشی برای پرورش جسم و روح است.
               ورزش یوگا مجموعه‌ای تمرین برای ذهن و بدن دارد که در آن یک سری تمرینات جسمی،
                تمرینات تنفسی و همچنین مدیتیشن گنجانده شده تا به انعطاف پذیری، قدرت بدنی و آرامش برسید.
            </p>
            <p>
              با کلاس‌های یوگای ما، سفری به دنیای درون خود را آغاز کنید. در این کلاس‌ها، تمرینات آسانا (حرکات فیزیکی)، پرانایاما (تنفس صحیح) و مدیتیشن (مراقبه) را زیر نظر مربیان مجرب و با تجربه خواهید آموخت. فرقی نمی‌کند که مبتدی باشید یا پیشرفته، کلاس‌های ما برای تمام سطوح طراحی شده‌اند.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div 
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay:0.2, duration:0.5}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              همین حالا عضو شوید!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 hover:text-secondary-500 underline"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>اطلاعات بیشتر...</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10
              md:ml-r0 md:mt-16 md:justify-center"
        >
          <img className="w-[600px] sm:w-[400px]" alt="home page hero image" src={Hero}/>
        </div>
      </motion.div>
    </section>
  )
}

export default Home