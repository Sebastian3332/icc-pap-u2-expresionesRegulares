funcion main() void {
    runEjemplo1();
}

funcion runEjemplo1(): void {
    // EXPRESION REGULAR   
    const pattron = /^ab*$/;^
    const palabras: string[] = [
        "a", "ab", "abbb", "abab", "b", ""
    ];
    // P -> for p in palabras:
    // J -> for(String p : palabras){}
    for(cons p of palabras) {
        console.log("${p} -> ${pattron.test(p)}");
    }
}
