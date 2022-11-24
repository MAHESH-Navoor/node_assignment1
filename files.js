const fs= require('fs');

let fileName='Textfile.txt';
let data=`Write data and read data Successfully done using \n`;

//Write a File
async function writeIntoFile(fileName,data)
{
  try{
    await fs.promises.appendFile(fileName,data);
    console.log('write Success');

  }
  catch(err){
  
    console.log(err);
  }
}

//Read a File
async function readFileFrom(fileName){
  try{
    let data =await fs.promises.readFile(fileName,"utf8");
    console.log(`Successfully read :\nContents are:\n${data}`);

  }catch(err)
  {
    console.log(err);
  }
}

writeIntoFile(fileName,data);
readFileFrom(fileName);

