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
                    emailext (
                        subject: "Stage 'Testing' completed successfully",
                        body: "The 'Testing' stage completed successfully.",
                        to: 'dreamshadesnew@gmail.com'
                    )
                }
                failure {
                    emailext (
                        subject: "Stage 'Testing' failed",
                        body: "The 'Testing' stage failed. Check the attached log for details.",
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
       // bat 'npm stop'
        echo 'Stop Server...'
    }
}
    }
}
