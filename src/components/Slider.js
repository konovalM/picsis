import {Fragment} from "react";
import styled from 'styled-components'
import right from '../images/right.svg'
import left from '../images/left.svg'
import {useState, useEffect} from "react";


const SliderTag = styled.div`
  .slider{
    display: grid;
    grid-template-rows: auto;
    grid-auto-flow: column;
    grid-template-columns: repeat(8, 400px);
    column-gap: 20px;
    margin-bottom: 20px;
    transform: translateX(${props => props.shift + 'px'});
    transition: transform .2s;
  }
  .sliderItem{
    background: #EDEDED;
    border-radius: 30px;
    padding: 20px 15px;
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
    align-items: center;
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
    width: ${props => props.progress ? props.progress + '%' : 0};
    background-color: #EC297B;
  }
  
  
  // ADAPTIVE
  @media (max-width: 768px){
    .sliderItem{
      font-weight: 300;
      font-size: 17px;
      line-height: 20px;
      text-align: center;
    }
    .sliderProgress{
      width: 60%;
    }
    .slider{
      grid-template-columns: repeat(8, 300px);
    }
  }
  
  @media (max-width: 425px){
    .sliderItem{
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
    .slider{
      grid-template-columns: repeat(8, 248px);
    }
  }
`

const Slider = () => {
    function useWindowSize() {
        const [size, setSize] = useState([window.innerHeight, window.innerWidth])
        useEffect(() => {
            const handleResize = () => {
                setSize([window.innerHeight, window.innerWidth])
            }
            window.addEventListener('resize', handleResize)
        }, [])
        return size
    }

    const [height, width] = useWindowSize();


    const [shift, shiftMethod] = useState(0)
    let res;

    const changeX = (x) => {
        let a = 420 * x
        if (width <= 768){
            a = 320 * x
        }
        if (width < 425){
            a = 268 * x
        }
        if (shift + a > 0 || (x == -1 && res ==8)){
            return
        }
        shiftMethod(shift + a)
    }

    const setActive = () => {

        if (width < 425){
            res = Math.abs(shift) / 268 + 1
        }
        else if(width <= 768){
            res = Math.abs(shift) / 320 + 1
        }
        else if (width < 855){
            res = Math.abs(shift) / 420 + 1
        }
        else{
            res = Math.abs(shift) / 420 + 2
        }
        return res
    }

    const setProgress = () => {
        let res;
        if (width < 425){
            res = ((1 + Math.abs(shift) / 268) / 8) * 100
        }
        else if(width <= 1000){
            if (width < 768){
                res = ((2 + Math.abs(shift) / 320) / 8) * 100
            }
            else{
                res = ((2 + Math.abs(shift) / 420) / 8) * 100
            }
        }
        else{
            res = ((3 + Math.abs(shift) / 420) / 8) * 100
        }
        return (res > 100 ? 100 : res)
    }

    return (
        <Fragment>
            <SliderTag shift={shift} center={setActive()} progress={setProgress()}>
                <div className="slider">
                    <div className="sliderItem">Здравствуйте! Покупала картины в детскую. Вчера получила заказ. Я очень довольна! Хорошое качество картин, насыщенные цвета! Была приятно удивлена как бережно были упакованы картины! Спасибо вам большое за работу!</div>
                    <div className="sliderItem">В первый раз делала заказ, заказала комплект из 4 картин. Долго решалась, если честно. Сама не знаю, что меня останавливало) А тут и скидку получила на первый заказ, что немало порадовало, поэтому не заказать было просто грех). По самим картинам вообще претензий нет, очень качественный и на 100% соответствуют фото на сайте. Да и работа менеджеров и службы доставки порадовала.</div>
                    <div className="sliderItem">Заказываю не первый раз !очень нравится как качество работ,так и скорость исполнения ) заказывал репродукции Ван Гога,некоторые из желаемых мной работ не были представлены на сайте ,но ребята решили эту проблему сформировав индивидуальный заказ)за что огромное спасибо. За картинами только сюда )</div>
                    <div className="sliderItem">Здравствуйте! Покупала картины в детскую. Вчера получила заказ. Я очень довольна! Хорошое качество картин, насыщенные цвета! Была приятно удивлена как бережно были упакованы картины! Спасибо вам большое за работу!</div>
                    <div className="sliderItem">Здравствуйте! Покупала картины в детскую. Вчера получила заказ. Я очень довольна! Хорошое качество картин, насыщенные цвета! Была приятно удивлена как бережно были упакованы картины! Спасибо вам большое за работу!</div>
                    <div className="sliderItem"></div>
                    <div className="sliderItem"></div>
                    <div className="sliderItem"></div>
                </div>
            <div className="sliderNav">
                <div className="sliderProgress">
                    <div className="sliderActiveProgress"></div>
                </div>
                <div className="arrows">
                    <img src={left} alt="left" className='left' onClick={() => changeX(1)}/>
                    <img src={right} alt="right" className='right' onClick={() => changeX(-1)}/>
                </div>
            </div>
            </SliderTag>
        </Fragment>
    )
}


export default Slider


