import {Fragment} from "react";
import styled from 'styled-components'
import right from '../images/right.svg'
import left from '../images/left.svg'
import {useState} from "react";


const SliderTag = styled.div`
  .slider{
    display: grid;
    grid-template-rows: auto;
    grid-auto-flow: column;
    column-gap: 15px;
    margin-bottom: 20px;
    transform: translateX(${props => props.shift + 'px'});
    transition: transform .2s;
  }
  .sliderItem{
    background: #EDEDED;
    border-radius: 30px;
    padding: 20px 15px;
    width: 400px;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }
  .sliderItem:nth-child(${props => props.center}){
    background: #7D2670;
    color: #fff;
    transform: scale(1.05);
    padding: 20px 15px;
    transition: transform .3s;
  }
  .sliderNav{
    display: flex;
    justify-content: space-between;
  }
  .arrows{
    display: flex;
    img{
      cursor: pointer;
    }
    img:active{
      transform: scale(1.2);
      transition: transform .3s;
    }
  }
  .left{
    margin-right: 24px;
  }
  .sliderProgress{
    width: 80%;
    height: 3px;
    background-color: #EDEDED;
  }
  .sliderActiveProgress{
    height: 3px;
    transition: width .3s;
    width: ${props => props.progress + '%'};
    background-color: #EC297B;
  }
`

const Slider = () => {
    const maxWidth = 1170
    let progress = 3
    const [shift, shiftMethod] = useState(0)

    const changeX = (x) => {
        console.log(shift  + x)
        if ((shift + x) <= 0 && (shift + x) > -1170){
            shiftMethod(shift + x)
        }

    }

    return (
        <Fragment>
            <SliderTag shift={shift} center={Math.abs(shift) / 420 + 2} progress={(progress + Math.abs(shift) / 420) / 5 * 100}>
                <div className="slider">
                    <div className="sliderItem">Здравствуйте! Покупала картины в детскую. Вчера получила заказ. Я очень довольна! Хорошое качество картин, насыщенные цвета! Была приятно удивлена как бережно были упакованы картины! Спасибо вам большое за работу!</div>
                    <div className="sliderItem">В первый раз делала заказ, заказала комплект из 4 картин. Долго решалась, если честно. Сама не знаю, что меня останавливало) А тут и скидку получила на первый заказ, что немало порадовало, поэтому не заказать было просто грех). По самим картинам вообще претензий нет, очень качественный и на 100% соответствуют фото на сайте. Да и работа менеджеров и службы доставки порадовала.</div>
                    <div className="sliderItem">Заказываю не первый раз !очень нравится как качество работ,так и скорость исполнения ) заказывал репродукции Ван Гога,некоторые из желаемых мной работ не были представлены на сайте ,но ребята решили эту проблему сформировав индивидуальный заказ)за что огромное спасибо. За картинами только сюда )</div>
                    <div className="sliderItem">Здравствуйте! Покупала картины в детскую. Вчера получила заказ. Я очень довольна! Хорошое качество картин, насыщенные цвета! Была приятно удивлена как бережно были упакованы картины! Спасибо вам большое за работу!</div>
                    <div className="sliderItem">Здравствуйте! Покупала картины в детскую. Вчера получила заказ. Я очень довольна! Хорошое качество картин, насыщенные цвета! Была приятно удивлена как бережно были упакованы картины! Спасибо вам большое за работу!</div>
                </div>
            <div className="sliderNav">
                <div className="sliderProgress">
                    <div className="sliderActiveProgress"></div>
                </div>
                <div className="arrows">
                    <img src={left} alt="left" className='left' onClick={() => changeX(420)}/>
                    <img src={right} alt="right" className='right' onClick={() => changeX(-420)}/>
                </div>
            </div>
            </SliderTag>
        </Fragment>
    )
}


export default Slider


