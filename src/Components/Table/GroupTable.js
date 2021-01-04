import React from 'react';
import 'antd/dist/antd.css';
import { TableTheme } from "./TableStyle"
import { Table, Tooltip } from 'antd';
import { useSelector } from "react-redux";
import DeleteGroup from "../Module/globalComponents/Modal/Group Modal/DeleteGroup";


const { Column } = Table;






const editicon = (<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6971 3.05144L9.70658 4.04191C9.6056 4.14289 9.44231 4.14289 9.34133 4.04191L6.95645 1.65705C6.85547 1.55607 6.85547 1.39278 6.95645 1.2918L7.94693 0.30133C8.34871 -0.100443 9.00186 -0.100443 9.40579 0.30133L10.6971 1.59259C11.101 1.99437 11.101 2.64752 10.6971 3.05144ZM6.10563 2.14261L0.463575 7.78464L0.00808505 10.3951C-0.0542225 10.7474 0.253018 11.0525 0.605378 10.9924L3.21585 10.5347L8.85791 4.89272C8.95889 4.79174 8.95889 4.62846 8.85791 4.52748L6.47303 2.14261C6.3699 2.04163 6.20661 2.04163 6.10563 2.14261ZM2.66583 7.30122C2.54766 7.18305 2.54766 6.99398 2.66583 6.87581L5.97457 3.56709C6.09274 3.44892 6.28181 3.44892 6.39998 3.56709C6.51815 3.68525 6.51815 3.87432 6.39998 3.99249L3.09124 7.30122C2.97307 7.41939 2.78399 7.41939 2.66583 7.30122ZM1.8902 9.10813H2.9215V9.88804L1.53569 10.1308L0.8675 9.46263L1.11028 8.07683H1.8902V9.10813Z" fill="#88CDFF" />
</svg>
)


const GroupTable = () => {
  const grouptabledata = useSelector((state) => state.grouptable.groupData);


  return (
    <TableTheme>
      <div>


        <Table scroll={{ y: 370 }} dataSource={grouptabledata} >


          <Column ellipsis={true} title="Group Name" dataIndex="groupName" key="groupName"
            render={groupName => (


              <Tooltip placement="topLeft" title={groupName}>
                {groupName}
              </Tooltip>
            )}


          />
          <Column ellipsis={true} title="Group Type" dataIndex="groupType" key="groupType"
            render={groupType => (
              <Tooltip placement="topLeft" title={groupType}>
                {groupType}
              </Tooltip>)} />

          <Column ellipsis={true} title="Created At" dataIndex="createdAt" key="createdAt"

            render={createdAt => (
              <>

                <Tooltip placement="topLeft" title={createdAt}>
                  {createdAt}
                </Tooltip>

              </>
            )} />
         
          <Column title="Action" dataIndex="token" key="Action" render={(token) =>
            <>
              <span>{editicon}&nbsp; &nbsp;</span>
              <DeleteGroup tokens={token} />
            </>} />



        </Table>
      </div>
    </TableTheme>
  );
};

export default GroupTable;












