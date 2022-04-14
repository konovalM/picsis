import {Fragment, useState} from "react";
import styled from 'styled-components'
import logo from "../images/logo.png";
import phone from "../images/phone.svg";


const NavTag = styled.nav`
  .burgerMenu {
    display: none;
  }

  .navInner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list {
    display: flex;
    align-items: center;
    justify-self: left;
  }

  .listItem + .listItem {
    margin-left: 78px;
  }

  .logoLink {
    position: relative;
    display: block;
    width: 99px;
    height: 42px;
  }

  .logoLink:before {
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

  .listItemLink {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    opacity: 0.8;
  }

  .phoneLink {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #7D2670;
    display: flex;
    align-items: center;
  }

  .phoneImg {
    margin-right: 10px;
  }

    /*.phoneLink:before{
    content: '';
    position: absolute;
    left: -31px;
    top: 50%;
    width: 21px;
    height: 21px;
    background: url(${phone})center center/cover no-repeat;
    transform: translateY(-50%);
  }*/

  //ADAPTIVE

  @media (max-width: 800px) {
    .listItem + .listItem {
      margin-left: 38px;
    }
  }

  @media (max-width: 700px) {

    .burgerMenu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 32px;
      height: 14px;
      position: relative;
      z-index: 10;
    }

    .burgerMenu::before, .burgerMenu::after {
      content: '';
      width: 32px;
      height: 2px;
      background-color: #7D2670;
      position: absolute;
      left: 0;
    }

    .burgerMenu::before {
      top: 0;
    }

    .burgerMenu::after {
      bottom: 0;
    }

    .menuPart {
      display: block;
      width: 32px;
      height: 2px;
      background-color: #7D2670;
    }

    .phoneNumber {
      display: none;
    }

    .listItem + .listItem {
      margin: 20px 0 0 0;
    }

    .listItemLink {
      font-size: 20px;
    }

    .list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(231, 231, 231, .7);
      height: 100vh;
      position: fixed;
      right: -100%;
      top: 0;
      transition: right 1s;
      width: 100vw;
      z-index: 5;

    }

    .listActive {
      right: 0;
    }
  }
  @media (max-width: 426px) {
    .logoLink {
      width: 72px;
      height: 28px;

      img {

      }

      ::before {
        width: auto;
        left: 0;
        bottom: 0;
        font-size: 7px;
        line-height: 8px;

      }
    }
  }
`


const Nav = () => {

    const [active, activeMethod] = useState(false)

    const changeActive = () => {
        activeMethod(!active)
    }

    return(
        <Fragment>
            <NavTag className="nav">
                <div className="navInner">
                    <div className="burgerMenu" onClick={changeActive}>
                        <span className="menuPart"></span>
                    </div>
                    <div className="logo">
                        <a href="#" className="logoLink">
                            <img src={logo} alt="logotype"/>
                        </a>
                    </div>
                    <ul className={active ? 'list listActive' : 'list'}>
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
                        <a href="tel:+78003024516" className="phoneLink">
                            <img src={phone} alt="phone" className="phoneImg"/>
                            <div className='phoneNumber'>8 (800) 302-45-16</div>
                        </a>
                    </div>
                </div>
            </NavTag>
        </Fragment>
    )
}

export default Nav