//Here default browser API used to text to speech converter
    function convertToSpeech() {
        const textToSpeak = document.getElementById('textToSpeak').value;
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support the Web Speech API.');
        }
    }
