import {Fragment} from "react";
import styled from 'styled-components'
import star from '../images/star.svg'

const PromotionsTag = styled.section`
  padding: 100px 0 50px;
  .gridWrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(435px, 1fr));
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    grid-auto-rows: auto;
  }
  .inner{
    background: #EC297B;
    border-radius: 45px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .innerSecond{
    background: #7D2670;
  }
  .text{
    margin: 43px 0 9px;
    font-weight: 700;
    font-size: 90px;
    line-height: 103px;
    letter-spacing: 0.085em;
    color: #FFFFFF;
  }
  .textFlex{
    font-family: 'Lemon Sans Rounded';
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 103px;
    color: #F4AAAC;
    letter-spacing: -0.09em;
    margin: 43px 0 9px;
  }
  .second{
    margin-left: 15px;
    color: #F0859A;
  }
  .third{
    margin-left: 15px;
    color: #EB297B;
  }
  .descr{
    ont-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 49px;
  }
  .innerFirst{
    position: relative;
  }
  .innerFirst:after{
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    background: url(${star})center center/cover no-repeat;
    right: -10px;
    top: -54px;
  }
  
  // ADAPTIVE
  
  @media(max-width: 768px){
    padding: 40px 0 40px;
    
    .text{
      font-size: 55px;
      line-height: 65px;
      margin: 30px 0 9px;
    }
    .textFlex{
      margin: 30px 0 9px;
      font-size: 60px;
      line-height: 65px;
    }
    .descr{
      font-size: 17px;
      line-height: 20px;
    }
    .innerFirst:after {
      width: 90px;
      height: 90px;
      right: -5px;
      top: -35px;
    }
  }
  @media(max-width: 450px){
    .gridWrapper{
      grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    }
    .inner{
      border-radius: 17px;
    }
  }
  @media(max-width: 425px){
    padding: 20px 0 40px;
    .descr{
      font-size: 14px;
      line-height: 17px;
    }
    .text{
      font-size: 45px;
      line-height: 51px;
      margin: 20px auto 5px;
    }
    .descr{
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 19px;
    }
    .innerFirst:after {
      width: 60px;
      height: 60px;
      right: -12px;
      top: -33px;
    }
    .textFlex{
      margin: 20px 0 5px;
      font-size: 45px;
      line-height: 51px;
    }
  }
  
  @media(max-width: 350px){
    padding: 20px 0 40px;
    .descr{
      font-size: 12px;
      line-height: 14px;
    }
    .text{
      font-size: 39px;
      line-height: 51px;
    }
    .descr{
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 17px;
    }
  }
  
`

const Promotions = () => {
    return (
        <Fragment>
            <PromotionsTag>
                <div className="container">
                    <div className="gridWrapper">
                        <div className="gridItem">
                            <div className="inner innerFirst">
                                <div className="text">
                                    1+1=3
                                </div>
                                <div className="descr">
                                    Закажи 2 картины и получи 3-ю в подарок
                                </div>
                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="inner innerSecond">
                                <div className="textFlex">
                                    <div className="first">30%</div>
                                    <div className="second">40%</div>
                                    <div className="third">50%</div>
                                </div>
                                <div className="descr">
                                    Успей заказать картину со скидкой до 50%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PromotionsTag>
        </Fragment>
    )
}

export default Promotions