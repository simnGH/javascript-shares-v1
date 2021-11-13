let userBalance = 1000;

let season = 1994;

let sharesArsenal = 0;
let sharesAstonVilla = 0;
let sharesBlackburn = 0;
let sharesLiverpool = 0;
let sharesManUtd = 0;
let sharesNewcastle = 0;
let sharesForest = 0;
let sharesQPR = 0;
let sharesTottenham = 0;
let sharesWimbledon = 0;

const historyArsenal = 130;
const historyAstonVilla = 120;
const historyBlackburn = 145;
const historyLiverpool = 135;
const historyManUtd = 150;
const historyNewcastle = 140;
const historyForest = 125;
const historyQPR = 110;
const historyTottenham = 115;
const historyWimbledon = 105;

let priceArsenal = 130;
let priceAstonVilla = 120;
let priceBlackburn = 145;
let priceLiverpool = 135;
let priceManUtd = 150;
let priceNewcastle = 140;
let priceForest = 125;
let priceQPR = 110;
let priceTottenham = 115;
let priceWimbledon = 105;

let lastDvndArsenal = "N/A";
let lastDvndAstonVilla = "N/A";
let lastDvndBlackburn = "N/A";
let lastDvndLiverpool = "N/A";
let lastDvndManUtd = "N/A";
let lastDvndNewcastle = "N/A";
let lastDvndForest = "N/A";
let lastDvndQPR = "N/A";
let lastDvndTottenham = "N/A";
let lastDvndWimbledon = "N/A";

document.querySelector('#userBalance').innerHTML = `£${userBalance}`;

document.querySelector('#sharesArsenal').innerHTML = `${sharesArsenal}`;
document.querySelector('#priceArsenal').innerHTML = `£${priceArsenal}`;
document.querySelector('#lastDvndArsenal').innerHTML = `£${lastDvndArsenal}`;
document.querySelector('#sharesAstonVilla').innerHTML = `${sharesAstonVilla}`;
document.querySelector('#priceAstonVilla').innerHTML = `£${priceAstonVilla}`;
document.querySelector('#lastDvndAstonVilla').innerHTML = `£${lastDvndAstonVilla}`;
document.querySelector('#sharesBlackburn').innerHTML = `${sharesBlackburn}`;
document.querySelector('#priceBlackburn').innerHTML = `£${priceBlackburn}`;
document.querySelector('#lastDvndBlackburn').innerHTML = `£${lastDvndBlackburn}`;
document.querySelector('#sharesLiverpool').innerHTML = `${sharesLiverpool}`;
document.querySelector('#priceLiverpool').innerHTML = `£${priceLiverpool}`;
document.querySelector('#lastDvndLiverpool').innerHTML = `£${lastDvndLiverpool}`;
document.querySelector('#sharesManUtd').innerHTML = `${sharesManUtd}`;
document.querySelector('#priceManUtd').innerHTML = `£${priceManUtd}`;
document.querySelector('#lastDvndManUtd').innerHTML = `£${lastDvndManUtd}`;
document.querySelector('#sharesNewcastle').innerHTML = `${sharesNewcastle}`;
document.querySelector('#priceNewcastle').innerHTML = `£${priceNewcastle}`;
document.querySelector('#lastDvndNewcastle').innerHTML = `£${lastDvndNewcastle}`;
document.querySelector('#sharesForest').innerHTML = `${sharesForest}`;
document.querySelector('#priceForest').innerHTML = `£${priceForest}`;
document.querySelector('#lastDvndForest').innerHTML = `£${lastDvndForest}`;
document.querySelector('#sharesQPR').innerHTML = `${sharesQPR}`;
document.querySelector('#priceQPR').innerHTML = `£${priceQPR}`;
document.querySelector('#lastDvndQPR').innerHTML = `£${lastDvndQPR}`;
document.querySelector('#sharesTottenham').innerHTML = `${sharesTottenham}`;
document.querySelector('#priceTottenham').innerHTML = `£${priceTottenham}`;
document.querySelector('#lastDvndTottenham').innerHTML = `£${lastDvndTottenham}`;
document.querySelector('#sharesWimbledon').innerHTML = `${sharesWimbledon}`;
document.querySelector('#priceWimbledon').innerHTML = `£${priceWimbledon}`;
document.querySelector('#lastDvndWimbledon').innerHTML = `£${lastDvndWimbledon}`;

function buyArsenal() {
    if (userBalance >= priceArsenal) {
    sharesArsenal += 1;
    userBalance -= priceArsenal;
    document.querySelector('#sharesArsenal').innerHTML = `${sharesArsenal}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellArsenal() {
    if (sharesArsenal > 0) {
    sharesArsenal -= 1;
    userBalance += priceArsenal;
    document.querySelector('#sharesArsenal').innerHTML = `${sharesArsenal}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyAstonVilla() {
    if (userBalance >= priceAstonVilla) {
    sharesAstonVilla += 1;
    userBalance -= priceAstonVilla;
    document.querySelector('#sharesAstonVilla').innerHTML = `${sharesAstonVilla}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellAstonVilla() {
    if (sharesAstonVilla > 0) {
    sharesAstonVilla -= 1;
    userBalance += priceAstonVilla;
    document.querySelector('#sharesAstonVilla').innerHTML = `${sharesAstonVilla}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyBlackburn() {
    if (userBalance >= priceBlackburn) {
    sharesBlackburn += 1;
    userBalance -= priceBlackburn;
    document.querySelector('#sharesBlackburn').innerHTML = `${sharesBlackburn}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellBlackburn() {
    if (sharesBlackburn > 0) {
    sharesBlackburn -= 1;
    userBalance += priceBlackburn;
    document.querySelector('#sharesBlackburn').innerHTML = `${sharesBlackburn}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyLiverpool() {
    if (userBalance >= priceLiverpool) {
    sharesLiverpool += 1;
    userBalance -= priceLiverpool;
    document.querySelector('#sharesLiverpool').innerHTML = `${sharesLiverpool}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellLiverpool() {
    if (sharesLiverpool > 0) {
    sharesLiverpool -= 1;
    userBalance += priceLiverpool;
    document.querySelector('#sharesLiverpool').innerHTML = `${sharesLiverpool}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyManUtd() {
    if (userBalance >= priceManUtd) {
    sharesManUtd += 1;
    userBalance -= priceManUtd;
    document.querySelector('#sharesManUtd').innerHTML = `${sharesManUtd}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellManUtd() {
    if (sharesManUtd > 0) {
    sharesManUtd -= 1;
    userBalance += priceManUtd;
    document.querySelector('#sharesManUtd').innerHTML = `${sharesManUtd}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyNewcastle() {
    if (userBalance >= priceNewcastle) {
    sharesNewcastle += 1;
    userBalance -= priceNewcastle;
    document.querySelector('#sharesNewcastle').innerHTML = `${sharesNewcastle}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellNewcastle() {
    if (sharesNewcastle > 0) {
    sharesNewcastle -= 1;
    userBalance += priceNewcastle;
    document.querySelector('#sharesNewcastle').innerHTML = `${sharesNewcastle}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyForest() {
    if (userBalance >= priceForest) {
    sharesForest += 1;
    userBalance -= priceForest;
    document.querySelector('#sharesForest').innerHTML = `${sharesForest}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellForest() {
    if (sharesForest > 0) {
    sharesForest -= 1;
    userBalance += priceForest;
    document.querySelector('#sharesForest').innerHTML = `${sharesForest}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyQPR() {
    if (userBalance >= priceQPR) {
    sharesQPR += 1;
    userBalance -= priceQPR;
    document.querySelector('#sharesQPR').innerHTML = `${sharesQPR}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellQPR() {
    if (sharesQPR > 0) {
    sharesQPR -= 1;
    userBalance += priceQPR;
    document.querySelector('#sharesQPR').innerHTML = `${sharesQPR}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyTottenham() {
    if (userBalance >= priceTottenham) {
    sharesTottenham += 1;
    userBalance -= priceTottenham;
    document.querySelector('#sharesTottenham').innerHTML = `${sharesTottenham}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellTottenham() {
    if (sharesTottenham > 0) {
    sharesTottenham -= 1;
    userBalance += priceTottenham;
    document.querySelector('#sharesTottenham').innerHTML = `${sharesTottenham}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function buyWimbledon() {
    if (userBalance >= priceWimbledon) {
    sharesWimbledon += 1;
    userBalance -= priceWimbledon;
    document.querySelector('#sharesWimbledon').innerHTML = `${sharesWimbledon}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function sellWimbledon() {
    if (sharesWimbledon > 0) {
    sharesWimbledon -= 1;
    userBalance += priceWimbledon;
    document.querySelector('#sharesWimbledon').innerHTML = `${sharesWimbledon}`;
    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
    }
}

function runSeason() {
    if (userBalance < 25) {
        alert("Insufficient funds - sell some shares!");
    } else {
        nextSeason();
    }
}

function nextSeason() {
    
    userBalance -= 25;

    season += 1;

    let randomArsenal = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomArsenal < 1) {
        lastDvndArsenal = 0;
    } else {
        lastDvndArsenal = ((priceArsenal / 20) * randomArsenal);
    }
    priceArsenal = ((priceArsenal * randomArsenal) + historyArsenal)/2;
    earnArsenal = (sharesArsenal * lastDvndArsenal);
    userBalance += earnArsenal;
    document.querySelector('#dvndArsenal').innerHTML = `£${lastDvndArsenal.toFixed(2)}`;
    document.querySelector('#priceArsenal').innerHTML = `£${priceArsenal.toFixed(2)}`;
    document.querySelector('#lastDvndArsenal').innerHTML = `£${lastDvndArsenal.toFixed(2)}`;
    document.querySelector('#earnArsenal').innerHTML = `£${earnArsenal.toFixed(2)}`;

    let randomAstonVilla = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomAstonVilla < 1) {
        lastDvndAstonVilla = 0;
    } else {
        lastDvndAstonVilla = ((priceAstonVilla / 20) * randomAstonVilla);
    }
    priceAstonVilla = ((priceAstonVilla * randomAstonVilla) + historyAstonVilla)/2;
    earnAstonVilla = (sharesAstonVilla * lastDvndAstonVilla);
    userBalance += earnAstonVilla;
    document.querySelector('#dvndAstonVilla').innerHTML = `£${lastDvndAstonVilla.toFixed(2)}`;
    document.querySelector('#priceAstonVilla').innerHTML = `£${priceAstonVilla.toFixed(2)}`;
    document.querySelector('#lastDvndAstonVilla').innerHTML = `£${lastDvndAstonVilla.toFixed(2)}`;
    document.querySelector('#earnAstonVilla').innerHTML = `£${earnAstonVilla.toFixed(2)}`;

    let randomBlackburn = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomBlackburn < 1) {
        lastDvndBlackburn = 0;
    } else {
        lastDvndBlackburn = ((priceBlackburn / 20) * randomBlackburn);
    }
    priceBlackburn = ((priceBlackburn * randomBlackburn) + historyBlackburn)/2;
    earnBlackburn = (sharesBlackburn * lastDvndBlackburn);
    userBalance += earnBlackburn;
    document.querySelector('#dvndBlackburn').innerHTML = `£${lastDvndBlackburn.toFixed(2)}`;
    document.querySelector('#priceBlackburn').innerHTML = `£${priceBlackburn.toFixed(2)}`;
    document.querySelector('#lastDvndBlackburn').innerHTML = `£${lastDvndBlackburn.toFixed(2)}`;
    document.querySelector('#earnBlackburn').innerHTML = `£${earnBlackburn.toFixed(2)}`;

    let randomLiverpool = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomLiverpool < 1) {
        lastDvndLiverpool = 0;
    } else {
        lastDvndLiverpool = ((priceLiverpool / 20) * randomLiverpool);
    }
    priceLiverpool = ((priceLiverpool * randomLiverpool) + historyLiverpool)/2;
    earnLiverpool = (sharesLiverpool * lastDvndLiverpool);
    userBalance += earnLiverpool;
    document.querySelector('#dvndLiverpool').innerHTML = `£${lastDvndLiverpool.toFixed(2)}`;
    document.querySelector('#priceLiverpool').innerHTML = `£${priceLiverpool.toFixed(2)}`;
    document.querySelector('#lastDvndLiverpool').innerHTML = `£${lastDvndLiverpool.toFixed(2)}`;
    document.querySelector('#earnLiverpool').innerHTML = `£${earnLiverpool.toFixed(2)}`;

    let randomManUtd = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomManUtd < 1) {
        lastDvndManUtd = 0;
    } else {
        lastDvndManUtd = ((priceManUtd / 20) * randomManUtd);
    }
    priceManUtd = ((priceManUtd * randomManUtd) + historyManUtd)/2;
    earnManUtd = (sharesManUtd * lastDvndManUtd);
    userBalance += earnManUtd;
    document.querySelector('#dvndManUtd').innerHTML = `£${lastDvndManUtd.toFixed(2)}`;
    document.querySelector('#priceManUtd').innerHTML = `£${priceManUtd.toFixed(2)}`;
    document.querySelector('#lastDvndManUtd').innerHTML = `£${lastDvndManUtd.toFixed(2)}`;
    document.querySelector('#earnManUtd').innerHTML = `£${earnManUtd.toFixed(2)}`;

    let randomNewcastle = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomNewcastle < 1) {
        lastDvndNewcastle = 0;
    } else {
        lastDvndNewcastle = ((priceNewcastle / 20) * randomNewcastle);
    }
    priceNewcastle = ((priceNewcastle * randomNewcastle) + historyNewcastle)/2;
    earnNewcastle = (sharesNewcastle * lastDvndNewcastle);
    userBalance += earnNewcastle;
    document.querySelector('#dvndNewcastle').innerHTML = `£${lastDvndNewcastle.toFixed(2)}`;
    document.querySelector('#priceNewcastle').innerHTML = `£${priceNewcastle.toFixed(2)}`;
    document.querySelector('#lastDvndNewcastle').innerHTML = `£${lastDvndNewcastle.toFixed(2)}`;
    document.querySelector('#earnNewcastle').innerHTML = `£${earnNewcastle.toFixed(2)}`;

    let randomForest = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomForest < 1) {
        lastDvndForest = 0;
    } else {
        lastDvndForest = ((priceForest / 20) * randomForest);
    }
    priceForest = ((priceForest * randomForest) + historyForest)/2;
    earnForest = (sharesForest * lastDvndForest);
    userBalance += earnForest;
    document.querySelector('#dvndForest').innerHTML = `£${lastDvndForest.toFixed(2)}`;
    document.querySelector('#priceForest').innerHTML = `£${priceForest.toFixed(2)}`;
    document.querySelector('#lastDvndForest').innerHTML = `£${lastDvndForest.toFixed(2)}`;
    document.querySelector('#earnForest').innerHTML = `£${earnForest.toFixed(2)}`;

    let randomQPR = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomQPR < 1) {
        lastDvndQPR = 0;
    } else {
        lastDvndQPR = ((priceQPR / 20) * randomQPR);
    }
    priceQPR = ((priceQPR * randomQPR) + historyQPR)/2;
    earnQPR = (sharesQPR * lastDvndQPR);
    userBalance += earnQPR;
    document.querySelector('#dvndQPR').innerHTML = `£${lastDvndQPR.toFixed(2)}`;
    document.querySelector('#priceQPR').innerHTML = `£${priceQPR.toFixed(2)}`;
    document.querySelector('#lastDvndQPR').innerHTML = `£${lastDvndQPR.toFixed(2)}`;
    document.querySelector('#earnQPR').innerHTML = `£${earnQPR.toFixed(2)}`;

    let randomTottenham = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomTottenham < 1) {
        lastDvndTottenham = 0;
    } else {
        lastDvndTottenham = ((priceTottenham / 20) * randomTottenham);
    }
    priceTottenham = ((priceTottenham * randomTottenham) + historyTottenham)/2;
    earnTottenham = (sharesTottenham * lastDvndTottenham);
    userBalance += earnTottenham;
    document.querySelector('#dvndTottenham').innerHTML = `£${lastDvndTottenham.toFixed(2)}`;
    document.querySelector('#priceTottenham').innerHTML = `£${priceTottenham.toFixed(2)}`;
    document.querySelector('#lastDvndTottenham').innerHTML = `£${lastDvndTottenham.toFixed(2)}`;
    document.querySelector('#earnTottenham').innerHTML = `£${earnTottenham.toFixed(2)}`;

    let randomWimbledon = ((100 + (Math.floor(Math.random() * 11) - 5) + (Math.floor(Math.random() * 11) - 5)) / 100);
    if ( randomWimbledon < 1) {
        lastDvndWimbledon = 0;
    } else {
        lastDvndWimbledon = ((priceWimbledon / 20) * randomWimbledon);
    }
    priceWimbledon = ((priceWimbledon * randomWimbledon) + historyWimbledon)/2;
    earnWimbledon = (sharesWimbledon * lastDvndWimbledon);
    userBalance += earnWimbledon;
    document.querySelector('#dvndWimbledon').innerHTML = `£${lastDvndWimbledon.toFixed(2)}`;
    document.querySelector('#priceWimbledon').innerHTML = `£${priceWimbledon.toFixed(2)}`;
    document.querySelector('#lastDvndWimbledon').innerHTML = `£${lastDvndWimbledon.toFixed(2)}`;
    document.querySelector('#earnWimbledon').innerHTML = `£${earnWimbledon.toFixed(2)}`;

    document.querySelector('#seasonName').innerHTML = `${season}/${season + 1}`

    document.querySelector('#userBalance').innerHTML = `£${userBalance.toFixed(2)}`;
}