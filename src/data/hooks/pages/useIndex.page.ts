import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/userInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState(''),
    //useMemo para memorizar e manter o valor sem precisar recalcular enquanto outras funçoes são executadas, ou seja o cepValido só  irá ser executado quando o cep for alterado.
    cepValido = useMemo(() => {
      return ValidationService.cep(cep);
    }, [cep]),
    [erro, setErro] = useState(''),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
    [diaristasRestantes, setDiaristasRestantes] = useState(0);

  //Consultando dados da API

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro('');

    try {
      //Pega as diaristas e quantidade do cep  infomado
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[];
        quantidade_diaristas: number;
      }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));

      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
      setBuscaFeita(true);
      setCarregando(false);
    } catch (error) {
      setErro('CEP não encontrado');
      setCarregando(false);
    }
  }

  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  };
}
