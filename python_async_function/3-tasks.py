#!/usr/bin/env python3
import asyncio
from basic_async_syntax import wait_random

def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Creates an asyncio.Task that wraps the wait_random coroutine.
    
    Args:
        max_delay (int): The maximum delay for wait_random.
    
    Returns:
        asyncio.Task: The created Task object.
    """
    return asyncio.create_task(wait_random(max_delay))

