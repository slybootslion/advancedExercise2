import styled from 'styled-components';
import { primaryColor } from '../../../../../../assets/style/var'

const pic1 = require("@/assets/img/banner_sprite.png").default
const pic2 = require("@/assets/img/download.png").default

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;

    display: flex;
    position: relative;

    .banner-left {
      width: 730px;

      .banner-item {
        overflow: hidden;
        height: 270px;

        .image {
          display: inline-block;
          height: 100%;
          width: 100%;
        }
      }

      .slick-dots {
        li {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;

          &.slick-active {
            button {
              background-color: ${primaryColor};
            }
          }

          button {
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
        }
      }
    }

    .banner-right {
      a {
        display: block;
        width: 254px;
        height: 270px;
        background: url(${pic2});
      }
    }

    .banner-control {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);

      .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${pic1});
        background-color: transparent;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, .1);
        }
      }

      .left {
        left: -68px;
        background-position: 0 -360px;
      }

      .right {
        right: -68px;
        background-position: 0 -508px;
      }
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "",
  target: "_blank"
})`

`
