def compile(instructions):
    registry = {}
    index = 0

    def createReg(reg):
        registry.setdefault(reg, 0)

    def mov(value, reg):
        createReg(reg)
        try:
            registry[reg] = int(value)
        except ValueError:
            registry[reg] = registry[value]
        nonlocal index
        index += 1

    def inc(reg):
        createReg(reg)
        registry[reg] += 1
        nonlocal index
        index += 1

    def dec(reg):
        createReg(reg)
        registry[reg] -= 1
        nonlocal index
        index += 1

    def jmp(reg, jump):
        createReg(reg)
        nonlocal index
        index = int(jump) if registry[reg] == 0 else index + 1

    actions = {"MOV": mov, "INC": inc, "DEC": dec, "JMP": jmp}

    while index < len(instructions):
        action, *instruction = instructions[index].split(" ")
        print({"index": index, "reg": registry, "action": action})
        actions[action](*instruction)

    return registry["A"]
