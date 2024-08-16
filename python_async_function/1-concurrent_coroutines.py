#!/usr/bin/env python3
"""
This module provides asynchronous functions to simulate delays
and to manage multiple asynchronous tasks.
"""

import asyncio
from typing import List
from random import uniform


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay.

    Args:
        max_delay (int): maximum delay (in seconds) to wait. Defaults to 10.

    Returns:
        float: The actual delay (in seconds) that was waited.
    """
    delay = uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn n times specified max_delay return all delays ascending order.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): The maximum delay (in seconds) for each wait_random.

    Returns:
        List[float]: A list of all delays in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)
    return delays
