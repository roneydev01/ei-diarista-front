import { styled } from '@material-ui/core';
import { AppBar } from '@material-ui/core';

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: opx 5px 4px rgba(0, 0, 0, 0.05);

  //Aumertar a altura quando a tela for acima do tamanho médio
  ${({ theme }) => theme.breakpoints.up('md')} {
    .MuiToolbar-root {
      height: 100px;
    }
  }
  //Ajustar ao centro quando a tela for abaixo do tamanho médio
  ${({ theme }) => theme.breakpoints.down('md')} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled('img')`
  height: 25px;

  //Aumertar tamanho quando a tela for acima do tamanho médio
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 47px;
  }
`;
