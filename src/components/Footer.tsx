import Logo from '@/assets/logo.png'
import type { SelectedPage } from '@/types'
import Link from './Link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid';

interface Props {
  setSelectedPage: (value:SelectedPage) => void;
}

const Footer = ({setSelectedPage}:Props) => {
  return (
    <footer className='bg-primary-200 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16  basis-1/2  md:mt-0'>
          <img src={Logo} alt="logo" width={100}/>
          <p className='my-5'>
             کلاس‌های یوگای ایزی‌یوگا فضایی آرام و امن را برای شما فراهم می‌کنند تا از هیاهوی دنیای بیرون فاصله بگیرید و به خودتان متصل شوید.
          </p>
          <p>
            © تمامی حقوق برای ایزی‌یوگا محفوظ است.
          </p>
        </div>

        <div className='mt-16 basis-1/4 md:mt-0 text-center'>
          <h4 className='font-bold'>
            لینک‌ها
          </h4>
          <div className='flex flex-col gap-4 mt-6 text-center'>
            <Link 
              title="صفحه اصلی"
              page="Home"
              setSelectedPage={setSelectedPage}
            />
            <Link 
              title="چرا ایزی یوگا؟"
              page="Benefits"
              setSelectedPage={setSelectedPage}
            />
            <Link 
              title="کلاس‌ها"
              page="Courses"
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
        
        <div className='mt-16 basis-1/4 md:mt-0 text-center'>
          <h4 className='font-bold'>
            ارتباط با ما
          </h4>
          <div className='flex flex-col items-end'>
            <div className='flex gap-4 items-center mt-6'>
              <p> 23849384 (021)</p>
              <PhoneIcon className="h-5 w-5"/>
            </div>
            <div className='flex gap-4 items-center mt-6'>
              <p>contact@easyyoga.com</p>
              <EnvelopeIcon className="h-5 w-5"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer