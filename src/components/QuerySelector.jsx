import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 2rem;
  font-size: 1.4rem;
`;

export default ({
  onChange,
  value
}) => {
  return (
    <div>
      <Input onChange={(e) => onChange(e.target.value)} type="text" value={value} />
    </div>
  );
};
