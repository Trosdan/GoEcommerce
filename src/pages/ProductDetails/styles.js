import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const Content = styled.View`
  background-color: ${colors.white};
  border-radius: 5px;
  margin: 15px;
  padding: 15px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 250px;
  border-width: 1px;
  align-self: center;
`;

export const InfoView = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const Name = styled.Text`
  font-weight: bold;
  color: ${colors.black};
  font-size: 18px;
`;
export const Brand = styled.Text`
  font-weight: bold;
  color: ${colors.regular};
  font-size: 18px;
`;

export const PriveView = styled.View``;

export const Price = styled.Text`
  flex: 1;
  text-align: right;
  justify-content: center;
  font-weight: bold;
  color: ${colors.secundary};
  font-size: 24px;
`;

export const ButtonBuy = styled.TouchableOpacity`
  background-color: ${colors.secundary};
  padding: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonBuyText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: 18px;
`;
