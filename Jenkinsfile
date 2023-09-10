pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // This will checkout your Jenkinsfile and any other files in your repo
                checkout scm 
            }
        }

        stage('Dummy Build Stage') {
            steps {
                echo 'No actual build steps, just a placeholder.'
            }
        }
    }
}
