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
                sleep 10  // Give the server some time to start
            }
        }

        stage('Testing') {
            steps {
                bat 'npm test'  // Assuming you have tests set up
            }
        }

        stage('Stop Server') {
            steps {
                // This will find the process running on port 3000 (typically your Express server) and kill it
                bat 'FOR /F "tokens=5" %a IN (\'netstat -aon ^| find "3000" ^| find "LISTENING"\') DO taskkill /f /pid %a'
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Code Analysis...'
                // Add any build steps specific to your project here
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Security Scan...'
                // Add any deploy steps specific to your project here
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
    }
}
