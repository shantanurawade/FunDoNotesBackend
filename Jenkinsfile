pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Clonning repo...'
                git branch: 'main', url: 'https://github.com/shantanurawade/FunDoNotesBackend.git'
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
