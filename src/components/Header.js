import {Fragment} from "react";
import logo from '../images/logo.png'
import styled from 'styled-components'
import Nav from "./Nav";
import painting from '../images/painting.jpg'

const HeaderTag = styled.header`
  padding: 13px 0 75px;
  .gridWrapper{
    display: grid;
    grid-template-columns: 640px 476px;
    grid-template-rows: 125px 90px 68px;
    grid-row-gap: 30px;
    grid-column-gap: 58px;
    margin-top: 100px;
  }
  .gridImg{
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }
  .gridTitle{
    text-align: right;
  }
  .title{
    font-weight: 400;
    font-size: 54px;
    line-height: 67px;
    color: #000000;
  }
  .flexWrapper{
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    color: #000000;
    span{
      color: #EC297B;
    }
  }
  .left{
    margin-right: 79px;
  }
  .img{
    height: 100%;
    margin-left: auto;
  }
  .gridLinks{
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  .firstLink{
    display: flex;
    width: 63%;
    background: #EC297B;
    border-radius: 10px 0px 0px 10px;
    color: #fff;
    height: 43px;
    align-items: center;
    justify-content: center;
  }
  .secondLink{
    display: flex;
    width: calc(100% - 63%);
    height: 43px;
    border: 1.5px solid #EC297B;
    border-radius: 0px 10px 10px 0px;
    color: #EC297B;
    align-items: center;
    justify-content: center;
  }
  
  // ADAPTIVE
  
  @media(max-width: 1255px){
    .gridWrapper{
      grid-template-columns: minmax(500px, 640px) minmax(auto, 476px);
    }
    .img{
      margin: 0;
    }
}
  @media(max-width: 1146px){
    .gridWrapper{
      grid-template-columns: minmax(500px, 640px) minmax(auto, 476px);
      grid-column-gap: 20px;
    }
    .img{
      margin: 0;
    }
  }
`

const Header = () => {
    return (
        <Fragment>
            <HeaderTag>
                <div className="container">
                    <Nav/>
                    <div className="gridWrapper">
                        <div className="gridItem gridTitle">
                            <h1 className='title'>МОДУЛЬНЫЕ КАРТИНЫ<br/>НА ЛЮБОЙ ВКУС</h1>
                        </div>
                        <div className="gridItem flexWrapper">
                            <div className="left">
                                Каждый день мы в поиске новых идей. Команда дизайнеров подбирает <span>для вас лучшие изображения.</span>
                            </div>
                            <div className="right">Мы с радостью изготовим для вас картину <span>любого размера и любой модульности.</span></div>
                        </div>
                        <div className="gridItem gridImg">
                            <img src={painting} alt="painting" className='img'/>
                        </div>
                        <div className="gridItem gridLinks">
                            <a href="#" className='firstLink'>Перейти в каталог</a>
                            <a href="#" className='secondLink'>Узнать больше</a>
                        </div>
                    </div>
                </div>
            </HeaderTag>
        </Fragment>
    )
}

export default Header