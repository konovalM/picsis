import {Fragment} from "react";
import styled from 'styled-components'
import logo from "../images/logo.png";
import phone from "../images/phone.svg";


const NavTag = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .list{
    display: flex;
    align-items: center;
    justify-self: left;
  }
  .listItem + .listItem{
    margin-left: 78px;
  }
  .logoLink{
    position: relative;
    display: block;
    width: 99px;
    height: 42px;
  }
  .logoLink:before{
    content: 'модульные картины';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 102px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.03em;
    color: #7D2670;
    text-align: center;
  }
  .listItemLink{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.8;
  }
  .phoneLink{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #7D2670;
    display: block;
    position: relative;
  }
  .phoneLink:before{
    content: '';
    position: absolute;
    left: -31px;
    top: 50%;
    width: 21px;
    height: 21px;
    background: url(${phone})center center/cover no-repeat;
    transform: translateY(-50%);
  }
`


const Nav = () => {
    return(
        <Fragment>
            <NavTag className="nav">
                <div className="logo">
                    <a href="#" className="logoLink">
                        <img src={logo} alt="logotype"/>
                    </a>
                </div>
                <ul className='list'>
                    <li className='listItem'>
                        <a href="#" className='listItemLink'>Продукция</a>
                    </li>
                    <li className='listItem'>
                        <a href="#" className='listItemLink'>Оплата</a>
                    </li>
                    <li className='listItem'>
                        <a href="#" className='listItemLink'>Доставка</a>
                    </li>
                    <li className='listItem'>
                        <a href="#" className='listItemLink'>Отзывы</a>
                    </li>
                </ul>
                <div className="phone">
                    <a href="tel:+78003024516" className="phoneLink">8 (800) 302-45-16</a>
                </div>
            </NavTag>
        </Fragment>
    )
}

export default Nav