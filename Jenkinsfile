pipeline {
     agent any
     stages {
         
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "pwd"
                sh "ls -lrth"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/af-frontend"
                sh "sudo cp -r ${WORKSPACE}/dist/ /var/www/af-frontend/"
            }
        }
        stage('Slack it'){
            steps {
                slackSend channel: '#af-project', 
                          message: 'There is a new version of AF front-end avaibable'
            }
        }
        stage('workspace clean up') {
            steps {
                // Clean before build
                cleanWs()
                // We need to explicitly checkout from SCM here
            }
        }
        
    }
}