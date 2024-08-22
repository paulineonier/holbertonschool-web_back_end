#!/usr/bin/env python3
''' Hypermedia pagination '''
import csv
import math
from typing import Dict, List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the Server instance with an empty dataset."""
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Load and cache the dataset from the CSV file if not already cached.

        Returns:
            List[List]: A list of rows from the CSV file, where each row is a list of strings.
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        '''Retrieve a specific page of data.

        Args:
            page (int): The page number to retrieve (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            List[List]: A list of rows for the specified page.
        '''
        assert type(page_size) is int and type(page) is int
        assert page > 0
        assert page_size > 0
        
        self.dataset()
        
        i = index_range(page, page_size)
        
        if i[0] >= len(self.__dataset):
            return []
        else:
            return self.__dataset[i[0]:i[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        '''Retrieve pagination metadata along with the data for a specific page.

        Args:
            page (int): The page number to retrieve (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            Dict: A dictionary containing pagination metadata and the data for the page.
        '''
        dataset_items = len(self.dataset())
        
        data = self.get_page(page, page_size)
        
        total_pages = math.ceil(dataset_items / page_size)
        
        p = {
            "page": page,
            "page_size": page_size if page < total_pages else 0,
            "data": data,
            "next_page": page + 1 if page + 1 <= total_pages else None,
            "prev_page": page - 1 if page - 1 > 0 else None,
            "total_pages": total_pages
        }
        return p


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''Calculate the start and end indices for pagination.

    Args:
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start index and end index for the page.
    '''
    index = page * page_size - page_size
    
    index_1 = index + page_size
    
    return (index, index_1)

