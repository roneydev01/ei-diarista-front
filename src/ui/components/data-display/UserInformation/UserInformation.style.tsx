import { styled } from '@material-ui/core';
import { Avatar, Rating } from '@material-ui/core';

export const UserInformationContainer = styled('div')``;

export const UserName = styled('div')`
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)``;

export const RatingStyled = styled(Rating)`
  font-size: 14px;
`;
