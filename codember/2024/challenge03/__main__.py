type Trace = list[int]
type Traces = list[Trace]

traces = open("trace.txt").read().split("\n")
traces = [trace.split() for trace in traces]
traces = [list(map(int, trace)) for trace in traces]

last_trace = traces[-1].copy()


def stepsCount(trace: Trace) -> int:
    if trace[0] < 0 or trace[0] >= len(trace):
        return 1
    position = 0
    steps = 0
    while position < len(trace) and position >= 0:
        current = trace[position]
        trace[position] += 1
        position += current
        steps += 1
    return steps


def sumSteps(traces: Traces) -> int:
    sum = 0
    for trace in traces:
        steps = stepsCount(trace)
        sum += steps
    return sum


result = sumSteps(traces)
last = stepsCount(last_trace)

print(result, last)
