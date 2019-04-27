import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  cursor: pointer;
  fill: #D8DEE9;
  height: 3rem;
  position: absolute;
  right: 0;
  top: 0.5rem;
  width: 3rem;
`;

export default ({ onClick }) => (
<Icon onClick={() => onClick()} version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100"><g><path d="M32.113,43.215c-1.328-1.362-3.513-1.394-4.876-0.063l-4.307,4.195c-0.091,0.137-0.322,0.346-0.587,0.573   c0.815-13.113,10.545-23.874,23.71-25.88c10.168-1.551,20.349,2.586,26.57,10.796c0.682,0.897,1.797,1.35,2.913,1.179   c0.5-0.076,0.98-0.279,1.387-0.587c0.897-0.682,1.35-1.796,1.182-2.911c-0.077-0.503-0.281-0.982-0.589-1.389   c-7.58-10.005-19.99-15.046-32.387-13.156C28.946,18.44,16.99,31.75,16.169,47.918c-0.088-0.095-0.163-0.184-0.2-0.254   l-4.595-4.715c-1.329-1.36-3.514-1.391-4.876-0.064c-1.365,1.33-1.392,3.514-0.063,4.88l10.235,10.502   c0.696,0.715,1.628,1.063,2.553,1.04c0.839-0.021,1.672-0.345,2.322-0.979l10.504-10.235C33.414,46.765,33.442,44.58,32.113,43.215   z M19.342,52.538c0.041-0.001,0.081-0.004,0.121-0.008C19.425,52.577,19.386,52.577,19.342,52.538z"/><path d="M93.564,52.401L83.331,41.898c-0.696-0.713-1.629-1.062-2.554-1.04c-0.839,0.02-1.674,0.347-2.322,0.979   L67.949,52.072c-1.364,1.331-1.393,3.516-0.063,4.88c1.329,1.36,3.513,1.395,4.875,0.063l4.31-4.196   c0.084-0.127,0.29-0.317,0.531-0.524c-0.908,13.016-10.606,23.67-23.699,25.667c-10.169,1.549-20.35-2.587-26.569-10.796   c-0.682-0.898-1.797-1.35-2.912-1.18c-0.5,0.075-0.981,0.278-1.388,0.587c-0.898,0.681-1.351,1.797-1.181,2.912   c0.077,0.501,0.281,0.981,0.588,1.388c7.581,10.005,19.99,15.046,32.388,13.155c16.143-2.462,28.079-15.716,28.949-31.832   c0.114,0.115,0.209,0.225,0.253,0.308l4.595,4.715c1.33,1.36,3.514,1.391,4.874,0.064C94.867,55.952,94.894,53.768,93.564,52.401z"/></g></Icon>
);
