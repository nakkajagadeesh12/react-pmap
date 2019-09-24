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
      { name: "Level ID", propertyName: "lvlId" },
      { name: "EAN", propertyName: "ean" },
      { name: "Hierarchy Level", propertyName: "lvlTyp" },
      { name: "Parent Level ID", propertyName: "prtLvlId" },
      { name: "Parent Hierarchy Level", propertyName: "prtLvlTyp" },
      { name: "Country", propertyName: "country" }],
    FxeHeaders: metadata.FXENames,
    FxgHeaders: metadata.FXGNames,
    FxfHeaders: metadata.FXFNames,
  }
  // const pricingData = {
  //   pricData: Object.keys(pricing),
  //   FXE: priceMap.FXE,
  //   FXG: priceMap.FXG,
  //   FXF: priceMap.FXF,
  // }
  console.log("metadat", metadata);
  return (
    <Wrapper >
      <Table>
        <Wrapper >
          <Thead>
            <Trow>
              {
                headers.headerData.map(header => (
                  <Tcell col="1">
                    {header.name}
                  </Tcell>
                ))
              }
            </Trow>
          </Thead>
        <Tbody>
          {
            priceMap.map(price =>
              <Trow>
                {
                  headers.headerData.map(key => <Tcell>{price[key.propertyName]}</Tcell>)
                  // Object.keys(price).map(key =>
                  //   (key === 'FXE' || key === 'FXG' || key === 'FXF') ? null : <Tcell col="2">{price[key]}</Tcell>
                  // )
                }
              </Trow>
            )
          }
        </Tbody>
        </Wrapper>
      </Table>
    </Wrapper>
  )
}

export default MapComponent;