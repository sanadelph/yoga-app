import { SelectedPage } from "@/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactImg from "@/assets/contact-us.jpg"
import HeaderText from "./HeaderText";


interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({setSelectedPage}: Props) => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }
  
  const inputStyles = "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div 
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}
        >
          <HeaderText>
            <span className="text-primary-400">ثبت نام</span> در کلاس‌های یوگا
          </HeaderText>
          <p className="my-5">
            مهم نیست چقدر با یوگا آشنا هستید؛ چه مبتدی باشید و چه حرفه‌ای، کلاس‌های ما برای همه سطوح طراحی شده‌اند.
            اینجا، فقط یک ورزش نیست، بلکه یک سبک زندگی است که به شما کمک می‌کند
            تا هم از نظر جسمی و هم از نظر ذهنی قوی‌تر شوید.  فرصت را از دست ندهید و برای ثبت‌نام در کلاس‌های یوگای ما
            همین امروز اقدام کنید. به جمع دانشجویانی بپیوندید که مسیر موفقیت تحصیلی خود را با آرامش و قدرت ادامه می‌دهند.
          </p>
        </motion.div>

        {/* form */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div 
            className="mt-10 basis-3/5 md:mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden: {opacity:0, y:50},
              visible: {opacity:1, y:0}
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/el/sibuxi"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="نام"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type == "required" && "لطفا نام خود را وارد کنید"}
                  {errors.name.type == "maxLength" && "فیلد نام باید حداکثر 100 کاراکتر باشد"}
                </p>
              )}

              <input
                className={inputStyles}
                type="email"
                placeholder="ایمیل"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type == "required" && "لطفا ایمیل خود را وارد کنید"}
                  {errors.email.type == "pattern" && "لطفا یک آدرس ایمیل معتبر وارد کنید"}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="پیام"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type == "required" && "لطفا پیام خود را بنویسید"}
                  {errors.message.type == "maxLength" && "فیلد پیام باید حداکثر 2000 کاراکتر باشد"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 text-gray-200 rounded-lg bg-secondary-400 px-20 py-3 transition duration-500 hover:text-white hover:bg-secondary-500 hover:cursor-pointer"
              >
                ارسال
              </button>
            </form>
          </motion.div>
          
          {/* img */}
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{ delay:0.2, duration:0.5}}
            variants={{
              hidden: {opacity:0, y:50},
              visible: {opacity:1, y:0}
            }}
          >
            <div className="md:before:content-(--herotextbefore) w-full before:absolute before:-bottom-20 before:-left-10 before:z-[1] before:opacity-20">
              <img className="w-full" src={ContactImg} alt="contact-us-img" />
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}

export default ContactUs