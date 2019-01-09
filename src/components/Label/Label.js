import React from 'react';
import styled from 'styled-components/native';
import Text from '../Text'

const StyledLabel = styled(Text)`
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: #ccc;
`

export default function Label(props) {
  return (<StyledLabel accessibilityTraits="label" accessibilityComponentType="label" {...props} />)
}
 