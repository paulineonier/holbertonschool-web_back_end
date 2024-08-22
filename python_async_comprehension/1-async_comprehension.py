#!/usr/bin/env python3
"""
This module contains a coroutine that collects 10 random numbers
using an asynchronous comprehension over async_generator.
"""

from typing import List
from 0_async_generator import async_generator

async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers from async_generator
    using an async comprehension.

    Returns:
        A list of 10 random floats.
    """
    return [num async for num in async_generator()]
