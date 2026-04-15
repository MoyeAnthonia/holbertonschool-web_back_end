#!/usr/bin/env python3
""" Annotation function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Multiplies by a value"""
    def multiply(value: float) -> float:
        return multiplier * value
    return multiply
