pipeline {
    stages {
        stage('Checkout') {
            checkout scm
            # Checkout means => clone code from the repository
            #scm => source code manager (e.g. Git)
        }
        stage('Build') {
            sh 'docker build -t test-app .'
            #sh => shell command
        }
        stage('Deploy') {
            sh 'docker run test-app -d --name test-app -p 8080:80'
            #sh => shell command
        }

    }
}
