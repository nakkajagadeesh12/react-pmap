import React, { useContext } from 'react';
import Wrapper from './Wrapper';
import Table from './Table';
import Thead from './Thead';
import Tbody from './Tbody';
import Trow from './Trow';
import Tcell from './Tcell';
import { Store } from './Store';

const MapComponent = (props) => {
  const { state: { metadata, priceMap }, dispatch } = useContext(Store);
  const headers = {
    headerData: [
      {name:"Level ID",propertyName:"lvlId"},
      {name:"EAN",propertyName:"ean"},
      {name:"Hierarchy Level",propertyName:""},
      {name:"Parent Level ID",propertyName:"lvlid"},
      {name:"Parent Hierarchy Level",propertyName:"lvlid"}],
  }
  console.log("metadat", metadata);
  return (
    <Wrapper>
      <Table>
        <Thead>
          {

            <Trow>
              <Tcell>

              </Tcell>
            </Trow>
          }
        </Thead>
        <Tbody>
          <Trow>
            <Tcell>

            </Tcell>
          </Trow>
        </Tbody>
      </Table>
    </Wrapper>
  )
}

export default MapComponent;