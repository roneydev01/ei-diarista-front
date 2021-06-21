import React from 'react';
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ marginTop: '16px' }}>
            E-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos a melhor profiddional com
            total segurança e praticidade! São milhares de clientes satisfeitos
            por todo o país.
          </Typography>
        </Box>
        <Box>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={'/'} target={'__blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
              </a>
            </li>
            <li>
              <a href={'/'} target={'__blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
              </a>
            </li>
          </AppList>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
