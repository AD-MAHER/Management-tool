import styled from 'styled-components';
export const BlogStyle = styled.div` 
padding:1% 1% ;


.title-user{
   font-style:roboto;
   font-weight:bold;
   font-size:14px;
   color:#E5E5E5;
   letter-spacing:0.75px;

}
.create-button{
   float:right;
}
.scrollClass{
   display:flex;
   justify-content:space-around;
   flex-wrap:wrap;
   overflow-x:hidden;
   height: 70vh;
  ::-webkit-scrollbar {
 width: 3px;
 
}
::-webkit-scrollbar-thumb {
 background: #429FE4; 
}
}

.ant-btn{
    float:right;
    background: #429FE4;
    font-style:roboto;
    font-weight:bold;
   font-size:13px;
   color:#000000;
   letter-spacing:0.82px;
   border-radius:5px
}


.border-class{
background:#E5E5E5;
 opacity:12%;
 margin-top:20px;
}



.ant-card-bordered{
  border:none;
  border-radius:5px;
}
.ant-card-cover{
   border-radius:5px;
   
}

.ant-card{
   width:370px;
   margin-top:20px;
   margin-bottom:20px;
   margin-right:20px;
   margin-left:50px;
   padding:2px;
     background: #2D3236;
     height:270px;
}

}
.ant-card-body{
 
   
}



.ant-card-meta{
margin-top:-25px;
margin-left:-10px;
}
      .ant-card-meta-title{
        
         overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
         font-style:Roboto;
         font-size: 16;
         color:#FFFFFF;
         letter-spacing:0.75px;
      }

         .ant-card-meta-description{
         font-style:Roboto;
         font-size: 10;
         color:#E5E5E5;
         letter-spacing:0.75px;
      }   
            .auther-class{
                margin-left:-10px;
              font-style:Roboto;
              font-size: 10;
              color:#E5E5E5;
               letter-spacing:0.75px;
              
               
               } 

               .icon-class{
                  float:right;
                  padding-left:20px;
                  display:none;
                  
               }  


              .ant-card:hover .icon-class {
                 display:block;
              }


               @media only screen and (max-width: 768px) {

 
                    

                  .scrollClass{
                              height: 72vh;
                              }
                  .ant-card{
                     padding:2px;
                              max-width:250px;
                              margin-top:0px;
                              
                              margin-right:5%;
                              height:200px;
                              background: #2D3236;
                           }
                                          }
   @media only screen and (max-width: 320px) {
      .eMYuvm {
 
         width: 50vw;
}

.scrollClass{
            height: 72vh;
            }
.ant-card{
   padding:2px;
            width:250px;
            margin-top:0px;
            
            margin-right:0px;
            margin-left:0px;
            background: #2D3236;
         }
                        

`;
