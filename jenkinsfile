pipeline {
    agent any
    
    environment {
        // Specify environment variables if needed
        NODE_ENV = 'production'
    }

    options {
        // Ensure that we do not fail too quickly on the first error
        retry(2)
    }

    stages {
        // Checkout the repository from the correct branch
        stage('Checkout') {
            steps {
                script {
                    // Fetch from the 'main' branch, adjust if you use a different branch name
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], 
                              userRemoteConfigs: [[url: 'https://github.com/your-username/weather-app.git']]])
                }
            }
        }

        // Install dependencies and build the React application
        stage('Install & Build') {
            steps {
                script {
                    // Install npm dependencies and build the application
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        // Run tests (optional, remove if you have no tests set up)
        stage('Test') {
            steps {
                script {
                    // Run npm tests
                    sh 'npm test'
                }
            }
        }

        // Archive build artifacts
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        // Deploy stage (can be customized based on your deployment strategy)
        stage('Deploy') {
            steps {
                script {
                    echo "Deploying the application..."
                    // Example for Docker deployment:
                    // sh 'docker build -t weather-app .'
                    // sh 'docker run -d -p 3000:3000 weather-app'
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
