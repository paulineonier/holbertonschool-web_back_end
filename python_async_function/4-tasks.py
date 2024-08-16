#!/usr/bin/env python3
"""
Module for creating asyncio tasks with a delay using task_wait_random.
"""

import asyncio
from typing import List


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns `n` asyncio tasks that call `task_wait_random` with `max_delay`.
    Collects the results and returns them in ascending order.

    Args:
        n (int): The number of tasks to spawn.
        max_delay (int): The maximum delay for each task.

    Returns:
        List[float]: A list of delays returned by the tasks in ascending order.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*tasks)
    return sorted(delays)

