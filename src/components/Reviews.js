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