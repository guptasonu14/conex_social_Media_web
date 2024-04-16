pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/guptasonu14/conex_social_Media_web.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    dir('backend') {
                        sh 'npm install' || error 'Failed to install backend dependencies'
                    }
                    dir('frontend') {
                        sh 'npm install' || error 'Failed to install frontend dependencies'
                    }
                }
            }
        }

        stage('Lint and Test') {
            steps {
                script {
                    dir('backend') {
                        sh 'npm run lint' || error 'Backend linting failed'
                        sh 'npm test' || error 'Backend tests failed'
                    }
                    dir('frontend') {
                        sh 'npm run lint' || error 'Frontend linting failed'
                        sh 'npm test' || error 'Frontend tests failed'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build' || error 'Frontend build failed'
                }
            }
        }
    }
}