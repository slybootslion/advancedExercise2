import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  .content {
    background: url(${require("@/assets/img/wrap-bg.png").default}) repeat-y;
    background-color: #fff;
    display: flex;

    .player-left {
      width: 710px;
      
      .pic {
        width: 206px;
        height: 205px;
        
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .player-rigth {
      width: 270px;
      padding: 20px 40px 40px 30px;
    }
  }
`
