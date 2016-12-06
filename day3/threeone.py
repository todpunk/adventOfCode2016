# -*- coding: utf-8 -*-

import os, re

input = []
input_file_name = os.path.abspath(__file__).split("/")[:-1]
input_file_name.append('input.txt')
with open(os.path.sep.join(input_file_name), 'r') as f:
    input = f.readlines()

def int_string_sort(string_list):
    """
    This absolutely assumed everything is int parseable
    """
    return [int(x) for x in string_list]

input = [int_string_sort(re.sub(' +', ' ', x.strip()).split(' ')) for x in input]
for x in input:
    x.sort();

count = 0
for tri in input:
    if (tri[0] + tri[1]) > tri[2]:
        count = count + 1

print(count)