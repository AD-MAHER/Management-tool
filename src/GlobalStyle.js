import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`


       
        .ant-menu-item-selected{
                border:1px solid #394D5C;
                svg path{
                fill: #57A1D8;
                 }
        }
        

        .ant-modal-wrap {
                  z-index: 1000;
                  margin-top:-05%;
                overflow:hidden;
           
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
                  font-family:roboto;
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
                      font-family:Roboto-Light
                      color: ;
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
       @media only screen and (max-width: 768px) {
        .ant-modal-wrap {
                  z-index: 1000;
                  margin-top:0;
                overflow:scroll;
           
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
                  font-family:roboto;
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
                      font-family:Roboto-Light
                      color: ;
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
