#!/usr/bin/env python3
"""
This module contains an asynchronous generator that yields random numbers.
"""

import asyncio
import random
from typing import Generator

async def async_generator() -> Generator[float, None, None]:
    """
    Coroutine that asynchronously generates 10 random numbers between 0 and 10.
    Each number is yielded after a 1-second delay.

    Returns:
        A generator yielding random floats between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
