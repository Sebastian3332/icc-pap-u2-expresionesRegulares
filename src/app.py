def main():
    runEjemplo1()
    runEjemplo2()
    runEjemplo3()

def runEjemplo1():
    petter = r"ab*"
    palabras = ["a, "ab, "abbb", "abab", "b", ""]
    for p in palabras:
        res = re.match(patter, p)
        print(f"{p} => {res}")

def runEjemplo2():
    pass

def runEjemplo3():
    pass




if __name__ == "__main__":
    main()

