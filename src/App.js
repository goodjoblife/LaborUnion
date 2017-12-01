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
        <Banner className="index-banner"/>
        <div className="container">
          <Section className="section1">
            <div className="left">
              <h2 className="title">政府無視勞工聲音，強渡法案</h2>
              <p>2017 年 11 月 OO 日，行政院提出勞基法修正草案，欲放寬七休一、排班間隔 11 小時等規定。自草案被提出以來，各媒體、勞工團體、工會、以及部分立委，皆不斷呼籲政府，現行之草案於實務面對勞工的保障不足，恐陷底層勞工於過勞，應再次審慎評估</p>
              <p>然而，民進黨政府仍欲以優勢人數強渡法案。</p>
            </div>
            <div className="right">
            </div>
          </Section>
          <Section className="section2">
            <div className="right">
              <h2 className="title">只見彈性，不見保障的勞基法修正案</h2>
              <p>此次勞基法修正案，美其名為跟隨國際潮流，朝「高彈性、高保障」的方向修法。然而，草案內容只見「高彈性」，未見「高保障」。</p>
              <p>政府欲將勞動條件交給工會、勞資會議協商，卻忽略台灣工會組織率僅 7%、許多企業未有勞資會議或勞資會議徒具形式的事實。</p>
              <p>我們沒有看到政府有任何動作要強化工會功能、協助勞工組織工會、落實勞資會議。試問政府，「高保障」到底在哪裡？</p>
            </div>
            <div className="left">
            </div>
          </Section>
          <Section className="tight-section">
            <h2 className="align-center">面對勞基法鬆綁，我們可以採取甚麼行動？</h2>
            <p>除了聲援抗議活動、鍵盤分享抗議資訊外，其實我們還可以做得更多——我們可以<span className="red-text">組織工會</span>！</p>
            <p>有了工會，我們才能有更強的談判力量，拒絕雇主要求連續工作十二天、拒絕排班只間隔八小時。才有機會在公聽會上發表意見，讓勞工的聲音被聽見。我們才有足夠的動員能力，上街表達意見，或是發動罷工。</p>
            <p>
              <ul>
                <li>平常不敢問身邊的同事，要不要一起組工會？ <span className="yellow-text">別擔心，這裡完全匿名！</span></li>
                <li>身邊找不到想一起組工會的夥伴？ <span className="yellow-text">沒關係，網路上找的到！</span></li>
                <li>不知道工會籌組的細節？ <span className="yellow-text">沒問題，勞工團體及工會會幫忙！</span></li>
              </ul>
            </p>
            <p>不論你是想要組工會，還是想加入真正能捍衛勞工權益的工會，現在就填寫連署書！<br />一旦接近工會組織門檻（同企業、同產業或同職業勞工 30 人），我們將協助你連結經驗豐富的工會及勞工團體，協助你籌組工會！</p>
            <div className="align-center">
              <Button>馬上開始組工會</Button>
            </div>
          </Section>
          <Section className="section3">
            <h2 className="align-center">籌組流程</h2>
            <div className="align-center flex flow-container">
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
            <div className="tight-section">
              <p>從第二個步驟起，將由台灣工人先鋒協會協助我們組織工會。台灣工人先鋒協會是由勞動九五聯盟、醫師勞動條件改革小組、台大工會、政大學生勞動權益促進會等組織的部分資深成員所組織的勞工團體，曾協助百貨業專櫃人員組織台灣專櫃暨銷售人員產業工會。</p>
            </div>
          </Section>
          <Section className="align-center">
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
