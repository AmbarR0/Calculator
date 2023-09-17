pipeline {
    agent any
    tools {
        nodejs 'node20'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install '
            }
        }
        stage('Test') {
            steps {
                sh ' npm run test'
            }
        }
        stage('Test e2e') {
            steps {
               sh 'npm run dev && npm run e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}