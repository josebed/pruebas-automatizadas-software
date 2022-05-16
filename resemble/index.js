const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, options } = config;

async function executeTest(){
    
    let krakenPath = '../kraken/artifacts/';
    let puppeteerPAth = '../puppeteer/artifacts/';
    
    let krakenFolders= ['scenario3', 'scenario4', 'scenario5', 'scenario15', 'scenario20'];
    let puppeteerFolders= ["scenario1", "scenario4", "scenario7", "scenario13", "scenario20"];
    let krakenEvidences = ["v1/","v2/"];
    let puppeteerEvidences = ["","RVT/"];
    
    compImages(krakenPath,krakenFolders,"kraken",krakenEvidences);
    compImages(puppeteerPAth,puppeteerFolders,"puppeteer",puppeteerEvidences);

}

(async ()=>console.log(await executeTest()))();

async function compImages(path, folders, tool, folderEvidences){

    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    let imagesInfo = [];
    let index = 0;

    for (let folder of folders){
        let filenames;
        if(tool=="kraken"){
            filenames = fs.readdirSync(path+folderEvidences[1]+folder);
        }
        else{
            filenames = fs.readdirSync(path+folder+'/'+folderEvidences[1]);
        }
        

        for (let file of filenames){

            let data;

            if(tool=="kraken"){

                data = await compareImages(
                    fs.readFileSync(path+folderEvidences[0]+folder+'/'+file),
                    fs.readFileSync(path+folderEvidences[1]+folder+'/'+file),
                    options
                ); 
            }else{
               
                data = await compareImages(
                    fs.readFileSync(path+folder+'/'+folderEvidences[0]+file),
                    fs.readFileSync(path+folder+'/'+folderEvidences[1]+file),
                    options
                ); 

            }
            
    
            resultInfo[index] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime
            }
            fs.writeFileSync("./comparacion/"+tool+"/compare-v1v2-"+folder+file, data.getBuffer());
            
            if(tool=="kraken"){
                imagesInfo.push(
                    {
                        imgRef: '../../'+path+folderEvidences[0]+folder+'/'+file,
                        imgTest: '../../'+path+folderEvidences[1]+folder+'/'+file,
                        imgCom: '../../'+"./comparacion/"+tool+"/compare-v1v2-"+folder+file,
                        scenario: folder,
                        step: file,
                        resultInf: resultInfo[index]
                    });

            }else{
                imagesInfo.push(
                    {
                        imgRef: '../../'+path+folder+'/'+folderEvidences[0]+file,
                        imgTest: '../../'+path+folder+'/'+folderEvidences[1]+file,
                        imgCom: '../../'+"./comparacion/"+tool+"/compare-v1v2-"+folder+file,
                        scenario: folder,
                        step: file,
                        resultInf: resultInfo[index]
                    });

            }
            
            index++;
        }

    }        
        
    fs.writeFileSync(`./comparacion/${tool}/report.html`, createReport(datetime, imagesInfo));
    fs.copyFileSync('./index.css', `./comparacion/${tool}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    //return resultInfo;
}


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
    <div>
    <hr>
    <table>
      <thead>
        <tr>
        <th>isSameDimensions</th>
        <th>dimensionDifference</th>
        <th>rawMisMatchPercentage</th>
        <th>misMatchPercentage</th>
        <th>diffBounds</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>${info.resultInf.isSameDimensions}</td>
          <td>${info.resultInf.dimensionDifference}</td>
          <td>${info.resultInf.rawMisMatchPercentage}</td>
          <td>${info.resultInf.misMatchPercentage}</td>
          <td>${JSON.stringify(info.resultInf.diffBounds)}</td>
      </tbody>
    </table>
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
            <h1>Report Ghost VTR V4.42 and V3.42
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${imagesInfo.map(b=>browser(b))}
            </div>
        </body>
    </html>`
}