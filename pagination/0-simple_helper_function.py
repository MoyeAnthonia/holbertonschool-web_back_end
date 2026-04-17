#!/usr/bin/env python3

def index_range(page, page_size):
    """Simple helper function"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
