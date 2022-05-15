const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, options } = config;

async function executeTest(){
    
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    let krakenPath = '../kraken/artifacts/';
    let puppeteerPAth = '../puppeteer/artifacts';
    let imagesInfo = [];


    
    let krakenFolders= ['scenario3', 'scenario4', 'scenario5', 'scenario15', 'scenario20'];
    let index = 0;


    for (let folder of krakenFolders){
        
        let filenames = fs.readdirSync(krakenPath+"/v1/"+folder);

        for (let file of filenames){
            const data = await compareImages(
                    fs.readFileSync(krakenPath+'v1/'+folder+'/'+file),
                    fs.readFileSync(krakenPath+'v2/'+folder+'/'+file),
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
            
            imagesInfo.push(
                {
                    imgRef: '../../'+krakenPath+'v1/'+folder+'/'+file,
                    imgTest: '../../'+krakenPath+'v2/'+folder+'/'+file,
                    imgCom: '../../'+`./comparacion/kraken/compare-v1v2-`+folder+file+`.png`,
                    scenario: folder,
                    step: file,
                    resultInf: resultInfo[index]
                });
            index++;
        }

    }        
        
    fs.writeFileSync(`./comparacion/kraken/report.html`, createReport(datetime, imagesInfo));
    fs.copyFileSync('./index.css', `./comparacion/kraken/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;
}
(async ()=>console.log(await executeTest()))();


function browser(info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>${info.scenario} - ${info.step}</h2>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="${info.imgRef}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${info.imgTest}" id="testImage" label="Test">
      </div>
      <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="img2" src="${info.imgCom}" id="diffImage" label="Diff">
      </div>
    </div>
    </div>
    
  </div>`
}

function createReport(datetime, imagesInfo){
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
                ${imagesInfo.map(b=>browser(b))}
            </div>
        </body>
    </html>`
}