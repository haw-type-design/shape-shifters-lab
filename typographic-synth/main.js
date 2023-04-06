var context = new (window.AudioContext || window.webkitAudioContext)();



document.getElementById("C").addEventListener("mousedown", (event) => {
    runOscillator(261.63, "C"); 
    document.getElementById("type").innerHTML= "c";
    document.getElementById("type").classList.add("animate");
});

document.getElementById("D").addEventListener("mousedown", (event) => {
    runOscillator(293.66, "D"); 
    document.getElementById("type").innerHTML= "d";
    document.getElementById("type").classList.add("animate");
});

document.getElementById("E").addEventListener("mousedown", (event) => {
    runOscillator(329.63, "E"); 
    document.getElementById("type").innerHTML= "e";
    document.getElementById("type").classList.add("animate");
});

document.getElementById("F").addEventListener("mousedown", (event) => {
    runOscillator(349.23, "F"); 
    document.getElementById("type").innerHTML= "f";
    document.getElementById("type").classList.add("animate");
});


document.getElementById("G").addEventListener("mousedown", (event) => {
    runOscillator(392.00, "G"); 
    document.getElementById("type").innerHTML= "g";
    document.getElementById("type").classList.add("animate");
});

document.getElementById("A").addEventListener("mousedown", (event) => {
    runOscillator(440.00, "A"); 
    document.getElementById("type").innerHTML= "a";
    document.getElementById("type").classList.add("animate");
});

document.getElementById("H").addEventListener("mousedown", (event) => {
    runOscillator(493.88, "H"); 
    document.getElementById("type").innerHTML= "h";
    document.getElementById("type").classList.add("animate");
});


document.getElementById("C#").addEventListener("mousedown", (event) => {
    runOscillator(277.18, "C#"); 
    document.getElementById("type").innerHTML= "c#";
    document.getElementById("type").classList.add("animate-2");
});

document.getElementById("D#").addEventListener("mousedown", (event) => {
    runOscillator(311.13, "D#"); 
    document.getElementById("type").innerHTML= "d#";
    document.getElementById("type").classList.add("animate-2");
});

document.getElementById("F#").addEventListener("mousedown", (event) => {
    runOscillator(369.99, "F#"); 
    document.getElementById("type").innerHTML= "f#";
    document.getElementById("type").classList.add("animate-2");
});


document.getElementById("G#").addEventListener("mousedown", (event) => {
    runOscillator(415.30, "G#"); 
    document.getElementById("type").innerHTML= "g#";
    document.getElementById("type").classList.add("animate-2");
});

document.getElementById("A#").addEventListener("mousedown", (event) => {
    runOscillator(466.16, "A#"); 
    document.getElementById("type").innerHTML= "a#";
    document.getElementById("type").classList.add("animate-2");
});




function runOscillator(freq, id){
    var osc = context.createOscillator();
    osc.type = 'sine';
    osc.connect(context.destination); 
    osc.frequency.value = freq;
    osc.start();
    document.addEventListener("mouseup", (event) => {
        osc.stop();
        document.getElementById("type").classList.remove("animate");
        document.getElementById("type").classList.remove("animate-2");
        document.getElementById("type").innerHTML= "";
    });
}