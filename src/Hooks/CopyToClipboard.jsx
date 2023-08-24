import React, { useEffect } from 'react'

function CopyToClipboard() {

   

    useEffect(() => {

        const copyText = document.getElementsByClassName('copy');
        
        for (let i = 0; i < copyText.length; i++){
          copyText[i].addEventListener("click", function () {
            const copyContent = copyText[i].dataset.copy;
            navigator.clipboard.writeText(copyContent);
            
            var tooltip = copyText[i].getElementsByClassName("tooltiptext");
            tooltip[0].innerHTML = "Copied!";
            setTimeout(() => {
                tooltip[0].innerHTML = "Copy to clipboard";
              }, 5000);
          })
        }
    })
}        

export default CopyToClipboard
