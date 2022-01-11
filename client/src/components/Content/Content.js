import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';

const Content = () => {
    return (
        <section className='md:flex md:flex-row'>
            <div className='ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%]'>
                <div className='mt-16 gap-8 flex items-start'>
                    <FaUser size={'22px'} className='mt-[12px]' />
                    <p className='text-26'>
                        1024
                        <p className='text-13 font-semibold mb-[24px]'>Customers</p>
                    </p>
                </div>
                <div className='mt-2 gap-8 flex items-start'>
                    <FaUser size={'22px'} className='mt-[12px]' />
                    <p className='text-26'>
                        1024
                        <p className='text-13 font-semibold mb-16'>Customers</p>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Content;
