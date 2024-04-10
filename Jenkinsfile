pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control
                git 'https://github.com/guptasonu14/conex_social_Media_web.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install backend dependencies
                sh 'cd backend && npm install'
                
                // Install frontend dependencies
                sh 'cd frontend && npm install'
            }
        }
        
        stage('Lint and Test') {
            steps {
                // Lint backend code
                sh 'cd backend && npm run lint'
                
                // Run backend tests
                sh 'cd backend && npm test'
                
                // Lint frontend code
                sh 'cd frontend && npm run lint'
                
                // Run frontend tests
                sh 'cd frontend && npm test'
            }
        }
        
        stage('Build') {
            steps {
                // Build frontend code
                sh 'cd frontend && npm run build'
            }
        }
        
        // Add more stages as needed for deployment, etc.
    }
}
