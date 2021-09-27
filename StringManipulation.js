const app = Vue.createApp({
    data() {
        return {
            /*word: '',
            words: ['', '', ''],*/
            normal: '',
            lower: '',
            upper: ''
        }
    },
    methods: {
        wordList() {
            var testWord = document.getElementById("inp").value;

            this.normal = testWord;
            this.lower = testWord.toLowerCase();
            this.upper = testWord.toUpperCase();

            /*this.words[0] = word,
            this.words[1] = word.toLowerCase(),
            this.words[2] = word.toUpperCase()*/
        }
    },
})