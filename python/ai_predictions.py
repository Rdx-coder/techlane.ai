import json
import sys

try:
    # Simulate AI model predictions
    predictions = [
        {"input": [0.1, 0.2, 0.3], "prediction": 1, "actual": 1},
        {"input": [0.3, 0.1, 0.4], "prediction": 2, "actual": 2},
    ]

    # Print the JSON data
    print(json.dumps(predictions))

    # Exit the script gracefully
    sys.exit(0)
except Exception as e:
    sys.exit(1)
