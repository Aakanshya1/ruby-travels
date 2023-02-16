import { data } from "../constants/constants";
import React from "react";

export default function Home() {
  const img =
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <>
      <div className="w-screen h-screen relative flex">
        <div className="overlay absolute w-full h-full"></div>
        <img src={img} alt="" className="w-full  h-full  object-cover" />
        <div className=" absolute top-[30%] w-[fit] h-[fit]   text-white backdrop-blur-sm flex flex-col items-start justify-center md:w-[35%] md:left-[10%]">
          <div className="header text-6xl font-bold uppercase ">Travel Time</div>
          <div className="description text-xl py-4">
            Don't let the loud noise scare you , let the rhythms of the dance
            amuse you. You are given a very chance Feel the movement of our
            ancestors
          </div>
        </div>
        <div className="row-wrapper text-white backdrop-blur-sm w-[fit] h-[fit] flex gap-4 flex-col  absolute top-[60%] items-start justify-center md:flex md:flex-row md:w-[80%] md:left-[10%] md:top-[80%]">
          {data.map((card) => (
            <div className=" flex p-2 w-[fit] h-fit ">
              <div className="icon p-2  ">
              <span>{card.img}</span>
              </div>
              <div className="describe">
              <p>{card.description}</p>
              <p  className="text-lg uppercase p-4 flex items-center gap-2">{card.more}{card.icon}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

{
  /* {data.map((homedata, id)=>
                <div className=" bottom border-2 border-red-500 py-4 w-[95%] absolute top-[35vh] flex gap-[0.5rem] text-white md:w-3/4">
                <div className="icon text-lg font-bold  px-4 py-3 ">{homedata.icon}</div>
                <div className=''>
                <div className="bottom-descrption p-2">{homedata.description}</div>
                <div className="p-3 border-3 border-red-400 text-xl">{homedata.more}</div>
                </div>
              </div>
        )} */
}
