import React from 'react';
import { View, } from 'react-native';
import styled, { css } from 'styled-components/native';

const ComponentWrapper = styled.View`
  flex:1;
  width: 100%;
  margin-top: 24px;
  padding: 16px;
`

const ColumnsWrapper = styled.View`
  flex-direction: row;
`

const Text = styled.Text`
  font-size: 16px;
  text-align: left;
`

const Title = styled(Text)`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`

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

const App = (props) => {
  return (
    <ComponentWrapper>
      <Title>Componente de título</Title>
      <Text>Teste com componentes cross-platform</Text>
      <ColumnsWrapper>
        <ButtonWrapper onPress={()=>console.log("Button pressed.")}>
          <ButtonText>Botão teste</ButtonText>
        </ButtonWrapper>
      </ColumnsWrapper>
    </ComponentWrapper>
  );
}
export default App;
