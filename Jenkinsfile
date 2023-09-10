pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm start'
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
                // Add any build steps specific to your project here
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Security ScanDeploying the project...'
                // Add any deploy steps specific to your project here
            }
        }

         stage('Integration Tests') {
            steps {
                echo 'Security ScanDeploying the project...'
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


