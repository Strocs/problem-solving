nodes = open("result.txt").read().split(",")
nodes = [int(n) for n in nodes]

# is prime
# sum of digits is prime


def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


def sum_of_digits(n):
    return sum([int(d) for d in str(n)])


result = []
for n in nodes:
    if is_prime(sum_of_digits(n)) and is_prime(n):
        result.append(n)


print(f"{len(result)}-{result[2]}")
