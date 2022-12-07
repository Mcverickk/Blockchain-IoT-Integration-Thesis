#!/usr/bin/python -tt

import time
import board
import adafruit_dht
import psutil
import json
# We first check if a libgpiod process is running. If yes, we kill it!
for proc in psutil.process_iter():
    if proc.name() == 'libgpiod_pulsein' or proc.name() == 'libgpiod_pulsei':
        proc.kill()
sensor = adafruit_dht.DHT11(board.D23)
while True:
    try:
        temp = sensor.temperature
        humidity = sensor.humidity
        print("Temperature: {}*C   Humidity: {}% ".format(temp, humidity))
        
        dictionary = {
        "temperature": temp,
        "humidity": humidity
        }
        
        json_object = json.dumps(dictionary, indent=4)
        
        with open("data.json", "w") as outfile:
            outfile.write(json_object)
         
    except RuntimeError as error:
        print(error.args[0])
        time.sleep(10.0)
        continue
    except Exception as error:
        sensor.exit()
        raise error
    time.sleep(1.0)