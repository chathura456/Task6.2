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
                    script {
                        if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
                            currentBuild.result = 'SUCCESS'
                        } else {
                            currentBuild.result = 'FAILURE'
                        }
                    }
                }
                success {
                    mail to: 'dreamshadesnew@gmail.com',
                         subject: "Testing completed success",
                         body: "Testing stage completed successfully."
                }
                failure {
                    mail to: 'dreamshadesnew@gmail.com',
                         subject: "Stage Testing failed",
                         body: "The Testing stage failed. Check the attached log for details."
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
