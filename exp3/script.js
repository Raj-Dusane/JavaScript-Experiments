// executing script only after the documents in completely loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('inputString').addEventListener('input', validateInput);
});

function verifyOption() {
  const e = document.getElementById('stringOperation');
  const index = e.selectedIndex;
  const errMsg = document.getElementById('invalidOption');
  const nullDisplay = document.getElementById('display');
  let result = document.getElementById('result');
  
  // display error msg for selecting invalid option
  if (index==0){
    nullDisplay.innerHTML = "";
    result.innerHTML = "";
    errMsg.innerHTML = `<p style="color: red; font-weight: bold;"> Select the correct option </p> <br>`;
  }
  else if (index==1){
    errMsg.innerHTML = "";
    nullDisplay.innerHTML = "";
    result.innerHTML = "";
    strReverse();
  }
  else if (index==2){
    errMsg.innerHTML = "";
    nullDisplay.innerHTML = "";
    result.innerHTML = "";
    strReplacement();
  }
  else {
    errMsg.innerHTML = "";
    nullDisplay.innerHTML = "";
    result.innerHTML = "";
    palindrome();
  }
  return;
}

function validateInput() {
  const inputField = document.getElementById('inputString');
  const inputStr = inputField.value;
  const errMsgElement = document.getElementById('errMsg');
  
  if (!inputStr) {
    inputField.style.borderColor = 'red';
    errMsgElement.innerHTML = `<p style="color: red; font-weight: bold;"> Please enter a valid string </p>`;
    return false;
  } else {
    inputField.style.borderColor = '';
    errMsgElement.innerHTML = '';
    return true;
  }
}

function validateOptions() {
  const selected = document.querySelector('input[name="buildInM"]:checked');
  let errMsg = document.getElementById('unselectMethod');
  if (!selected) {
    errMsg.innerHTML=`<p style="color: red; font-weight: bold; margin: 15px 0 0 6px"> Please select an option </p>`;
    return false;
  }
  else {
    errMsg.innerHTML = '';
    return {methodType : selected.value, execute: true};
  }
}

function makeReverse() {
  const method = validateOptions();
  if (validateInput() && method.execute){
    let inputStr = document.getElementById('inputString').value;
    let result = document.getElementById('result');
    result.innerHTML = ""; 
    if (method.methodType == "buildInM") {
      result.innerHTML = ` <p> <span style="font-weight: bold;"> Builtin method: </span> <br> ${inputStr.split("").reverse().join("")} </p>`;
    }
    else {
      let str='', i=inputStr.length-1;
      while (i>=0){
        str += inputStr[i];
        i--;
      }
      result.innerHTML = ` <p> <span style="font-weight: bold;"> Custom method: </span> <br> ${str} </p>`;
    }
  }
  return;
}

function strReverse() {
  const element = `
    <fildset class="optionBox"></fildset>
      <legend style="margin-bottom: 15px; font-weight: bold;">Select Method:</legend>
      <div>
        <label style="font-weight: normal;" for="buildInM">
          <input type="radio" id="buildInM" name="buildInM" value="buildInM" selected> Build in Method
        </label>
      </div>
      <div>
        <label style="font-weight: normal;" for="customMethod">
          <input type="radio" id="customMethod" name="buildInM" value="customMethod"> Custom Method
        </label>
      </div>
      <div id="unselectMethod"></div>
    </fieldset>

    <div class="button">
      <button onclick="makeReverse()">Replace</button>
    </div>
  `;
  document.getElementById('display').innerHTML = element;
      
  return;
}

function strReplacement() {
  const element = `
  <fildset class="optionBox"></fildset>
    <legend style="margin-bottom: 15px; font-weight: bold;">Select Method:</legend>
    <div>
      <label style="font-weight: normal;" for="buildInM">
        <input type="radio" id="buildInM" name="buildInM" value="buildInM" selected> Build in Method
      </label>
    </div>
    <div>
      <label style="font-weight: normal;" for="customMethod">
        <input type="radio" id="customMethod" name="buildInM" value="customMethod"> Custom Method
      </label>
    </div>
    <div id="unselectMethod"></div>
  </fieldset>
  
  <div class="form-group">
    <label for="charToReplace">Character to be replaced:</label>
    <input type="text" id="charToReplace" placeholder="Enter character" autocomplete="off">
  </div>
  <div class="form-group">
    <label for="replaceWith">Character to be replaced with:</label>
    <input type="text" id="replaceWith" placeholder="Enter character" autocomplete="off">
  </div>
  
  <div class="button">
    <button onclick="replaceCharacters()">Replace</button>
  </div>
  `;
  document.getElementById('display').innerHTML = element;  
  return;
}

function replaceCharacters() {
  const selectedMethod = validateOptions();
  
  if (validateInput() && selectedMethod.execute){
    const inputStr = document.getElementById('inputString').value;
    const charToReplace = document.getElementById('charToReplace').value;
    const symbol = document.getElementById('replaceWith').value;
    let result = document.getElementById('result');

    // Custom string methods
    if (selectedMethod.methodType=="customMethod") {
      let replacedString = '';
      for (let i = 0; i < inputStr.length; i++) {
        if (inputStr[i] === charToReplace) {
          replacedString += symbol;
        } else {
          replacedString += inputStr[i];
        }
        console.log(replacedString);
      }
      result.innerHTML = `<p> <span style="font-weight: bold;"> Custom method: </span> <br> <br> ${replacedString} </p>`;
    }

    // Built In method
    else {      
      let replacedString = inputStr.replace(new RegExp(charToReplace, 'g'), symbol);
      result.innerHTML = `<p> <span style="font-weight: bold"> Buildin method: </span> <br> <br> ${replacedString} </p>`;
    }
  } 
}

// Palindrome Check
function check(str){
  let i=0, j=str.length-1;  
  while (i<=j) {
    if (str[i]!==str[j]){
      return false;
    }
    else {
      i++; j--; 
    }
  }
  return true;
}

function palindrome() {
  if (validateInput()) {
    const display = document.getElementById('display');
    let result = document.getElementById('result');
    
    display.innerHTML = `
      <div class="form-group" id="caseSense">
      <label for="caseCheck">
      <input type="checkbox" name="caseCheck" id="caseCheck" value="false" checked> Case Insensitive 
      </label>
      </div>
    `;
    
    const caseCheck = document.getElementById('caseCheck');
    
    function updateResult() {
      let inputStr = document.getElementById('inputString').value;

      if (caseCheck.checked) {
        let flag = check(inputStr.toLowerCase());
        result.innerHTML = (flag === true) 
          ? `<p style="font-weight: bold;"> Palindrome. </p>`
          : `<p style="font-weight: bold;"> Not a palindrome. </p>`;
      }

      else {
        let flag = check(inputStr);
        result.innerHTML = (flag === true) 
          ? `<p style="font-weight: bold;"> Palindrome. </p>`
          : `<p style="font-weight: bold;"> Not a palindrome. </p>`;
      }
    }
    
    document.getElementById('inputString').addEventListener('input', updateResult);
    document.getElementById('caseCheck').addEventListener('change', updateResult);
  }
}