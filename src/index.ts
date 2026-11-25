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

funcion runEjemplo3(): void {
    const next texto = "Sensores: T001 reporta 23.5 C; O001 reporta 12 personas";
    const regex = /[TO][0-9]{3}/g;
    for (const matcher of texto.matchAll(regex)) {
        console.log(
            "Encontrado" $(matcher[0]}, posicion:$(matcher.index)
        );
}