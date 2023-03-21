import {expect,  describe, it }from "@jest/globals"; 
import checkGuess from "./checkGuess.js";


describe("Wordle guessing Algorithm test", () => {
    
    it("checks if stringlength differs, errormessage is returned", () => {
        const res = checkGuess("1234","123")
        expect(res).toBe("Fel antal bokstäver")
    })

    it("checks that casing doesnt matter", () => {
        const res = checkGuess("aBcD","AbCd")
        expect(res[0].Letter).toBe("A")
        expect(res[1].Letter).toBe("B")
        expect(res[2].Letter).toBe("C")
    })

    it("checks if string contains a char that is misplaced", () => {
        const res = checkGuess("abcde","xxxxc")
        expect(res[0].Result).toBe("incorrect")
        expect(res[2].Result).toBe("misplaced")
    })
    
    it("checks if chars is at the same index as the other string", () => {
        const res = checkGuess("bxxxc","bxxxc")
        expect(res[0].Result).toBe("correct")
        expect(res[4].Result).toBe("correct")
    })

    it("checks if output is correct ", () => {
        const res = checkGuess("xxxx","xxxx")
        //checks that all elements in array are correct output
        expect(res[0]).toMatchObject({Letter:"X", Result:"correct"})
    })

    it("correct placed letter, makes other instances of letter incorrect", () => {
        // checks that first L is incorrect since next L is the only one and place right
        const res = checkGuess("hallå", "cykla")
        expect(res[2].Result).toBe("incorrect")
    })
    
})