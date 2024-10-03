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
                    // Run npm install and npm build (assumes Node.js is installed)
                    bat 'npm install'  // Use 'bat' for Windows to run npm
                    bat 'npm run build'  // This is assuming you're using npm. Adjust if needed.
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run npm tests (if any exist)
                    bat 'npm test'
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
                    // Add your deployment steps here, adjust for Windows if necessary
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
