pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Clonning repo...'
                git branch: 'master', url: 'https://github.com/shantanurawade/FunDoNotesBackend.git'
            }
        }
        stage('Syncing application to server'){
            steps{
                echo 'Syncing code from git...'
                
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install' 
                sh 'npm run dev'
            }
        }
    }
}
