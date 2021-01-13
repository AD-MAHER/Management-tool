import React from 'react'
import './Button1.css';
import {Button} from "antd"


function Submit1({children , type, onClick , loadings}){
  

    return(

        <Button
       loading={loadings}
        onClick={onClick}
        type={type}>
         {children}
        </Button>
      
    )
}
export default Submit1;