#!/usr/bin/env python3
""" Annotation function"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """string and int/float annoation"""
    return (k, float(v ** 2))
