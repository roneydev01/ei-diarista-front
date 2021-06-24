import SafeEnviroment from 'ui/components/feedback/SafeEnveroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextField from 'ui/components/inputs/TextField/TextField';

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade.'
        }
      />

      <TextField label={'Digite seu CEP'} fullWidth />

      <UserInformation
        name={'Roney Freitas'}
        picture={'https://github.com/roneydev01.png'}
        rating={4}
        description={'Fortaleza-CE'}
      />
    </div>
  );
}
