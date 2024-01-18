import React from 'react'
import Navbar from '../components/Navbar'

export default function Mainlayout({children,deletedboxhandler,showdoneboxHandler,deletecount,upcomingcount}) {
  return (
    <>
    <Navbar deletedboxhandler={deletedboxhandler} showdoneboxHandler={showdoneboxHandler} deletecount={deletecount} upcomingcount={upcomingcount} />
    <div className="bg-black h-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-teal-400  ">
          <h1 className='p-2 text-center text-4xl '>To Do App</h1>
          {children}
        </div>
    </div>
    </>
  )
}



