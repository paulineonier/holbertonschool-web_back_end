#!/usr/bin/env python3
"""
This module contains a coroutine to measure the runtime of executing
async_comprehension four times in parallel.
"""

import asyncio
import time
from typing import List
from 1_async_comprehension import async_comprehension


async def measure_runtime() -> float:
    """
    Coroutine that measures the total runtime of executing async_comprehension
    four times in parallel.

    Returns:
        The total runtime in seconds as a float.
    """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.perf_counter()

    return end_time - start_time²
