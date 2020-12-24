import styled from 'styled-components';
export const SiderStyle = styled.div` 
 height:100%;
 background-color: #1B1616 ;
           
.ant-layout{
    background-color: #1B1616 ;
}
 
        .ant-menu{
            background-color: #1B1616 ;
            border:none;
            text-align: center;
            margin-bottom:3px;
            width:75px;
            margin-top:3px;
            margin-left:4px;
            
        } 
         .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child){
            padding-top:11px;
            height:60px;
            background:#2B2B2B;
            margin-top:0px;
            margin-bottom: 1px;
            text-align:center;
            
        }  
        .ant-menu-vertical > .ant-menu-item, .ant-menu-vertical-left > .ant-menu-item, .ant-menu-vertical-right > .ant-menu-item, .ant-menu-inline > .ant-menu-item, .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title{
            padding-top:11px;
            height:60px;
            background:#2B2B2B;
            margin-top:0px;
            margin-bottom: 1px;
            text-align:center;
            padding-right:23px;
             

        }
        .ant-menu-item-selected{
                border:1px solid #394D5C;
                svg path{
                fill: #57A1D8;
                 }
        }
         .ant-menu-item a:hover{
                svg path{
                    fill: #57A1D8;
                }

                
        }
        .ant-tooltip-open{
         background-color:#1E1C1C;
            font-style : roboto;
            color:#B9B9B9;
            letter-spacing : 0.65px;
        }
        



`;

