network = open("network.txt").read()

network_list = eval(network)
ordered_network_list = sorted(network_list)
ordered_network = [sorted(network) for network in ordered_network_list]

grouped_nodes = [ordered_network[0]]


def saveNodes(network):
    if network[0] in grouped_nodes[-1]:
        grouped_nodes[-1].append(network[1])
    else:
        grouped_nodes.append(network)


for network in ordered_network[1:]:
    saveNodes(network)

result = ""
length = 0

print(grouped_nodes)
for group in grouped_nodes:
    if len(group) <= 2:
        for node in group:
            length += 1
            result += str(node) + ","

# print(result[:-1], length)
