function decodeUplink(input) {

    // Code by FTdL.pl 
    var data = {};
    var bytes = input.bytes;

    // Decode air temperature
    var airTemperatureRaw = (bytes[7] << 8) | bytes[8];
    data.airTemperature = airTemperatureRaw / 10.0; // assuming the temperature is sent as an integer with two decimal places

    // Decode battery voltage
    data.batteryVoltage = bytes[4] / 10.0; // assuming the battery voltage is sent as an integer with one decimal place

    // Decode soil moisture
    var soilMoistureRaw = (bytes[2] << 8) | bytes[3];
  data.soilMoisture = soilMoistureRaw; // assuming the soil moisture is sent as an integer with two decimal places
        var airHumidityRaw = (bytes[5] << 8) | bytes[6];
    data.airHumidity = airHumidityRaw / 10.0;



    return {
        data: data,
    };
}
