// ここから書いてください。
const battery =
  [
    {
      "batteryName": "WKL-78",
      "capacityAh": 2.3,
      "voltage": 14.4,
      "maxDraw": 3.2,
      "endVoltage": 10,
    },
    {
      "batteryName": "WKL-140",
      "capacityAh": 4.5,
      "voltage": 14.4,
      "maxDraw": 9.2,
      "endVoltage": 5,
    },
    {
      "batteryName": "Wmacro-78",
      "capacityAh": 2.5,
      "voltage": 14.5,
      "maxDraw": 10,
      "endVoltage": 5,
    },
    {
      "batteryName": "Wmacro-140",
      "capacityAh": 3.6,
      "voltage": 14.4,
      "maxDraw": 14,
      "endVoltage": 5,
    },
    {
      "batteryName": "IOP-E78",
      "capacityAh": 6.6,
      "voltage": 14.4,
      "maxDraw": 10.5,
      "endVoltage": 8,
    },
    {
      "batteryName": "IOP-E140",
      "capacityAh": 9.9,
      "voltage": 14.4,
      "maxDraw": 14,
      "endVoltage": 10,
    },
    {
      "batteryName": "IOP-E188",
      "capacityAh": 13.2,
      "voltage": 14.4,
      "maxDraw": 14,
      "endVoltage": 11,
    },
    {
      "batteryName": "RYN-C65",
      "capacityAh": 4.9,
      "voltage": 14.8,
      "maxDraw": 4.9,
      "endVoltage": 11,
    },
    {
      "batteryName": "RYN-C85",
      "capacityAh": 6.3,
      "voltage": 14.4,
      "maxDraw": 6.3,
      "endVoltage": 12,
    },
    {
      "batteryName": "RYN-C140",
      "capacityAh": 9.8,
      "voltage": 14.8,
      "maxDraw": 10,
      "endVoltage": 12,
    },
    {
      "batteryName": "RYN-C290",
      "capacityAh": 19.8,
      "voltage": 14.4,
      "maxDraw": 14,
      "endVoltage": 12,
    }
  ];

const camera =
  [
    {
      "brand": "Cakon",
      "model": "ABC 3000M",
      "powerConsumptionWh": 35.5,
    },
    {
      "brand": "Cakon",
      "model": "ABC 5000M",
      "powerConsumptionWh": 37.2,
    },
    {
      "brand": "Cakon",
      "model": "ABC 7000M",
      "powerConsumptionWh": 39.7,
    },
    {
      "brand": "Cakon",
      "model": "ABC 9000M",
      "powerConsumptionWh": 10.9,
    },
    {
      "brand": "Cakon",
      "model": "ABC 9900M",
      "powerConsumptionWh": 15.7,
    },
    {
      "brand": "Go MN",
      "model": "UIK 110C",
      "powerConsumptionWh": 62.3,
    },
    {
      "brand": "Go MN",
      "model": "UIK 210C",
      "powerConsumptionWh": 64.3,
    },
    {
      "brand": "Go MN",
      "model": "UIK 230C",
      "powerConsumptionWh": 26.3,
    },
    {
      "brand": "Go MN",
      "model": "UIK 250C",
      "powerConsumptionWh": 15.3,
    },
    {
      "brand": "Go MN",
      "model": "UIK 270C",
      "powerConsumptionWh": 20.3,
    },
    {
      "brand": "VANY",
      "model": "CEV 1100P",
      "powerConsumptionWh": 22,
    },
    {
      "brand": "VANY",
      "model": "CEV 1300P",
      "powerConsumptionWh": 23,
    },
    {
      "brand": "VANY",
      "model": "CEV 1500P",
      "powerConsumptionWh": 24,
    },
    {
      "brand": "VANY",
      "model": "CEV 1700P",
      "powerConsumptionWh": 25,
    },
    {
      "brand": "VANY",
      "model": "CEV 1900P",
      "powerConsumptionWh": 26,
    }
  ];

// console.log(battery);
// console.log(camera);
class Battery {
  constructor(batteryName,capacityAh,voltage,maxDraw,endVoltage){
    this.batteryName = batteryName;
    this.capacityAh = capacityAh;
    this.voltage = voltage;
    this.maxDraw = maxDraw;
    this.endVoltage = endVoltage;
  }
  maxPower(){
    return this.maxDraw * this.endVoltage;
  }
  durationTime(summationOfPower){
    return (this.capacityAh * this.voltage / summationOfPower).toFixed(1);
  }
  printResult(summationOfPower){
    const resultItem = document.createElement("div");
    resultItem.classList.add("w-100", "d-flex", "justify-content-between","bg-light","p-2","border", "border-secondary");
    const batteryName = document.createElement("strong");
    batteryName.innerHTML = this.batteryName;
    const duration = document.createElement("p");
    duration.innerHTML = `Estimate ${this.durationTime(summationOfPower)} hours`;
    resultItem.append(batteryName,duration);
    return resultItem;
  }
}
class Camera {
  constructor(brand,model,powerConsumptionWh){
    this.brand = brand;
    this.model = model;
    this.powerConsumptionWh = powerConsumptionWh;
  }
  createModelChoice(brand,index){
    let modelOption = document.createElement("option");
    modelOption.value = index;
    modelOption.innerHTML = this.model;
    return this.brand === brand ? modelOption : null;
  }
}
// バッテリーのオブジェクト配列
let batteryObjects = [];
battery.forEach(batteryItem => {
  batteryObjects.push(new Battery(batteryItem["batteryName"],batteryItem["capacityAh"],batteryItem["voltage"],batteryItem["maxDraw"],batteryItem["endVoltage"]));
});
// カメラのオブジェクト配列
let cameraObjects = [];
camera.forEach(cameraItem => {
  cameraObjects.push(new Camera(cameraItem["brand"],cameraItem["model"],cameraItem["powerConsumptionWh"]));
});
//名前順にソート
batteryObjects.sort(function(a,b){
  let nameA = a.batteryName.toUpperCase();
  let nameB = b.batteryName.toUpperCase();
  if(nameA > nameB){
    return 1;
  }
  if(nameA < nameB){
    return -1;
  }
  return 0;
});

//初期化
//ブランドのリストを作成
const selectBrand = document.getElementById("selectBrand");
let brandList = [];
cameraObjects.forEach(cameraItem => {
  brandList.push(cameraItem.brand);
});
brandList = brandList.filter(function(x,i,self){
  return self.indexOf(x) === i;
});
//Step1のoption要素を作成
brandList.forEach((brand) => {
  let brandOption = document.createElement("option");
  brandOption.value = brand;
  brandOption.innerHTML = brand;
  selectBrand.append(brandOption);
});
//選択されたブランド名に対応するモデルの配列を作る
const selectModel = document.getElementById("selectModel");
cameraObjects.forEach((camera,index) => {
  selectModel.append(camera.createModelChoice(brandList[0],index));
});

//検索結果を一覧にする
const result = document.getElementById("result");
const accessoryPowerConsumption = document.getElementById("accessoryPowerConsumption");
//初期データ
batteryObjects.forEach(battery => {
  result.append(battery.printResult(cameraObjects[selectModel.value].powerConsumptionWh + parseInt(accessoryPowerConsumption.value)));
});
function createResult(){
  const summationOfPower = cameraObjects[selectModel.value].powerConsumptionWh + parseInt(accessoryPowerConsumption.value);
  result.innerHTML = "";
  batteryObjects.forEach(battery => {
    if(battery.maxPower() > summationOfPower){
      result.append(battery.printResult(summationOfPower));
    }
  });
}
//ブランドを選んだらモデルリスト、結果を更新
selectBrand.addEventListener("change",function(e){
  selectModel.innerHTML = "";
  cameraObjects.forEach((camera,index) => {
    selectModel.append(camera.createModelChoice(e.target.value,index));
  });
  createResult();
});
//アクセサリーの電力を変更すると結果を更新
accessoryPowerConsumption.addEventListener("change",createResult);
//モデルを変更すると結果を更新
selectModel.addEventListener("change",createResult);
