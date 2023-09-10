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
        }


        stage('Code Analysis') {
            steps {
                echo 'Code Analysis...'
                
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

        stage('Stop Server') {
    steps {
        bat 'npm stop'
    }
}
    }
}
