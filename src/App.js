import React, { Component } from 'react';
import './App.css';

import { Header, Section, Button, Rectangle, Footer, Banner } from './components';
import StyledMain from './App.style';

import docImg from './assets/doc.png';
import interviewImg from './assets/interview.png';
import manDancingImg from './assets/man-dancing.png';
import publicSpeakerImg from './assets/public-speaker.png';
import magImg from './assets/magnifier.png';
import teleImg from './assets/telephone.png';

import tmpImg from './assets/tmp.png';

class App extends Component {
  render() {
    return (
      <StyledMain>
        <Header />
        <div className="container">
          <Banner />
          <Section className="section1">
            <div className="left">
              <h2 className="title">政府無視勞工聲音，強渡法案</h2>
              <p>2017 年 11 月 OO 日，行政院提出勞基法修正草案，欲放寬七休一、排班間隔 11 小時等規定。自草案被提出以來，各媒體、勞工團體、工會、以及部分立委，皆不斷呼籲政府，現行之草案恐陷底層勞工於過勞，應再次審慎評估。</p>
              <p>然而，民進黨政府不顧勞工的聲音，以優勢人數強渡法案。</p>
            </div>
            <div className="right">
              <img src={tmpImg} />
            </div>
          </Section>
          <Section className="section2">
            <div className="left">
              <img src={tmpImg}/>
            </div>
            <div className="right">
              <h2 className="title">只見彈性，不見保障的勞基法修正案</h2>
              <p>此次勞基法修正案，美其名為跟隨國際潮流，朝「高彈性、高保障」的方向修法。然而，草案內容只見「高彈性」，何來的「高保障」？</p>
              <p>政府想將勞動條件交給工會、勞資會議協商，卻忽略台灣工會組織率低落、許多企業未有勞資會議或勞資會議徒具形式的事實。</p>
              <p>我們沒有看到政府有任何動作要強化工會功能、協助勞工組織工會。違反勞資會議甚至沒有任何罰則。試問，「高保障」到底在哪裡？</p>
            </div>
          </Section>
          <Section>
            <h2 className="align-center">面對勞基法鬆綁，我們可以採取甚麼行動？</h2>
            <p>我們可以組織工會！</p>
            <p>
              <ul>
                <li>平常不敢問身邊的同事，要不要一起組工會？  別擔心，這裡完全匿名！</li>
                <li>身邊找不到想一起組工會的夥伴？  沒關係，網路上找的到！</li>
                <li>不知道工會籌組的細節？  沒問題，勞工團體及工會會幫忙！</li>
              </ul>
            </p>
            <p>現在就填寫工會籌組連署書，一旦接近工會組織門檻（同企業、同產業或同職業 30人），我們將協助你連結經驗豐富的工會及勞工團體，協助你籌組工會！</p>
            <Button>馬上開始組工會</Button>
          </Section>
          <Section>
            <h2 className="align-center">籌組流程</h2>
            <div className="align-center flex">
              <Rectangle
                iconImg={docImg}
                title='1. 線上連署'
                content='線上填寫表單，開始進行連署'
              />
              <Rectangle
                iconImg={manDancingImg}
                title='2. 人數達標'
                content='當人數達標，將開始連絡彼此進行籌備。必要時，先進行身份驗證。'
              />
              <Rectangle
                iconImg={interviewImg}
                title='3. 召開籌備會'
                content='召開工會籌備會，制定章程'
              />
              <Rectangle
                iconImg={publicSpeakerImg}
                title='4. 工會成立大會'
                content='召開工會成立大會，檢送必要文件至主管機關，正式成立工會。'
              />
            </div>
            <p>從第二個步驟起，將由台灣工人先鋒協會協助我們組織工會。台灣工人先鋒協會是由勞動九五聯盟、醫師勞動條件改革小組、台大工會、政大學生勞動權益促進會等組織的部分資深成員所組織的勞工團體，曾協助百貨業專櫃人員組織台灣專櫃暨銷售人員產業工會。</p>
          </Section>
          <Section>
            <h2>合作單位</h2>
            <div>
              <img />
              <span>台灣工人先鋒協會</span>
            </div>
          </Section>
          <Section>
            <h2 className="align-center">除了組工會外，我們還可以...</h2>
            <div className="align-center flex">
              <Rectangle
                iconImg={docImg}
                title='貢獻你的工時資料'
                content='讓台灣其他人知道，你的工時有多長？'
              />
              <Rectangle
                iconImg={magImg}
                title='查詢哪些公司工時很長'
              />
              <Rectangle
                iconImg={teleImg}
                title='打電話給你選區的立委'
                content='說明我們要高保障！'
              />
            </div>
          </Section>
        </div>
        <Footer />
      </StyledMain>
    );
  }
}

export default App;
