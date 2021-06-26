//Validade CEP
export const ValidationService = {
  cep(cep = ''): boolean {
    //Altera tudo que não for digito por uma string vazia e verifica a quantidade que restou
    return cep.replace(/\D/g, '').length === 8;
  },
};
