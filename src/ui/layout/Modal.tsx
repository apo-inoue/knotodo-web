import React, { FC } from 'react';
import { Container } from './Container';
import { Card } from './Card';

const StyledModal: FC = ({ children }) => {
  return (
    <Container>
      <Card m={20} boxShadow={3.84}>
        {children}
      </Card>
    </Container>
  );
};

export { StyledModal as Modal };
