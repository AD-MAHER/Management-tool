import styled from 'styled-components';
export const LoginStyle = styled.div` 
 overflow:hidden;
.ant-layout{
    height:100vh ;
    width:100vw;
    background:#222222;
    color:#979797;
}


.ant-form-item-explain.ant-form-item-explain-error{
    width:360px;
    font-family:Roboto;
}
.F1{
    color:#1890ff;
    margin-left:150%;
}
.Icon_Class{
  font: 12px/30px;
  
   color: #FFFFFF;
}
   .logpass{
       .ant-input-affix-wrapper{
           width:94%;
           border-radius:1.5px;
           border:0.5px solid white;

       }
   }
.ant-form-item-control-input{
        
        width:375px;
          border:#979797;
            color:#FFFFFF; 
        
        }
       
  .ant-input{
    width:350px;
      font-size:14px;
    background:#222222;
    color:#FFFFFF;
    :hover{
        background:#222222;
    color:#FFFFFF;
    }
   
  }
  .forClass{.ant-form-item-label > label{
        display:none;
    }}
  .ant-form-item-label > label {
    color: #ffffff;
    
   
    
}
.anticon svg {
    display: inline-block;
    color: #FFFFFF;
}
    
 .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
      
       display: none;
    }
    
    .ant-form-item-required{
        background:#222222;
    color:#979797;
    }
    .MainClass{
        margin-top : 28%;
        margin-left: 10%;
        font-size : 16px;
        color: #E8E8E8;
        width:100%;
        overflow-y:hidden;
    }
    .Logo1{
        height: 150px;
        width :350px;
    }
    .Logo2{
        height: 200px;
        width :200px;
        display:none;
    }
    .button_css{
        font-size:16 bold #FFFFFF;
       
    }
    .right_div{
        width: 100%;
       height:100%;
        display: flex;
        flex-direction:column;
        justify-content:space-around-center;
   
    }
    .loginClass{ 
        margin-top : 28%;
        
        margin-left: 30%;
        
       
        font-size : 16px;
        color: #E8E8E8;
        height:100%;
        width:100%;
          
    }
    .FormClass{
            width:20%;
            font-size : 16px;
        color: #E8E8E8;
    }
  
    .Head1{
        font-weight: bold;
        font-size:16px;
        color:#57A1D8;
        font-style:Roboto;
    }
    .Head2{
        font-weight: bold;
        font-size:30px;
        color:#E5E5E5;
    }
    .Forgot{
        width:100%;
        margin-left:238px
    }
    
     @media (max-width: 767px) {
    .left_div {
        display:none;
    }
    .F1{
    color:#1890ff;
    margin-left:70%;
    font-family:Roboto;
}
.logpass{
       .ant-input-affix-wrapper{
           width:105%;
           
       }
   }
    .Logo2{
        height: 50px;
        width :200px;
        display:block;
    }
            
    .Head1{
        font-weight: bold;
        font-size:16px;
        color:#57A1D8;
        font-style:Roboto;
        margin-top:-0px;
    }
    .Head2{
        font-weight: bold;
        font-size:25px;
        color:#E5E5E5;
        margin-top:-20px;
        margin-bottom:10px;
        width:100vw;
    }
    .FormClass{
            width:100%;
            
      
    }
    .Forgot{
        width:100%;
        float:right
    }
    .ant-input{
    width:260px;
    
      
    }
   
    .ant-form-item-control-input{
        
        width:250px;
          border:#E8E8E8;
            color:#FFFFFF; 
        
        }
    
    .Forgot{
        margin-right:-150px;
        
       
       
    }
    
    .loginClass{
       
        font-size : 16px;
        color: #E8E8E8;
        height:10%;
        width:50vw;
        margin-top : 25%;
        margin-bottom : 25%;
        margin-left: 20%;
        margin-right: 20%;
       
    }
    
  
 }

 @media (max-width: 768px) {
    .left_div {
        display:none;
    }
   
    .Logo2{
        height: 50px;
        width :200px;
        display:block;
    }
            
    .Head1{
        font-weight: bold;
        font-size:16px;
        color:#57A1D8;
        font-style:Roboto;
        margin-top:-0px;
    }
    .Head2{
        font-weight: bold;
        font-size:25px;
        color:#E5E5E5;
        margin-top:-20px;
        margin-bottom:10px;
        width:100vw;
    }
    .FormClass{
            width:100%;
            
      
    }
    .Forgot{
        width:100%;
        float:right
    }
    .ant-input{
    width:260px;
    
      
    }
   
    .ant-form-item-control-input{
        
        width:250px;
          border:#E8E8E8;
            color:#FFFFFF; 
        
        }
    
    .Forgot{
        margin-right:-150px;
        
       
       
    }
    
    .loginClass{
       
        font-size : 16px;
        color: #E8E8E8;
        height:10%;
        width:50vw;
        margin-top : 50%;
        margin-bottom : 25%;
        margin-left: 25%;

       
    }
    
   
    .Forgot{
        
        margin-right:-72%;
        
        
    }
 }

 
 @media  (max-width:  320px) {
    .loginClass{
       
       font-size : 16px;
       color: #E8E8E8;
       height:10%;
       width:50vw;
       margin-top : 50%;
       margin-bottom : 25%;
       margin-left: 20%;
       margin-right: 20%;
      
   }
    
 } 
 @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) 
   {    
       .loginClass{
       
       font-size : 16px;
       color: #E8E8E8;
       height:10%;
       width:50vw;
       margin-top : 37%;
   
       margin-left: 15%;
      
      
   }
  
 }  
 
 
`;