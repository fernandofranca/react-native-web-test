import React from 'react';
import styled from 'styled-components/native';
import Text from '../Text'

const Title = styled(Text)`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`

/**
 * A simple title component
 * 
 * Should support different levels
 */
export default function StyledTitle(props) {
  return (<Title accessibilityTraits="header" accessibilityComponentType="header" {...props} />)
}

 