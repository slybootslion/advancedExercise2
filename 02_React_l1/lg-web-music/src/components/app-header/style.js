import styled from 'styled-components'
import { primaryColor } from '@/assets/style/var'

const navPic = require("@/assets/img/sprite_01.png").default

const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  position: relative;
  font-size: 14px;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;

    .header-left {
      display: flex;

      .logo {
        width: 176px;
        height: 69px;
        display: block;
        background-position: 0 0;
        font-size: 0;
      }

      .select-list {
        display: flex;
        line-height: 70px;

        .select-item {
          position: relative;

          a {
            display: block;
            padding: 0 20px;
            color: #ccc;
          }

          &:nth-last-child(1) a {
            position: relative;

            ::after {
              position: absolute;
              content: "";
              width: 28px;
              height: 19px;
              background-image: url(${navPic});
              background-position: -190px 0;
              top: 20px;
              right: -15px;
            }
          }

          &:hover a, a.active {
            color: #fff;
            background: #000;
            text-decoration: none;
          }

          .active {
            .icon {
              position: absolute;
              display: inline-block;
              width: 12px;
              height: 7px;
              bottom: -1px;
              left: 50%;
              transform: translate(-50%, 0);
              background-position: -226px 0;
            }
          }
        }
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 12px;

      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
          &::placeholder {
            font-size: 12px;
          }
        }
      }

      .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }

      .login {
        cursor: pointer;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .divider {
    width: 100%;
    height: 5px;
    background-color: ${primaryColor};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
export default HeaderWrapper
