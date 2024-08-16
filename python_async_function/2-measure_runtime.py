#!/usr/bin/env python3
import time
from 1-concurrent_coroutines.py import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure execution time for wait_n, return the average time per call.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): The maximum delay for wait_random.

    Returns:
        float: The average time per call.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()

    total_time = end_time - start_time
    return total_time / n
