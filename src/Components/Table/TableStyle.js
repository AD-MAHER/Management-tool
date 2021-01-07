import styled from 'styled-components';
export const TableTheme = styled.div` 
  
    
.ant-table-cell{
    background-color: #222222;
color : #FFFFFF;

}
.ant-spin-container {
  
}
.ant-table-tbody > tr > td {
    border-bottom: none;
    -webkit-transition: none; 
 transition: none; 
}
.ant-table-thead > tr > th:hover {
    background-color:#172B3A;
}
.ant-table-column-sorters-with-tooltip {
    background-color:#222222;
}
.ant-table-column-sorters-with-tooltip:hover {
    background-color:#172B3A;
}

.Last-Log{
    overflow:hidden;
    text-overflow:ellipsis;
}
.ant-table-row {
   
max-height:10px;

}

.ant-pagination{
    background-color: #222222;
color : #FFFFFF;
}
.ant-pagination-item-link{
    background-color: #222222;
color : #FFFFFF;
} 
.ant-pagination-item{
    background-color: #222222;
        
}
.ant-pagination-item a {
    color: #FFFFFF;
    
}
.ant-pagination-item a:hover{
        color:#FFFFFF;
        font-weight:bold;
        font-family:Roboto;
        font-size:20px;
    }
.ant-pagination-item-active{
    background: #172B3A;
    border:1.5px solid #555657;
    border-radius:1px;
    a{
        font-weight:bold;
    }
}
.ant-pagination-item-link:hover{
    background: #555657;
    border:none;
    
}
.ant-pagination-item:hover{
    background: #555657;
    border:none;
}
.ant-table-selection-column{
    background-color: #222222;
color : #FFFFFF;


}


.ant-table-tbody > tr.ant-table-row-selected > td {
    background: #555657;
    border: none;
}
.editable-cell-value-wrap {
    background-color: #555657;
    color: #FFFFFF;
}


.ant-table-selection-row{
    background-color: #222222;
color : #FFFFFF;

}

.ant-checkbox-wrapper{
    background-color: #222222;
color : #FFFFFF;
}


.ant-table-tbody > tr.ant-checkbox-wrapper-checked> td {
    background-color: #222222;
color : #FFFFFF;

}


.editable-cell-value-wrap{

    background-color: #222222;
color : #FFFFFF;
}
.ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: #222222;
color : #FFFFFF;}

.ant-table-tbody > tr.ant-table-row-selected > td {
    background-color: yellow;
color : #FFFFFF;
}

#components-table-demo-resizable-column .react-resizable {
  position: relative;
  background-clip: padding-box;
}

@media only screen and (min-width: 992px) {
    
}


@media only screen and (min-width: 768px) {
   
}


`;
