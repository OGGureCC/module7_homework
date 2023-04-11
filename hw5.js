let listDevices = new Map();
class Device {
    constructor(name, room, voltage) {
        (this.name = name),
        (this.room = room),
        (this.voltage = voltage),
        (this.status = function (onOff) {
            if (onOff === true) {
                if (!listDevices[this.name]) {
                    listDevices[this.name] = this.voltage;
                    console.log(
                        `${name} в ${room} потребляет ${voltage}Вт и сейчас включен`
                    );
                } else {
                    console.log(`${this.name} уже включен`);
                }
            } else {
                if (listDevices[this.name]) {
                    delete listDevices[this.name];
                    console.log(
                        `${name} в ${room} потребляет ${voltage}Вт и сейчас выключен`
                    );
                } else {
                    console.log(`${this.name} уже выключен`);
                }
            }
        });
    }
}
function calcPowerSum() {
    let sum = 0;
    for (item in listDevices) {
        sum += listDevices[item];
    }
    console.log(
        `Общее потребление подключенных устройств на данный момент ${sum}Вт`
    );
}
let fridge = new Device("Холодильник", "кухне", 570);
let pc = new Device("Компьютер", "спальне", 1000);

pc.status(true);
pc.status(true);
pc.status(false);
pc.status(true);
fridge.status(true);
fridge.status(false);
fridge.status(false);
fridge.status(true);
calcPowerSum();
