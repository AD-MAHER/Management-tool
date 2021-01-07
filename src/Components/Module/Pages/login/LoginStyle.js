import styled from 'styled-components';
export const LoginStyle = styled.div` 
.ant-layout{
    height:100vh;
    width:100vw;
    background:#222222;
    color:#979797;
}

.Icon_Class{
  font: 12px/30px;
  
   color: #FFFFFF;
}

   
.ant-form-item-control-input{
        
        width:375px;
          border:#979797;
            color:##FFFFFF; 
        
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
  .ant-form-item-label > label {
    color: #ffffff;
}
.anticon svg {
    display: inline-block;
    color: #FFFFFF;
}
    
 .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
      
        content: '';
    }
    
    .ant-form-item-required{
        background:#222222;
    color:#979797;
    }
    .MainClass{
        margin-top : 30%;
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

    .loginClass{
        margin-top : 30%;
        margin-left: 20%;
        margin-right:5%;
        font-size : 16px;
        color: #E8E8E8;
        height:40%;
          
    }

    .FormClass{
            width:20%
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
   
    .Logo2{
        height: 50px;
        width :200px;
        display:block;
    }
            .
    .Head1{
        font-weight: bold;
        font-size:16px;
        color:#57A1D8;
        font-style:Roboto;
        margin-top:-60px;
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
            
            margin-top:-10px;
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
            color:##FFFFFF; 
        
        }


    .right_div{
        width: 100%;
       position:fixed;
        margin:0;
        pading:0;
   
    }
    .Forgot{
        margin-right:-150px;
        

       
       
    }
    
    .loginClass{
        margin-top : 50%;
        margin-left: 30%;
        font-size : 16px;
        color: #E8E8E8;
        height:10%;
        width:50vw;
       
    }
    
   
    .Forgot{
        
        
        
    }
 }


 @media  only (max-width:  480px) {
    .loginClass{
        margin-top : 50%;
        margin-left: 20%;
        font-size : 16px;
        color: #E8E8E8;
        height:10%;
        width:50vw;
       
    }
    .left_div {
        display:none;
    }
    
 }
 @media (max-width  576px ){
    .loginClass{
        margin-top : 50%;
        margin-left: 10%;
        font-size : 16px;
        color: #E8E8E8;
        height:10%;
        width:50vw;
       
    }
    .left_div {
        display:none;
    }
 }
}


 
`;