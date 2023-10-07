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
                success {
                    mail to: 'dreamshadesnew@gmail.com',
                         subject: "Testing completed successfully",
                         body: "Testing stage completed successfully."
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
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying the project...'      
            }
        }

        stage('Stop Server') {
            steps {
                // bat 'npm stop'
                echo 'Stop Server...'
            }
        }
    }
}
