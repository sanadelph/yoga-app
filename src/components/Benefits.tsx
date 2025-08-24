import { SelectedPage, type BenefitType } from "@/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import {motion} from "framer-motion"
import HeaderText from "./HeaderText";
import Benefit from "./UI/Benefit";
import ActionButton from "./UI/ActionButton";
import BenefitImg from "@/assets/benefits-img.png"



const benefits:Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "امکانات و فضای مناسب",
    description: "نورپردازی ملایم، تهویه مطبوع و فضای کافی برای انجام حرکات از ویژگی‌های یک سالن استاندارد است. با ایزی‌یوگا در یک فضای آرام و تمیز تمرین کنید و در مسیر یادگیری خود از تجهیزات درجه یک، بهره ببرید."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "کلاس‌های خصوصی و گروهی",
    description: "برای انعطاف پذیری بیشتر در برنامه زمانی و تمرکز بیشتر بر نیازهای فردی، در کلاس‌های خصوصی ثبت نام کنید. برای بهره‌گیری از تعامل اجتماعی و تجربه یادگیری غنی، در کلاس‌های گروهی ایزی‌یوگا عضو شوید."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "مربیان متخصص و مجرب",
    description: " وجود مربیان حرفه‌ای و باتجربه، از ویژگی‌های مهم یک مرکز یوگای با کیفیت است. مربیان ایزی‌یوگا دارای مدرک بین‌المللی معتبر هستند و تجربه و دانش کافی دارند تا به صورت موثر در این مسیر همراه شما باشند."
  },
]

const container = {
  hidden:{},
  visible:{
    transition: { staggerChildren: 0.2 },
  }
}

interface Props {
  setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div 
          className="md:w-3/5 md:my-5"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{ duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}
        >
          <HeaderText>
            فراتر از یک کلاس...
          </HeaderText>
          <p className="my-5 text-sm">
             یوگا به طرز قابل‌توجهی می‌تواند انعطاف‌پذیری بدن را افزایش دهد.
             این بیشترین دلیلی است که افراد ورزش یوگا را انتخاب می‌کنند.
             یوگا همچنین می‌تواند سلامت روان را هم بهبود ببخشد.
             ما در ایزی یوگا، خدمات و کلاس های یوگا از سطح مبتدی تا پیشرفته
              را با مربیان متخصص و مجرب ارائه می‌دهیم که در کیفیت آموزش
             شما بسیار تاثیرگذار است.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-center gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          variants={container}
        >
          {benefits.map((benefit:BenefitType) => (
            <Benefit key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Description & Image */}
        <div className="mt-20 items-center justify-between gap-10 md:mt-20 md:flex">
          {/* image */}
          <img 
          className="mx-auto w-[400px]"
          src={BenefitImg} 
          alt="benefits-image" />

          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-right-10 before:content-(--benefitwavesbefore) before:opacity-25 before:w-[30px]">
                <motion.div 
                  className="relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true, amount:0.5}}
                  transition={{ duration:0.5}}
                  variants={{
                    hidden: {opacity:0, x:50},
                    visible: {opacity:1, x:0}
          }}
                >
                  <HeaderText>
                    صدها نفر در حال تمرین یوگا با بهترین متخصصان {" "}
                    <span className="text-primary-400">ایزی یوگا</span>
                  </HeaderText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount:0.5}}
              transition={{ delay:0.2, duration:0.5}}
              variants={{
                hidden: {opacity:0, x:50},
                visible: {opacity:1, x:0}
              }}
            > 
              <p className="my-5">کلاس‌های باز، فراگیر، الهام‌بخش و پرانرژی ایزی یوگا، چیزی بیش از مکانی برای یوگا و پیلاتس هستند. فرقی نمی‌کند که مبتدی باشید یا باتجربه، کلاس‌های ما برای تمام سطوح طراحی شده‌اند.</p>
              <p className="mb-5">با کلاس‌های یوگای ما، سفری به دنیای درونی خود را آغاز کنید. در این کلاس‌ها، ما به شما کمک می‌کنیم تا با تمرینات تنفسی، حرکات کششی و مدیتیشن، استرس‌های روزمره را از خود دور کرده
                 و انرژی مثبت را جایگزین آن کنید.
                 تمرینات تنفسی (پرانایاما) و مدیتیشن در یوگا باعث کاهش استرس و اضطراب شده و به آرامش ذهن کمک می‌کند. بسیاری از افراد برای یافتن آرامش درونی و تمرکز بیشتر به سراغ یوگا می‌آیند.</p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-top-10 before:-right-3  before:z-[-1] before:content-(--benefitwavesbefore)">
                <ActionButton setSelectedPage={setSelectedPage}>
                    همین حالا عضو شوید!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits