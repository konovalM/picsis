import {Fragment} from "react";
import styled from 'styled-components'

const DeliverySection = styled.section`
    padding: 50px 0 100px;
  .title{
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    color: #000000;
    margin-bottom: 20px;
  }
  .pink{
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #EC297B;
    margin-bottom: 30px;
  }
  .text{
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
  .table{
    width: 100%;
    border-collapse: collapse;
    border-radius: 37px;
    box-shadow: 1px 1px 0px 0px #000;
  }
  th{
    font-weight: 300;
    height: 71px;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    background: #EC297B;
    text-align: left;
    padding-left: 23px;
    box-shadow: -1px -1px 0px 0px #000;
  }
  .tr{
    border-top-left-radius: 37px;
    border-top-right-radius: 37px;
    box-shadow: 1px -1px 0px 0px #000;
  }
  th:first-child{
    border-top-left-radius: 37px;
  }
  th:last-child{
    border-top-right-radius: 37px;
  }
  .tdBody{
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding-left: 23px;
    height: 57px;
    box-shadow: -1px 0px 0px #000;
  }
  .lastCorner{
    border-bottom-left-radius: 37px;
    box-shadow: -1px 1px 0px 0px #000;
  }
  tbody{
    tr:last-child{
      td{
        height: 67px;
      }
    }
  }
  
  
  //ADAPTIVE
  
  @media(max-width: 768px){
    padding: 40px 0  50px;
    .title{
      font-size: 50px;
    }
    .pink, .text{
      font-size: 18px;
    }
    .pink, .text{
      margin-bottom: 20px;
    }
    th, .tdBody{
      font-size: 18px;
    }
    th{
      min-height: 55px;
      padding-left: 17px;
    }
    .tdBody{
      padding-left: 17px;
      height: 40px;
    }

  }
  @media(max-width: 495px){
    th{
      padding-left: 11px;
    }
    th:first-child{
      width: 125px;
    }
    th, .tdBody{
      font-size: 14px;
      line-height: 19px;
    }
  }
  @media(max-width: 425px){
    padding: 30px 0 50px;
    .title{
      font-size: 50px;
    }
    .pink, .text{
      font-size: 14px;
    }
    .pink{
      margin-bottom: 10px;
    }
  }
`

const Delivery = () => {
    return (
        <Fragment>
            <DeliverySection>
                <div className="container">
                    <h2 className="title">Доставка</h2>
                    <div className="pink">
                        Стоимость доставки начинается от 200 рублей и зависит от веса, размера картины и вашего адреса. Наш менеджер озвучит точную стоимость доставки при подтверждении заказа.
                    </div>
                    <div className="text">
                        В этой таблице — примерная стоимость и сроки доставки для некоторых городов.
                    </div>
                    <table className="table">
                        <thead className="thead">
                        <tr className="tr">
                            <th>Город</th>
                            <th>Срок доставки</th>
                            <th>Стоимость доставки</th>
                        </tr>
                        </thead>
                        <tbody className="tbody">
                        <tr className="trBody">
                            <td className="tdBody">Москва</td>
                            <td className="tdBody">1-2 дня</td>
                            <td className="tdBody">от 240</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody">Санкт-Петербург</td>
                            <td className="tdBody">1 день</td>
                            <td className="tdBody">от 210</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody">Новосибирск</td>
                            <td className="tdBody">9-10 дней</td>
                            <td className="tdBody">от 410</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody">Екатиренбург</td>
                            <td className="tdBody">5-6 дней</td>
                            <td className="tdBody">от 340</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody">Нижний Новгород</td>
                            <td className="tdBody">2-3 дня</td>
                            <td className="tdBody">от 240</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody">Казань</td>
                            <td className="tdBody">3-5 дней</td>
                            <td className="tdBody">от 210</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody">Челябинск</td>
                            <td className="tdBody">9-10 дней</td>
                            <td className="tdBody">от 410</td>
                        </tr>
                        <tr className="trBody">
                            <td className="tdBody lastCorner">Омск</td>
                            <td className="tdBody">11-13 дней</td>
                            <td className="tdBody">от 340</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </DeliverySection>
        </Fragment>
    )
}

export default Delivery