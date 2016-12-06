# -*- coding: utf-8 -*-

import os, re

input = []
input_file_name = os.path.abspath(__file__).split("/")[:-1]
input_file_name.append('input.txt')
with open(os.path.sep.join(input_file_name), 'r') as f:
    input = f.readlines()

def int_string(string_list):
    """
    This absolutely assumed everything is int parseable
    """
    return [int(x) for x in string_list]

def is_tri_possible(a, b, c):
    tri = [a, b, c]
    tri.sort()
    return (tri[0] + tri[1]) > tri[2]

input = [int_string(re.sub(' +', ' ', x.strip()).split(' ')) for x in input]

count = 0
i = 0
while i < len(input):
    a, b, c = input[i], input[i+1], input[i+2]
    for x in range(0, 3):
        if is_tri_possible(a[x], b[x], c[x]):
            count = count + 1
    i = i + 3

print(count)