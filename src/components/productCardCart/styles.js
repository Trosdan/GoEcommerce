import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  margin: 15px 20px;
  flex-direction: row;
  background-color: ${colors.white};
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  margin: 0px 10px;
  width: 50px;
  height: 80px;
`;
export const InfoView = styled.View`
  margin: 10px;
  flex: 1;
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

export const QuantityInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
  maxLength: 2,
})`
  padding: 5px 5px;
  border-color: ${colors.regular};
  border-radius: 5px;
  border-width: 1px;
  margin: 10px;
`;
export const RemoveItem = styled.TouchableOpacity`
  margin: 10px;
`;
