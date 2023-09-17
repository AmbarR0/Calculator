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
                
                sh 'npm install && npm run test'
            }
        }
        
        stage('Integration Tests') {
                steps {
                    echo 'Testing 2...'
                    sh 'npm install && npm run e2e'
                                 
                }           
        }
        stage('Build') { 
            steps {
                echo 'Building...'
                 sh 'npm install && npm run build'
            }
        }
    }
}
