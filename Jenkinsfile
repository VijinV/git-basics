pipeline {
    stages {
        stage('Checkout') {
            checkout scm
        }
        stage('Build') {
            steps {
                sh 'docker build -t test-app .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d test-app -p 80:8080'
            }
        }
    }
}
