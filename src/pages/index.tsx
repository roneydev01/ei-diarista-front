import SafeEnviroment from 'ui/components/feedback/SafeEnveroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@material-ui/core';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisConatiner,
} from 'ui/styles/pages/index.style';

import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const { cep, setCep, cepValido } = useIndex();

  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade.'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          <Typography color={'error'}>CEP inválido</Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisConatiner>
            <UserInformation
              name={'Roney Freitas'}
              picture={'https://github.com/roneydev01.png'}
              rating={4}
              description={'Fortaleza-CE'}
            />
            <UserInformation
              name={'Roney Freitas'}
              picture={'https://github.com/roneydev01.png'}
              rating={4}
              description={'Fortaleza-CE'}
            />
            <UserInformation
              name={'Roney Freitas'}
              picture={'https://github.com/roneydev01.png'}
              rating={4}
              description={'Fortaleza-CE'}
            />
            <UserInformation
              name={'Roney Freitas'}
              picture={'https://github.com/roneydev01.png'}
              rating={4}
              description={'Fortaleza-CE'}
            />
            <UserInformation
              name={'Roney Freitas'}
              picture={'https://github.com/roneydev01.png'}
              rating={4}
              description={'Fortaleza-CE'}
            />
            <UserInformation
              name={'Roney Freitas'}
              picture={'https://github.com/roneydev01.png'}
              rating={4}
              description={'Fortaleza-CE'}
            />
          </ProfissionaisConatiner>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
