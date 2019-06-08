import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ShopCartList = styled.FlatList``;

export const ValueView = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
export const ValueTitle = styled.Text`
  font-weight: bold;
  color: ${colors.regular};
`;
export const ValueText = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  font-size: 28px;
  color: ${colors.secundary};
`;
