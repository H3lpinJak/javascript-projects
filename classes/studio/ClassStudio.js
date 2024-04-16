//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScores) {
        this.scores.push(newScores)
    }
    average() {
        let scoreTotal = 0;
        for (let i = 0; i < this.scores.length; i++) {
            scoreTotal += this.scores[i]
        }
        scoreTotal = Math.round((scoreTotal / this.scores.length) * 10) / 10
        return scoreTotal;
    }
    status() {
        let status = '';
        if (this.average() < 70) {
            status = 'Rejected'
        } else if (this.average() < 80 && (this.average() >= 70)) {
            status = 'Probationary'
        } else if (this.average() < 90 && (this.average() >= 80)) {
            status = 'Reserve'
        } else if (this.average() >= 90) {
            status = 'Accepted';
        } else return 'Incorrect Input!'

        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of ${status}.`)
    }
}
let bubba = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let glad = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
//console.log(CrewCandidate.addScore(83))
bubba.addScore(83)

bubba.average();

bubba.status()
merry.status()
glad.status()
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.