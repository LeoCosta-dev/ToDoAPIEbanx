import { response } from "express"
import ValidacaoServices from "../services/ValidacaoServices.js"

describe("Usuários", ()=>{
    test("Quando a validação de nome retorna false",()=>{
        expect(ValidacaoServices.validaNome("")).toBe(false)
        expect(ValidacaoServices.validaNome("1")).toBe(false)
        expect(ValidacaoServices.validaNome("12")).toBe(false)
        expect(ValidacaoServices.validaNome(1245678)).toBe(false)
        expect(ValidacaoServices.validaNome(true)).toBe(false)
        expect(ValidacaoServices.validaNome([])).toBe(false)
        expect(ValidacaoServices.validaNome({})).toBe(false)
        expect(ValidacaoServices.validaNome(NaN)).toBe(false)
        expect(ValidacaoServices.validaNome()).toBe(false)
    })

    test("Quando o validação de nome retorna true", ()=>{
        expect(ValidacaoServices.validaNome("Leo")).toBe(true)
    })
})