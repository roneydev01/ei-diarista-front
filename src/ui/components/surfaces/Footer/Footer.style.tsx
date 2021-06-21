import { styled } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

export const FooterStyled = styled('footer')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  //Dá espaço entre os elementos <Box>
  gap: ${({ theme }) => theme.spacing(2)};
  //Quando diminuir a tela as imagens caem para a parte debaixo
  flex-wrap: wrap;
  //Quando tiver abaixo menor que o tamanho médio, será adicionado um espaço estre os <Box>
  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={'h2'} variant={'body2'} {...props} />
))`
  font-weight: bold;
`;

export const AppList = styled('ul')`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};

  img {
    width: 122px;
  }
`;
