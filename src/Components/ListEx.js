import React from 'react'
export default function ListEx(){
    const cars=[
        {Name:"Breeza",id:1},
        {Name:"Swift",id:2},
        {Name:"Maruthi 800",id:3},
        {Name:"Renault", id:4}
    ];
    return(
      <fragment>
      {cars.map((i)=><li key={i.id}>{i.Name}</li>)}
      </fragment>
    )
  }
