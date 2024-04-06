import styled from 'styled-components';

export const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DeleteModalTitle = styled.h2`
  font-family: 'roboto', sans-serif;
  color: var(--primary-txt-color);
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;
`;

export const DelBtn = styled.button`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 20px;
  padding: 8px 30px;
  background: var(--red-color);
  border: none;
  color: var(--white-color);
  border-radius: 10px;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const CancelBtn = styled.button`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 20px;
  padding: 8px 30px;
  background: var(--light-grey-color);
  border: none;
  color: var(--primary-color);
  border-radius: 10px;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const TitleSvgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteModalText = styled.p`
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 20px;
  color: var(--primary-txt-color);
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
