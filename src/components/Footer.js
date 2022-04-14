import {Fragment} from "react";
import styled from 'styled-components'
import fade from '../images/fade.png'
import inst from '../images/inst.png'
import paySystem from '../images/paySystem.jpg'

const FooterTag = styled.footer`
  padding: 27px 0 50px;
  border-top: 1px solid #000;
  .wrapper{
    display: flex;
    flex-wrap: wrap;
  }
  .help{
    margin-right: 86px;
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
`

const Footer = () => {
    return (
        <Fragment>
            <FooterTag>
                <div className="container">
                    <div className="wrapper">
                        <div className="help">
                            <h5 className="helpTitle title">ПОМОЩЬ</h5>
                            <a href="#" className="helpLink">Как заказать?</a>
                            <a href="#" className="helpLink">Как оплатить?</a>
                            <a href="#" className="helpLink">Доставка</a>
                            <a href="#" className="helpLink">Вопросы и ответы</a>
                            <a href="#" className="helpLink">Гарантии и возврат</a>
                            <a href="#" className="helpLink">Договор</a>
                            <a href="#" className="helpLink">Памятка клиенту</a>
                        </div>
                        <div className="paintings">
                            <h5 className="paintingsTitle title">Наши картины</h5>
                            <a href="#" className="paintingsLink">
                                Как повесить картину
                            </a>
                            <a href="#" className="paintingsLink">
                                Рабочий процесс
                            </a>
                            <a href="#" className="paintingsLink">
                                Как упаковываем
                            </a>
                            <a href="#" className="paintingsLink">
                                Примеры наших работ
                            </a>
                        </div>
                        <div className="about">
                            <h5 className="aboutTitle title">О нас</h5>
                            <a href="#" className="aboutLink">
                                Почему мы
                            </a>
                            <a href="#" className="aboutLink">
                                О компании
                            </a>
                            <a href="#" className="aboutLink">
                                Контакты
                            </a>
                            <a href="#" className="aboutLink">
                                Партнерство
                            </a>
                            <a href="#" className="aboutLink">
                                Карта сайта
                            </a>
                            <a href="#" className="aboutLink">
                                Отзывы клиентов
                            </a>
                            <a href="#" className="aboutLink">
                                Блог
                            </a>
                        </div>
                        <div className="numbers">
                            <div className="number">
                                <div className="numberText">Для звонков по России</div>
                                <a href="tel: 88003024516" className="numberLink">8(800) 302-45-16</a>
                            </div>
                            <div className="number">
                                <div className="numberText">Москва</div>
                                <a href="tel: 84952042202" className="numberLink">8(495) 204-22-02</a>
                            </div>
                            <div className="number">
                                <div className="numberText">Санкт-Петербург</div>
                                <a href="tel: 88127010117" className="numberLink">8(812) 701-01-17</a>
                            </div>
                        </div>
                        <div className="works">
                            <div className="work">
                                <div className="workText">Режим работы</div>
                                <div className="workTextBold">10:00-19:00 пн-пт</div>
                            </div>
                            <div className="work">
                                <div className="workText">Прием заказов</div>
                                <div className="workTextBold">Круглосуточно</div>
                            </div>
                            <div className="work">
                                <div className="workTextBold">sales@picsis.ru</div>
                            </div>
                        </div>
                        <div className="other">
                            <a href="#">
                                <img src={inst} alt="fade" className='fade'/>
                            </a>
                            <div className="otherText">МЫ ПРИНИМАЕМ</div>
                            <img src={paySystem} alt="paySystem"/>
                        </div>
                    </div>
                </div>
            </FooterTag>
        </Fragment>
    )
}

export default Footer