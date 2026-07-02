'use client';

import { useState } from "react";

const exampleBoard = [
  [1, 2, null, null, null, null],
  [1, 1, 1, 1, null, null], // player `1` has 4 in a row
  [2, null, null, null, null, null],
  [2, null, null, null, null, null],
  [2, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

type BoardData = typeof exampleBoard;

export default function Home() {
  return (
    <div className="">
      <main className="">

        <Dashboard data={exampleBoard}/>
      </main>
    </div>
  );
}

 
function Dashboard ({data}:{data: BoardData}){
  const [boardData, setBoardData] =  useState(data);
  const dropHandler  = (index: number) =>{
    setBoardData((state)=>{
      return state.with(0,state[index].with(state[0].length-1,1));
    });
  }

  return <div className="flex flex-col gap-3 m-2">
    <div className="flex">
      {
        boardData.map((_, key)=>{
        return <button key={key} className="border border-white size-20 bg-gray-500" onClick={()=>dropHandler(key)}>Drop</button>
        })
      }
    </div>
     <div className="flex">
    {
    boardData.map((column, key)=>{
      return <Column key={key} column={column}/>
    })
   } </div>
  </div>
}


function Column ({column}:{ column: BoardData[number]}){

 return <div className="flex flex-col-reverse bg-white">
 {column.map((row, key)=>{
  const player1Style = row === 1 ? 'bg-amber-500': row === 2 ? 'bg-red-500': '';
  return <div key={key} className={`flex rounded-b-full size-20 p2 ${player1Style} gap-2 border border-b-gray-500`}>{row ? 'Player '+row:''}</div>
 })} 
 </div>
}