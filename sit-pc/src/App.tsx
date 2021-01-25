import React, { useEffect, useState } from 'react';
import { Button, Container, Navbar, Row, Col, Accordion } from 'react-bootstrap';
import PCSpecTable from './comp/pc-spec-table';
import { PCSpec } from './common';
function App() {
  const [pcspec, setPcspec] = useState<PCSpec[]>([]);
  useEffect(() => {
    const jsonObj = require('./json/pc-spec.json');
    setPcspec(jsonObj);
  }, [])
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">
          芝浦工業大学 非公式 新入生向けPC紹介サイト
    </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <h3>このサイトは？</h3>
        </Row>
        <Row>
          とある芝浦生がまとめた新入生向けのPC紹介サイトです。<br/>
          このサイトを見ても決まらない場合は<a href="https://twitter.com/MogamiTsuchikaw">Twitter</a>にて私に質問してOKです。
        </Row>
        <Row>
          <h3>各学科のPC必要スペック</h3>
        </Row>
        <Row>
          <a href="https://www.shibaura-it.ac.jp/examinee/undergraduate/pcspec.html">芝浦工業大学公式サイト</a>より<br />
        </Row>
        <Row>
        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Open or Close
            </Accordion.Toggle>
            <br/>
            <Accordion.Collapse eventKey="0">
              <PCSpecTable jsonObj={require('./json/pc-spec.json')} />
            </Accordion.Collapse>
          </Accordion>
        </Row>


      </Container>
    </div>

  );
}

export default App;
