pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/guptasonu14/conex_social_Media_web.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'cd backend && npm install'
        sh 'cd frontend && npm install'
      }
    }

    stage('Lint and Test') {
      steps {
        sh 'cd backend && npm run lint'
        sh 'cd backend && npm test'
        sh 'cd frontend && npm run lint'
        sh 'cd frontend && npm test'
      }
    }

    stage('Build') {
      steps {
        sh 'cd frontend && npm run build'
      }
    }

  }
}