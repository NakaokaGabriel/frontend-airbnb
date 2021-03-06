import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface SearchProps {
  searchMenu: boolean;
}

export const Container = styled.div`
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 0;
  }
`;

export const Search = styled.div`
  border-radius: 4px;
  position: relative;

  > .form-input {
    background: #fff;
    display: block;
    position: relative;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    width: 100%;
    z-index: 9;

    @media screen and (min-width: 1024px) {
      display: none;
    }

    > input {
      cursor: pointer;
      width: 100%;
      background: none;
      border: 1px solid ${colors.middleGray};
      border-radius: 4px;
      padding: 12px 0 10px 10px;
      color: ${colors.middleGray};
      font-size: 16px;

      &::placeholder {
        color: ${colors.middleGray};
        font-size: 16px;
        font-weight: bold;
      }
    }

    > div {
      position: absolute;
      right: 10px;
      top: 50%;
      height: 30px;
      width: 30px;
      transform: translateY(-50%);
      border: none;
      border-radius: 1000px;
      background: ${colors.red};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Form = styled.form<SearchProps>`
  display: ${(props) => (props.searchMenu ? 'block' : 'none')};
  padding: 10px 20px;
  background: #fff;
  width: 100%;
  border-radius: 0 0 4px 4px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    background: none;
    padding: 10px 0;
  }

  .form-input {
    > button {
      background: ${colors.red};
      border: none;
      border-radius: 4px;
      display: block;
      width: 100%;
      padding: 10px;
      text-align: left;
      color: #fff;
      font-weight: bold;

      @media screen and (min-width: 1024px) {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1000px;
      }

      svg {
        vertical-align: middle;
        margin-right: 10px;

        @media screen and (min-width: 1024px) {
          margin-right: 0;
        }
      }

      @media screen and (min-width: 1024px) {
        span {
          display: none;
        }
      }
    }
  }
`;
