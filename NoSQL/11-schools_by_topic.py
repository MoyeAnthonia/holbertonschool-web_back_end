#!/usr/bin/env python3
"""MongoDb IN ptyhon"""


def schools_by_topic(mongo_collection, topic):
    """Basically, select * from"""
    return list(mongo_collection.find({"topics": topic}))
