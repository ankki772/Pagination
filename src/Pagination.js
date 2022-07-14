import React, { useState } from 'react'

export default function Pagination({ paginate ,currentpage,startPage,EndPage}) {
    const [selected, setSelected] = useState(currentpage);
    
    let pageNumbers = []
    for(let i = startPage ;i<=EndPage;i++){
        pageNumbers.push(i)
    }
  return (
    <>
    <ul style={{display:'flex',width:'auto',height:'30px', margin:'20px  auto',justifyContent:'center'}}>
        <a href='#'
          onClick={()=>{paginate (selected-1)}} 
           style={{border:'1px solid blue',width:'30px' ,textAlign:'center',textDecoration:'none'}}>&#60;</a>
        {
            pageNumbers.map((page)=>{
               return  <li style={{listStyleType:'none' , border:'1px solid blue', width:'30px',textAlign:'center', backgroundColor:selected == page? 'lightblue':null}}>
                    <a href="#" onClick={()=>{
                      paginate(page);setSelected(page)
                    }} style={{textDecoration:'none'}}>{page}</a>
                </li>
            }
            )
        }
        <a href='#' 
          onClick={()=>{paginate(selected+1);setSelected(selected+1)}}
        style={{border:'1px solid blue',width:'30px',textAlign:'center',textDecoration:'none'}}>&#62;</a>
    </ul>
    </>
  )
}
