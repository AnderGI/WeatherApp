export function weatherImages(promise){
    const imgObj = {
        Thunderstorm: "../src/img/thunderstorm.svg",
        Drizzle:"../src/img/drizzle.svg",
        Rain:"../src/img/rain.svg",
        Snow:"../src/img/snow.svg",
        Clear:"../src/img/sun.svg",
        Clouds:"../src/img/clouds.svg",
    }

    return imgObj[promise]
}