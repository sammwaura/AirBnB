import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>AirBnB-</span>
            <span className='text-slate-700'>BookingApp</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search.....' className='bg-transparent' />
                <FaSearch className='text-slate-600'/>
        </form>
       </div> 
    </header>
  )
}
