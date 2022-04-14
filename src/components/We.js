import {Fragment} from "react";
import styled from 'styled-components'
import img1 from '../images/ourAdvantages/img1.png'
import img2 from '../images/ourAdvantages/img2.png'
import img3 from '../images/ourAdvantages/img3.png'
import img4 from '../images/ourAdvantages/img4.png'
import img5 from '../images/ourAdvantages/img5.png'
import img6 from '../images/ourAdvantages/img6.png'

const WeSesction = styled.section`
  padding: 65px 0 50px;
  .title{
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    color: #000000;
    margin-bottom: 60px;
  }
  .gridWrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
    grid-template-rows: auto;
    grid-auto-rows: auto;
    grid-column-gap: 98px;
    grid-row-gap: 30px;
    justify-content: center;
  }
  .gridItem{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imgWrapper{
    margin-bottom: 10px;
  }
  .advantage{
    margin-bottom: 15px;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    color: #000000;
    text-align: center;
  }
  .description{
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: justify;
    color: #000000;
  }
  .picsis{
    margin-top: 85px;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: justify;
    color: #EC297B;
    text-align: right;
    
  }
  
  // ADAPTIVE
  @media (max-width: 768px){
    
  }
  @media (max-width: 375px){
    
  }
  
`

const We = () => {
    return (
        <Fragment>
            <WeSesction>
                <div className="container">
                    <h2 className="title">
                        Почему мы
                    </h2>
                    <div className="gridWrapper">
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img src={img1} alt="price"/>
                            </div>
                            <h3 className="advantage">
                                Итоговая цена
                            </h3>
                            <div className="description">
                                При заказе вы сразу видите конечную стоимость, в которую уже включено изготовление подрамника и натяжка холста: никаких переплат
                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img src={img2} alt="help"/>
                            </div>
                            <h3 className="advantage">
                                Помощь дизайнера
                            </h3>
                            <div className="description">
                                Иногда очень сложно представить, как выбранная картина будет смотреться, например, на кухне. Мы решили эту проблему — просто сфотографируйте стену, а мы покажем, как это будет выглядеть.
                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img src={img3} alt="modules"/>
                            </div>
                            <h3 className="advantage">
                                Варианты модульности
                            </h3>
                            <div className="description">
                                Мы с радостью изготовим для вас картину любого размера и любой модульности. Если сомневаетесь между какими-то вариантами, не волнуйтесь — дизайнеры помогут вам определиться.
                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img src={img4} alt="star"/>
                            </div>
                            <h3 className="advantage">
                                HD качество печати
                            </h3>
                            <div className="description">
                                У нас самые современные принтеры, которые позволяют печатать в HD качестве. Вы получите детализированную, яркую и четкую картину с отличной цветопередачей.
                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img src={img5} alt="easy"/>
                            </div>
                            <h3 className="advantage">
                                Картину легко повесить
                            </h3>
                            <div className="description">
                                Если ваша картина состоит из большого количества модулей, вы легко справитесь с её размещением на стене. Мы можем изготовить для вас специальный трафарет-наклейку, который подскажет вам разметку для модулей.
                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="imgWrapper">
                                <img src={img6} alt="book"/>
                            </div>
                            <h3 className="advantage">
                                Большой каталог
                            </h3>
                            <div className="description">
                                Каждый день мы в поиске новых идей для картин. Команда дизайнеров подбирает для вас лучшие изображения. При желании мы можем напечатать картину вашего любимого художника или фотографию.
                            </div>
                        </div>
                    </div>
                    <div className="picsis">— это все Picsis</div>
                </div>
            </WeSesction>
        </Fragment>
    )
}

export default We