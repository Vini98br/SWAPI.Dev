import styled from 'styled-components';

export const TabsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 0 0 12px -8px rgb(0 0 0 / 60%);
`;

export const TabLabel = styled.div<{ selected?: boolean }>`
  font-size: 32px;
  @media (max-width: 966px) {
    font-size: 28px !important;
  }
  color: black;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: -1px;
  border-bottom: ${props => props.selected && `2px solid black`};
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const TabsWrapper = styled.div`
  display: flex;
  div {
    margin-right: 32px;
    padding-bottom: 16px;
  }
`;

export const Container = styled.div<{ size: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${TabLabel} {
    font-size: ${props => props.size === 'small' ? '22px' : '32px'};
  }
`;