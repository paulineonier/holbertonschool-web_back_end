#!/usr/bin/env python3
''' Simple helper function to calculate index ranges for pagination. '''
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''
    Calculate the index range for a given page number and page size.

    Args:
        page (int): page number which the index range to calculated.
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: containing 2 integers = start/end indices of range.
    '''
    index = page * page_size - page_size
    index_1 = index + page_size
    return (index, index_1)
