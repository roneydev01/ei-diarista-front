import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/userInterface';
import { ValidationService } from 'data/services/ValidationService';

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

  return {
    cep,
    setCep,
    cepValido,
  };
}
