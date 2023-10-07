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
                // Archive the generated test-results.xml
                archiveArtifacts artifacts: 'test-results.xml', allowEmptyArchive: true
            }
            post {
                success {
                    emailext(
                        to: 'dreamshadesnew@gmail.com',
                        subject: "Testing completed successfully",
                        body: "Testing stage completed successfully.",
                        attachmentsPattern: "**/test-results.xml"
                    )
                }
                failure {
                    emailext(
                        to: 'dreamshadesnew@gmail.com',
                        subject: "Stage Testing failed",
                        body: "The Testing stage failed. Check the attached log for details.",
                        attachmentsPattern: "**/test-results.xml"
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
