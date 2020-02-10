import React, {useEffect} from "react";
import "./MainText.css";

const mainText = "< Hi, I am ";
const mainTextSpan = "Ankur Saikia />";
const mtSmallTxt = "I am a software developer/engineer"
const myLoves = ["Coding", "Problem Solving", "Javascript", "Guitar"];
const viewWorkTxt = "< View my work />";
let typeDelay = 100;
let curLength = 0;
let curLength1 = 0;
let curLength2 = 0;
let myLovesIndex = 0;


function MainText(props){
    useEffect(()=>{
        const interval = setInterval(()=>{
            if( curLength < mainText.length){
                if(mainText[curLength]===" "){
                    document.getElementById('maintext-txt1').innerHTML+= '&nbsp;';
                }
                else{
                    document.getElementById('maintext-txt1').innerHTML+= mainText[curLength];
                }
                curLength+=1;
            }
            else{
                clearInterval(interval);
            }
        }, typeDelay);

        const interval1 = setInterval(()=>{
            if(curLength===mainText.length){
                if(curLength1<mainTextSpan.length){
                    if(mainTextSpan[curLength1]===" "){
                        document.getElementById('maintext-txt2').innerHTML+= '&nbsp;';
                    }
                    else{
                        document.getElementById('maintext-txt2').innerHTML+= mainTextSpan[curLength1];
                    }
                    curLength1+=1;
                }
                else{
                    clearInterval(interval1);
                    document.getElementById('maintext-heading-dot').style.display = "none";
                    document.getElementById('maintext-small-dot').style.display = "block";
                }
            }
        }, typeDelay-50);

        const interval2 = setInterval(()=>{
            if(curLength1===mainTextSpan.length){
                if(curLength2<mtSmallTxt.length){
                    if(mtSmallTxt[curLength2]===" "){
                        document.getElementById('maintext-txt3').innerHTML+= '&nbsp;';
                    }
                    else{
                        document.getElementById('maintext-txt3').innerHTML+= mtSmallTxt[curLength2];
                    }
                    curLength2+=1;
                }
                else{
                    clearInterval(interval2);
                    document.getElementById('maintext-small-dot').style.display = "none";
                    document.getElementById('maintext-txt4').style.opacity = "1";
                    document.getElementById('maintext-link-to-next').style.opacity = "1";
                    document.getElementById('maintext-txt5').innerHTML = myLoves[myLoves.length - 2];
                }
            }
        }, typeDelay-50);

        const interval3 = setInterval(()=>{
            if(curLength2===mtSmallTxt.length){
                if(myLovesIndex===myLoves.length){
                    myLovesIndex=0;
                }
                document.getElementById('maintext-txt5').style.opacity = "0";
                setTimeout(()=>{
                    document.getElementById('maintext-txt5').innerHTML = myLoves[myLovesIndex];
                    document.getElementById('maintext-txt5').style.opacity = "1";
                    myLovesIndex+=1;
                }, 1000)
            }
        }, 3000);


        return ()=> clearInterval(interval3);
    },[]);
    

    return <div className="maintext-main">
        <p className="maintext-heading"><span id="maintext-txt1"></span><span id="maintext-txt2"></span><span id="maintext-heading-dot">&nbsp;</span></p>
        <p className="maintext-maintext"><span id="maintext-txt3"></span><span id="maintext-small-dot">&nbsp;</span></p>
        <p className="maintext-maintext"><span id="maintext-txt4"># I love:&nbsp;&nbsp;</span><span id="maintext-txt5"></span></p>
        <a href="#about"><p className="maintext-footer" ><span id="maintext-link-to-next">{viewWorkTxt}</span></p></a>
    </div>
}
export default MainText;