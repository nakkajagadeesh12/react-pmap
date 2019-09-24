import React from 'react';
import Wrapper from './Wrapper';
import Table from './Table';
import Thead from './Thead';
import Tbody from './Tbody';
import Trow from './Trow';
import Tcell from './Tcell';


const MapComponent = (props) => {
  return (
    <Wrapper>
      <Table>
        <Thead>
          <Trow>
            <Tcell>

            </Tcell>
          </Trow>
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