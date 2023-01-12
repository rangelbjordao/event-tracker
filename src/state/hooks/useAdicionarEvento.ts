import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../util"
import { listaDeEventosState } from "../atom"

const useAdicionarEvento = () => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  return (evento: IEvento) => {
    const hoje = new Date()
    if (evento.inicio < hoje) {
      throw new Error("Eventos nao podem ser cadastrados com a data menor do q a atual")
    }
    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
  }

}

export default useAdicionarEvento