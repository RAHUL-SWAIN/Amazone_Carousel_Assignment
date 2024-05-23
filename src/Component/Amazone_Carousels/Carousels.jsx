import React, { useState } from 'react';
import { MdArrowForwardIos , MdArrowBackIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";


function Carousels() {
    const [photo , setPhoto ] = useState(0);

    const arr = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/SiddMiniTV/18MayH1/1500x600_V21._CB557136856_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Apr/Shoes/Unrec/No_bank/Cat3/299_PC_3000._CB560430359_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/5299-HI---HMD---Hero---May-8_PC_Rec.jpg_1500X600._CB557171038_.jpg",

        "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
    ]
  return (
   <> 
    <div style={{display:"flex" ,flexWrap:"wrap", justifyContent:"center",marginTop:"50px", position:"relative"}}>
        <button style={{padding:"10px 30px",backgroundColor:"transparent",color:"white",fontSize:"35px",border:"none",position:"absolute",top:"45%",left:"4.5%"}} onClick={()=>
        {if(photo === 0 ){
            setPhoto(arr.length - 1);
            }  else{setPhoto(photo - 1 )}
    }} >
            <MdArrowBackIos />
       
        </button>
        <img height={"500px"} width={"1500px"}  src={arr[photo]} alt="Photoaddress" />
       
       
        <button style={{padding:"10px 30px",backgroundColor:"transparent",color:"white", border:"none",fontSize:"35px",position:"absolute",top:"45%",right:"4.5%"}} onClick={()=>
            {if(photo === arr.length  - 1){
                setPhoto(0);
               } else{
                 setPhoto(photo + 1)
               }
            }} >
            <MdArrowForwardIos />  
        </button>
    </div>

     <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
        {
            [1,2,3,4,5,6].map((dot) =>{
                return(
                    <div style={{height:"10px",width:"10px",backgroundColor:"#000",borderRadius:"50%",margin:"20px 0px"}}></div>
                )
            })
        }
     </div>

     <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
        {
            [1,2,3,4,5,6].map((e) =>(<RxDotFilled />))
        }
     </div>
     

    <div>
        <button style={{width:"150px", backgroundColor:"deeppink", marginTop:"10px"}}  onClick={() => {setPhoto(photo + 1)}}>{photo}</button>
    </div>

    </> 
  )
}

export default Carousels;