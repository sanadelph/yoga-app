import { SelectedPage } from "@/types"
import type { CourseType } from "@/types"
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpg"
import image4 from "@/assets/image4.jpeg"
import { motion } from "framer-motion"
import HeaderText from "./HeaderText"
import Course from "./UI/Course"

const OurCourses:Array<CourseType> = [
  {
    name: "سطح مبتدی",
    description: "اگر تازه با دنیای یوگا آشنا شده‌اید، جای درستی آمده‌اید. کلاس‌های مبتدی ما با تمرکز بر اصول اولیه، به شما کمک می‌کنند تا با حرکات پایه، تکنیک‌های صحیح تنفس (پرانایاما) و اصول مدیتیشن آشنا شوید. ما یک محیط حمایتی و آرام فراهم کرده‌ایم تا بدون هیچ نگرانی، اولین گام‌های خود را بردارید و از فواید بی‌شمار یوگا بهره‌مند شوید.",
    image: image1,
  },
  {
    name: "سطح متوسط",
    description: "اگر مدتی است که یوگا کار می‌کنید و آماده‌اید تا سطح تمرینات خود را بالاتر ببرید، کلاس‌های متوسط ما برای شما مناسب است. در این کلاس‌ها، وضعیت‌های پیچیده‌تر، جریان‌های حرکتی (وینیاسا) و تکنیک‌های پیشرفته‌تر تنفسی را می‌آموزید. این کلاس‌ها به شما کمک می‌کنند تا قدرت، انعطاف‌پذیری و استقامت خود را به چالش بکشید و ارتباط عمیق‌تری با بدن خود برقرار کنید.",
    image: image2
  },
  {
    name: "سطح پیشرفته",
    description: "برای یوگی‌های باتجربه‌ای که به دنبال چالش‌های جدید و تسلط کامل بر وضعیت‌های دشوار هستند، کلاس‌های پیشرفته ما طراحی شده است. این کلاس‌ها شامل وضعیت‌های معکوس، حرکات تعادلی پیچیده و مدیتیشن‌های عمیق‌تر هستند. در این سطح، ما بر روی هماهنگی کامل ذهن و بدن، و رسیدن به آرامش مطلق تمرکز می‌کنیم.",
    image: image3
  },
  {
    name: "کلاس یوگا برای بانوان باردار",
    description: "وگای بارداری به شما کمک می‌کند تا با آگاهی و آرامش بیشتری این دوران شیرین را سپری کنید.  کلاس‌های یوگای بارداری ما با تمرکز بر نیازهای بانوان باردار طراحی شده است. در این کلاس‌ها، شما با تمرین‌های ایمن و ملایم یوگا آشنا می‌شوید که به بهبود وضعیت جسمی و آمادگی برای زایمان کمک می‌کند.",
    image: image4
  },
]


interface Props {
  setSelectedPage: (value:SelectedPage) => void;
}

const Courses = ({setSelectedPage}: Props) => {
  return (
    <section 
      id="courses"
      className="w-full bg-primary-200 py-40">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurCourses)}
        >
          <motion.div 
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}
          >
            <div>
              <HeaderText>کلاس‌های ما</HeaderText>
              <p className="py-5">
                با کلاس‌های یوگای ما، سفری شگفت‌انگیز را به سوی کشف خود واقعی‌تان آغاز کنید. یوگا فقط مجموعه‌ای از حرکات فیزیکی نیست،
                  بلکه یک فلسفه زندگی است که به شما کمک می‌کند تا ذهن، بدن و روح خود را در یک راستا قرار دهید. همین امروز به ما بپیوندید و به سلامتی جسم و ذهن خود اهمیت دهید.
              </p>
            </div>
          </motion.div>
          <div className="mt-10 h-[350px] w-full overflow-x-scroll overflow-y-hidden">
            <ul className="whitespace-nowrap">
              {OurCourses.map((c:CourseType, i) => (
                <Course key={`${c.name}-${i}`}
                  name={c.name}
                  description={c.description}
                  image={c.image}
                />
              ))
              }
            </ul>
          </div>
        </motion.div>
    </section>
  )
}

export default Courses