import { styled } from '@material-ui/core/styles';

//Utilizando rrecurso do Material-UI Theme
export const SafeEnviromentContainer = styled('div')`
  text-align: right;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;
