import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    height:100vh;
    width:100vw;
   
}



.ant-message-notice-content{
    
    background-color:#222222;
  
   
    font-family:Roboto;
   font-weight:bold;
   font-size:15px;
   height:50px;
   .ant-message-error{
    
    color:#dc3545;
    backdrop-filter: blur(8px);
    .ant-message-notice-content{
        border:2px solid  #dc3545;}
   }
   .ant-message-success{
     
    color: #04C35C;
    .ant-message-notice-content{
        border:2px solid #04C35C;}
   }

}
 ::-webkit-scrollbar {
 width: 3px;
background-color:#222222;
}
::-webkit-scrollbar-thumb {
 background: #429FE4;
  
}

.ant-form-item-has-error .ant-input, .ant-form-item-has-error .ant-input-affix-wrapper, .ant-form-item-has-error .ant-input:hover, .ant-form-item-has-error .ant-input-affix-wrapper:hover {
    background-color: #222222;
    border-color: #ff4d4f;
}

.ant-modal-wrap {
    
    backdrop-filter: blur(1px);
}


.ant-spin-nested-loading {
    transition:none;
}


.ant-popover-inner-content {
    padding: 12px 16px;
    color:#FFFFFF;
    background-color:#222222;
    ${'' /* backdrop-filter: blur(10px); */}
    ${'' /* box-shadow:0px 3px 3px 2px #394D5C; */}
}
.ant-popover-message-title{
    color:#E8E8E8;
    opacity:80%;
    font-weight:bold;
   font-family:Roboto;
}
.anticon-exclamation-circle{
    display:none;
}
.ant-popover-buttons> .ant-btn{
   background-color: #292A2B;
   color:#9EA4A9;
   font-weight:bold;
   font-family:Roboto;
   border:0.1px solid #222222;
   border-radius:1px;
   margin-right:10px;

}
.ant-popover-buttons> .ant-btn:hover{
    background-color:#172B3A;
}
.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-bottomLeft > .ant-popover-content > 
.ant-popover-arrow,
 .ant-popover-placement-bottomRight >
  .ant-popover-content > .ant-popover-arrow
  {
    border-color: #222222; 
}
.ant-modal-body{
    color:#FFFFFF;
}
.ant-card:hover{
background:#526676;

}
.ant-modal-close-x{
    
}
.ant-input-number{
    width:88%;
    border-radius:4.5px;
}
.ant-input-number-input-wrap{
    background:#222222;
    color:#FFFFFF;
    border-radius:5px;
}
.ant-input-number-handler-wrap{
display:none;
}
.ant-input-number-handler-down{
    display:none;
}
.ant-input-number-handler-up{
    display:none;
}
.ant-input-affix-wrapper{
    background:#222222;
    border: 1px solid rgb(232,232,232,17%);
    border-radius:5px;
:hover{
    background:#222222;
}}
.ant-modal-body .ant-form .ant-input {
    background: #222222;
    color: #E8E8E8;
    border:0px;
    border-radius: 5px;
}


.ant-select.selector{
    display:none;
    .ant-select-selection-item {
    background-color:none;
    border-radius: 0px;
    border: none;
    color: #8FA8BA;
}
}

/* User Form */
.ant-modal-body{ .UserForm{
    
        .ant-form{ 
            .ant-select-selector {
                height:35px;
                display: flow-root;
               .ant-select-selection-item{
        background-color: transparent;
        text-align:center;
           
    border-radius: 0px;
    border: none;
    
    }  
            }
            .ant-form-item-has-error .ant-input, .ant-form-item-has-error .ant-input-affix-wrapper, .ant-form-item-has-error .ant-input:hover, .ant-form-item-has-error .ant-input-affix-wrapper:hover {
    background-color: #222222;
    border-color: #ff4d4f;
}
}
}}
>span.ant-select-selection-item {
    background-color:#222222;
}
    .ant-select-selection-item {
  background:transparent;

  text-align:left;
    }


.ant-select-item{
    font-family: Roboto;
 font-size: 11px;
 color:#FFFFFF;
 
  letter-spacing:0.75px;
}

.CreateGroupElement{
    color:#9EA4A9;
    font-family: Roboto;
    font-size: 12; 
    letter-spacing:0.65px;
}

.ant-select-dropdown{
    background:#222222;
    border:  E8E8E8;


}

.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
    background-color: #222222; 
    border-color: #ff4d4f !important;
    overflow:auto;
}


}
.Position4{
    margin-left:17%;
    ${'' /* margin-top: 1%; */}
    margin-bottom:-20%;
}
.UserForm{
    .ant-row{
       
       justify-content:space-between;

   }
   .ant-input{
      width:175px;
      height:30px;

   }
   .ant-input-textarea{.ant-input{
     width:100%}
   }
}
.ant-select-item-option-active{
    background:#172B3A;
    
} 

.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    background-color: #172B3A;
    color:#FFFFFF;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: #555657;
    
}

.ant-select-item-option-selected{
    background-color: #172B3A;
    
}
       
        .ant-menu-item-selected{
                border:1px solid #394D5C;
                svg path{
                fill: #57A1D8;
                 }
        }
        

        .ant-modal-wrap {
                  z-index: 1000;
                  margin-top:-05%;
                overflow:auto;
           
                }

        

        .ant-modal-header{
           text-align:center;
           background:#303234;
           border:none;
       }
       .ant-modal-title{
           color:#8FA8BA;
           letter-spacing:0.75px;
           font-family:"Roboto";
           font-size:14px;
       }
       .ant-modal-close-icon{
           color:#9EA4A9;
       }
       .ant-modal-footer{
           background:#303234;
           border:none;
          .ant-btn{
                background:#429FE4;
                text-align:center;   
                font-size:13px;
                font-weight: bold;
                font-family: "roboto";
                letter-spacing:0.82px;
                border: none;
                border-radius:5px;
                color:#000000;
            }
       }
       .ant-modal-body{
           background:#292A2B;
       border:none;
       .anticon svg {
    display: inline-block;
    color: #FFFFFF;
}
.ant-input-affix-wrapper > input.ant-input {
    padding: 0;
    border: none;
    outline: none;
   
}  
            .ant-form{
             
                .ant-radio-inner{
                    background:transparent;
                    border:1px solid #979797;
                }
                .ant-radio-checked > .ant-radio-inner
                {
                    background:transparent;
                    border:1px solid #57A1D8;
                }
                .ant-radio-checked >.ant-radio-inner::after{
                    background:#57A1D8;
                }
                span.ant-radio + *{
                    color:#9EA4A9;
                    font-size:12px;
                    letter-spacing:0.65px;
                }
                 .ant-radio-wrapper-checked > span{
                            color:#FFFFFF;
                }
                .ant-input{
                     background:#222222;
                  border:1px solid rgb(232, 232, 232,17%);
                  color: #E8E8E8;
                  border-radius:5px;
                  
              }
              .ant-btn{
                  background:#4C4D4F;
                  border-radius:6px;
                  border:none;
                  width:75px;
                  span{
                      color:#E5E5E5;
                      letter-spacing:0.75px;
                      font-size:12px;
                      font-family:Roboto-Light;
                  }
                  
              }
              .ant-upload-list ant-upload-list-text{
                  width:300px;
              }
              .ant-form-item-label >label{
                  color: #E5E5E5;
                  letter-spacing:0.75px;
                  font-size:12px;
                  font-family:Roboto;


              }
              .ant-form-item .ant-input-textarea-show-count::after {
   color:#9EA4A9
}
              .ant-upload-text-icon{
                      display:none;
                  }
                  .ant-upload-list-item .ant-upload-list-item-info{
                      background:#222222;
                      border-radius:8px;
                      width:170px;
                  }  
                 .ant-upload-list-item-card-actions-btn{
                        opacity:100%;
                        width:20px;
                        background:#222222;
                  }
                
                  .ant-upload-list-item-name{
                    color:#8FA8BA;
                    letter-spacing:0.75px;
                    font-family:roboto;
                    font-size:11px;
                  }
              .ant-input:placeholder-shown{
                letter-spacing:0.35px;
                      font-family:Roboto;
                      color:#FFFFFF ;
                      
                      font-size:12px;
                  }
              .ant-form-item-required{
                  color:#E5E5E5;
                  letter-spacing: 0.75px;
                  font-size:12px;
                  font-family:roboto;
              }
              .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
                content:"";
                }
                .ant-select-selector{
                            background-color:#222222;
                        border:1px solid rgb(232, 232, 232,17%);
                        color: #E8E8E8;
                        border-radius:5px;
                        height:50px;
                        overflow:auto;
                        .ant-select-selection-item{
                            background-color:#292A2B;
                            border-radius:8px;
                            border:none;
                            color:#8FA8BA;
                            .anticon-close{
                                color:#8FA8BA;
                            }
                        }
                        .ant-select-selection-item> .ant-select-item > .ant-select-item-option{
                            background-color:#292A2B;
                        } 
                }
            }
       }

}
.ant-modal-content{
    box-shadow: 0px 0px;
}
.ant-modal-mask {
    position: fixed;
    
    height: 100%;
    background-color: transparent;
}
.ant-modal-body{
           background:#292A2B;
           ${'' /* overflow:auto; */}
               
                .postheader{
                        span{
                           color:#FFFFFF;
                           font-size:16px;
                           letter-spacing:0.75px;
                           font-family: Roboto;
                        }
                        }
                 .postPhoto{
                     margin-top: 10px;
                     .img1{
                         display : block;
                     }
                    .img2{
                        display:none;
                    }
                 }
                 .PostHeading{
                         color:#88CDFF;
                         letter-spacing:0.75px;
                         font-size: 12px;
                         font-family: Roboto;
                     }
                 .PostRdata{
                     
                     p{
                        color:#E5E5E5;
                        letter-spacing:0.75px;
                        font-size:11px;
                        font-family:Roboto;
                     }
                 }       
                 .PostDesc{
                        margin-top: 20px;
                        p{
                            color:#E5E5E5;
                        letter-spacing:0.75px;
                        font-size:12px;
                        font-family:Roboto;
                        text-align: left;
                        }
                 }
                 .ant-tag{
                    background-color:#222222;
                        border-radius:8px;
                    color:#8FA8BA;
                    font-size:11px;
                    font-family:Roboto;
                    letter-spacing:0.75px;
                    border:none;
                 }
}
       @media only screen and (max-width: 768px) {

        .Position1{
    margin-left:0px;
}
.Position2{
    margin-left:0px;
}
.Position3{
    margin-left:0%;
    
}
.Position4{
    margin-left:0%;
    margin-top: 2%;
    margin-bottom:-10%;
}
.UserFormMargin{
    margin-top:-5%;
}
        .ant-modal-body{
           background:#292A2B;
           ${'' /* overflow:scroll; */}
               
                
                 .postPhoto{
                     .img1{
                         display:none;
                     }
                    .img2{
                        display : block
                    }
                    
                 }
                
                   
                 
                 
        .ant-modal-wrap {
                  z-index: 1000;
                  margin-top:0;
               
           
                }
                .ant-modal-header{
           text-align:center;
           background:#303234;
           border:none;
       }
       .ant-modal-title{
           color:#8FA8BA;
           letter-spacing:0.75px;
           font-family:"Roboto";
           font-size:14px;
       }
       .ant-modal-close-icon{
           color:#9EA4A9;
       }
       .ant-modal-footer{
           background:#303234;
           border:none;
          .ant-btn{
                background:#429FE4;
                text-align:center;   
                font-size:13px;
                font-weight: bold;
                font-family: "roboto";
                letter-spacing:0.82px;
                border: none;
                border-radius:5px;
                color:#000000;
            }
       }
       .ant-modal-body{
           background:#292A2B;
     
       
       
            .ant-form{
             
                .ant-radio-inner{
                    background:transparent;
                    border:1px solid #979797;
                }
                .ant-radio-checked > .ant-radio-inner
                {
                    background:transparent;
                    border:1px solid #57A1D8;
                }
                .ant-radio-checked >.ant-radio-inner::after{
                    background:#57A1D8;
                }
                span.ant-radio + *{
                    color:#9EA4A9;
                    font-size:12px;
                    letter-spacing:0.65px;
                }
                 .ant-radio-wrapper-checked > span{
                            color:#FFFFFF;
                }
                .ant-input{
                     background:#222222;
                  border:1px solid rgb(232, 232, 232,17%);
                  color: #E8E8E8;
                  border-radius:5px;
                  
              }
              .ant-btn{
                  background:#4C4D4F;
                  border-radius:6px;
                  border:none;
                  width:70px;
                  span{
                      color:#E5E5E5;
                      letter-spacing:0.75px;
                      font-size:12px;
                      font-family:Roboto-Light;
                  }
                  
              }
              .ant-upload-list ant-upload-list-text{
                  width:300px;
              }
              .ant-form-item-label >label{
                  color: #E5E5E5;
                  letter-spacing:0.75px;
                  font-size:12px;
                  font-family:Roboto;
                  margin-bottom:-50vh;
                  margin-top:-50vh;
              }
              .ant-upload-text-icon{
                      display:none;
                  }
                  .ant-upload-list-item .ant-upload-list-item-info{
                      background:#222222;
                      border-radius:8px;
                      width:180px;
                      margin:-1%;
                      margin-bottom:-5%;
                  }  
                 .ant-upload-list-item-card-actions-btn{
                        opacity:100%;
                        width:20px;
                        background:#222222;
                  }
                
                  .ant-upload-list-item-name{
                    color:#8FA8BA;
                    letter-spacing:0.75px;
                    font-family:roboto;
                    font-size:11px;
                  }
              .ant-input:placeholder-shown{
                letter-spacing:0.35px;
                      font-family:Roboto-Light;
                      color: #FFFFFF;
                      font-size:12px;
                      
                  }
              .ant-form-item-required{
                  color:#E5E5E5;
                  letter-spacing: 0.75px;
                  font-size:12px;
                  font-family:roboto;
              }
              .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
                content:"";
               
                }
                .ant-select-selector{
                            background-color:#222222;
                        border:1px solid rgb(232, 232, 232,17%);
                        color: #E8E8E8;
                        border-radius:5px;
                  
                        height:50px;
                        .ant-select-selection-item{
                            background-color:#292A2B;
                            border-radius:8px;
                            border:none;
                            color:#8FA8BA;
                            
                            .anticon-close{
                                color:#8FA8BA;
                            }
                        }

                        
                        .ant-select-selection-item> .ant-select-item > .ant-select-item-option{
                            background-color:#292A2B;
                          
                        } 
                }
            }
       }


       }
`;
