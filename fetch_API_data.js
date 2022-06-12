const url = "https://data.messari.io/api/v1/assets/btc/metrics";

async function getData(){
        const response = await fetch(url);
        const data = await response.json();
        //to json file type
        console.log(data.data.market_data.price_usd);
}


async function sleepThread(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}


async function getConstData(){
    for (let i = 0; i < 10; i++){
        getData();
        await sleepThread(5000);
    }    
}
getConstData();
