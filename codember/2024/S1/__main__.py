from datetime import datetime

timestamp = datetime.strptime("13-11-2024 00:00", "%d-%m-%Y %H:%M").timestamp()
print(int(timestamp) * 1000)

