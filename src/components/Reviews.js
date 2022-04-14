import {Fragment} from "react";
import styled from 'styled-components'
import Slider from "./Slider";

const ReviewsTag = styled.section`
  padding: 50px 0;
  .title{
    font-weight: 300;
    font-size: 64px;
    line-height: 77px;
    color: #000000;
    margin-bottom: 25px;
  }
  .container{
    overflow: hidden;
  }
  
  // ADAPTIVE
  @media (max-width: 768px){
    padding: 20px 0;
    .title{
      font-size: 50px;
      margin-bottom: 25px;
    }
  }
  
  @media (max-width: 425px){
    padding: 10px 0;
    .title{
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 20px;
    }
  }
`

const Reviews = () => {
    return (
        <Fragment>
            <ReviewsTag>
                <div className="container">
                    <h2 className="title">
                        Отзывы клиентов
                    </h2>
                    <Slider/>
                </div>
            </ReviewsTag>
        </Fragment>
    )
}

export default Reviews