import React, { useContext } from 'react';
import Wrapper from './Wrapper';
import Table from './Table';
import Thead from './Thead';
import Tbody from './Tbody';
import Trow from './Trow';
import Tcell from './Tcell';
import { Store } from './Store';
import Grid from './Grid';

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

  console.log("metadat", metadata);
  console.log("priceMap----->", priceMap);
  return (
    <Grid >
      <Table>
        <Grid>
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
                      headers.headerData.map((key, index) => <Tcell key={index} col="2">{price[key.propertyName]}</Tcell>)
                    }
                  </Trow>
                )
              }
            </Tbody>
          </Wrapper>
          <Wrapper>
            <Thead>
              <Trow>
                {
                  Object.keys(headers.FxeHeaders).map((key, index) => {
                    console.log(key, headers.FxeHeaders[key], "key")
                    return <Tcell key={index} col="3">{headers.FxeHeaders[key]}</Tcell>
                  })
                }
              </Trow>
            </Thead>
            <Tbody>
              {
                priceMap.map(price =>
                  <Trow>
                    {
                      Object.keys(price.FXE).map(key=>{
                        console.log("key------><",key)
                      })
                    }
                  </Trow>
                )
              }
            </Tbody>
          </Wrapper>
          <Wrapper>
            <Thead>
              <Trow>
                {
                  Object.keys(headers.FxgHeaders).map((key, index) => {
                    console.log(key, headers.FxgHeaders[key], "key")
                    return <Tcell key={index} col="4">{headers.FxgHeaders[key]}</Tcell>
                  })
                }
              </Trow>
            </Thead>
            <Tbody></Tbody>
          </Wrapper>
          <Wrapper>
            <Thead>
              <Trow>
                {
                  Object.keys(headers.FxfHeaders).map((key, index) => {
                    console.log(key, headers.FxfHeaders[key], "key")
                    return <Tcell key={index} col="5">{headers.FxfHeaders[key]}</Tcell>
                  })
                }
              </Trow>
            </Thead>
            <Tbody></Tbody>
          </Wrapper>
        </Grid>
      </Table>
    </Grid>
  )
}

export default MapComponent;