import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import {PCSpec} from '../common';
const PCSpecTable: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.jsonObj);
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ディスプレイ</th>
          <th>OS</th>
          <th>CPU</th>
          <th>メモリー</th>
          <th>ストレージ</th>
          <th>重さ</th>
          <th>WiFi</th>
          <th>Macに関して</th>
        </tr>
      </thead>
      <tbody>
        {props.jsonObj.map((tmp:PCSpec)=>(
        <tr>
          <td>{tmp.name}</td>
          {tmp.display==-1 
          ?
          <td>指定無し</td>
          :
            tmp.display==-2
              ?
              <td>タブレット不可</td>
              :
              <td>{tmp.display}ｲﾝﾁ以上</td>
            
          }
          <td>{tmp.os}</td>
          <td>{tmp.cpu}以上</td>
          <td>{tmp.ram}GB以上</td>
          <td>{tmp.ssd}GB以上</td>
          <td>{tmp.weight}kg以下</td>
          <td>WiFi{tmp.wifi}以上</td>
          <td>{tmp.intel_mac ? 
          <div>
            {tmp.m1_mac ?
            <div>M1 MacもOK</div>
            :
              <div>intel Macのみ</div>
            }
          </div>
          :
          <div>Mac不可</div>
          }</td>
        </tr>
        ))}
      </tbody>
      
    </Table>
  );
}
type Props = {
  jsonObj: PCSpec[];
};

export default PCSpecTable;
