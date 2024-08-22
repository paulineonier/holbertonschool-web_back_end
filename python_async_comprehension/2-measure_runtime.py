#!/usr/bin/env python3
'''
This module contains a coroutine to measure the runtime of executing
async_comprehension four times in parallel.
'''


import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    '''
    Coroutine that measures the total runtime of executing async_comprehension
    four times in parallel.

    Returns:
        The total runtime in seconds as a float.
    '''
    start = time.perf_counter()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())
    end = time.perf_counter()
    return end - start
