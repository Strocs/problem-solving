# read input and parse plain text into list of list of integers, ex: [[1,2,3,4], [5,6,7,8]]
input = [
    [[int(n) for n in list(x)] for x in t]
    for t in [i.split("   ") for i in open("input.txt").read().split("\n")]
]


# sort method
def insertion_sort(arr: list[int]):
    for i, n in enumerate(arr):
        curr = n
        j = i - 1
        while j >= 0 and arr[j] > curr:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = curr
    return arr


def sort_and_compare(arrs: list[list[int]]) -> int:
    try:
        arrs[0] = insertion_sort(arrs[0])
        arrs[1] = insertion_sort(arrs[1])
        sum = 0
        for i, n in enumerate(arrs[0]):
            sum += abs(n - arrs[1][i])
        return sum
    except IndexError:
        return 0


def get_total(input: list[list[list[int]]]) -> int:
    total = 0
    iter = 0
    for lst in input:
        total += sort_and_compare(lst)
        iter += 1
    return total


print(get_total(input))
