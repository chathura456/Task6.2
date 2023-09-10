pipeline {
    agent any 

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    script {
                        currentBuild.result = currentBuild.result ?: 'SUCCESS'
                    }
                    emailext (
                        to: 'dreamshadesnew@gmail.com',
                        subject: "Result of Unit and Integration Tests: ${currentBuild.result}",
                        body: "The Unit and Integration Tests stage finished with status: ${currentBuild.result}. Check logs at ${env.BUILD_URL}",
                        attachmentsPattern: '**/build.log'
                    )
                }
            }
        }
        stage('Code Analysis') {
            steps {
                sh 'mvn sonar:sonar'
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Running security scan...'
            }
            post {
                always {
                    script {
                        currentBuild.result = currentBuild.result ?: 'SUCCESS'
                    }
                    emailext (
                        to: 'dreamshadesnew@gmail.com',
                        subject: "Result of Security Scan: ${currentBuild.result}",
                        body: "The Security Scan stage finished with status: ${currentBuild.result}. Check logs at ${env.BUILD_URL}",
                        attachmentsPattern: '**/build.log'
                    )
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging server...'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production server...'
            }
        }
    }
}
