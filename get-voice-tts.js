function displayVoices(){let e=document.getElementById("ignelius-voice"),i=speechSynthesis.getVoices();e.innerHTML="",i.forEach(i=>{let n=document.createElement("option");n.textContent=`${i.name} (${i.lang})`,n.value=i.name,e.appendChild(n)})}speechSynthesis.onvoiceschanged=displayVoices,0===speechSynthesis.getVoices().length?setTimeout(displayVoices,1e3):displayVoices();
