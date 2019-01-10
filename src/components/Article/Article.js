import React from 'react';
import styled from 'styled-components/native';

const StyledArticle = styled.View`
  padding: 16px;
  background: #ffeb3b;
`
/**
* @render react
* @name Article
* @example
* <Article>Article content</Article>
*/
export default function Article(props) {
  return (<StyledArticle accessibilityTraits="Article" accessibilityComponentType="Article" {...props} />)
}
 