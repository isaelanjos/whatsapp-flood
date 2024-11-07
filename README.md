### WhatsApp Web Auto Messenger Script

  

This script allows you to automatically send messages on WhatsApp Web by simulating text entry and send clicks repeatedly. Please use it responsibly.

  

**Prerequisites**

  

•  **Browser**: Google Chrome or any browser compatible with WhatsApp Web.

•  **WhatsApp Account**: Logged into [WhatsApp Web](https://web.whatsapp.com).

  

**Usage Instructions**

  

1. **Open WhatsApp Web**:

•  Open your browser and go to [WhatsApp Web](https://web.whatsapp.com).

•  Log in by scanning the QR code with your phone.

2. **Open Developer Console**:

•  Press F12 on your keyboard, or right-click on the page and select **Inspect**.

•  In the developer panel, go to the **Console** tab.

3. **Select the Chat**:

•  In WhatsApp Web, select the conversation to which you want to send automated messages.

•  Ensure the chat is open and the text input field is visible.

4. **Copy and Paste the Script**:

•  Copy the script below and paste it into the browser console.

    function e(){const t=Array(100).fill().map(()=>"ابتثجحخدذرزسشصضطظعغفقكلمنهوي"[Math.random()*28|0]).join(''),e=document.querySelector("#main div[contenteditable='true']");if(!e)throw"Conversation not found";e.focus(),document.execCommand("insertText",!1,t),e.dispatchEvent(new Event("change",{bubbles:!0})),setTimeout(()=>document.querySelector("#main [data-testid='send'], #main [data-icon='send']").click(),100)}let t=0;const n=setInterval(()=>++t<=1e4?(e(),t%10==0&&console.log(`${t}/10000 messages sent`)):clearInterval(n),200);

  

5. **Run the Script**:

•  After pasting the code into the console, press Enter to run it.

•  The script will start sending messages of 100 random Arabic characters to the selected chat, up to a total of 10,000 messages.

•  Every 10 messages, the console will display progress in the format 10/10000 messages sent.

  

**Important Notes**
 
•  **Use Responsibly**: This script is for educational and testing purposes only. Misuse may violate WhatsApp’s Terms of Service.

•  **Stopping the Script**: To stop the script, close the WhatsApp Web tab or restart your browser.
