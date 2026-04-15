#!/usr/bin/env python3
""" Annotation function"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Floors a float and returns it as a string."""
    return sum(mxd_lst)
