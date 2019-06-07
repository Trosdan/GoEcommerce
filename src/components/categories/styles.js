import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.View`
  align-items: center;
  background-color: ${colors.primary};
`;

export const CategoriesList = styled.FlatList``;
export const Content = styled.TouchableOpacity`
  padding: 10px 20px;
`;
export const ItemName = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: ${colors.light};
`;

export const ItemNameSelect = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: ${colors.white};
`;

export const ContentSelect = styled.TouchableOpacity`
  padding: 10px 20px;
  border-bottom-width: 5px;
  border-color: ${colors.white};
`;
