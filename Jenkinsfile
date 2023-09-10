/*
pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                checkout scm 
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add any build steps specific to your project here
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add any deploy steps specific to your project here
            }
        }
    }
}
*/


pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
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


