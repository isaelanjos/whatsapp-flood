function exec() {
    const text = Array(100).fill().map(() => "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"[Math.random() * 28 | 0]).join('');
    const t = document.querySelector("#main div[contenteditable='true']");
    if (!t) throw "Conversation not found";
    t.focus(); document.execCommand('insertText', false, text);
    t.dispatchEvent(new Event('change', { bubbles: true }));
    setTimeout(() => document.querySelector("#main [data-testid='send'], #main [data-icon='send']").click(), 100);
}

let i = 0;
const interval = setInterval(() => (++i <= 1e4 ? (exec(), i % 10 === 0 && console.log(`${i}/10000 messages sent`)) : clearInterval(interval)), 200);
