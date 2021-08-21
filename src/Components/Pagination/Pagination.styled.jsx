import styled from '@emotion/styled/macro';

export const StyledPaginateContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }
  .item {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    transform: scale(1.1);
  }
  .activeItem {
    background-color: #2196f3;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
  }
  .previous {
    width: 40px;
    height: 40px;
    transform: scale(1.1);
    margin-right: 8px;
  }
  .next {
    width: 40px;
    height: 40px;
    transform: scale(1.1);
    margin-left: 8px;
  }
  .break-me {
    width: 50px;
    height: 50px;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 100%;
    height: 100%;
    &:hover {
      background-color: #2196f3;
      border-radius: 4px;
      color: #fff;
    }
  }
  .previousLink {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    &:hover {
      background-color: #2196f3;
      border-radius: 4px;
      color: #fff;
    }
  }
  .nextLink {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    &:hover {
      background-color: #2196f3;
      border-radius: 4px;
      color: #fff;
    }
  }
  .breakLink {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;
