import styled from "styled-components";

export const DjRadioWrapper = styled.div`
  .container {
    height: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    //align-items: flex-start;
    //justify-content: flex-start;

    .track-item {
      position: relative;

      .a-link {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0;
        cursor: pointer;
      }
    }
  }
`
