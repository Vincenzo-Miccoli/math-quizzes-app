new Vue ({
    el: '#app',
    data:{
        title: "Math Quizzes",
        operator: {
            name:"",
            symbol:""
        },
        leftOperator: "",
        rightOperator: "",
        result: "",
        solutions: [],
        selectedOperator: false,
        score: 0,
        percentageScore: 0,
        rightAnswer: ""
    },
    methods:{
        startQuiz() {
            if(!this.selectedOperator) {
                this.selectedOperator = true;
                this.generateOperations();
            }
        },
        generateOperations() {
            this.solutions = [];
            this.leftOperator = parseInt(Math.random() * 13);
            this.rightOperator = parseInt(Math.random() * 13);
            this.result = eval(this.leftOperator+" "+this.operator.symbol+" "+this.rightOperator)
        
            //generate solutions
            for (var i = 0; i < 5; i++) {
                this.solutions.push(parseInt(Math.floor(Math.random() * 10) + 1) + this.result);
            }
            //add the real result of operation
            this.solutions.push(this.result);

            //mix solutions array
            for (var i = this.solutions.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.solutions[i];
                this.solutions[i] = this.solutions[j];
                this.solutions[j] = temp;
            }
        },
        checkResponse(solution) {
            if(solution == this.result) {
                this.rightAnswer = true;
            } else {
                this.rightAnswer = false;
            }
        },
        manageScore() {
            if (this.rightAnswer !== "") {
                if(this.rightAnswer) {
                    this.score++;
                    this.percentageScore = Math.abs(this.score * 10);
                }
                else {
                    this.score--;
                    this.percentageScore = Math.abs(this.score * 10);
                }
            }
            this.generateOperations();
        }
    }
})