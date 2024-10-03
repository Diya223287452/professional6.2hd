pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Make sure this points to the correct branch, 'main' in this case
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                              userRemoteConfigs: [[url: 'https://github.com/Diya223287452/professional6.2hd.git',
                                                   credentialsId: 'your-credentials-id']]])  // Replace with your actual credentials ID
                }
            }
        }

        stage('Install & Build') {
            steps {
                script {
                    // Install npm dependencies and build the application
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run npm tests
                    sh 'npm test'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying the application..."
                    // Add your deployment steps here
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully.'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for details.'
        }
    }
}
