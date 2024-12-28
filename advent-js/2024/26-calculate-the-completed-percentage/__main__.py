def get_completed(time_worked: str, total_time: str) -> str:
    def time_to_seconds(time):
        h, m, s = [int(n) for n in time.split(":")]
        return h * 3600 + m * 60 + s

    return f"{round(time_to_seconds(time_worked) / time_to_seconds(total_time) * 100)}%"
