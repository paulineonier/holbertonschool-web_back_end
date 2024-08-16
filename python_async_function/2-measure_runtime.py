#!/usr/bin/env python3
"""
Module for measuring the execution time of wait_n coroutine.
"""

import time
import asyncio

wait_n = __import__('1-concurrent_coroutines').wait_n

def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay), and
    returns the average time per task.

    Args:
        n (int): The number of wait_random coroutines to spawn.
        max_delay (int): The maximum delay for each coroutine.

    Returns:
        float: The average execution time per task.
    """


    first = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    finish = time.perf_counter()
    total_time = finish - first
    return total_time / n
