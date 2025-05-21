import styled from "styled-components/native";

import { Platform, StatusBar } from 'react-native'

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
`;

export const TaskEmptyContainer = styled.View`
  margin-top: 64px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const TaskEmptyImage = styled.Image`
  margin-bottom: 12px;
  width: 150px;
  height: 150px;
`;

export const CenteredContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.5;
`;