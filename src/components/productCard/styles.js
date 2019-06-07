import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.white};
  border-radius: 5px;
  flex: 1;
  margin: 15px;
  padding: 10px;
`;

export const Image = styled.Image`
  width: 150px;
  height: 200px;
  border-width: 1px;
  align-self: center;
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
export const Price = styled.Text`
  font-weight: bold;
  color: ${colors.secundary};
  font-size: 18px;
`;
