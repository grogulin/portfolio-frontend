pipeline {
  agent any
  

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'git_credentials',
                    url: 'https://github.com/grogulin/portfolio-frontend.git'
            }
        }
    
        stage('Build') {
            steps {
                
                script {
                    def envContent = """
                        REACT_APP_BACKEND_URL=https://freedevdom.mooo.com/portfolio/api
                    """
                    
                    sh "echo '${envContent}' > .env"
                }

                sh 'npm install'
                sh 'npm run build'
                sh 'cd build/ && ls -la && cd ..'
            }
        }
     
        stage('Deploy') {
            steps {
                    
                sshagent(['oracle']) {

                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@152.67.72.136 "sudo rm -rf /var/www/html/portfolio-frontend/*"'
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@152.67.72.136 "sudo rm -rf /home/ubuntu/app/portfolio-frontend/*"'
                    sh 'scp -o StrictHostKeyChecking=no -r ./build/* ubuntu@152.67.72.136:/home/ubuntu/apps/portfolio-frontend'
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@152.67.72.136 "sudo mv apps/portfolio-frontend/* /var/www/html/portfolio-frontend"'
                }

            }
        }
    }
}