const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, options } = config;

async function executeTest(){
    
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    krakenPath = '../kraken/artifacts/';
    puppeteerPAth = '../puppeteer/artifacts';

    
    let krakenFolders= ['scenario3', 'scenario4', 'scenario5', 'scenario15', 'scenario20'];
    let index = 0;

    for (let folder of krakenFolders){
        console.log(krakenPath +'v1/'+ folder);  
        fs.readdir(krakenPath +'v1/'+ folder, function (err, files) {
            if (err) {
                console.log("Error");
                return;
            }
            console.log("files");   
            return files;
        });

        for (let file of files){
            const data = await compareImages(
                fs.readFileSync(krakenPath+'v1/'+folder+file),
                fs.readFileSync(krakenPath+'v2/'+folder+file),
                options
            ); 

            resultInfo[index] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }
            fs.writeFileSync(`./comparacion/kraken/compare-v1v2-`+folder+file+`.png`, data.getBuffer());
            index++;

        }

    }        
        
    fs.writeFileSync(`./comparacion/kraken/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./comparacion/kraken/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}
(async ()=>console.log(await executeTest()))();


function browser(info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Scenario 20</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../../kraken/artifacts/v1/scenario20/login.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../../kraken/artifacts/v2/scenario20/login.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="compare-v1v2-sc20.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${browser(resInfo)}
            </div>
        </body>
    </html>`
}