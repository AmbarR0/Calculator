pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    stages {
        stage('Dependencies') { 
            steps {
                echo 'Testing 1...'
                sh 'npm install'
            }
        }

        stage('Unit Tests') { 
            steps {
                echo 'Testing 1...'
                sh 'npm run test'
            }
        }
        
        stage('Integration Tests') {
                steps {
                    echo 'Testing 2...'
                                 
                }           
        }
        stage('Build') { 
            steps {
                echo 'Building...'
                 
            }
        }
    }
}