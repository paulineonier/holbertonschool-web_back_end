#!/usr/bin/env python3
from typing import List, Tuple, Sequence, Iterable

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes a list of sequences and returns a list of tuples.
    Each tuple contains a sequence and its length.
    """
    return [(i, len(i)) for i in lst]
