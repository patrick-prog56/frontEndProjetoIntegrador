import { Postagem } from "./Postagem"

export class Tema{

    public id: number
    public nomeTema: string
    public descricaoTema: string
    public palavrasChaveTema: string
    public postagem: Postagem[]
}