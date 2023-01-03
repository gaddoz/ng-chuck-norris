pipeline {

   agent any

   tools {
      nodejs "node-16.13.0"
   }

   stages {

      stage('SCM Check for changes') {
            steps {
               scmSkip(deleteBuild: true, skipPattern:'.*\\[ci skip\\].*')
            }
      }

      stage('Install') {
         steps {
            sh "yarn install --frozen-lockfile"
         }
      }

      stage('Build') {
         steps {
            sh "yarn cache clean && yarn build"
         }
      }

      stage('E2E') {
         steps {
            sh "yarn e2e"
         }
      }
      
   }
   post {
       always {
            cleanWs()
        }
    }
}
