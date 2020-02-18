import {Calduladora} from "../calculadora"

describe("calculadora",()=>{
    it("suma correcta", ()=>{
        let resEsperado=5
        let calc= new Calduladora()
        let resObtenido=calc.sumar(3,2)

        expect(resEsperado).toEqual(resObtenido)
    })

})
