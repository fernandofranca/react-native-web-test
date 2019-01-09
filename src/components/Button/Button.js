import React from 'react';
import styled from 'styled-components/native';
import Text from '../Text'

const ButtonWrapper = styled.TouchableOpacity`
  background: #03a9f4;
  border-radius: 3px;
  padding: 8px;
  margin: 8px 4px;
`

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: left;
  color: #fff;
`

export default function Button({children, onPress}) {
  return (
    <ButtonWrapper onPress={onPress} accessibilityRole="button">
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  )
}