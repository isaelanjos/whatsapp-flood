function exec() {
    const text = Array(100).fill().map(() => "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"[Math.random() * 28 | 0]).join('');
    const t = document.querySelector("#main div[contenteditable='true']");
    if (!t) throw "Conversation not found";
    t.focus();
    document.execCommand('insertText', false, text);
    t.dispatchEvent(new Event('change', { bubbles: true }));
    setTimeout(() => {
        const sendButton = document.querySelector("#main [data-testid='send'], #main [data-icon='send']");
        if (sendButton) sendButton.click();
    }, 200);
}
let i = 0;
const interval = setInterval(() => {
    if (++i <= 1e4) {
        exec();
        if (i % 10 === 0) console.log(`${i}/10000 messages sent`);
    } else {
        clearInterval(interval);
    }
}, 200);
