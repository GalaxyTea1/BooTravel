import { BsMoonStarsFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';

const Narbar = () => {
    return (
        <nav className='flex items-center'>
            <div className='flex items-center'>
                <div className='text-20 font-bold mr-2'>Jeju</div>
                <BsMoonStarsFill
                    size={'24px'}
                    color='#e9c46a'
                    className='cursor-pointer'
                ></BsMoonStarsFill>
            </div>
            <ul className='ml-auto text-16 font-semibold'>
                <HiOutlineMenu size={'24px'} className='cursor-pointer'></HiOutlineMenu>
            </ul>
        </nav>
    );
};

export default Narbar;
