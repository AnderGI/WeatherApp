//Con el nombre y el codigo del pais segun iso 3166 se consiguen lat y long
//funcion para generar el url

const geocording = (city,state,country) => {
    /**
     * limit -> numero de dias para el forecast cada 3 horas
     */

    const part1 = "http://api.openweathermap.org/geo/1.0/direct?q=";
    let part2 = "";
    if(country === "US" || country === "USA"){
        part2 = `${city},${state},${country}&limit=5&appid=3bceb3bcb8dfde5c093bb5f845da74a6`;
    }else{
        part2 = `${city},${country}&limit=5&appid=3bceb3bcb8dfde5c093bb5f845da74a6`;
    }

    return part1 + part2;

}