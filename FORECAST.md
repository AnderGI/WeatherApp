dt: The timestamp of the data in Unix time (UTC) for the specific 3-hour interval.

main: Contains additional main weather parameters, including:

temp: The temperature in Kelvin.
feels_like: The "feels-like" temperature in Kelvin.
temp_min: The minimum temperature in Kelvin.
temp_max: The maximum temperature in Kelvin.
pressure: The atmospheric pressure in hPa (hectopascals).
sea_level: The atmospheric pressure at sea level (if available) in hPa.
grnd_level: The atmospheric pressure at ground level (if available) in hPa.
humidity: The relative humidity as a percentage.
weather: An array that contains weather condition information, including:

id: A weather condition ID that corresponds to specific weather conditions (e.g., clear sky, rain, snow).
main: A general weather condition group (e.g., "Thunderstorm," "Drizzle," "Rain," "Snow," "Clear," "Clouds," etc.).
description: A detailed weather condition description (e.g., "light rain," "broken clouds," "heavy snow," etc.).
icon: An icon code representing the weather condition (e.g., "01d" for clear sky during the day).
clouds: The cloudiness as a percentage.

wind: Contains wind-related parameters, including:

speed: The wind speed in meters per second.
deg: The wind direction in degrees.
visibility: The visibility in meters.

pop: The probability of precipitation as a decimal value ranging from 0 to 1.

rain: The amount of rainfall in the last 3 hours, if applicable (measured in millimeters).

snow: The amount of snowfall in the last 3 hours, if applicable (measured in millimeters).
