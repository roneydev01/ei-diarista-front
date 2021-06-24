import { styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
  .MuiOutLineInput-notchedOutline {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
