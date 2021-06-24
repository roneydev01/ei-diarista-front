import SafeEnviroment from 'ui/components/feedback/SafeEnveroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';

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

      <TextFieldMask
        mask={'99.999-999'}
        label={'Digite seu CEP'}
        fullWidth
        variant={'outlined'}
      />

      <UserInformation
        name={'Roney Freitas'}
        picture={'https://github.com/roneydev01.png'}
        rating={4}
        description={'Fortaleza-CE'}
      />
    </div>
  );
}
