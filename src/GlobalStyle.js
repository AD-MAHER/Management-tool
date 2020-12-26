import styled from 'styled-components';
export const GlobalStyle = styled.div` 


        .ant-tooltip-open{
         background-color:#1E1C1C;
            font-style : roboto;
            color:#B9B9B9;
            font-size:12px;
            letter-spacing : 0.65px;
        }
        .ant-menu-item-selected{
                border:1px solid #394D5C;
                svg path{
                fill: #57A1D8;
                 }
        }
         ${'' /* .ant-menu-item a:hover{
                svg path{
                    fill: #57A1D8;
                }
         } */}
                

                ${'' /* .ant-card-hoverable{
                    cursor: auto;
    -webkit-transition: border-color 5s, -webkit-box-shadow 5s;
    transition: border-color 5s, -webkit-box-shadow 5s;
    transition: box-shadow 5s, border-color 5s;
    transition: box-shadow 5s, border-color 5s, -webkit-box-shadow 5s;
    background-color:yellow;
    a:hover {
  background-color: yellow;
}
                } */}



`;
