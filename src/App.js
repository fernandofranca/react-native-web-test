import React from 'react';
import { View, } from 'react-native';
import styled, { css } from 'styled-components/native';

import Text from './components/Text'
import Title from './components/Title'
import Button from './components/Button'

const ComponentWrapper = styled.View`
  flex:1;
  width: 100%;
  margin-top: 24px;
  padding: 16px;
`

const ColumnsWrapper = styled.View`
  flex-direction: row;
`

const App = (props) => {
  return (
    <ComponentWrapper>
      <Title>Componente de título</Title>
      <Text>Teste com componentes cross-platform</Text>
      <ColumnsWrapper>
        <Button onPress={()=>console.log("Button pressed.")}>
          Button's label
        </Button>
      </ColumnsWrapper>
    </ComponentWrapper>
  );
}
export default App;
