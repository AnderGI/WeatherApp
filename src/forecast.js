//generar el url

export const forecast =(lat, long) => {
    const part1 = "https://api.openweathermap.org/data/2.5/forecast?lat=";
    const part2 = lat;
    const part3 = "&lon=";
    const part4 = long;
    const part5 = "&appid=";
    const part6 = "3bceb3bcb8dfde5c093bb5f845da74a6";
    const part7 = part1 + part2 + part3 + part4 + part5 + part6;
    return part7;

}