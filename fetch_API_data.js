

const url = "https://data.messari.io/api/v1/assets/btc/metrics";

async function getData(){
        const response = await fetch(url);
        const data = await response.json();
        return data.data.market_data.price_usd;
}


async function getConstData(){
    await sleepThread(5000);
    return getData();

}


async function sleepThread(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

