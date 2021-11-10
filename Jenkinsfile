pipeline {
  agent any

  tools { nodejs "node" }

  stages {
    stage('Cypress parallel test suite') {
      parallel {
        stage('Slave Node1') {
          agent {
            label "remote_notebook"
          }
          steps {
            git url: 'https://github.com/dronnikovalex/cypress_examples.git'
            bat 'npm install'
            bat 'npm run run-spec-dashboard'
          }
        }
        stage('Slave Node2') {
          agent {
            label "remote_notebook2"
          }
          steps {
            git url: 'https://github.com/dronnikovalex/cypress_examples.git'
            bat 'npm install'
            bat 'npm run run-spec-dashboard'
          }
        }
      }
    }
  }
}