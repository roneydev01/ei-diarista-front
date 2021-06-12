import React from 'react';

import { SafeEnviromentContainer } from './SafeEnviroment.style';
import { Container } from '@material-ui/core';

const SafeEnviroment = () => {
  return (
    <SafeEnviromentContainer>
      <Container>
        Ambiente Seguro
      </Container>
    </SafeEnviromentContainer>
  );
}

export default SafeEnviroment;