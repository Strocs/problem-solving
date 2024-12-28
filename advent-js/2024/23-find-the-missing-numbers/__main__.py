def find_missing_numbers(nums):
    result = []
    i = 1
    while i <= sorted(nums)[-1]:
        if i not in nums:
            result.append(i)
        i += 1
    return result
