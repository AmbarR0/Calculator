pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    stages {
        stage('Unit Tests') { 
            steps {
                echo 'Testing 1...'
                sh 'npm test' 
            }
        }
    
        stage('Integration Tests') {
                steps {
                    echo 'Testing 2...'
                    sh 'npm run e2e'              
                }           
        }
        stage('Build') { 
            steps {
                echo 'Building...'
                sh 'npm install' 
                sh 'npm run build' 
            }
        }
    }
}
