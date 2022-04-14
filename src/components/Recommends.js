import {Fragment} from "react";
import styled from 'styled-components'
import painting from './../images/recommend/painting.png'
import roses from './../images/recommend/roses.png'
import paris from './../images/recommend/paris.png'
import cosmos from './../images/recommend/cosmos.png'
import water from './../images/recommend/water.png'

const RecommendSection = styled.section`
  padding: 50px 0 50px;
  .title{
    text-align: center;
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    color: #000000;
    margin-bottom: 60px;
  }
  .gridWrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 562px 575px;
    grid-auto-rows: 570px;
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
  .gridItem:first-child{
    grid-column: 1 / 3;
  }
  .gridItem:last-child{
    grid-column: 3 / 5;
  }
  .gridItem:nth-child(4){
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .text{
    margin-bottom: 58px;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    text-transform: uppercase;
    color: #EC297B;
  }
  .btn{
    margin: 0 auto 130px;
    width: 178px;
    height: 43px;
    background: #EC297B;
    border-radius: 10px;
    border: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    cursor: pointer;
    transition: .3s;
  }
  .btn:hover, .btn:active{
    background-color: #D01262;
  }
  
  //ADAPTIVE
  
  @media (max-width: 1213px){
    .gridWrapper{
      justify-content: center;
      grid-template-columns: repeat(2, 277px);
      grid-template-rows: 560px;
      grid-auto-flow: row;
      grid-auto-rows: 560px;
    }
    .gridItem:last-child{
      grid-column: 1 / 3;
      order: -1;
    }
    .gridItem:nth-child(1){
      order: -3;
    }
    .gridItem:nth-child(2){
      order: -2;
    }
    .gridItem:nth-child(3){
      order: -2;
    }
  }
  @media (max-width: 768px){
    padding: 30px 0 30px;
    .title{
      font-size: 52px;
      margin-bottom: 40px;
    }
    .gridWrapper{
      grid-column-gap: 15px;
      grid-template-columns: 200px 200px;
      grid-template-rows: auto;
      grid-auto-rows: auto;
    }
    .text{
      font-size: 20px;
      margin-bottom: 30px;
    }
    .btn{
      margin-bottom: 80px;
      width: 150px;
      height: 44px;
      font-size: 16px;
    }
  }
  @media (max-width: 470px){
    padding: 30px 0 30px;
    .title{
      font-size: 40px;
      margin-bottom: 20px;
    }
    .gridWrapper{
      grid-row-gap: 13px;
      grid-column-gap: 13px;
      grid-template-columns: 151px 151px;
      grid-template-rows: auto;
      grid-auto-rows: auto;
    }
    .text{
      font-size: 15px;
      margin-bottom: 30px;
      text-align: center;
    }
    .btn{
      margin-bottom: 64px;
      width: 134px;
      height: 41px;
      font-size: 16px;
    }
    
  }
`

const Recommends = () => {
    return (
        <Fragment>
            <RecommendSection>
                <div className="container">
                    <h2 className="title">
                        Мы рекомендуем
                    </h2>
                    <div className="gridWrapper">
                        <div className="gridItem">
                            <img src={painting} alt=""/>
                        </div>
                        <div className="gridItem">
                            <img src={roses} alt=""/>
                        </div>
                        <div className="gridItem">
                            <img src={paris} alt=""/>
                        </div>
                        <div className="gridItem">
                            <div className="text">— Ещё больше картин в нашем каталоге</div>
                            <button className="btn">Смотреть еще!</button>
                        </div>
                        <div className="gridItem">
                            <img src={cosmos} alt=""/>
                        </div>
                        <div className="gridItem">
                            <img src={water} alt=""/>
                        </div>
                    </div>
                </div>
            </RecommendSection>
        </Fragment>
    )
}

export default Recommends