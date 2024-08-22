#!/usr/bin/env python3
"""
This module contains a coroutine that collects 10 random numbers
using an asynchronous comprehension over async_generator.
"""


from typing import List
Vector = List[float]

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> Vector:
    '''
    Coroutine that collects 10 random numbers from async_generator
    using an async comprehension.

    Returns:
        A list of 10 random floats.
    '''
    Final = [y async for y in async_generator()]
    return Final
