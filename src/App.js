import React from 'react';
import { View, } from 'react-native';
import styled, { css } from 'styled-components/native';

import Text from './components/Text'
import Title from './components/Title'
import Label from './components/Label'
import Article from './components/Article'
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
      <Label>A simple label</Label>
      <ColumnsWrapper>
        <Button onPress={()=>console.log("Button pressed.")}>
          Button's label
        </Button>
      </ColumnsWrapper>
      <Article>
        <Text>Article's text</Text>
      </Article>
    </ComponentWrapper>
  );
}
export default App;
