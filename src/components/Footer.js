import {Fragment} from "react";
import styled from 'styled-components'
import fade from '../images/fade.png'
import inst from '../images/inst.png'
import instSvg from '../images/inst.svg'
import paySystem from '../images/paySystem.jpg'
import fadeMobile from '../images/fadeMobile.jpg'

const FooterTag = styled.footer`
  padding: 27px 0 20px;
  border-top: 1px solid #000;
  .wrapperMobile{
    display: none;
  }
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .help{
    margin-right: 86px;
    margin-bottom: 30px;
  }
  .title{
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #000000;
    margin: 0 0 10px 0;
  }
  .helpLink{
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.8;
    display: block;
    
  }
  .helpLink + .helpLink{
    margin-top: 5px;
  }
  .paintings{
    margin-right: 67px;
    margin-bottom: 30px;
  }
  .paintingsLink{
    display: block;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.8;
  }
  .paintingsLink + .paintingsLink{
    margin-top: 5px;
  }
  .aboutLink{
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.8;
    display: block;
  }
  .about{
    margin-right: 97px;
    margin-bottom: 30px;

  }
  .aboutLink + .aboutLink{
    margin-top: 5px;
  }
  .numbers{
    margin-right: 44px;
  }
  .number{
    margin-bottom: 22px;
  }
  .numberText{
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 5px;
  }
  .numberLink{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    opacity: 0.6;
  }
  .works{
    margin-right: 73px;
  }
  .work{
    margin-bottom: 22px;
  }
  .workText{
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-bottom: 5px;
  }
  .workTextBold{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  .fade{
    margin-bottom: 27px;
    height: 38px;
  }
  .otherText{
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  .instInner{
    width: 177px;
    height: 38px;
    border-radius: 9px;
    background: url(${fade})center center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 107.5%;
    color: #FFFFFF;
  }
  .instInner:hover, instInner:active{
    text-decoration: underline;
  }
  .otherInst{
    margin: 0 13px 0 18px;
  }
  .otherLink{
    display: block;
    margin-bottom: 27px;
  }
  //ADAPTIVE
  
  @media(max-width: 640px){
    .wrapper{
      display: none;
    }
    .help{
      margin: 0;
    }
    .wrapperMobile{
      display: grid;
      grid-template-columns: repeat(2, 135px);
      grid-template-rows: 138px 129px 38px 150px;
      grid-row-gap: 20px;
      grid-column-gap: 60px;
      justify-content: center;
    }
    .title{
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 5px;
    }
    .helpLink{
      font-size: 12px;
      line-height: 14px;
      
    }
    .helpLink+.helpLink{
      margin-top: 3px;
    }
    
    .paintings{
      margin: 0;
    }
    .about{
      margin: 0;
    }
    .aboutLink{
      font-size: 12px;
      line-height: 14px;
    }
    .aboutLink+.aboutLink{
      margin-top: 3px;
    }
    .present{
      grid-column: 1 / 3;
      grid-row: 3 / 4;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .presentInner{
      width: 314px;
      height: 38px;
      background: url(${fadeMobile})center center/cover no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #FFFFFF;
    }
    .presentInner:hover, presentInner:active{
      text-decoration: underline;
    }
    .instSvg{
      margin-right: 13px;
    }
    .numbers{
      margin: 0;
    }
    .numberText{
      font-size: 14px;
      line-height: 17px;
    }
    .number{
      margin-bottom: 10px;
    }
    .numberLink{
      font-size: 14px;
      line-height: 17px;
    }
    .works{
      margin: 0;
    }
    .workText{
      font-size: 14px;
      line-height: 17px;
    }
    .workTextBold{
      font-size: 14px;
      line-height: 17px;
    }
    .work{
      margin-bottom: 10px;
    }
  }
  
  @media(max-width: 370px){
    .wrapperMobile{
      grid-column-gap: 15px;
    }
  }
`

const Footer = () => {
    return (
        <Fragment>
            <FooterTag>
                <div className="container">
                    <div className="wrapper">
                        <div className="help">
                            <h5 className="helpTitle title">????????????</h5>
                            <a href="#" className="helpLink">?????? ?????????????????</a>
                            <a href="#" className="helpLink">?????? ?????????????????</a>
                            <a href="#" className="helpLink">????????????????</a>
                            <a href="#" className="helpLink">?????????????? ?? ????????????</a>
                            <a href="#" className="helpLink">???????????????? ?? ??????????????</a>
                            <a href="#" className="helpLink">??????????????</a>
                            <a href="#" className="helpLink">?????????????? ??????????????</a>
                        </div>
                        <div className="paintings">
                            <h5 className="paintingsTitle title">???????? ??????????????</h5>
                            <a href="#" className="paintingsLink">
                                ?????? ???????????????? ??????????????
                            </a>
                            <a href="#" className="paintingsLink">
                                ?????????????? ??????????????
                            </a>
                            <a href="#" className="paintingsLink">
                                ?????? ??????????????????????
                            </a>
                            <a href="#" className="paintingsLink">
                                ?????????????? ?????????? ??????????
                            </a>
                        </div>
                        <div className="about">
                            <h5 className="aboutTitle title">?? ??????</h5>
                            <a href="#" className="aboutLink">
                                ???????????? ????
                            </a>
                            <a href="#" className="aboutLink">
                                ?? ????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ??????????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ?????????? ??????????
                            </a>
                            <a href="#" className="aboutLink">
                                ???????????? ????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ????????
                            </a>
                        </div>
                        <div className="numbers">
                            <div className="number">
                                <div className="numberText">?????? ?????????????? ???? ????????????</div>
                                <a href="tel: 88003024516" className="numberLink">8(800) 302-45-16</a>
                            </div>
                            <div className="number">
                                <div className="numberText">????????????</div>
                                <a href="tel: 84952042202" className="numberLink">8(495) 204-22-02</a>
                            </div>
                            <div className="number">
                                <div className="numberText">??????????-??????????????????</div>
                                <a href="tel: 88127010117" className="numberLink">8(812) 701-01-17</a>
                            </div>
                        </div>
                        <div className="works">
                            <div className="work">
                                <div className="workText">?????????? ????????????</div>
                                <div className="workTextBold">10:00-19:00 ????-????</div>
                            </div>
                            <div className="work">
                                <div className="workText">?????????? ??????????????</div>
                                <div className="workTextBold">??????????????????????????</div>
                            </div>
                            <div className="work">
                                <div className="workTextBold">sales@picsis.ru</div>
                            </div>
                        </div>
                        <div className="other">
                            <a href="#" className='otherLink'>
                                <div className="instInner">
                                    <img src={instSvg} alt="instagram" className='otherInst'/>
                                    ?????????? ?????????????? ?? ??????????????????
                                </div>
                            </a>
                            <div className="otherText">???? ??????????????????</div>
                            <img src={paySystem} alt="paySystem"/>
                        </div>
                    </div>
                    <div className="wrapperMobile">
                        <div className="help">
                            <h5 className="helpTitle title">????????????</h5>
                            <a href="#" className="helpLink">?????? ?????????????????</a>
                            <a href="#" className="helpLink">?????? ?????????????????</a>
                            <a href="#" className="helpLink">????????????????</a>
                            <a href="#" className="helpLink">?????????????? ?? ????????????</a>
                            <a href="#" className="helpLink">???????????????? ?? ??????????????</a>
                            <a href="#" className="helpLink">??????????????</a>
                            <a href="#" className="helpLink">?????????????? ??????????????</a>
                        </div>
                        <div className="paintings">
                            <h5 className="paintingsTitle title">???????? ??????????????</h5>
                            <a href="#" className="paintingsLink">
                                ?????? ???????????????? ??????????????
                            </a>
                            <a href="#" className="paintingsLink">
                                ?????????????? ??????????????
                            </a>
                            <a href="#" className="paintingsLink">
                                ?????? ??????????????????????
                            </a>
                            <a href="#" className="paintingsLink">
                                ?????????????? ?????????? ??????????
                            </a>
                        </div>
                        <div className="about">
                            <h5 className="aboutTitle title">?? ??????</h5>
                            <a href="#" className="aboutLink">
                                ???????????? ????
                            </a>
                            <a href="#" className="aboutLink">
                                ?? ????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ??????????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ?????????? ??????????
                            </a>
                            <a href="#" className="aboutLink">
                                ???????????? ????????????????
                            </a>
                            <a href="#" className="aboutLink">
                                ????????
                            </a>
                        </div>
                        <div className="other">

                            <div className="otherText">???? ??????????????????</div>
                            <img src={paySystem} alt="paySystem"/>
                        </div>
                        <div className="present">
                            <a href="#">
                                <div className="presentInner">
                                    <img src={instSvg} alt="instagram" className='instSvg'/>
                                    ?????????? ?????????????? ?? ??????????????????
                                </div>
                            </a>

                        </div>
                        <div className="numbers">
                            <div className="number">
                                <div className="numberText">?????? ?????????????? ???? ????????????</div>
                                <a href="tel: 88003024516" className="numberLink">8(800) 302-45-16</a>
                            </div>
                            <div className="number">
                                <div className="numberText">????????????</div>
                                <a href="tel: 84952042202" className="numberLink">8(495) 204-22-02</a>
                            </div>
                            <div className="number">
                                <div className="numberText">??????????-??????????????????</div>
                                <a href="tel: 88127010117" className="numberLink">8(812) 701-01-17</a>
                            </div>
                        </div>
                        <div className="works">
                            <div className="work">
                                <div className="workText">?????????? ????????????</div>
                                <div className="workTextBold">10:00-19:00 ????-????</div>
                            </div>
                            <div className="work">
                                <div className="workText">?????????? ??????????????</div>
                                <div className="workTextBold">??????????????????????????</div>
                            </div>
                            <div className="work">
                                <div className="workTextBold">sales@picsis.ru</div>
                            </div>
                        </div>
                    </div>
                </div>
            </FooterTag>
        </Fragment>
    )
}

export default Footer