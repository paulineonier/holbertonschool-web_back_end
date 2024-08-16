#!/usr/bin/env python3
"""
Module for measuring the execution time of wait_n coroutine.
"""

import time
import asyncio
from concurrent_coroutines import wait_n  # Adjust the import path if necessary

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
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()

    total_time = end_time - start_time
    return total_time / n
