pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start Server') {
            steps {
                bat 'start npm start'
                sleep 10  
            }
        }

        stage('Testing') {
    steps {
        bat 'npm test'
    }
    post {
        always {
            emailext (
                subject: "Stage 'Testing' completed",
                body: "The 'Testing' stage has completed. Check Jenkins for details.",
                to: 'dreamshadesnew@gmail.com'
            )
        }
    }
}



        stage('Code Analysis') {
            steps {
                echo 'Code Analysis...'
                bat 'npm run lint'
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Security Scan...'
                bat 'npm audit'
            }
        }

        stage('Integration Tests') {
            steps {
                echo 'Integration Tests...'
                // Add any deploy steps specific to your project here
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying the project...'
                // Add any deploy steps specific to your project here
            }
        }

        stage('Stop Server') {
    steps {
        bat 'npm stop'
    }
}
    }
}
